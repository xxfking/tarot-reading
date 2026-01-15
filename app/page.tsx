'use client';

import { useState, useEffect } from 'react';
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
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-serif mb-4 text-text-primary">
                塔罗占卜
              </h1>
              <p className="text-text-secondary max-w-2xl mx-auto">
                选择一个牌阵开始你的占卜之旅。静下心来，思考你想要探索的问题。
              </p>
            </div>

            {/* Spread Selection */}
            <SpreadSelector spreads={spreads} onSelect={handleSpreadSelect} />

            {/* Usage Info */}
            <div className="mt-12 text-center">
              <p className="text-sm text-text-secondary">
                今日剩余占卜次数：<span className="font-medium text-accent">{remainingCount} / 3</span>
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
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center">
            <div className="mb-4 text-6xl animate-spin-slow">✧</div>
            <h2 className="text-2xl font-serif mb-2 text-text-primary">正在为你解读...</h2>
            <p className="text-text-secondary">AI 正在深入分析你的牌面</p>
          </div>
        </div>
      )}

      {step === 'show-result' && (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="max-w-4xl w-full bg-surface rounded-lg p-8 md:p-12 shadow-lg border border-border">
            <h2 className="text-3xl font-serif mb-6 text-text-primary text-center">
              解读结果
            </h2>

            {/* 抽到的牌 */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-text-primary mb-4">你的牌面</h3>
              <div className="flex flex-wrap gap-4">
                {drawnCards.map((drawnCard, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-text-secondary">{drawnCard.position}：</span>
                    <span className="text-text-primary font-medium">{drawnCard.card.name}</span>
                    <span className="text-accent ml-1">
                      ({drawnCard.isReversed ? '逆位' : '正位'})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 用户问题 */}
            {question && (
              <div className="mb-8">
                <h3 className="text-lg font-medium text-text-primary mb-2">你的问题</h3>
                <p className="text-text-secondary italic">"{question}"</p>
              </div>
            )}

            {/* AI 解读 */}
            <div className="bg-background rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-text-primary mb-4">AI 解读</h3>

              {interpretError ? (
                <div className="text-red-600">
                  <p className="font-medium mb-2">解读失败</p>
                  <p className="text-sm">{interpretError}</p>
                  <p className="text-sm mt-4 text-text-secondary">
                    请检查环境变量配置，或稍后重试。
                  </p>
                </div>
              ) : interpretation ? (
                <div className="text-text-secondary leading-relaxed whitespace-pre-wrap">
                  {interpretation}
                </div>
              ) : (
                <p className="text-text-secondary leading-relaxed">
                  正在加载解读结果...
                </p>
              )}
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-4 justify-center">
              {interpretation && !interpretError && (
                <button
                  onClick={handleCopyInterpretation}
                  className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
                >
                  复制解读
                </button>
              )}
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-lg"
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
