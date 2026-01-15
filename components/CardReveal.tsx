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
                  className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <Image
                    src="/cards/card-back.jpg"
                    alt="Tarot Card Back"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 牌面 */}
                <div
                  className="absolute w-full h-full rounded-lg overflow-hidden shadow-xl border-2 border-accent"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={drawnCard.isReversed ? 'rotate-180' : ''} style={{ width: '100%', height: '100%' }}>
                    <Image
                      src={drawnCard.card.imageUrl}
                      alt={drawnCard.card.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* 正逆位标识 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-accent/90 text-white text-xs py-1 text-center font-medium">
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
