'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ReadingHistory, getHistory, deleteHistoryItem, clearHistory, formatTimestamp } from '@/lib/history';

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HistorySidebar({ isOpen, onClose }: HistorySidebarProps) {
  const [history, setHistory] = useState<ReadingHistory[]>([]);
  const [selectedItem, setSelectedItem] = useState<ReadingHistory | null>(null);

  useEffect(() => {
    if (isOpen) {
      setHistory(getHistory());
    }
  }, [isOpen]);

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这条记录吗？')) {
      deleteHistoryItem(id);
      setHistory(getHistory());
      if (selectedItem?.id === id) {
        setSelectedItem(null);
      }
    }
  };

  const handleClearAll = () => {
    if (confirm('确定要清空所有历史记录吗？此操作不可恢复。')) {
      clearHistory();
      setHistory([]);
      setSelectedItem(null);
    }
  };

  const handleCopy = (item: ReadingHistory) => {
    const copyText = `【塔罗占卜解读】

牌阵：${item.spreadName}
时间：${formatTimestamp(item.timestamp)}
${item.question ? `问题：${item.question}\n` : ''}
抽牌结果：
${item.cards.map(dc => `  ${dc.position}：${dc.card.name}（${dc.isReversed ? '逆位' : '正位'}）`).join('\n')}

解读：
${item.interpretation}

---
由 AI 智能解读`;

    navigator.clipboard.writeText(copyText).then(() => {
      alert('已复制到剪贴板');
    }).catch(() => {
      alert('复制失败');
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
            历史记录
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
                <p className="text-text-secondary font-sans text-sm">暂无历史记录</p>
              </div>
            ) : (
              <>
                <div className="p-4 border-b border-border">
                  <button
                    onClick={handleClearAll}
                    className="text-sm text-text-secondary hover:text-red-600 font-sans transition-colors"
                  >
                    清空全部
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
                      删除
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
                      你的问题
                    </div>
                    <p className="text-sm text-text-primary font-sans">
                      {selectedItem.question}
                    </p>
                  </div>
                )}

                {/* 抽到的牌 */}
                <div className="mb-6">
                  <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                    抽牌结果
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
                            {dc.isReversed ? '逆位' : '正位'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI 解读 */}
                <div className="mb-6">
                  <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                    AI 解读
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-sm text-text-primary font-sans leading-relaxed whitespace-pre-wrap">
                      {selectedItem.interpretation}
                    </p>
                  </div>
                </div>

                {/* 操作按钮 */}
                <button
                  onClick={() => handleCopy(selectedItem)}
                  className="w-full py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg font-sans font-medium transition-all text-sm"
                >
                  复制解读
                </button>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-text-secondary font-sans text-sm">
                  选择一条记录查看详情
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
                <span className="font-sans text-sm">返回列表</span>
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
                    删除
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
                    你的问题
                  </div>
                  <p className="text-sm text-text-primary font-sans">
                    {selectedItem.question}
                  </p>
                </div>
              )}

              {/* 抽到的牌 */}
              <div className="mb-6">
                <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                  抽牌结果
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
                          {dc.isReversed ? '逆位' : '正位'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI 解读 */}
              <div className="mb-6">
                <div className="text-xs text-text-secondary font-sans font-semibold mb-3">
                  AI 解读
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-text-primary font-sans leading-relaxed whitespace-pre-wrap">
                    {selectedItem.interpretation}
                  </p>
                </div>
              </div>

              {/* 操作按钮 */}
              <button
                onClick={() => handleCopy(selectedItem)}
                className="w-full py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg font-sans font-medium transition-all text-sm"
              >
                复制解读
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
