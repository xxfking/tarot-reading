// 客户端限流逻辑（基于 localStorage）
// 注意：这是客户端实现，用户可以通过清除浏览器数据绕过
// 生产环境建议升级为 Vercel KV（服务端限流）

interface RateLimitRecord {
  count: number;
  lastReadingTime: number;
  resetTime: number;
}

const STORAGE_KEY = 'tarot_rate_limit';
export const DAILY_LIMIT = 10; // 修改为每天10次（可以改为任意数字）
const COOLDOWN_MS = 30 * 1000; // 30 秒

// 获取今天的开始时间（UTC 0点）
function getTodayStart(): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return today.getTime();
}

// 获取明天的开始时间
function getTomorrowStart(): number {
  const today = getTodayStart();
  return today + 24 * 60 * 60 * 1000;
}

// 获取当前限流记录
export function getRateLimitRecord(): RateLimitRecord {
  if (typeof window === 'undefined') {
    // 服务端渲染时返回默认值
    return {
      count: 0,
      lastReadingTime: 0,
      resetTime: getTomorrowStart(),
    };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    // 首次使用，创建新记录
    return {
      count: 0,
      lastReadingTime: 0,
      resetTime: getTomorrowStart(),
    };
  }

  try {
    const record: RateLimitRecord = JSON.parse(stored);
    const now = Date.now();

    // 检查是否需要重置（新的一天）
    if (now >= record.resetTime) {
      return {
        count: 0,
        lastReadingTime: 0,
        resetTime: getTomorrowStart(),
      };
    }

    return record;
  } catch {
    // 解析失败，返回新记录
    return {
      count: 0,
      lastReadingTime: 0,
      resetTime: getTomorrowStart(),
    };
  }
}

// 检查是否可以进行占卜
export function canPerformReading(): {
  allowed: boolean;
  reason?: string;
  remainingCount?: number;
  cooldownRemaining?: number;
} {
  // 开发者模式：跳过限流检查
  if (process.env.NEXT_PUBLIC_DISABLE_RATE_LIMIT === 'true') {
    return {
      allowed: true,
      remainingCount: 999,
    };
  }

  const record = getRateLimitRecord();
  const now = Date.now();

  // 检查每日次数限制
  if (record.count >= DAILY_LIMIT) {
    const resetIn = Math.ceil((record.resetTime - now) / 1000 / 60); // 分钟
    return {
      allowed: false,
      reason: `今日占卜次数已用完，将在 ${resetIn} 分钟后重置`,
      remainingCount: 0,
    };
  }

  // 检查冷却时间
  if (record.lastReadingTime > 0) {
    const timeSinceLastReading = now - record.lastReadingTime;
    if (timeSinceLastReading < COOLDOWN_MS) {
      const cooldownRemaining = Math.ceil((COOLDOWN_MS - timeSinceLastReading) / 1000);
      return {
        allowed: false,
        reason: `请稍候 ${cooldownRemaining} 秒后再次占卜`,
        cooldownRemaining,
      };
    }
  }

  return {
    allowed: true,
    remainingCount: DAILY_LIMIT - record.count,
  };
}

// 记录一次占卜
export function recordReading(): void {
  if (typeof window === 'undefined') return;

  // 开发者模式：不记录
  if (process.env.NEXT_PUBLIC_DISABLE_RATE_LIMIT === 'true') {
    return;
  }

  const record = getRateLimitRecord();
  const now = Date.now();

  const newRecord: RateLimitRecord = {
    count: record.count + 1,
    lastReadingTime: now,
    resetTime: record.resetTime,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecord));
}

// 获取剩余次数
export function getRemainingReadings(): number {
  if (process.env.NEXT_PUBLIC_DISABLE_RATE_LIMIT === 'true') {
    return 999;
  }

  const record = getRateLimitRecord();
  return Math.max(0, DAILY_LIMIT - record.count);
}

// 获取重置时间（可读格式）
export function getResetTimeString(): string {
  const record = getRateLimitRecord();
  const resetDate = new Date(record.resetTime);
  const hours = resetDate.getHours().toString().padStart(2, '0');
  const minutes = resetDate.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// 🔧 开发者工具：手动重置限流
export function resetRateLimit(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  console.log('✅ Rate limit has been reset');
}

// 🔧 开发者工具：设置自定义次数
export function setRateLimitCount(count: number): void {
  if (typeof window === 'undefined') return;

  const record = getRateLimitRecord();
  const newRecord: RateLimitRecord = {
    ...record,
    count: Math.max(0, count),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecord));
  console.log(`✅ Rate limit count set to: ${count}`);
}

// 在浏览器控制台暴露工具函数（仅开发环境）
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).tarotDevTools = {
    resetRateLimit,
    setRateLimitCount,
    getRateLimitRecord,
  };
  console.log('🎯 Tarot Dev Tools available: window.tarotDevTools');
}
