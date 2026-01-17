'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Spread, DrawnCard } from '@/lib/types';
import { getSpreadsWithTranslations } from '@/lib/spreads';
import { getLocalizedCard } from '@/lib/tarot-data';
import SpreadSelector from '@/components/SpreadSelector';
import CircularCardSelection from '@/components/CircularCardSelection';
import QuestionInput from '@/components/QuestionInput';
import CardReveal from '@/components/CardReveal';
import HistorySidebar from '@/components/HistorySidebar';
// import LanguageSwitcher from '@/components/LanguageSwitcher'; // 隐藏语言切换器
import { canPerformReading, recordReading, getRemainingReadings, DAILY_LIMIT } from '@/lib/rate-limit';
import { saveToHistory } from '@/lib/history';

type Step = 'select-spread' | 'select-cards' | 'input-question' | 'reveal-cards' | 'interpreting' | 'show-result';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const [step, setStep] = useState<Step>('select-spread');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [question, setQuestion] = useState<string>('');
  const [interpretation, setInterpretation] = useState<string>('');
  const [interpretError, setInterpretError] = useState<string>('');
  const [remainingCount, setRemainingCount] = useState(3);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const spreads = getSpreadsWithTranslations((key: string) => t(key));

  // 更新剩余次数
  useEffect(() => {
    setRemainingCount(getRemainingReadings());
  }, []);

  const handleSpreadSelect = (spread: Spread) => {
    // 检查是否可以进行占卜
    const check = canPerformReading();
    if (!check.allowed) {
      alert(check.reason || t('home.cannotRead'));
      return;
    }

    setSelectedSpread(spread);
    setStep('select-cards');
  };

  const handleCardsSelected = (cards: DrawnCard[]) => {
    setDrawnCards(cards);
    setStep('input-question');
  };

  const handleQuestionSubmit = (userQuestion: string) => {
    setQuestion(userQuestion);
    setStep('reveal-cards');
  };

  const handleRevealComplete = async () => {
    setStep('interpreting');
    setInterpretError('');

    try {
      // 调用 AI 解读 API
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          drawnCards,
          spreadName: selectedSpread?.name,
          question: question || undefined,
          locale: locale, // 传递语言环境
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '解读失败');
      }

      setInterpretation(data.interpretation);

      // 记录本次占卜（消耗一次额度）
      recordReading();
      setRemainingCount(getRemainingReadings());

      // 保存到历史记录
      if (selectedSpread) {
        saveToHistory({
          spreadType: selectedSpread.type,
          spreadName: selectedSpread.name,
          question: question || undefined,
          cards: drawnCards,
          interpretation: data.interpretation,
        });
      }

      setStep('show-result');
    } catch (error) {
      console.error('AI interpretation error:', error);
      setInterpretError(error instanceof Error ? error.message : t('result.checkConfig'));
      setStep('show-result');
    }
  };

  const handleReset = () => {
    setStep('select-spread');
    setSelectedSpread(null);
    setDrawnCards([]);
    setQuestion('');
    setInterpretation('');
    setInterpretError('');
  };

  const handleCopyInterpretation = () => {
    if (!interpretation) return;

    const copyText = `${t('home.copyTemplate.title')}

${t('home.copyTemplate.spread')}：${selectedSpread?.name}
${question ? `${t('home.copyTemplate.question')}：${question}\n` : ''}
${t('home.copyTemplate.cards')}：
${drawnCards.map(dc => {
  const localizedCard = getLocalizedCard(dc.card, locale);
  return `  ${dc.position}：${localizedCard.name}（${dc.isReversed ? t('result.reversed') : t('result.upright')}）`;
}).join('\n')}

${t('home.copyTemplate.interpretation')}：
${interpretation}

${t('home.copyTemplate.footer')}`;

    navigator.clipboard.writeText(copyText).then(() => {
      alert(t('home.copySuccess'));
    }).catch(() => {
      alert(t('home.copyFailed'));
    });
  };

  return (
    <main className="min-h-screen">
      {step === 'select-spread' && (
        <div className="min-h-screen bg-gradient-celestial relative overflow-hidden grain-overlay">
          {/* Top Navigation Bar - 固定在顶部 */}
          <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/30 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
              {/* Logo/Title */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-6 bg-gradient-to-b from-accent to-mystic-500 rounded-full"></div>
                <span className="font-display font-semibold text-lg md:text-xl text-text-primary">
                  {t('home.title')}
                </span>
              </div>

              {/* Usage Info & History - 移到顶部导航 */}
              <div className="flex items-center gap-3 md:gap-5">
                <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 border border-accent/20 rounded-lg">
                  <span className="text-xs md:text-sm text-text-secondary font-sans">
                    {t('home.usageInfo')}
                  </span>
                  <span className="font-semibold text-accent text-sm md:text-base font-sans">
                    {remainingCount}/{DAILY_LIMIT}
                  </span>
                </div>
                <button
                  onClick={() => setIsHistoryOpen(true)}
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-text-secondary hover:text-accent transition-all duration-300 font-sans border border-border hover:border-accent rounded-lg hover:shadow-card"
                  title={t('home.viewHistory')}
                >
                  <span className="text-base md:text-lg">📜</span>
                  <span className="hidden sm:inline">{t('home.viewHistory')}</span>
                </button>
              </div>
            </div>
          </nav>

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-mystic-200 rounded-full opacity-30 blur-3xl animate-drift pointer-events-none"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-yellow/20 rounded-full opacity-40 blur-3xl animate-float pointer-events-none"></div>

          {/* Main Content - 调整为非 flex-center，改为 padding */}
          <div className="w-full max-w-6xl mx-auto px-4 md:px-5 py-8 md:py-12 relative z-10">
            {/* Header - 进一步减小 */}
            <div className="text-center mb-6 md:mb-8">
              {/* Decorative accent */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
                <div className="w-2 h-2 bg-accent-gold rounded-full shadow-glow"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-3 text-text-primary font-semibold tracking-tight">
                {t('home.subtitle')}
              </h1>
            </div>

            {/* Spread Selection */}
            <SpreadSelector spreads={spreads} onSelect={handleSpreadSelect} />
          </div>
        </div>
      )}

      {step === 'select-cards' && selectedSpread && (
        <CircularCardSelection
          spread={selectedSpread}
          onComplete={handleCardsSelected}
          onBack={() => setStep('select-spread')}
        />
      )}

      {step === 'input-question' && (
        <QuestionInput
          onSubmit={handleQuestionSubmit}
          onSkip={() => handleQuestionSubmit('')}
        />
      )}

      {step === 'reveal-cards' && (
        <CardReveal drawnCards={drawnCards} onComplete={handleRevealComplete} />
      )}

      {step === 'interpreting' && (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-celestial relative overflow-hidden grain-overlay">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mystic-200 rounded-full opacity-20 blur-3xl animate-drift"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-yellow/20 rounded-full opacity-30 blur-3xl animate-float"></div>
          </div>

          <div className="text-center relative z-10">
            {/* Elegant loading indicator */}
            <div className="relative w-24 h-24 mx-auto mb-12">
              <div className="absolute inset-0 border-4 border-mystic-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-mystic-500 border-r-accent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-3 border-4 border-accent-yellow/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-display mb-6 text-text-primary font-semibold">
              {t('interpreting.title')}
            </h2>

            <p className="text-text-secondary font-serif text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
              {t('interpreting.subtitle')}
            </p>

            {/* Mystical dots animation */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-2 h-2 bg-mystic-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-mystic-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-mystic-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}

      {step === 'show-result' && (
        <div className="min-h-screen flex flex-col items-center p-6 md:p-8 py-16 md:py-20 bg-gradient-celestial relative grain-overlay">
          <div className="max-w-6xl w-full">
            {/* 标题 */}
            <div className="text-center mb-16 md:mb-24">
              {/* Decorative accent */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
                <div className="w-2 h-2 bg-accent-gold rounded-full shadow-glow"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
              </div>

              <h2 className="text-5xl md:text-6xl font-display mb-5 text-text-primary font-semibold">
                {t('result.title')}
              </h2>
              <p className="text-text-secondary font-serif text-base md:text-lg max-w-2xl mx-auto">
                {t('result.subtitle')}
              </p>
            </div>

            {/* 抽到的牌 - 带图片和含义 */}
            <div className="mb-16 md:mb-24 space-y-10 md:space-y-16">
              {drawnCards.map((drawnCard, index) => {
                const localizedCard = getLocalizedCard(drawnCard.card, locale);
                return (
                  <div key={index} className="bg-white/95 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-card hover:shadow-mystic transition-all duration-500 relative overflow-hidden group">
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mystic-50/30 via-transparent to-accent-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                      {/* 左侧：塔罗牌图片 - 完整显示不裁剪 */}
                      <div className="flex-shrink-0">
                        <div className={`relative w-52 h-80 md:w-64 md:h-96 mx-auto md:mx-0 rounded-xl shadow-mystic bg-white p-2 ${drawnCard.isReversed ? 'rotate-180' : ''}`}>
                          <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <Image
                              src={localizedCard.imageUrl}
                              alt={localizedCard.name}
                              fill
                              className="object-contain"
                              priority
                              sizes="(max-width: 768px) 208px, 256px"
                            />
                          </div>
                        </div>
                      </div>

                      {/* 右侧：牌面信息 */}
                      <div className="flex-1 min-w-0">
                        {/* 位置和牌名 */}
                        <div className="mb-7 md:mb-8">
                          <p className="text-sm text-text-tertiary font-sans mb-3 uppercase tracking-wider">
                            {drawnCard.position}
                          </p>
                          <h3 className="text-3xl md:text-4xl font-display text-text-primary mb-4 leading-tight">
                            {localizedCard.name}
                          </h3>
                          <span className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-sans font-medium shadow-sm ${
                            drawnCard.isReversed
                              ? 'bg-mystic-100 text-mystic-900 border border-mystic-200'
                              : 'bg-accent/10 text-accent border border-accent/20'
                          }`}>
                            {drawnCard.isReversed ? t('result.reversed') : t('result.upright')}
                          </span>
                        </div>

                        {/* Keywords */}
                        <div className="mb-7 md:mb-8">
                          <h4 className="text-xs font-sans font-semibold text-text-secondary mb-4 uppercase tracking-widest">
                            {t('result.keywords')}
                          </h4>
                          <div className="flex flex-wrap gap-2.5">
                            {(drawnCard.isReversed
                              ? localizedCard.keywords.reversed
                              : localizedCard.keywords.upright
                            ).map((keyword, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-surface/80 border border-border/60 rounded-lg text-sm text-text-primary font-serif hover:bg-mystic-50 hover:border-mystic-200 transition-colors"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Meaning - Always show English */}
                        <div>
                          <h4 className="text-xs font-sans font-semibold text-text-secondary mb-4 uppercase tracking-widest">
                            {t('result.meaning')}
                          </h4>
                          <p className="text-base md:text-lg text-text-primary font-serif leading-relaxed prose-reading">
                            {drawnCard.isReversed
                              ? (drawnCard.card.descriptionEn?.reversed || drawnCard.card.description.reversed)
                              : (drawnCard.card.descriptionEn?.upright || drawnCard.card.description.upright)
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* User Question */}
            {question && (
              <div className="mb-12 md:mb-16 p-8 md:p-12 bg-white/95 backdrop-blur-sm border border-mystic-200/50 rounded-2xl shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-mystic-500 via-mystic-400 to-transparent"></div>
                <div className="relative z-10 ml-6">
                  <h3 className="text-xs font-sans font-semibold text-text-tertiary mb-5 uppercase tracking-widest">
                    {t('result.yourQuestion')}
                  </h3>
                  <p className="text-text-primary font-display text-xl md:text-2xl leading-relaxed italic">
                    "{question}"
                  </p>
                </div>
              </div>
            )}

            {/* Interpretation Result */}
            <div className="bg-white/95 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 mb-16 md:mb-20 shadow-mystic relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mystic-100/50 to-transparent rounded-bl-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 md:mb-10 pb-6 md:pb-8 border-b border-border/30">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-accent to-mystic-500 rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-display text-text-primary font-semibold">
                    {t('result.interpretation')}
                  </h3>
                </div>

                {interpretError ? (
                  <div className="text-center p-10 md:p-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
                      <span className="text-3xl">⚠️</span>
                    </div>
                    <p className="text-red-600 font-sans font-semibold text-lg md:text-xl mb-3">{t('result.failed')}</p>
                    <p className="text-text-secondary text-sm md:text-base mb-4">{interpretError}</p>
                    <p className="text-text-tertiary text-sm font-sans">
                      {t('result.checkConfig')}
                    </p>
                  </div>
                ) : interpretation ? (
                  <div className="prose-reading mx-auto">
                    <div className="text-text-primary font-serif text-lg md:text-xl leading-loose space-y-6">
                      {interpretation.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="first-letter:text-5xl first-letter:font-display first-letter:text-mystic-600 first-letter:mr-1 first-letter:float-left first-letter:leading-none first:first-letter:mt-1">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 md:py-20">
                    <div className="inline-block animate-spin-slow text-5xl md:text-6xl text-mystic-500 mb-6">◐</div>
                    <p className="text-text-secondary font-sans text-base md:text-lg">{t('common.loading')}</p>
                  </div>
                )}
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-wrap gap-4 md:gap-5 justify-center">
              {interpretation && !interpretError && (
                <button
                  onClick={handleCopyInterpretation}
                  className="px-8 md:px-10 py-3.5 md:py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-xl font-sans font-semibold transition-all duration-300 text-sm md:text-base shadow-card hover:shadow-card-hover transform hover:-translate-y-0.5"
                >
                  {t('result.copyReading')}
                </button>
              )}

              <button
                onClick={handleReset}
                className="px-10 md:px-12 py-3.5 md:py-4 bg-gradient-to-r from-accent to-mystic-600 text-white hover:from-accent/90 hover:to-mystic-500 rounded-xl font-sans font-semibold transition-all duration-300 shadow-mystic hover:shadow-glow text-sm md:text-base transform hover:-translate-y-0.5"
              >
                {t('result.readAgain')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 历史记录侧边栏 */}
      <HistorySidebar isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />

      {/* Footer Navigation */}
      {step === 'select-spread' && (
        <footer className="border-t border-border/30 mt-24 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <Link href="about" className="text-text-secondary hover:text-mystic-600 transition-colors font-sans text-sm font-medium tracking-wide">
                {t('footer.about')}
              </Link>
              <Link href="spreads" className="text-text-secondary hover:text-mystic-600 transition-colors font-sans text-sm font-medium tracking-wide">
                {t('footer.spreads')}
              </Link>
            </div>
            <p className="text-text-tertiary text-sm font-serif">
              {t('footer.copyright')}
            </p>
          </div>
        </footer>
      )}
    </main>
  );
}
