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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
      {spreads.map((spread, index) => (
        <button
          key={spread.type}
          onClick={() => onSelect(spread)}
          className="group bg-white/95 backdrop-blur-sm border border-border hover:border-accent/50 rounded-xl p-5 md:p-7 text-left transition-all duration-500 shadow-card hover:shadow-mystic focus:outline-none focus:ring-2 focus:ring-mystic-500 focus:ring-offset-2 relative overflow-hidden animate-fade-in-up opacity-0"
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: 'forwards',
            transformStyle: 'preserve-3d',
          }}
          onMouseEnter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
          }}
        >
          {/* Animated gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-100/60 via-accent-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-display text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 font-semibold">
              {spread.name}
            </h3>

            <p className="text-text-secondary text-sm font-serif leading-relaxed mb-4">
              {spread.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
              <span className="text-xs md:text-sm text-text-tertiary font-sans font-medium group-hover:text-accent transition-colors duration-300">
                {spread.cardCount} {spread.cardCount === 1 ? t('common.card') : t('common.cards')}
              </span>
              <span className="text-accent text-xl md:text-2xl group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 font-bold">
                →
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
