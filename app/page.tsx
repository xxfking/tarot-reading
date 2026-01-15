'use client';

import { useState } from 'react';
import { Spread, DrawnCard } from '@/lib/types';
import { getAllSpreads } from '@/lib/spreads';
import SpreadSelector from '@/components/SpreadSelector';
import CircularCardSelection from '@/components/CircularCardSelection';
import QuestionInput from '@/components/QuestionInput';
import CardReveal from '@/components/CardReveal';

type Step = 'select-spread' | 'select-cards' | 'input-question' | 'reveal-cards' | 'show-result';

export default function Home() {
  const [step, setStep] = useState<Step>('select-spread');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [question, setQuestion] = useState<string>('');

  const spreads = getAllSpreads();

  const handleSpreadSelect = (spread: Spread) => {
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

  const handleRevealComplete = () => {
    setStep('show-result');
    // TODO: Call AI API for interpretation
  };

  const handleReset = () => {
    setStep('select-spread');
    setSelectedSpread(null);
    setDrawnCards([]);
    setQuestion('');
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
                今日剩余占卜次数：<span className="font-medium text-accent">3 / 3</span>
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

            {/* 占位符 - AI 解读将在后续实现 */}
            <div className="bg-background rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-text-primary mb-4">AI 解读</h3>
              <p className="text-text-secondary leading-relaxed">
                AI 解读功能即将推出。目前这是演示版本，展示了完整的用户流程：
                选择牌阵 → 选牌 → 输入问题 → 翻牌展示 → 查看解读。
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                下一步将集成大模型 API（OpenAI、Claude、Gemini 等）
                来提供个性化的塔罗牌解读。
              </p>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-4 justify-center">
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
