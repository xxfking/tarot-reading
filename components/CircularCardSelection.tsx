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

  // 扇形参数
  const radius = 450;
  const spreadAngle = 280;
  const startAngle = -140;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background overflow-hidden">
      {/* Header */}
      <div className="mb-6 text-center z-20 relative">
        <button
          onClick={onBack}
          className="text-text-secondary hover:text-accent transition-colors mb-4 inline-block"
        >
          ← 返回
        </button>
        <h2 className="text-2xl md:text-3xl font-serif mb-2 text-text-primary">
          {spread.name}
        </h2>
        <p className="text-text-secondary text-sm md:text-base mb-2">
          静心感受，选择与你有共鸣的牌
        </p>
        <div className="text-accent font-medium text-lg">
          {selectedIndices.length} / {spread.cardCount}
        </div>
      </div>

      {/* Card Fan Layout */}
      <div className="relative flex-1 flex items-center justify-center w-full">
        <div
          className="relative"
          style={{
            width: '100%',
            maxWidth: '900px',
            height: '500px',
          }}
        >
          {/* 中心神秘符号 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0 pointer-events-none">
            <div className="text-8xl text-accent/10">✧</div>
          </div>

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
                      w-28 h-[10.5rem] md:w-36 md:h-[13.5rem] rounded-lg overflow-hidden
                      transition-all duration-300
                      ${isSelected
                        ? 'ring-4 ring-accent shadow-2xl'
                        : isHovered
                        ? 'shadow-2xl ring-2 ring-accent/50'
                        : 'shadow-lg'
                      }
                      ${!isSelected && selectedIndices.length >= spread.cardCount
                        ? 'opacity-40 cursor-not-allowed'
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
                        sizes="(max-width: 768px) 7rem, 9rem"
                      />
                    </div>
                  </div>

                  {/* 选择序号标记 */}
                  {isSelected && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold shadow-xl border-2 border-white">
                      {selectionOrder}
                    </div>
                  )}

                  {/* 悬停提示 */}
                  {isHovered && !isSelected && selectedIndices.length < spread.cardCount && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-accent/90 text-white text-xs rounded-full shadow-lg">
                      点击抽取
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      {isComplete && (
        <div className="mt-6 mb-8 text-center z-20 animate-fadeIn">
          <button
            onClick={handleConfirm}
            className="bg-accent text-white px-12 py-4 rounded-lg font-medium text-lg hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            确认选择
          </button>
        </div>
      )}

      {/* 底部提示 */}
      <div className="mb-4 text-center text-sm text-text-secondary max-w-md z-20">
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
