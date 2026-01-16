# Vercel 部署指南（中国用户推荐配置）

## 🇨🇳 推荐使用国内 LLM 服务

由于网络限制，推荐使用以下国内可访问的 LLM 服务：

---

## 方案一：DeepSeek（推荐 ⭐⭐⭐⭐⭐）

### 优点
- ✅ **价格最低**：1 元可以调用 300 万 tokens
- ✅ **免费额度**：新用户送 500 万 tokens
- ✅ **速度快**：响应速度快
- ✅ **效果好**：deepseek-chat 模型效果接近 GPT-4
- ✅ **国内访问稳定**

### 获取 API Key
1. 访问：https://platform.deepseek.com
2. 注册/登录账号
3. 点击 **API Keys** → **创建新的 API Key**
4. 复制 API Key（格式：`sk-...`）

### Vercel 环境变量配置
```bash
PRIMARY_LLM_PROVIDER = deepseek
FALLBACK_LLM_PROVIDER = zhipu

DEEPSEEK_API_KEY = sk-your-deepseek-key-here
DEEPSEEK_MODEL = deepseek-chat
DEEPSEEK_BASE_URL = https://api.deepseek.com
```

---

## 方案二：智谱 AI（GLM-4）⭐⭐⭐⭐

### 优点
- ✅ **免费额度**：新用户送 1000 万 tokens
- ✅ **效果优秀**：GLM-4 模型中文理解好
- ✅ **国内稳定**
- ✅ **价格合理**

### 获取 API Key
1. 访问：https://open.bigmodel.cn
2. 注册/登录账号
3. 进入 **API Keys** 页面
4. 点击 **创建新的 API Key**
5. 复制 API Key

### Vercel 环境变量配置
```bash
PRIMARY_LLM_PROVIDER = zhipu
FALLBACK_LLM_PROVIDER = deepseek

ZHIPU_API_KEY = your-zhipu-key-here
ZHIPU_MODEL = glm-4
ZHIPU_BASE_URL = https://open.bigmodel.cn/api/paas/v4
```

---

## 方案三：通义千问（Qwen）⭐⭐⭐⭐

### 优点
- ✅ **阿里云出品**：稳定可靠
- ✅ **免费额度**：新用户送 100 万 tokens
- ✅ **中文优化**
- ✅ **国内访问快**

### 获取 API Key
1. 访问：https://dashscope.console.aliyun.com
2. 登录阿里云账号（可用淘宝账号）
3. 开通 DashScope 服务
4. 进入 **API-KEY 管理**
5. 创建并复制 API Key

### Vercel 环境变量配置
```bash
PRIMARY_LLM_PROVIDER = qwen
FALLBACK_LLM_PROVIDER = zhipu

QWEN_API_KEY = sk-your-qwen-key-here
QWEN_MODEL = qwen-turbo
QWEN_BASE_URL = https://dashscope.aliyuncs.com/api/v1
```

---

## 方案四：混合配置（最稳定）⭐⭐⭐⭐⭐

使用两个不同的服务作为主备，确保高可用：

### 推荐组合
```bash
# 主力：DeepSeek（便宜快速）
PRIMARY_LLM_PROVIDER = deepseek
DEEPSEEK_API_KEY = sk-your-deepseek-key
DEEPSEEK_MODEL = deepseek-chat
DEEPSEEK_BASE_URL = https://api.deepseek.com

# 备用：智谱 GLM-4（免费额度大）
FALLBACK_LLM_PROVIDER = zhipu
ZHIPU_API_KEY = your-zhipu-key
ZHIPU_MODEL = glm-4
ZHIPU_BASE_URL = https://open.bigmodel.cn/api/paas/v4
```

---

## 🚀 完整部署步骤

### 1. 准备 API Key

**选择方案并获取 API Key**（推荐方案一或方案四）：

#### DeepSeek（推荐）
1. 打开 https://platform.deepseek.com
2. 注册账号（手机号即可）
3. 进入 API Keys 页面
4. 创建并复制 API Key

#### 智谱 AI（备用）
1. 打开 https://open.bigmodel.cn
2. 注册账号
3. 创建并复制 API Key

### 2. 部署到 Vercel

#### 步骤 1：访问 Vercel
打开 https://vercel.com

#### 步骤 2：登录
- 使用 GitHub 账号登录（推荐）

#### 步骤 3：导入项目
1. 点击 **Add New** → **Project**
2. 授权访问 GitHub
3. 找到 `xxfking/tarot-reading` 仓库
4. 点击 **Import**

