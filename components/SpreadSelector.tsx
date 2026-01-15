'use client';

import { Spread } from '@/lib/types';

interface SpreadSelectorProps {
  spreads: Spread[];
  onSelect: (spread: Spread) => void;
}

export default function SpreadSelector({ spreads, onSelect }: SpreadSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {spreads.map((spread) => (
        <button
          key={spread.type}
          onClick={() => onSelect(spread)}
          className="group relative bg-surface border border-border rounded-lg p-8 text-left transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          <h3 className="text-xl font-serif text-text-primary mb-2 group-hover:text-accent transition-colors">
            {spread.name}
          </h3>
          <p className="text-text-secondary text-sm mb-4">
            {spread.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">
              {spread.cardCount} 张牌
            </span>
            <span className="text-accent text-sm group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
