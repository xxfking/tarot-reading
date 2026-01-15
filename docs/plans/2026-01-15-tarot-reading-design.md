# 塔罗牌在线占卜网站 - 设计方案

**设计日期**: 2026-01-15
**风格**: 瑞典现代主义
**部署**: Vercel + GitHub

---

## 一、项目概述

开发一个在线塔罗牌占卜网站，支持多种牌阵、完整78张塔罗牌（含正逆位），集成多个大模型 API 进行个性化解读。设计遵循瑞典现代主义风格，界面简洁温暖，让用户能够平静专注地进行占卜。

### 核心特性
- ✅ 78张完整塔罗牌 + 正逆位支持
- ✅ 5种经典牌阵（单张、三张、凯尔特十字等）
- ✅ 用户主动点击选牌（增强仪式感）
- ✅ 输入占卜问题后获得个性化解读
- ✅ 支持6种大模型（OpenAI/Claude/Gemini/智谱/千问/DeepSeek）
- ✅ 统一后端 API，用户无需配置密钥
- ✅ 每日3次限制（IP 限流）
- ✅ 本地历史记录（localStorage）
- ✅ 结构化解读展示 + 可复制文本

---

## 二、技术架构

### 技术栈
- **前端框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义主题
- **动画**: Framer Motion
- **状态管理**: React Context + localStorage
- **部署**: Vercel
- **版本控制**: GitHub
- **限流存储**: Vercel KV (Redis)

### 项目结构
```
tarot-reading/
├── app/
│   ├── page.tsx                 # 首页（抽牌主界面）
│   ├── layout.tsx               # 全局布局
│   ├── api/
│   │   ├── interpret/route.ts   # 调用大模型API
│   │   └── check-limit/route.ts # 检查使用限制
├── components/
│   ├── TarotCard.tsx            # 单张塔罗牌组件
│   ├── SpreadSelector.tsx       # 牌阵选择器
│   ├── CardSpread.tsx           # 牌阵展示
│   ├── Interpretation.tsx       # 解读结果展示
│   └── HistorySidebar.tsx       # 历史记录侧边栏
├── lib/
│   ├── tarot-data.ts            # 78张牌数据
│   ├── llm-service.ts           # 大模型服务封装
│   ├── rate-limit.ts            # 限流逻辑
│   └── types.ts                 # TypeScript 类型定义
├── public/
│   └── cards/                   # 塔罗牌图片资源
├── docs/
│   └── plans/                   # 设计文档
├── .env.example
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 三、数据结构设计

### 塔罗牌数据
```typescript
interface TarotCard {
  id: number;                    // 1-78
  name: string;                  // 中文名称
  nameEn: string;                // 英文名称
  suit: 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';
  keywords: {
    upright: string[];           // 正位关键词
    reversed: string[];          // 逆位关键词
  };
  description: {
    upright: string;             // 正位基础含义
    reversed: string;            // 逆位基础含义
  };
  imageUrl: string;              // 牌面图片路径
}
```

### 牌阵类型
```typescript
enum SpreadType {
  SINGLE = 'single',             // 单张牌
  THREE_TIME = 'three_time',     // 三张牌（过去-现在-未来）
  THREE_SITUATION = 'three_situation', // 三张牌（情况-行动-结果）
  CELTIC_CROSS = 'celtic_cross', // 凯尔特十字（10张）
  RELATIONSHIP = 'relationship'  // 关系牌阵（5张）
}

interface Spread {
  type: SpreadType;
  name: string;
  description: string;
  positions: string[];           // 位置名称数组
  cardCount: number;
}
```

### 抽牌记录
```typescript
interface ReadingHistory {
  id: string;                    // UUID
  timestamp: number;
  spreadType: SpreadType;
  question?: string;             // 用户问题
  cards: {
    card: TarotCard;
    position: string;
    isReversed: boolean;
  }[];
  interpretation: InterpretationResult;
}