#### 步骤 4：配置项目
- **Project Name**: `tarot-reading`（或自定义）
- **Framework**: Next.js（自动检测）
- **Root Directory**: `./`（默认）

#### 步骤 5：添加环境变量

**点击 Environment Variables 展开**，根据你选择的方案添加：

##### 方案一（DeepSeek 单独使用）：
```
PRIMARY_LLM_PROVIDER = deepseek
FALLBACK_LLM_PROVIDER = deepseek
DEEPSEEK_API_KEY = 你的DeepSeek_API_Key
DEEPSEEK_MODEL = deepseek-chat
DEEPSEEK_BASE_URL = https://api.deepseek.com
```

##### 方案四（DeepSeek + 智谱，推荐）：
```
PRIMARY_LLM_PROVIDER = deepseek
DEEPSEEK_API_KEY = 你的DeepSeek_API_Key
DEEPSEEK_MODEL = deepseek-chat
DEEPSEEK_BASE_URL = https://api.deepseek.com

FALLBACK_LLM_PROVIDER = zhipu
ZHIPU_API_KEY = 你的智谱_API_Key
ZHIPU_MODEL = glm-4
ZHIPU_BASE_URL = https://open.bigmodel.cn/api/paas/v4
```

**添加方式**：
1. Name 输入变量名（如 `PRIMARY_LLM_PROVIDER`）
2. Value 输入对应的值（如 `deepseek`）
3. 点击 **Add** 按钮
4. 重复添加所有变量

#### 步骤 6：部署
1. 点击 **Deploy** 按钮
2. 等待 1-3 分钟
3. 看到 🎉 表示成功

#### 步骤 7：访问网站
- 点击 **Visit** 或显示的域名
- 开始使用你的塔罗占卜网站！

---

## 💰 成本对比

| 服务 | 免费额度 | 价格（输入/输出） | 适合场景 |
|------|---------|-----------------|----------|
| **DeepSeek** | 500万 tokens | ¥1/百万 tokens | 长期使用，成本敏感 |
| **智谱 GLM-4** | 1000万 tokens | ¥5/百万 tokens | 中文场景，免费期长 |
| **通义千问** | 100万 tokens | ¥2/百万 tokens | 阿里云用户 |

💡 **建议**：
- 个人使用：使用免费额度完全够用
- 每次占卜约消耗 2000-5000 tokens
- DeepSeek 500万免费额度 ≈ 1000-2500 次占卜
- 智谱 1000万免费额度 ≈ 2000-5000 次占卜

---

## ✅ 部署检查清单

### 部署前
- [ ] 获取至少 1 个 LLM API Key
- [ ] 测试 API Key 是否有效（可在官网控制台测试）

### 部署中
- [ ] 正确添加所有环境变量
- [ ] 变量名拼写无误（区分大小写）
- [ ] API Key 复制完整（没有多余空格）

### 部署后
- [ ] 访问网站正常加载
- [ ] 能选择牌阵
- [ ] 能选择塔罗牌
- [ ] AI 解读功能正常（**最重要**）
- [ ] 历史记录功能正常

---

## 🔧 故障排查

### 问题 1：AI 解读失败，显示 503 错误

**可能原因**：
- 环境变量未配置
- API Key 无效
- BASE_URL 错误

**解决方法**：
1. 进入 Vercel Dashboard
2. 点击你的项目
3. Settings → Environment Variables
4. 检查所有变量是否正确
5. 修改后点击右上角 **Redeploy**

### 问题 2：显示"主模型和备用模型均调用失败"

**解决方法**：
1. 确认 API Key 有余额/额度
2. 登录 LLM 官网控制台查看 API 使用状态
3. 尝试创建新的 API Key
4. 检查 `BASE_URL` 是否正确（复制上面的示例）

### 问题 3：Vercel 构建失败

**解决方法**：
1. 查看 Build Logs
2. 确认代码已推送到 GitHub
3. 尝试 Redeploy

---

## 🔄 更新部署

修改代码后重新部署：

```bash
cd tarot-reading
git add .
git commit -m "update: 你的修改说明"
git push origin master
```

Vercel 会自动检测并重新部署！

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Vercel Runtime Logs
2. 检查环境变量配置
3. 确认 API Key 有效性
4. 尝试重新部署

---

**立即开始部署吧！** 🚀

推荐配置：**DeepSeek（主）+ 智谱（备）**
- 成本最低
- 免费额度充足
- 国内访问稳定
- 效果优秀
