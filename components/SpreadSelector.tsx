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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 max-w-5xl mx-auto">
      {spreads.map((spread) => (
        <button
          key={spread.type}
          onClick={() => onSelect(spread)}
          className="group bg-white border-2 border-border hover:border-accent rounded-lg p-7 md:p-8 text-left transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          <h3 className="text-2xl md:text-3xl font-sans text-text-primary mb-3 group-hover:text-accent transition-colors font-bold">
            {spread.name}
          </h3>

          <p className="text-text-secondary text-sm md:text-base font-sans leading-relaxed mb-5">
            {spread.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-sm md:text-base text-text-secondary font-sans font-medium">
              {spread.cardCount} {spread.cardCount === 1 ? t('common.card') : t('common.cards')}
            </span>
            <span className="text-accent text-2xl md:text-3xl group-hover:translate-x-1 transition-transform font-bold">
              →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
