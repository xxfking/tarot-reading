'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { DrawnCard } from '@/lib/types';
import { motion } from 'framer-motion';

interface CardRevealProps {
  drawnCards: DrawnCard[];
  onComplete: () => void;
}

export default function CardReveal({ drawnCards, onComplete }: CardRevealProps) {
  const t = useTranslations();
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (revealedCount < drawnCards.length) {
      const timer = setTimeout(() => {
        setRevealedCount(revealedCount + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (revealedCount === drawnCards.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [revealedCount, drawnCards.length, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-8 bg-gradient-celestial grain-overlay">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
            <div className="w-2 h-2 bg-accent-gold rounded-full shadow-glow"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display mb-4 text-text-primary text-center font-semibold">
            {t('cardReveal.title')}
          </h2>
          <p className="text-center text-text-secondary font-serif text-base md:text-lg max-w-2xl mx-auto">
            {t('cardReveal.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
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
                  className="w-44 md:w-56 aspect-[2/3] relative"
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
                    {/* Card Back */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl shadow-mystic bg-white p-2"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                          src="/cards/card-back.jpg"
                          alt="Tarot Card Back"
                          fill
                          sizes="(max-width: 768px) 176px, 224px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    {/* Card Front */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl shadow-mystic border border-mystic-200/50 bg-white p-2"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div
                        className="relative w-full h-full rounded-lg overflow-hidden pb-6"
                        style={{
                          transform: drawnCard.isReversed ? 'rotate(180deg)' : 'none'
                        }}
                      >
                        <Image
                          src={drawnCard.card.imageUrl}
                          alt={drawnCard.card.name}
                          fill
                          sizes="(max-width: 768px) 176px, 224px"
                          className="object-contain"
                          priority
                        />
                      </div>
                      {/* Upright/Reversed Badge - 缩小避免遮挡 */}
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-r from-accent to-mystic-600 text-white text-xs py-1 text-center font-sans font-medium z-10 rounded shadow-md">
                        {drawnCard.isReversed ? t('result.reversed') : t('result.upright')}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Position Label */}
                <div className="text-center mt-5 text-sm md:text-base text-text-primary font-display font-semibold">
                  {drawnCard.position}
                </div>
              </div>
            );
          })}
        </div>

        {/* Preparing Message */}
        <div className="text-center mt-14 md:mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-mystic-200/50 rounded-full shadow-card">
            <div className="w-2 h-2 bg-mystic-500 rounded-full animate-pulse"></div>
            <span className="text-text-secondary font-serif text-sm md:text-base">
              {t('cardReveal.preparing')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
