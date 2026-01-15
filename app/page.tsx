'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Spread, DrawnCard } from '@/lib/types';
import { getAllSpreads } from '@/lib/spreads';
import SpreadSelector from '@/components/SpreadSelector';
import CircularCardSelection from '@/components/CircularCardSelection';
import QuestionInput from '@/components/QuestionInput';
import CardReveal from '@/components/CardReveal';
import { canPerformReading, recordReading, getRemainingReadings } from '@/lib/rate-limit';

type Step = 'select-spread' | 'select-cards' | 'input-question' | 'reveal-cards' | 'interpreting' | 'show-result';

export default function Home() {
  const [step, setStep] = useState<Step>('select-spread');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [question, setQuestion] = useState<string>('');
  const [interpretation, setInterpretation] = useState<string>('');
  const [interpretError, setInterpretError] = useState<string>('');
  const [remainingCount, setRemainingCount] = useState(3);

  const spreads = getAllSpreads();

  // 更新剩余次数
  useEffect(() => {
    setRemainingCount(getRemainingReadings());
  }, []);

  const handleSpreadSelect = (spread: Spread) => {
    // 检查是否可以进行占卜
    const check = canPerformReading();
    if (!check.allowed) {
      alert(check.reason || '无法进行占卜');
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

      setStep('show-result');
    } catch (error) {
      console.error('AI interpretation error:', error);
      setInterpretError(error instanceof Error ? error.message : '解读服务暂时不可用');
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

    const copyText = `【塔罗占卜解读】

牌阵：${selectedSpread?.name}
${question ? `问题：${question}\n` : ''}
抽牌结果：
${drawnCards.map(dc => `  ${dc.position}：${dc.card.name}（${dc.isReversed ? '逆位' : '正位'}）`).join('\n')}

解读：
${interpretation}

---
由 AI 智能解读`;

    navigator.clipboard.writeText(copyText).then(() => {
      alert('解读内容已复制到剪贴板');
    }).catch(() => {
      alert('复制失败，请手动选择复制');
    });
  };

  return (
    <main className="min-h-screen">
      {step === 'select-spread' && (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-subtle">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20 relative">
              {/* 装饰性细线 */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-px bg-accent opacity-30"></div>
                <div className="w-2 h-2 rounded-full bg-accent opacity-40 mx-4"></div>
                <div className="w-12 h-px bg-accent opacity-30"></div>
              </div>

              <h1 className="text-5xl md:text-6xl font-display mb-5 text-text-primary tracking-tight font-semibold">
                塔罗占卜
              </h1>
              <p className="text-text-secondary text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed">
                选择一个牌阵，静心感受，让直觉引导你的选择
              </p>
            </div>

            {/* Spread Selection */}
            <SpreadSelector spreads={spreads} onSelect={handleSpreadSelect} />

            {/* Usage Info */}
            <div className="mt-20 text-center">
              <p className="text-sm text-text-secondary font-sans">
                今日剩余占卜次数：<span className="font-semibold text-accent ml-1">{remainingCount} / 3</span>
              </p>
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
              正在解读中
            </h2>

            <p className="text-text-secondary font-sans text-base max-w-md mx-auto">
              AI 正在分析你的牌面
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
                解读结果
              </h2>
              <p className="text-text-secondary font-sans text-sm md:text-base">
                塔罗牌为你揭示的启示
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
                          {drawnCard.isReversed ? '逆位' : '正位'}
                        </span>
                      </div>

                      {/* 关键词 */}
                      <div className="mb-5 md:mb-6">
                        <h4 className="text-xs md:text-sm font-sans font-semibold text-text-secondary mb-2 md:mb-3 uppercase tracking-wide">
                          关键词
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

                      {/* 牌义描述 */}
                      <div>
                        <h4 className="text-xs md:text-sm font-sans font-semibold text-text-secondary mb-2 md:mb-3 uppercase tracking-wide">
                          牌义
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

            {/* 用户问题 */}
            {question && (
              <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white border border-border rounded-lg shadow-md">
                <h3 className="text-xs md:text-sm font-sans font-semibold text-text-secondary mb-3 md:mb-4 uppercase tracking-wider">
                  你的问题
                </h3>
                <p className="text-text-primary font-serif text-lg md:text-xl leading-relaxed">
                  "{question}"
                </p>
              </div>
            )}

            {/* AI 解读 */}
            <div className="bg-white border border-border rounded-lg p-6 md:p-10 mb-12 md:mb-16 shadow-lg">
              <h3 className="text-xl md:text-2xl font-display text-text-primary mb-5 md:mb-6 pb-3 md:pb-4 border-b border-border/50 font-semibold">
                AI 智能解读
              </h3>

              {interpretError ? (
                <div className="text-center p-6 md:p-8">
                  <p className="text-red-600 font-sans font-semibold text-base md:text-lg mb-2">解读失败</p>
                  <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4">{interpretError}</p>
                  <p className="text-text-secondary text-xs font-sans">
                    请检查环境变量配置，或稍后重试
                  </p>
                </div>
              ) : interpretation ? (
                <div className="prose max-w-none">
                  <div className="text-text-primary font-sans text-sm md:text-base leading-loose whitespace-pre-wrap">
                    {interpretation}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 md:py-12">
                  <div className="inline-block animate-spin-slow text-3xl md:text-4xl text-accent mb-3 md:mb-4">◐</div>
                  <p className="text-text-secondary font-sans text-sm md:text-base">正在加载解读结果...</p>
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
                  复制解读
                </button>
              )}

              <button
                onClick={handleReset}
                className="px-8 md:px-10 py-2.5 md:py-3 bg-accent text-white hover:bg-accent/90 rounded-md font-sans font-medium transition-all shadow-sm text-sm md:text-base"
              >
                重新抽牌
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
