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
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-display mb-4 text-text-primary text-center">
          你的牌面
        </h2>
        <p className="text-center text-text-secondary font-sans mb-12">
          牌面即将揭晓
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {drawnCards.map((drawnCard, index) => (
            <motion.div
              key={index}
              initial={{ rotateY: 180, opacity: 0, scale: 0.8 }}
              animate={{
                rotateY: index < revealedCount ? 0 : 180,
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: index * 0.1
              }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-36 md:w-44 aspect-[2/3]">
                {/* 牌背 */}
                <div
                  className="absolute w-full h-full rounded-md overflow-hidden shadow-md"
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
                  className="absolute w-full h-full rounded-md overflow-hidden shadow-md border border-border"
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
                  <div className="absolute bottom-0 left-0 right-0 bg-accent text-white text-xs py-2 text-center font-sans font-medium">
                    {drawnCard.isReversed ? '逆位' : '正位'}
                  </div>
                </div>
              </div>

              {/* 位置标签 */}
              <div className="text-center mt-4 text-base text-text-primary font-sans">
                {drawnCard.position}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 text-text-secondary font-sans">
          正在准备解读
        </div>
      </div>
    </div>
  );
}
