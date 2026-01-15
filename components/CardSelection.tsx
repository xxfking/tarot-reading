'use client';

import { useState, useEffect } from 'react';
import { TarotCard, Spread, DrawnCard } from '@/lib/types';
import { tarotCards, isReversed } from '@/lib/tarot-data';
import CardBack from './CardBack';

interface CardSelectionProps {
  spread: Spread;
  onComplete: (drawnCards: DrawnCard[]) => void;
  onBack: () => void;
}

export default function CardSelection({ spread, onComplete, onBack }: CardSelectionProps) {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>([]);

  // 洗牌
  useEffect(() => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedIndices.includes(index)) {
      // 取消选择
      setSelectedIndices(selectedIndices.filter(i => i !== index));
    } else if (selectedIndices.length < spread.cardCount) {
      // 添加选择
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleConfirm = () => {
    // 将选中的牌转换为 DrawnCard 格式
    const drawnCards: DrawnCard[] = selectedIndices.map((cardIndex, positionIndex) => ({
      card: shuffledCards[cardIndex],
      position: spread.positions[positionIndex],
      isReversed: isReversed(),
    }));

    onComplete(drawnCards);
  };

  const isComplete = selectedIndices.length === spread.cardCount;

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-text-secondary hover:text-accent transition-colors mb-4"
        >
          ← 返回
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-2 text-text-primary">
            {spread.name}
          </h2>
          <p className="text-text-secondary mb-4">
            静下心来，思考你的问题，然后选择 {spread.cardCount} 张牌
          </p>
          <div className="text-accent font-medium">
            已选择：{selectedIndices.length} / {spread.cardCount}
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="flex-1 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4">
          {shuffledCards.map((card, index) => (
            <CardBack
              key={index}
              index={index}
              isSelected={selectedIndices.includes(index)}
              onClick={() => handleCardClick(index)}
              disabled={!selectedIndices.includes(index) && selectedIndices.length >= spread.cardCount}
            />
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      {isComplete && (
        <div className="mt-8 text-center">
          <button
            onClick={handleConfirm}
            className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-lg"
          >
            确认选择
          </button>
        </div>
      )}
    </div>
  );
}