interface InterpretationResult {
  overview: string;              // 整体概述
  cardAnalysis: {
    position: string;
    card: string;
    isReversed: boolean;
    meaning: string;
  }[];
  advice: string;                // 综合建议
  timestamp: number;
}
```

---

## 四、大模型集成

### 支持的模型
```typescript
enum LLMProvider {
  OPENAI = 'openai',             // GPT-4/GPT-3.5
  ANTHROPIC = 'anthropic',       // Claude
  GEMINI = 'gemini',             // Google Gemini
  ZHIPU = 'zhipu',               // 智谱 GLM
  QWEN = 'qwen',                 // 通义千问
  DEEPSEEK = 'deepseek'          // DeepSeek
}
```

### API 密钥管理
- 所有密钥存储在 Vercel 环境变量
- 环境变量命名：`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY` 等
- 配置主力模型和备用模型（`PRIMARY_LLM`, `FALLBACK_LLM`）
- 仅在服务端调用，密钥不暴露给前端

### Prompt 设计策略
- 提供完整牌面信息（牌名、正逆位、位置、关键词）
- 结合用户问题进行个性化解读
- 要求结构化输出：整体概述 + 逐牌解读 + 综合建议
- 语气温和、启发性，避免宿命论
- 限制输出长度（500-800字）

### 调用流程
1. 接收前端请求（牌面信息 + 用户问题）
2. 检查 IP 限流（每日3次）
3. 构建 Prompt
4. 调用主力模型 API
5. 若失败，自动切换备用模型
6. 解析返回结果为结构化格式
7. 返回给前端展示

---

## 五、用户交互流程

### 完整流程
1. **首页** → 用户选择牌阵类型
2. **选牌界面** → 展示78张牌背，用户点击选择对应数量的牌
3. **翻牌动画** → 选中的牌依次翻转，显示牌面和正逆位
4. **输入问题** → 弹出输入框，用户描述占卜问题（可选，最多150字）
5. **生成解读** → 调用 API，显示加载动画
6. **查看结果** → 展示结构化解读，支持复制和查看历史

### 选牌交互细节
- 展示牌背网格（桌面10列，移动5列）
- 悬停效果：轻微上浮 + 阴影
- 点击选中：缩放 + 高亮边框
- 进度提示：显示"已选择 X/Y 张牌"
- 选满后自动触发翻牌动画

### 翻牌动画
- 3D 翻转效果（Y轴旋转180度）
- 持续时间 0.6秒，缓动函数 ease-out
- 多张牌依次翻转，间隔 0.2秒
- 翻转后显示牌面图片和正/逆位标识

---

## 六、限流与安全策略

### 限流实现
```typescript
interface RateLimit {
  ip: string;
  date: string;                  // YYYY-MM-DD
  count: number;                 // 当天使用次数
  lastRequest: number;           // 最后请求时间戳
}

