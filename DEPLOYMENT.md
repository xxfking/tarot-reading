# 部署到 Vercel 指南

## 方法一：通过 Vercel Dashboard（推荐）

### 1. 访问 Vercel
打开浏览器访问：https://vercel.com

### 2. 登录或注册
- 如果已有账号，点击 **Log In**
- 如果没有账号，点击 **Sign Up**（推荐使用 GitHub 账号登录）

### 3. 导入项目
1. 点击 **Add New** → **Project**
2. 选择 **Import Git Repository**
3. 如果是第一次，需要授权 Vercel 访问你的 GitHub
4. 找到并选择 `xxfking/tarot-reading` 仓库
5. 点击 **Import**

### 4. 配置项目
1. **Project Name**: 保持默认或自定义（例如：`tarot-reading`）
2. **Framework Preset**: 自动检测为 **Next.js**
3. **Root Directory**: 保持默认 `./`
4. **Build and Output Settings**: 保持默认

### 5. 配置环境变量（重要！）
点击 **Environment Variables** 展开，添加以下变量：

#### 必须配置（至少配置一个 LLM）：
```
PRIMARY_LLM_PROVIDER=openai
FALLBACK_LLM_PROVIDER=gemini

# OpenAI（如果使用）
OPENAI_API_KEY=sk-your-openai-key-here
OPENAI_MODEL=gpt-4-turbo-preview
OPENAI_BASE_URL=https://api.openai.com/v1

# Anthropic Claude（如果使用）
ANTHROPIC_API_KEY=sk-ant-your-claude-key-here
ANTHROPIC_MODEL=claude-3-5-sonnet-20241022
ANTHROPIC_BASE_URL=https://api.anthropic.com

# Google Gemini（如果使用）
GEMINI_API_KEY=your-gemini-key-here
GEMINI_MODEL=gemini-1.5-pro
GEMINI_BASE_URL=https://generativelanguage.googleapis.com

# 智谱 AI（如果使用）
ZHIPU_API_KEY=your-zhipu-key-here
ZHIPU_MODEL=glm-4
ZHIPU_BASE_URL=https://open.bigmodel.cn/api/paas/v4

# 通义千问（如果使用）
QWEN_API_KEY=your-qwen-key-here
QWEN_MODEL=qwen-turbo
QWEN_BASE_URL=https://dashscope.aliyuncs.com/api/v1

# DeepSeek（如果使用）
DEEPSEEK_API_KEY=your-deepseek-key-here
DEEPSEEK_MODEL=deepseek-chat
DEEPSEEK_BASE_URL=https://api.deepseek.com/v1
```

#### 可选配置：
```
# 限流设置
DAILY_READING_LIMIT=3
COOLDOWN_SECONDS=30

# 应用设置
NEXT_PUBLIC_APP_NAME=塔罗占卜
NEXT_PUBLIC_APP_DESCRIPTION=AI 智能塔罗占卜解读
```

**注意**：
- 每个环境变量都需要点击 **Add** 按钮添加
- 确保至少配置一个主力模型的 API Key
- API Key 可以从各平台官网获取（见下方链接）

### 6. 部署
1. 点击 **Deploy** 按钮
2. 等待构建完成（大约 1-3 分钟）
3. 部署成功后会显示 🎉 Congratulations!

### 7. 访问网站
- Vercel 会自动分配一个域名：`https://your-project-name.vercel.app`
- 点击 **Visit** 即可访问你的塔罗占卜网站

---

## 方法二：使用 Vercel CLI

### 1. 安装 Vercel CLI
```bash
npm install -g vercel
```

### 2. 登录
```bash
vercel login
```

### 3. 部署
在项目根目录运行：
```bash
cd tarot-reading
vercel
```

按照提示操作：
- Set up and deploy? **Y**
- Which scope? 选择你的账号
- Link to existing project? **N**
- What's your project's name? `tarot-reading`
- In which directory is your code located? `./`
- Auto-detected Project Settings (Next.js)? **Y**

### 4. 配置环境变量
```bash
vercel env add OPENAI_API_KEY
vercel env add PRIMARY_LLM_PROVIDER
# ... 添加其他环境变量
```

### 5. 重新部署
```bash
vercel --prod
```

---

## 获取 API Key

### OpenAI
- 网址: https://platform.openai.com/api-keys
- 价格: 按使用量计费
- 推荐模型: `gpt-4-turbo-preview` 或 `gpt-3.5-turbo`

### Anthropic Claude
- 网址: https://console.anthropic.com/settings/keys
- 价格: 按使用量计费
- 推荐模型: `claude-3-5-sonnet-20241022`

### Google Gemini
- 网址: https://aistudio.google.com/app/apikey
- 价格: 有免费额度
- 推荐模型: `gemini-1.5-pro`

### 智谱 AI
- 网址: https://open.bigmodel.cn/usercenter/apikeys
- 价格: 有免费额度
- 推荐模型: `glm-4`

### 通义千问
- 网址: https://dashscope.console.aliyun.com/apiKey
- 价格: 有免费额度
- 推荐模型: `qwen-turbo`

### DeepSeek
- 网址: https://platform.deepseek.com/api_keys
- 价格: 价格较低
- 推荐模型: `deepseek-chat`

---

## 部署后配置

### 1. 自定义域名（可选）
1. 在 Vercel Dashboard → Settings → Domains
2. 添加你的域名
3. 按照提示配置 DNS 记录

### 2. 环境变量管理
- 在 Vercel Dashboard → Settings → Environment Variables
- 可以随时添加、修改或删除环境变量
- 修改后需要重新部署（自动触发）

### 3. 监控和日志
- Vercel Dashboard → Deployments 查看部署历史
- 点击部署记录查看构建日志
- Runtime Logs 查看运行时日志

---

## 故障排查

### 1. 构建失败
- 检查是否有语法错误
- 查看 Build Logs
- 确保 `package.json` 配置正确

### 2. API 调用失败
- 检查环境变量是否正确配置
- 确认 API Key 有效
- 查看 Runtime Logs 确认错误信息

### 3. 404 错误
- 确认路由配置正确
- 检查 `vercel.json` 配置

---

## 成本控制建议

1. **使用免费额度模型**：Gemini、智谱、通义千问都有免费额度
2. **设置限流**：每日 3 次限制已内置
3. **监控用量**：定期检查 API 使用量
4. **设置预算**：在各 API 平台设置月度预算上限

---

## 更新部署

每次 push 到 GitHub master 分支，Vercel 会自动重新部署：

```bash
git add .
git commit -m "your changes"
git push origin master
```

Vercel 会自动检测并部署最新代码。
