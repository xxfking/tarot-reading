'use client';

interface CardBackProps {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export default function CardBack({ index, isSelected, onClick, disabled }: CardBackProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative aspect-[2/3] rounded-lg transition-all duration-300
        ${isSelected
          ? 'scale-95 ring-2 ring-accent shadow-xl'
          : 'hover:scale-105 hover:shadow-lg hover:-translate-y-2'
        }
        ${disabled && !isSelected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus:ring-2 focus:ring-accent
      `}
    >
      {/* 牌背设计 */}
      <div className={`
        w-full h-full rounded-lg border-2 transition-colors
        ${isSelected ? 'border-accent bg-accent/10' : 'border-border bg-surface'}
        flex items-center justify-center
      `}>
        <div className="text-center">
          <div className="text-4xl mb-2">✧</div>
          <div className="text-xs text-text-secondary font-serif">
            Tarot
          </div>
        </div>
      </div>

      {/* 选中标记 */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-medium shadow-lg">
          ✓
        </div>
      )}
    </button>
  );
}