const LIMITS = {
  dailyLimit: 3,                 // 每天3次
  cooldown: 30000                // 请求间隔30秒
};
```

**存储方案**: Vercel KV (Redis)
**IP 获取**: `request.headers.get('x-forwarded-for')`
**重置时间**: 每日午夜 00:00

### 安全措施
1. **API 密钥保护**: 仅服务端调用，环境变量存储
2. **输入验证**:
   - 牌阵类型白名单验证
   - 问题长度限制（150字）
   - 抽牌数量与牌阵匹配验证
3. **输入清洗**: 过滤特殊字符，防止注入攻击
4. **错误处理**: 不暴露技术细节，返回友好提示
5. **请求限制**: 单次请求 token 上限，防止滥用

### 成本控制
- 优先使用低成本模型（GPT-3.5、Gemini Flash）
- 监控每日 API 调用量和费用
- 设置单用户每日3次硬限制
- 配置 API 超时时间（30秒）

---

## 七、UI/UX 设计（瑞典现代主义）

### 配色方案
```typescript
const theme = {
  colors: {
    background: '#F5F3F0',       // 温暖米白色
    surface: '#FFFFFF',          // 纯白卡片背景
    text: {
      primary: '#2C2C2C',        // 深灰色文字
      secondary: '#6B6B6B',      // 中灰色次要文字
    },
    accent: '#8B7355',           // 温暖棕色强调色
    border: '#E0DDD9',           // 柔和边框色
  },
  fonts: {
    primary: 'Inter, -apple-system, sans-serif',
    secondary: 'Georgia, serif', // 塔罗牌名称
  },
  spacing: {
    base: 8,                     // 8px 基础间距
  }
};
```

### 设计原则
- **大量留白**: 视觉舒适，降低焦虑感
- **温暖中性色**: 米白、浅灰、木色
- **清晰层次**: 卡片阴影、边框区分
- **简洁图标**: 线性图标，不使用花哨装饰
- **柔和圆角**: 8-12px 圆角，避免生硬
- **流畅动画**: 缓动函数营造自然感

### 页面布局

**首页**:
- 顶部：简洁标题"塔罗占卜"
- 中央：5个牌阵选项（卡片式）
- 底部：剩余次数提示 + 查看历史链接

**选牌界面**:
- 顶部：牌阵名称 + 选择进度
- 中央：牌背网格（响应式）
- 底部：返回按钮

**解读结果页**:
- 顶部：抽到的牌横向展示
- 中部：结构化解读（整体概述 → 逐牌分析 → 综合建议）
- 底部：复制按钮 + 重新抽牌按钮

---

## 八、响应式设计

### 桌面端（≥1024px）
- 牌阵选择：2列网格
- 选牌界面：10列网格（78张牌）
- 解读结果：双栏布局（左侧牌面，右侧解读）

### 平板端（768px - 1023px）
- 牌阵选择：2列网格
- 选牌界面：8列网格
- 解读结果：单栏布局

### 移动端（<768px）
- 牌阵选择：1列堆叠
- 选牌界面：5列网格（加大触摸区域）
- 解读结果：单栏，牌面横向滚动
- 历史记录：全屏模态框

### 触摸优化
- 按钮最小点击区域 44x44px
- 卡片间距增大，避免误触
- 支持滑动手势

---

## 九、错误处理

### 错误场景与提示

| 场景 | 提示文案 | 处理方式 |
|------|---------|---------|
| 达到每日限制 | "今日占卜次数已用完，明天再来吧 🌙" | 显示重置时间，建议查看历史 |
| API 失败 | "占卜服务暂时繁忙，请稍后再试" | 自动切换备用模型，不扣次数 |
| 网络超时 | "连接超时，请检查网络后重试" | 提供重试按钮 |
| 问题过长 | "问题描述不能超过150字" | 实时字数统计，禁用提交 |

### 加载状态
- 解读生成中：简洁旋转动画 + "正在解读..."
- 超时设置：30秒
- 失败重试：最多3次（切换不同模型）

---

## 十、性能优化

### 图片优化
- 使用 Next.js Image 组件
- 格式：WebP（降级 JPEG）
- 尺寸：缩略图 300x500px，详情图 600x1000px
- 懒加载：视口外图片延迟加载

### 代码优化
- 动态导入：历史记录组件按需加载
- 代码分割：按牌阵类型拆分布局组件
- Tree Shaking：移除未使用代码

### 缓存策略
- 静态资源：CDN 缓存（1年）
- API 路由：no-cache（实时限流）
- 塔罗牌数据：构建时预加载

### SEO 优化
```typescript
// app/layout.tsx
export const metadata = {
  title: '塔罗占卜 - 在线塔罗牌解读',
  description: '简洁优雅的在线塔罗牌占卜，支持多种牌阵，AI 智能解读',
  openGraph: {
    title: '塔罗占卜',
    description: '在线塔罗牌 AI 解读',
    images: ['/og-image.jpg'],
  },
};
```

---

## 十一、部署配置

### 环境变量（Vercel）
```bash
# 大模型 API 密钥
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GEMINI_API_KEY=...
ZHIPU_API_KEY=...
QWEN_API_KEY=...
DEEPSEEK_API_KEY=...

# 模型配置
PRIMARY_LLM=openai           # 主力模型
FALLBACK_LLM=gemini          # 备用模型

# 限流存储（Vercel KV）
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
```

### GitHub 工作流
1. 本地开发 → `git commit` → `git push`
2. GitHub 接收 push
3. Vercel 自动触发部署
4. 构建完成 → 自动发布到生产环境

### 自定义域名
1. Vercel 项目设置 → Domains
2. 添加自定义域名
3. 配置 DNS 记录（A 记录或 CNAME）
4. 等待 SSL 证书自动配置

---

## 十二、开发里程碑

### 阶段一：基础框架（MVP）
- [ ] 初始化 Next.js 项目
- [ ] 配置 Tailwind CSS 和主题
- [ ] 创建项目目录结构
- [ ] 设置 TypeScript 类型定义

### 阶段二：核心功能
- [ ] 实现 78 张塔罗牌数据
- [ ] 开发牌阵选择界面
- [ ] 实现选牌和翻牌交互
- [ ] 集成大模型 API
- [ ] 实现限流逻辑

### 阶段三：UI/UX 完善
- [ ] 实现瑞典现代主义设计风格
- [ ] 添加翻牌动画
- [ ] 优化响应式布局
- [ ] 实现历史记录功能

### 阶段四：部署与优化
- [ ] 配置 Vercel 部署
- [ ] 绑定自定义域名
- [ ] 性能优化（图片、代码分割）
- [ ] SEO 优化
- [ ] 错误监控和日志

---

## 十三、未来扩展可能性

- 多语言支持（英文、日文）
- 用户登录系统（可选）
- 社交分享功能
- 更多牌阵类型
- 塔罗日记功能
- 付费高级功能（无限次数、专属模型）

---

**设计完成日期**: 2026-01-15
**预计开发周期**: 分阶段实现，MVP 优先
