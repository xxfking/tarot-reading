'use client';

import { Spread } from '@/lib/types';

interface SpreadSelectorProps {
  spreads: Spread[];
  onSelect: (spread: Spread) => void;
}

export default function SpreadSelector({ spreads, onSelect }: SpreadSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {spreads.map((spread) => (
        <button
          key={spread.type}
          onClick={() => onSelect(spread)}
          className="group bg-surface border-2 border-border hover:border-accent rounded-lg p-8 text-left transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          <h3 className="text-2xl font-display text-text-primary mb-3 group-hover:text-accent transition-colors">
            {spread.name}
          </h3>

          <p className="text-text-secondary text-base font-sans leading-relaxed mb-6">
            {spread.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-text-secondary font-sans">
              {spread.cardCount} 张牌
            </span>
            <span className="text-accent text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
