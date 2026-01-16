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

  // 完整圆盘参数 - 增大半径以更好展示
  const radius = 280;
  const spreadAngle = 360;
  const startAngle = 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden bg-white">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* 左侧：信息区域 */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 md:space-y-10">
          {/* 返回按钮 */}
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-3 px-6 py-3 text-text-primary hover:text-accent transition-all border-2 border-border hover:border-accent rounded-lg bg-white hover:shadow-md font-medium self-start"
          >
            <span className="group-hover:-translate-x-1 transition-transform text-xl md:text-2xl">←</span>
            <span className="font-sans text-base md:text-lg">返回</span>
          </button>

          {/* 标题和描述 */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans mb-6 text-text-primary font-bold">
              {spread.name}
            </h2>
            <p className="text-text-secondary text-xl md:text-2xl font-sans font-medium leading-relaxed">
              静心感受，选择与你有共鸣的牌
            </p>
          </div>

          {/* 选择进度 */}
          <div className="inline-flex items-center gap-4 px-12 py-6 bg-accent-yellow border-2 border-accent-yellow rounded-xl shadow-md self-start">
            <span className="text-text-primary text-5xl md:text-6xl font-sans font-bold">{selectedIndices.length}</span>
            <span className="text-text-primary font-sans font-bold text-3xl">/</span>
            <span className="text-text-primary font-sans text-3xl md:text-4xl font-bold">{spread.cardCount}</span>
          </div>

          {/* 底部提示 */}
          <p className="text-base md:text-lg text-text-secondary max-w-md font-sans">
            牌阵在缓缓旋转，静心感受，让直觉引导你的选择
          </p>

          {/* 确认按钮 */}
          {isComplete && (
            <button
              onClick={handleConfirm}
              className="bg-accent text-white px-16 md:px-20 py-5 md:py-6 rounded-xl font-sans font-bold text-xl md:text-2xl transition-all shadow-xl hover:shadow-2xl hover:bg-accent/90 uppercase tracking-wider self-start"
            >
              确认选择
            </button>
          )}
        </div>

        {/* 右侧：卡牌旋转区域 */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: '100%',
              maxWidth: '720px',
              height: '720px',
            }}
          >

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
                      w-20 h-32 md:w-24 md:h-36 rounded-md overflow-hidden bg-white border
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
                        sizes="(max-width: 768px) 5rem, 6rem"
                      />
                    </div>
                  </div>

                  {/* 选择序号标记 */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-9 h-9 bg-accent rounded-full flex items-center justify-center text-white text-base font-sans font-semibold shadow-md">
                      {selectionOrder}
                    </div>
                  )}

                  {/* 悬停提示 */}
                  {isHovered && !isSelected && selectedIndices.length < spread.cardCount && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-accent text-white text-sm font-sans rounded shadow-md">
                      点击选择
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
