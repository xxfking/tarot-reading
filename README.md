# 塔罗占卜 - AI 智能解读

一个基于 Next.js 14 的在线塔罗占卜网站，集成多种大语言模型（LLM）提供专业的塔罗牌解读。

## ✨ 功能特点

- 🎴 **完整的 78 张塔罗牌** - 包含 22 张大阿卡纳和 56 张小阿卡纳
- 🔮 **5 种牌阵选择** - 单牌、三牌（时间/情况）、凯尔特十字、关系牌阵
- 🎯 **交互式选牌** - 旋转扇形布局，真实卡牌图片，支持正逆位
- 🤖 **AI 智能解读** - 支持 6 种大模型（OpenAI、Claude、Gemini、智谱、通义千问、DeepSeek）
- ⏱️ **使用限制** - 每日 3 次占卜，30 秒冷却时间
- 📋 **一键复制** - 解读结果支持复制到剪贴板
- 🎨 **瑞典现代主义设计** - 简洁优雅的界面风格

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/xxfking/tarot-reading.git
cd tarot-reading
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制 `.env.example` 文件为 `.env.local`：

```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件，配置你的 LLM API 密钥：

```env
# 选择主要使用的 LLM 提供商
PRIMARY_LLM_PROVIDER=openai
FALLBACK_LLM_PROVIDER=claude

# 配置对应的 API 密钥
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
# ... 其他配置请参考 .env.example
```

### 4. 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 5. 构建生产版本

```bash
npm run build
npm start
```

## 📦 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xxfking/tarot-reading)

### 部署步骤

1. **连接 GitHub 仓库**
   - 登录 [Vercel](https://vercel.com)
   - 导入你的 GitHub 仓库
   - 选择 `tarot-reading` 项目

2. **配置环境变量**
   - 在 Vercel 项目设置中添加环境变量
   - 至少配置 `PRIMARY_LLM_PROVIDER` 和对应的 API 密钥

3. **部署**
   - 点击 Deploy
   - 等待构建完成
   - 访问你的网站 URL

### 环境变量配置（Vercel）

在 Vercel 项目的 `Settings` > `Environment Variables` 中添加：

| 变量名 | 说明 | 必填 |
|--------|------|------|
| `PRIMARY_LLM_PROVIDER` | 主要 LLM 提供商 | ✅ |
| `FALLBACK_LLM_PROVIDER` | 备用 LLM 提供商 | ✅ |
| `OPENAI_API_KEY` | OpenAI API 密钥 | 如果使用 OpenAI |
| `ANTHROPIC_API_KEY` | Anthropic API 密钥 | 如果使用 Claude |
| `GEMINI_API_KEY` | Google Gemini API 密钥 | 如果使用 Gemini |
| `ZHIPU_API_KEY` | 智谱 AI API 密钥 | 如果使用智谱 |
| `QWEN_API_KEY` | 通义千问 API 密钥 | 如果使用通义 |
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥 | 如果使用 DeepSeek |

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **部署**: Vercel
- **LLM**: OpenAI / Claude / Gemini / 智谱 / 通义千问 / DeepSeek

## 📁 项目结构

```
tarot-reading/
├── app/
│   ├── api/
│   │   └── interpret/        # AI 解读 API 路由
│   ├── page.tsx               # 主页面
│   └── layout.tsx             # 布局
├── components/
│   ├── SpreadSelector.tsx     # 牌阵选择器
│   ├── CircularCardSelection.tsx  # 旋转选牌界面
│   ├── QuestionInput.tsx      # 问题输入
│   └── CardReveal.tsx         # 翻牌动画
├── lib/
│   ├── types.ts               # TypeScript 类型定义
│   ├── tarot-data.ts          # 78 张塔罗牌数据
│   ├── spreads.ts             # 牌阵配置
│   ├── llm-client.ts          # LLM 客户端
│   └── rate-limit.ts          # 限流逻辑
├── public/
│   └── cards/                 # 塔罗牌图片（79 张）
└── .env.example               # 环境变量模板
```

## 🎯 使用流程

1. **选择牌阵** - 从 5 种牌阵中选择一个
2. **选择塔罗牌** - 从旋转的 78 张牌中点击选择
3. **输入问题**（可选）- 说明你抽牌时思考的问题
4. **翻牌展示** - 观看 3D 翻牌动画
5. **AI 解读** - 获得专业的塔罗牌解读
6. **复制分享** - 一键复制解读结果

## 🔐 限流说明

- **每日限制**: 每个用户每天最多 3 次占卜
- **冷却时间**: 两次占卜之间间隔 30 秒
- **实现方式**: 基于浏览器 localStorage（客户端限流）
- **升级方案**: 可升级为 Vercel KV（服务端限流）

## 📝 LLM 提供商支持

| 提供商 | 推荐模型 | 获取 API |
|--------|---------|---------|
| OpenAI | gpt-4-turbo-preview | [platform.openai.com](https://platform.openai.com) |
| Anthropic | claude-3-5-sonnet-20241022 | [console.anthropic.com](https://console.anthropic.com) |
| Google | gemini-1.5-pro | [ai.google.dev](https://ai.google.dev) |
| 智谱 AI | glm-4 | [open.bigmodel.cn](https://open.bigmodel.cn) |
| 通义千问 | qwen-turbo | [dashscope.aliyun.com](https://dashscope.aliyun.com) |
| DeepSeek | deepseek-chat | [platform.deepseek.com](https://platform.deepseek.com) |

## 🎨 设计理念

采用**瑞典现代主义**设计风格：

- **极简**: 去除不必要的装饰
- **功能性**: 每个元素都有明确目的
- **平静**: 柔和的配色和大量留白
- **自然**: 温暖的米色和棕色调

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- 塔罗牌图片来源：[1920 Rider-Waite Tarot (Public Domain)](https://www.kaggle.com/datasets/lsind18/1920-raider-waite-tarot)
- AI 技术支持：Claude Sonnet 4.5

---

**注意**: 塔罗占卜仅供娱乐参考，请勿过度迷信。AI 解读基于塔罗牌传统牌义，结合大语言模型生成，不代表任何预言或确定性结果。
