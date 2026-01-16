'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DrawnCard } from '@/lib/types';
import { motion } from 'framer-motion';

interface CardRevealProps {
  drawnCards: DrawnCard[];
  onComplete: () => void;
}

export default function CardReveal({ drawnCards, onComplete }: CardRevealProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (revealedCount < drawnCards.length) {
      const timer = setTimeout(() => {
        setRevealedCount(revealedCount + 1);
      }, 1200); // 增加到1.2秒，让动画更从容
      return () => clearTimeout(timer);
    } else if (revealedCount === drawnCards.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500); // 增加最后停留时间
      return () => clearTimeout(timer);
    }
  }, [revealedCount, drawnCards.length, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-subtle">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-display mb-4 text-text-primary text-center font-semibold">
          你的牌面
        </h2>
        <p className="text-center text-text-secondary font-sans mb-12">
          牌面即将揭晓
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {drawnCards.map((drawnCard, index) => {
            const isRevealed = index < revealedCount;
            return (
              <div key={index} className="relative group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: index * 0.15
                  }}
                  className="w-36 md:w-44 aspect-[2/3] relative"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: isRevealed ? 180 : 0 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* 牌背 */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-md overflow-hidden shadow-md"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <Image
                        src="/cards/card-back.jpg"
                        alt="Tarot Card Back"
                        fill
                        sizes="(max-width: 768px) 144px, 176px"
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* 牌面 */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-md overflow-hidden shadow-md border border-border"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          transform: drawnCard.isReversed ? 'rotate(180deg)' : 'none'
                        }}
                      >
                        <Image
                          src={drawnCard.card.imageUrl}
                          alt={drawnCard.card.name}
                          fill
                          sizes="(max-width: 768px) 144px, 176px"
                          className="object-cover"
                          priority
                        />
                      </div>
                      {/* 正逆位标识 */}
                      <div className="absolute bottom-0 left-0 right-0 bg-accent text-white text-xs py-2 text-center font-sans font-medium z-10">
                        {drawnCard.isReversed ? '逆位' : '正位'}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* 位置标签 */}
                <div className="text-center mt-4 text-base text-text-primary font-sans">
                  {drawnCard.position}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 text-text-secondary font-sans">
          正在准备解读
        </div>
      </div>
    </div>
  );
}
