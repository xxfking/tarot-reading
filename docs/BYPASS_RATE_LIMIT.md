# 如何绕开/管理抽卡次数限制

## 📌 当前限流机制

- **类型：** 客户端localStorage限流
- **每日限制：** 10次
- **冷却时间：** 30秒
- **存储位置：** 浏览器localStorage

⚠️ **注意：** 这是客户端实现，用户可以轻松绕过。如需真正的限流，请使用Vercel KV服务端方案。

---

## 🔧 绕开限制的方法

### 方法1：环境变量（推荐用于开发/演示）⭐

**本地开发：**

创建 `.env.local` 文件：
```env
NEXT_PUBLIC_DISABLE_RATE_LIMIT=true
```

重启开发服务器：
```bash
npm run dev
```

**Vercel部署：**

在Vercel项目设置中添加环境变量：
```
Key: NEXT_PUBLIC_DISABLE_RATE_LIMIT
Value: true
```

✅ 效果：显示剩余次数999，不消耗次数

---

### 方法2：浏览器控制台（最快）⭐⭐⭐

**步骤：**

1. 打开网站
2. 按 `F12` 打开开发者工具
3. 切换到 `Console` 标签
4. 运行以下命令：

**完全清除限流记录：**
```javascript
localStorage.removeItem('tarot_rate_limit');
location.reload();
```

**使用开发者工具（仅本地开发）：**
```javascript
// 查看当前状态
window.tarotDevTools.getRateLimitRecord()

// 重置限流
window.tarotDevTools.resetRateLimit()

// 设置剩余次数为9次（即已使用1次）
window.tarotDevTools.setRateLimitCount(1)
```

---

### 方法3：无痕模式/清除缓存

**Chrome无痕窗口：**
- `Ctrl + Shift + N` (Windows)
- `Cmd + Shift + N` (Mac)

**清除浏览器数据：**
- Chrome: 设置 → 隐私和安全 → 清除浏览数据 → localStorage

**更换浏览器：**
- 换一个浏览器使用（Chrome → Firefox → Edge）

---

### 方法4：修改localStorage值

**手动编辑：**

1. `F12` → `Application` → `Local Storage`
2. 找到 `tarot_rate_limit` 键
3. 编辑JSON值：
```json
{
  "count": 0,           // 改为0重置次数
  "lastReadingTime": 0, // 改为0跳过冷却
  "resetTime": 9999999999999  // 改为很大的数防止重置
}
```

---

### 方法5：调整限制参数（永久修改代码）

编辑 `lib/rate-limit.ts`：

```typescript
// 修改每日限制
export const DAILY_LIMIT = 999; // 改为999次

// 修改冷却时间
const COOLDOWN_MS = 0; // 改为0秒（无冷却）
```

---

## 🎯 不同场景的推荐方案

| 场景 | 推荐方法 | 原因 |
|------|----------|------|
| 本地开发测试 | 方法1（环境变量） | 最干净，不影响代码 |
| 快速演示 | 方法2（控制台） | 最快，立即生效 |
| 给客户演示 | 方法1（Vercel环境变量） | 专业，可随时开关 |
| 个人使用 | 方法3（无痕模式） | 简单，无痕迹 |
| 永久取消限制 | 方法5（修改代码） | 彻底，但需要重新部署 |

---

## ⚠️ 生产环境注意事项

### 客户端限流的局限性

当前实现容易被绕过，因为：
- ✗ 用户可以清除localStorage
- ✗ 用户可以使用无痕模式
- ✗ 用户可以更换浏览器
- ✗ 没有IP限制
- ✗ 没有设备指纹识别

### 升级到服务端限流

如果需要真正的限流保护，建议升级到 **Vercel KV（Redis）方案**：

**优点：**
- ✅ 服务端验证，无法绕过
- ✅ 基于IP地址限流
- ✅ 跨设备/浏览器生效
- ✅ 防止恶意刷接口

**成本：**
- Vercel KV免费额度：每月30,000次请求
- 超出后：$0.20 per 100K requests

**实现方案：**
详见项目中的 `DEPLOYMENT_CN.md` 文档 → "服务端限流升级"部分

---

## 🔍 检查当前限流状态

**查看剩余次数：**
```javascript
// 控制台运行
JSON.parse(localStorage.getItem('tarot_rate_limit'))
```

**输出示例：**
```json
{
  "count": 3,              // 已使用3次
  "lastReadingTime": 1705392000000,
  "resetTime": 1705420800000  // 重置时间戳
}
```

---

## 📝 总结

- **开发/测试：** 使用环境变量 `NEXT_PUBLIC_DISABLE_RATE_LIMIT=true`
- **演示：** 浏览器控制台清除localStorage
- **生产环境：** 考虑升级到Vercel KV服务端限流

**最快方法：** `F12` → Console → 输入 `localStorage.removeItem('tarot_rate_limit'); location.reload()`

---

**最后更新：** 2026-01-16
