'use client';

import { Spread } from '@/lib/types';

interface SpreadSelectorProps {
  spreads: Spread[];
  onSelect: (spread: Spread) => void;
}

export default function SpreadSelector({ spreads, onSelect }: SpreadSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {spreads.map((spread) => (
        <button
          key={spread.type}
          onClick={() => onSelect(spread)}
          className="group bg-white border border-border hover:border-accent rounded-lg p-10 text-left transition-all duration-300 hover:shadow-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-4 hover:-translate-y-1"
        >
          <h3 className="text-2xl font-display text-text-primary mb-4 group-hover:text-accent transition-colors font-semibold">
            {spread.name}
          </h3>

          <p className="text-text-secondary text-base font-sans leading-relaxed mb-8">
            {spread.description}
          </p>

          <div className="flex items-center justify-between pt-5 border-t border-border/50">
            <span className="text-xs uppercase tracking-wider text-text-secondary font-sans font-medium">
              {spread.cardCount} 张牌
            </span>
            <span className="text-accent text-xl group-hover:translate-x-2 transition-transform">
              →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
