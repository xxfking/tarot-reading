'use client';

import { useState, useEffect } from 'react';
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
      }, 600);
      return () => clearTimeout(timer);
    } else if (revealedCount === drawnCards.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [revealedCount, drawnCards.length, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-serif mb-12 text-text-primary text-center">
          你的牌面
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {drawnCards.map((drawnCard, index) => (
            <motion.div
              key={index}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: index < revealedCount ? 0 : 180 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-32 md:w-40 aspect-[2/3]">
                {/* 牌背 */}
                <div
                  className="absolute w-full h-full rounded-lg border-2 border-border bg-surface flex items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">✧</div>
                    <div className="text-xs text-text-secondary font-serif">Tarot</div>
                  </div>
                </div>

                {/* 牌面 */}
                <div
                  className="absolute w-full h-full rounded-lg border-2 border-accent bg-surface p-4 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={`text-center ${drawnCard.isReversed ? 'rotate-180' : ''}`}>
                    <div className="text-2xl mb-2">🂠</div>
                    <div className="text-sm font-serif text-text-primary mb-1">
                      {drawnCard.card.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {drawnCard.card.nameEn}
                    </div>
                  </div>
                  <div className="absolute bottom-2 text-xs text-accent">
                    {drawnCard.isReversed ? '逆位' : '正位'}
                  </div>
                </div>
              </div>

              {/* 位置标签 */}
              <div className="text-center mt-3 text-sm text-text-secondary">
                {drawnCard.position}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 text-text-secondary">
          正在为你解读...
        </div>
      </div>
    </div>
  );
}
