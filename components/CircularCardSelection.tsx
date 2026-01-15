'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { TarotCard, Spread, DrawnCard } from '@/lib/types';
import { tarotCards, isReversed } from '@/lib/tarot-data';

interface CircularCardSelectionProps {
  spread: Spread;
  onComplete: (drawnCards: DrawnCard[]) => void;
  onBack: () => void;
}

export default function CircularCardSelection({ spread, onComplete, onBack }: CircularCardSelectionProps) {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  // 洗牌
  useEffect(() => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, []);

  // 缓慢旋转动画
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.05) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter(i => i !== index));
    } else if (selectedIndices.length < spread.cardCount) {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleConfirm = () => {
    const drawnCards: DrawnCard[] = selectedIndices.map((cardIndex, positionIndex) => ({
      card: shuffledCards[cardIndex],
      position: spread.positions[positionIndex],
      isReversed: isReversed(),
    }));

    onComplete(drawnCards);
  };

  const isComplete = selectedIndices.length === spread.cardCount;
  const totalCards = 78;

  // 完整圆盘参数 - 缩小以确保完整显示
  const radius = 220;
  const spreadAngle = 360;
  const startAngle = 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-gradient-subtle">
      {/* Header */}
      <div className="mb-8 text-center z-20 relative">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-accent transition-all mb-8 border border-border hover:border-accent rounded-md bg-white hover:shadow-md"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-sans text-sm">返回</span>
        </button>

        <h2 className="text-4xl md:text-5xl font-display mb-4 text-text-primary font-semibold">
          {spread.name}
        </h2>

        <p className="text-text-secondary text-base md:text-lg font-sans mb-8 max-w-md mx-auto">
          静心感受，选择与你有共鸣的牌
        </p>

        <div className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-border rounded-md shadow-sm">
          <span className="text-accent text-3xl font-display font-semibold">{selectedIndices.length}</span>
          <span className="text-text-secondary font-sans opacity-50">/</span>
          <span className="text-text-secondary font-sans text-lg">{spread.cardCount}</span>
        </div>
      </div>

      {/* Card Fan Layout */}
      <div className="relative flex-1 flex items-center justify-center w-full">
        <div
          className="relative"
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '600px',
          }}
        >
          {/* 确认按钮 - 放在中心 */}
          {isComplete && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <button
                onClick={handleConfirm}
                className="bg-accent text-white px-12 py-4 rounded-lg font-sans font-medium text-base transition-all shadow-lg hover:shadow-2xl hover:bg-accent/90 hover:scale-105 border border-accent-cool/20"
              >
                确认选择
              </button>
            </div>
          )}

          {/* 旋转的扇形牌堆 */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              transition: 'transform 0.05s linear',
            }}
          >
            {shuffledCards.map((card, index) => {
              const angle = startAngle + (index / (totalCards - 1)) * spreadAngle;
              const isSelected = selectedIndices.includes(index);
              const isHovered = hoveredIndex === index;
              const selectionOrder = selectedIndices.indexOf(index) + 1;

              const middleIndex = totalCards / 2;
              const distanceFromMiddle = Math.abs(index - middleIndex);
              const baseZIndex = totalCards - Math.floor(distanceFromMiddle);

              return (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  disabled={!isSelected && selectedIndices.length >= spread.cardCount}
                  className="absolute top-1/2 left-1/2 cursor-pointer focus:outline-none group transition-all duration-300"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateY(-${radius}px)
                      rotate(-${angle + rotation}deg)
                      ${isHovered ? 'translateY(-30px) scale(1.1)' : isSelected ? 'translateY(-20px) scale(1.05)' : ''}
                    `,
                    zIndex: isHovered ? 1000 : isSelected ? 500 + selectionOrder : baseZIndex,
                  }}
                >
                  {/* 竖版塔罗牌 */}
                  <div
                    className={`
                      w-16 h-24 md:w-20 md:h-30 rounded-md overflow-hidden bg-white border
                      transition-all duration-300
                      ${isSelected
                        ? 'border-accent shadow-xl scale-110 ring-2 ring-accent/20'
                        : isHovered
                        ? 'border-accent/60 shadow-lg scale-105'
                        : 'border-border shadow-sm'
                      }
                      ${!isSelected && selectedIndices.length >= spread.cardCount
                        ? 'opacity-30 cursor-not-allowed grayscale'
                        : ''
                      }
                    `}
                  >
                    {/* 使用真实卡背图片 */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/cards/card-back.jpg"
                        alt="Tarot Card Back"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 4rem, 5rem"
                      />
                    </div>
                  </div>

                  {/* 选择序号标记 */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent rounded-full flex items-center justify-center text-white text-sm font-sans font-semibold shadow-md">
                      {selectionOrder}
                    </div>
                  )}

                  {/* 悬停提示 */}
                  {isHovered && !isSelected && selectedIndices.length < spread.cardCount && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-accent text-white text-xs font-sans rounded shadow-md">
                      点击选择
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="mt-8 mb-6 text-center text-sm text-text-secondary max-w-md z-20 font-sans">
        <p>牌阵在缓缓旋转，静心感受，让直觉引导你的选择</p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
