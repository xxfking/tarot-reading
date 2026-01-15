'use client';

import { useState } from 'react';
import { Spread } from '@/lib/types';
import { getAllSpreads } from '@/lib/spreads';
import SpreadSelector from '@/components/SpreadSelector';

export default function Home() {
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const spreads = getAllSpreads();

  const handleSpreadSelect = (spread: Spread) => {
    setSelectedSpread(spread);
    // TODO: Navigate to card selection page
    console.log('Selected spread:', spread);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4 text-text-primary">
            塔罗占卜
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            选择一个牌阵开始你的占卜之旅。静下心来，思考你想要探索的问题。
          </p>
        </div>

        {/* Spread Selection */}
        <SpreadSelector
          spreads={spreads}
          onSelect={handleSpreadSelect}
        />

        {/* Usage Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-secondary">
            今日剩余占卜次数：<span className="font-medium text-accent">3 / 3</span>
          </p>
        </div>
      </div>
    </main>
  );
}
