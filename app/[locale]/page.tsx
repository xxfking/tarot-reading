'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Spread, DrawnCard } from '@/lib/types';
import { getAllSpreads } from '@/lib/spreads';
import SpreadSelector from '@/components/SpreadSelector';
import CircularCardSelection from '@/components/CircularCardSelection';
import QuestionInput from '@/components/QuestionInput';
import CardReveal from '@/components/CardReveal';
import HistorySidebar from '@/components/HistorySidebar';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { canPerformReading, recordReading, getRemainingReadings, DAILY_LIMIT } from '@/lib/rate-limit';
import { saveToHistory } from '@/lib/history';

type Step = 'select-spread' | 'select-cards' | 'input-question' | 'reveal-cards' | 'interpreting' | 'show-result';

export default function Home() {
  const t = useTranslations();
  const [step, setStep] = useState<Step>('select-spread');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [question, setQuestion] = useState<string>('');
  const [interpretation, setInterpretation] = useState<string>('');
  const [interpretError, setInterpretError] = useState<string>('');
  const [remainingCount, setRemainingCount] = useState(3);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const spreads = getAllSpreads();

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
${drawnCards.map(dc => `  ${dc.position}：${dc.card.name}（${dc.isReversed ? t('result.reversed') : t('result.upright')}）`).join('\n')}

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
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-5 bg-white">
          <div className="w-full max-w-5xl">
            {/* Header */}
            <div className="text-center mb-10 md:mb-13 relative">
              {/* Language Switcher */}
              <div className="absolute top-0 right-0">
                <LanguageSwitcher />
              </div>

              {/* 宜家风格黄色装饰条 */}
              <div className="w-16 h-1 bg-accent-yellow mx-auto mb-7 rounded-full"></div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-sans mb-4 text-text-primary font-bold">
                {t('home.title')}
              </h1>
              <p className="text-text-secondary text-sm md:text-base font-sans max-w-2xl mx-auto leading-relaxed font-medium">
                {t('home.subtitle')}
              </p>
            </div>

            {/* Spread Selection */}
            <SpreadSelector spreads={spreads} onSelect={handleSpreadSelect} />

            {/* Usage Info */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <p className="text-sm md:text-base text-text-secondary font-sans">
                {t('home.usageInfo')} <span className="font-semibold text-accent ml-1 text-base">{remainingCount} / {DAILY_LIMIT}</span>
              </p>
              <button
                onClick={() => setIsHistoryOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-2 text-sm md:text-base text-text-secondary hover:text-accent transition-colors font-sans border border-border hover:border-accent rounded-lg"
              >
                <span>📜</span>
                <span>{t('home.viewHistory')}</span>
              </button>
            </div>
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
        <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-subtle">
          <div className="text-center">
            {/* 简单的加载指示器 */}
            <div className="relative w-16 h-16 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-border rounded-full"></div>
              <div className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
            </div>

            <h2 className="text-4xl font-display mb-4 text-text-primary font-semibold">
              {t('interpreting.title')}
            </h2>

            <p className="text-text-secondary font-sans text-base max-w-md mx-auto">
              {t('interpreting.subtitle')}
            </p>
          </div>
        </div>
      )}

      {step === 'show-result' && (
        <div className="min-h-screen flex flex-col items-center p-6 md:p-8 py-12 md:py-16 bg-gradient-subtle">
          <div className="max-w-5xl w-full">
            {/* 标题 */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-3 text-text-primary font-semibold">
                {t('result.title')}
              </h2>
              <p className="text-text-secondary font-sans text-sm md:text-base">
                {t('result.subtitle')}
              </p>
            </div>

            {/* 抽到的牌 - 带图片和含义 */}
            <div className="mb-12 md:mb-16 space-y-8 md:space-y-12">
              {drawnCards.map((drawnCard, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* 左侧：塔罗牌图片 */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-40 h-60 md:w-48 md:h-72 mx-auto md:mx-0 rounded-md overflow-hidden shadow-md ${drawnCard.isReversed ? 'rotate-180' : ''}`}>
                        <Image
                          src={drawnCard.card.imageUrl}
                          alt={drawnCard.card.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* 右侧：牌面信息 */}
                    <div className="flex-1">
                      {/* 位置和牌名 */}
                      <div className="mb-5 md:mb-6">
                        <p className="text-xs md:text-sm text-text-secondary font-sans mb-2">
                          {drawnCard.position}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-3">
                          {drawnCard.card.name}
                        </h3>
                        <span className={`inline-block px-4 py-1.5 rounded-md text-sm font-sans font-medium ${
                          drawnCard.isReversed
                            ? 'bg-accent-cool/10 text-accent-cool border border-accent-cool/30'
                            : 'bg-accent/10 text-accent border border-accent/30'
                        }`}>
                          {drawnCard.isReversed ? t('result.reversed') : t('result.upright')}
                        </span>
                      </div>

                      {/* Keywords */}
                      <div className="mb-5 md:mb-6">
                        <h4 className="text-xs md:text-sm font-sans font-semibold text-text-secondary mb-2 md:mb-3 uppercase tracking-wide">
                          {t('result.keywords')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(drawnCard.isReversed
                            ? drawnCard.card.keywords.reversed
                            : drawnCard.card.keywords.upright
                          ).map((keyword, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-background border border-border rounded text-xs md:text-sm text-text-primary font-sans"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Meaning */}
                      <div>
                        <h4 className="text-xs md:text-sm font-sans font-semibold text-text-secondary mb-2 md:mb-3 uppercase tracking-wide">
                          {t('result.meaning')}
                        </h4>
                        <p className="text-sm md:text-base text-text-primary font-sans leading-relaxed">
                          {drawnCard.isReversed
                            ? drawnCard.card.description.reversed
                            : drawnCard.card.description.upright
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* User Question */}
            {question && (
              <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white border border-border rounded-lg shadow-md">
                <h3 className="text-xs md:text-sm font-sans font-semibold text-text-secondary mb-3 md:mb-4 uppercase tracking-wider">
                  {t('result.yourQuestion')}
                </h3>
                <p className="text-text-primary font-serif text-lg md:text-xl leading-relaxed">
                  "{question}"
                </p>
              </div>
            )}

            {/* Interpretation Result */}
            <div className="bg-white border border-border rounded-lg p-6 md:p-10 mb-12 md:mb-16 shadow-lg">
              <h3 className="text-xl md:text-2xl font-display text-text-primary mb-5 md:mb-6 pb-3 md:pb-4 border-b border-border/50 font-semibold">
                {t('result.interpretation')}
              </h3>

              {interpretError ? (
                <div className="text-center p-6 md:p-8">
                  <p className="text-red-600 font-sans font-semibold text-base md:text-lg mb-2">{t('result.failed')}</p>
                  <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4">{interpretError}</p>
                  <p className="text-text-secondary text-xs font-sans">
                    {t('result.checkConfig')}
                  </p>
                </div>
              ) : interpretation ? (
                <div className="prose max-w-none">
                  <div className="text-text-primary font-sans text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4">
                    {interpretation.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 md:py-12">
                  <div className="inline-block animate-spin-slow text-3xl md:text-4xl text-accent mb-3 md:mb-4">◐</div>
                  <p className="text-text-secondary font-sans text-sm md:text-base">{t('common.loading')}</p>
                </div>
              )}
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              {interpretation && !interpretError && (
                <button
                  onClick={handleCopyInterpretation}
                  className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-md font-sans font-medium transition-all text-sm md:text-base"
                >
                  {t('result.copyReading')}
                </button>
              )}

              <button
                onClick={handleReset}
                className="px-8 md:px-10 py-2.5 md:py-3 bg-accent text-white hover:bg-accent/90 rounded-md font-sans font-medium transition-all shadow-sm text-sm md:text-base"
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
        <footer className="border-t border-border mt-16">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm font-sans">
              <Link href="about" className="text-text-secondary hover:text-accent transition-colors">
                {t('footer.about')}
              </Link>
              <Link href="spreads" className="text-text-secondary hover:text-accent transition-colors">
                {t('footer.spreads')}
              </Link>
            </div>
            <p className="text-text-secondary text-xs font-sans">
              {t('footer.copyright')}
            </p>
          </div>
        </footer>
      )}
    </main>
  );
}
