'use client';

import { useTranslations } from 'next-intl';
import { Spread } from '@/lib/types';

interface SpreadSelectorProps {
  spreads: Spread[];
  onSelect: (spread: Spread) => void;
}

export default function SpreadSelector({ spreads, onSelect }: SpreadSelectorProps) {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
      {spreads.map((spread, index) => (
        <button
          key={spread.type}
          onClick={() => onSelect(spread)}
          className="group bg-white/95 backdrop-blur-sm border border-border hover:border-accent/50 rounded-xl p-8 md:p-10 text-left transition-all duration-300 shadow-card hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-mystic-500 focus:ring-offset-2 relative overflow-hidden"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-50/50 via-transparent to-accent-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-4 group-hover:text-accent transition-colors font-semibold">
              {spread.name}
            </h3>

            <p className="text-text-secondary text-sm md:text-base font-serif leading-relaxed mb-6">
              {spread.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <span className="text-sm md:text-base text-text-tertiary font-sans font-medium">
                {spread.cardCount} {spread.cardCount === 1 ? t('common.card') : t('common.cards')}
              </span>
              <span className="text-accent text-2xl md:text-3xl group-hover:translate-x-2 transition-transform duration-300 font-bold">
                →
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
