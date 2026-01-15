'use client';

import { useState, useEffect } from 'react';
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
      setRotation(prev => (prev + 0.1) % 360);
    }, 50); // 每50ms旋转0.1度，完整旋转需要约3分钟

    return () => clearInterval(interval);
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
  const totalCards = 78;
  const radius = 280; // 圆圈半径

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background">
      {/* Header */}
      <div className="mb-8 text-center">
        <button
          onClick={onBack}
          className="text-text-secondary hover:text-accent transition-colors mb-4 inline-block"
        >
          ← 返回
        </button>
        <h2 className="text-3xl font-serif mb-2 text-text-primary">
          {spread.name}
        </h2>
        <p className="text-text-secondary mb-4">
          将鼠标悬停并点击选择你感应到的牌
        </p>
        <div className="text-accent font-medium text-lg">
          已选择：{selectedIndices.length} / {spread.cardCount}
        </div>
      </div>

      {/* Circular Card Layout */}
      <div className="relative flex-1 flex items-center justify-center">
        <div
          className="relative"
          style={{
            width: `${radius * 2 + 120}px`,
            height: `${radius * 2 + 120}px`,
          }}
        >
          {/* 中心提示 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
            <div className="text-6xl mb-4 text-accent/20">✧</div>
            <p className="text-text-secondary text-sm">
              感受能量
            </p>
          </div>

          {/* 旋转的牌圈 */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
            }}
          >
            {shuffledCards.map((card, index) => {
              const angle = (index / totalCards) * 360;
              const isSelected = selectedIndices.includes(index);
              const isHovered = hoveredIndex === index;
              const selectionOrder = selectedIndices.indexOf(index) + 1;

              return (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  disabled={!isSelected && selectedIndices.length >= spread.cardCount}
                  className="absolute top-1/2 left-1/2 cursor-pointer focus:outline-none group"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateY(-${radius}px)
                      rotate(-${angle + rotation}deg)
                      ${isHovered ? 'scale(1.3)' : isSelected ? 'scale(1.15)' : 'scale(1)'}
                    `,
                    transition: 'transform 0.3s ease',
                    zIndex: isHovered ? 100 : isSelected ? 50 : index,
                  }}
                >
                  {/* 卡牌 */}
                  <div
                    className={`
                      w-12 h-18 md:w-14 md:h-21 rounded shadow-lg
                      transition-all duration-300
                      ${isSelected
                        ? 'ring-2 ring-accent bg-accent/20'
                        : 'bg-surface hover:shadow-2xl'
                      }
                      ${!isSelected && selectedIndices.length >= spread.cardCount
                        ? 'opacity-30'
                        : ''
                      }
                      border-2 border-border
                    `}
                  >
                    {/* 卡背设计 */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className={`${isHovered || isSelected ? 'text-accent' : 'text-text-secondary'} transition-colors`}>
                          <div className="text-xl">✧</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 选择序号 */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {selectionOrder}
                    </div>
                  )}

                  {/* 悬停提示 */}
                  {isHovered && !isSelected && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-accent">
                      点击选择
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
        <div className="mt-8 mb-8 text-center animate-fadeIn">
          <button
            onClick={handleConfirm}
            className="bg-accent text-white px-10 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            确认选择
          </button>
        </div>
      )}

      {/* 提示文字 */}
      <div className="mt-4 text-center text-sm text-text-secondary max-w-md">
        <p>牌阵在缓慢旋转，当你感受到某张牌的召唤时，点击它。</p>
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
