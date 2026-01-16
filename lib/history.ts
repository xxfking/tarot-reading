import { DrawnCard } from './types';

export interface ReadingHistory {
  id: string;
  timestamp: number;
  spreadType: string;
  spreadName: string;
  question?: string;
  cards: DrawnCard[];
  interpretation: string;
}

const HISTORY_KEY = 'tarot_reading_history';
const MAX_HISTORY_ITEMS = 20; // 最多保存20条历史记录

/**
 * 获取所有历史记录
 */
export function getHistory(): ReadingHistory[] {
  if (typeof window === 'undefined') return [];

  try {
    const data = localStorage.getItem(HISTORY_KEY);
    if (!data) return [];

    const history = JSON.parse(data) as ReadingHistory[];
    // 按时间倒序排列（最新的在前面）
    return history.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error('Failed to get history:', error);
    return [];
  }
}

/**
 * 保存一条新的占卜记录
 */
export function saveToHistory(reading: Omit<ReadingHistory, 'id' | 'timestamp'>): void {
  if (typeof window === 'undefined') return;

  try {
    const history = getHistory();

    const newReading: ReadingHistory = {
      ...reading,
      id: generateId(),
      timestamp: Date.now(),
    };

    // 添加到开头
    history.unshift(newReading);

    // 限制最大数量
    const limitedHistory = history.slice(0, MAX_HISTORY_ITEMS);

    localStorage.setItem(HISTORY_KEY, JSON.stringify(limitedHistory));
  } catch (error) {
    console.error('Failed to save to history:', error);
  }
}

/**
 * 删除指定的历史记录
 */
export function deleteHistoryItem(id: string): void {
  if (typeof window === 'undefined') return;

  try {
    const history = getHistory();
    const filtered = history.filter(item => item.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Failed to delete history item:', error);
  }
}

/**
 * 清空所有历史记录
 */
export function clearHistory(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Failed to clear history:', error);
  }
}

/**
 * 生成唯一ID
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 格式化时间戳为可读格式
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - timestamp;

  // 今天
  if (date.toDateString() === now.toDateString()) {
    return `今天 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  // 昨天
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return `昨天 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  // 一周内
  if (diff < 7 * 24 * 60 * 60 * 1000) {
    const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return `${days[date.getDay()]} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  // 其他
  return `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}
