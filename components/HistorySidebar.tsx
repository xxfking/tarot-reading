'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReadingHistory, getHistory, deleteHistoryItem, clearHistory, formatTimestamp } from '@/lib/history';

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HistorySidebar({ isOpen, onClose }: HistorySidebarProps) {
  const t = useTranslations('history');
  const tResult = useTranslations('result');
  const [history, setHistory] = useState<ReadingHistory[]>([]);
  const [selectedItem, setSelectedItem] = useState<ReadingHistory | null>(null);

  useEffect(() => {
    if (isOpen) {
      setHistory(getHistory());
    }
  }, [isOpen]);

  const handleDelete = (id: string) => {
    if (confirm(t('confirmDelete'))) {
      deleteHistoryItem(id);
      setHistory(getHistory());
      if (selectedItem?.id === id) {
        setSelectedItem(null);
      }
    }
  };

  const handleClearAll = () => {
    if (confirm(t('confirmClear'))) {
      clearHistory();
      setHistory([]);
      setSelectedItem(null);
    }
  };

  const handleCopy = (item: ReadingHistory) => {
    const copyText = `${t('copyTemplate.title')}

${t('copyTemplate.spread')}：${item.spreadName}
${t('copyTemplate.time')}：${formatTimestamp(item.timestamp)}
${item.question ? `${t('copyTemplate.question')}：${item.question}\n` : ''}
${t('copyTemplate.cards')}：
${item.cards.map(dc => `  ${dc.position}：${dc.card.name}（${dc.isReversed ? tResult('reversed') : tResult('upright')}）`).join('\n')}

${t('copyTemplate.interpretation')}：
${item.interpretation}

${t('copyTemplate.footer')}`;

    navigator.clipboard.writeText(copyText).then(() => {
      alert(t('copySuccess'));
    }).catch(() => {
      alert(t('copyFailed'));
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* 侧边栏 */}
      <div className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-white shadow-2xl z-50 flex flex-col">
        {/* 头部 */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-text-primary">
            {t('title')}
          </h2>
          <button
            onClick={onClose}
            className="text-3xl text-text-secondary hover:text-text-primary transition-colors"
          >
            ×
          </button>
        </div>

        {/* 内容区域 */}
        <div className="flex-1 overflow-hidden flex">
          {/* 左侧列表 */}
          <div className="w-full md:w-2/5 border-r border-border overflow-y-auto">
            {history.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-text-secondary font-sans text-sm">{t('empty')}</p>
              </div>
            ) : (
              <>
                <div className="p-4 border-b border-border">
                  <button
                    onClick={handleClearAll}
                    className="text-sm text-text-secondary hover:text-red-600 font-sans transition-colors"
                  >
                    {t('clear')}
                  </button>
                </div>
                <div className="divide-y divide-border">
                  {history.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={`w-full p-4 text-left transition-colors ${
                        selectedItem?.id === item.id
                          ? 'bg-accent/10 border-l-4 border-accent'
                          : 'hover:bg-background'
                      }`}
                    >
                      <div className="font-sans font-semibold text-sm text-text-primary mb-1">
                        {item.spreadName}
                      </div>
                      <div className="font-sans text-xs text-text-secondary">
                        {formatTimestamp(item.timestamp)}
                      </div>
                      {item.question && (
                        <div className="font-sans text-xs text-text-secondary mt-2 line-clamp-2">
                          {item.question}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* 右侧详情 */}
          <div className="hidden md:block flex-1 overflow-y-auto">
            {selectedItem ? (
              <div className="p-6">
                {/* 头部信息 */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-sans font-bold text-text-primary">
                      {selectedItem.spreadName}
                    </h3>
                    <button
                      onClick={() => handleDelete(selectedItem.id)}
                      className="text-sm text-red-600 hover:text-red-700 font-sans"
                    >
                      {t('delete')}
                    </button>
                  </div>
                  <p className="text-sm text-text-secondary font-sans">
                    {formatTimestamp(selectedItem.timestamp)}
                  </p>
                </div>

                {/* 问题 */}
                {selectedItem.question && (
                  <div className="mb-6 p-4 bg-background rounded-lg">
                    <div className="text-xs text-text-secondary font-sans font-semibold mb-2">
                      {tResult('yourQuestion')}
                    </div>
                    <p className="text-sm text-text-primary font-sans">
                      {selectedItem.question}
                    </p>
                  </div>
                )}

                {/* 抽到的牌 */}
                <div className="mb-6">
                  <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                    {t('cardResults')}
                  </div>
                  <div className="space-y-3">
                    {selectedItem.cards.map((dc, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                        <div className="relative w-12 h-16 flex-shrink-0">
                          <Image
                            src={dc.card.imageUrl}
                            alt={dc.card.name}
                            fill
                            className={`object-cover rounded ${dc.isReversed ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-text-secondary font-sans mb-1">
                            {dc.position}
                          </div>
                          <div className="text-sm font-sans font-semibold text-text-primary">
                            {dc.card.name}
                          </div>
                          <div className={`text-xs font-sans ${dc.isReversed ? 'text-accent-cool' : 'text-accent'}`}>
                            {dc.isReversed ? tResult('reversed') : tResult('upright')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 结果解析 */}
                <div className="mb-6">
                  <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                    {tResult('interpretation')}
                  </div>
                  <div className="p-4 bg-background rounded-lg space-y-3">
                    {selectedItem.interpretation.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-sm text-text-primary font-sans leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 操作按钮 */}
                <button
                  onClick={() => handleCopy(selectedItem)}
                  className="w-full py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg font-sans font-medium transition-all text-sm"
                >
                  {tResult('copyReading')}
                </button>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-text-secondary font-sans text-sm">
                  {t('selectHint')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 移动端详情页 */}
        {selectedItem && (
          <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="p-6">
              {/* 返回按钮 */}
              <button
                onClick={() => setSelectedItem(null)}
                className="mb-6 inline-flex items-center gap-2 text-text-primary hover:text-accent transition-colors"
              >
                <span className="text-xl">←</span>
                <span className="font-sans text-sm">{t('backToList')}</span>
              </button>

              {/* 头部信息 */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-sans font-bold text-text-primary">
                    {selectedItem.spreadName}
                  </h3>
                  <button
                    onClick={() => {
                      handleDelete(selectedItem.id);
                      setSelectedItem(null);
                    }}
                    className="text-sm text-red-600 hover:text-red-700 font-sans"
                  >
                    {t('delete')}
                  </button>
                </div>
                <p className="text-sm text-text-secondary font-sans">
                  {formatTimestamp(selectedItem.timestamp)}
                </p>
              </div>

              {/* 问题 */}
              {selectedItem.question && (
                <div className="mb-6 p-4 bg-background rounded-lg">
                  <div className="text-xs text-text-secondary font-sans font-semibold mb-2">
                    {tResult('yourQuestion')}
                  </div>
                  <p className="text-sm text-text-primary font-sans">
                    {selectedItem.question}
                  </p>
                </div>
              )}

              {/* 抽到的牌 */}
              <div className="mb-6">
                <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                  {t('cardResults')}
                </div>
                <div className="space-y-3">
                  {selectedItem.cards.map((dc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <div className="relative w-12 h-16 flex-shrink-0">
                        <Image
                          src={dc.card.imageUrl}
                          alt={dc.card.name}
                          fill
                          className={`object-cover rounded ${dc.isReversed ? 'rotate-180' : ''}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-text-secondary font-sans mb-1">
                          {dc.position}
                        </div>
                        <div className="text-sm font-sans font-semibold text-text-primary">
                          {dc.card.name}
                        </div>
                        <div className={`text-xs font-sans ${dc.isReversed ? 'text-accent-cool' : 'text-accent'}`}>
                          {dc.isReversed ? tResult('reversed') : tResult('upright')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 结果解析 */}
              <div className="mb-6">
                <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                  {tResult('interpretation')}
                </div>
                <div className="p-4 bg-background rounded-lg space-y-3">
                  {selectedItem.interpretation.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-sm text-text-primary font-sans leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* 操作按钮 */}
              <button
                onClick={() => handleCopy(selectedItem)}
                className="w-full py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg font-sans font-medium transition-all text-sm"
              >
                {tResult('copyReading')}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
