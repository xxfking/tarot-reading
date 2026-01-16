# 国际化 (i18n) 实施方案

## 📋 项目概况

**目标：** 将网站默认语言设为英语，支持英文/中文手动切换

**技术方案：** next-intl (Next.js 14 App Router 最佳i18n方案)

**支持语言：**
- 🇺🇸 English (en) - 默认语言
- 🇨🇳 中文 (zh)

---

## ✅ 已完成的工作

### 1. 依赖安装
- [x] 安装 `next-intl` (v3.x)

### 2. 基础配置文件
- [x] 创建 `i18n.ts` - i18n核心配置
- [x] 创建 `middleware.ts` - 路由中间件，语言检测和重定向
- [x] 配置默认语言为英语 (`defaultLocale: 'en'`)

### 3. 翻译文件
- [x] 创建 `messages/en.json` - 英文翻译（完整）
- [x] 创建 `messages/zh.json` - 中文翻译（完整）

**已翻译的内容：**
- 网站标题、描述
- 主页UI文本
- 5种牌阵名称和描述
- 选牌界面文本
- 问题输入页面
- 卡牌翻转页面
- 解读结果页面
- 历史记录页面
- 错误提示信息
- 通用UI文本

---

## 📝 待完成的工作

### 方案A：完整重构（推荐）⭐

**优点：**
- URL结构清晰：`/en/` 和 `/zh/`
- SEO友好，每种语言独立优化
- 符合国际化最佳实践
- 用户体验好，可直接分享特定语言链接

**缺点：**
- 需要重构整个app目录结构
- 工作量较大（预计20-30分钟）

**具体步骤：**

1. **重构 app 目录结构**
   ```
   app/
   ├── [locale]/
   │   ├── page.tsx           # 主页（国际化）
   │   ├── layout.tsx         # 语言布局
   │   └── ...                # 其他页面
   ├── layout.tsx             # 根布局
   ├── api/                   # API路由（不需要语言前缀）
   └── ...
   ```

2. **更新 layout.tsx**
   - 根布局添加 `NextIntlClientProvider`
   - 语言布局使用 `useTranslations` hook

3. **重构所有页面组件**
   - `app/page.tsx` → `app/[locale]/page.tsx`
   - 替换所有硬编码文本为 `t('key')`
   - 更新组件引用

4. **更新 SEO 配置**
   - 为每种语言生成独立的 metadata
   - 添加 `hreflang` 标签
   - 更新 sitemap.xml 包含所有语言版本

5. **创建语言切换器组件**
   ```tsx
   // components/LanguageSwitcher.tsx
   - 显示当前语言
   - 切换 EN ⇄ ZH
   - 保持当前页面路径
   ```

6. **更新塔罗牌数据**
   - `lib/tarot-data.ts` - 添加英文卡牌名称和描述
   - 或保持英文原版名称（The Fool, The Magician...）

7. **AI解读多语言支持**
   - 根据用户语言调整prompt
   - 英文用户返回英文解读
   - 中文用户返回中文解读

---

### 方案B：渐进式迁移（稳妥）

**优点：**
- 快速上线（10分钟）
- 风险低，不影响现有功能
- 可以逐步完善

**缺点：**
- URL不包含语言前缀
- SEO需要后续优化
- 用户刷新页面语言可能丢失

**具体步骤：**

1. **简单集成 next-intl**
   - 不改变路由结构
   - 使用客户端语言切换
   - localStorage保存语言偏好

2. **添加语言切换器**
   - 右上角显示语言切换按钮
   - EN ⇄ ZH 切换

3. **逐步替换文本**
   - 先替换主要页面的文本
   - 次要页面可保持原样

4. **后续优化**
   - 待稳定后再迁移到方案A

---

## 🔧 技术细节

### next-intl 配置要点

**i18n.ts**
```typescript
export const locales = ['en', 'zh'] as const;
export const defaultLocale: Locale = 'en';
```

**middleware.ts**
```typescript
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always', // URL始终包含语言前缀
});
```

**使用翻译**
```tsx
import { useTranslations } from 'next-intl';

function Component() {
  const t = useTranslations('home');
  return <h1>{t('title')}</h1>;
}
```

---

## 📊 翻译完成度

| 模块 | 英文 | 中文 | 状态 |
|------|------|------|------|
| 网站基础信息 | ✅ | ✅ | 完成 |
| 主页 | ✅ | ✅ | 完成 |
| 牌阵选择 | ✅ | ✅ | 完成 |
| 选牌界面 | ✅ | ✅ | 完成 |
| 问题输入 | ✅ | ✅ | 完成 |
| 卡牌翻转 | ✅ | ✅ | 完成 |
| 解读结果 | ✅ | ✅ | 完成 |
| 历史记录 | ✅ | ✅ | 完成 |
| 错误提示 | ✅ | ✅ | 完成 |
| 塔罗牌数据 | ❌ | ✅ | 需要添加英文 |

---

## 🎯 推荐执行顺序

如果选择**方案A（完整重构）**：

1. ✅ 备份当前代码（创建新分支）
2. ⏳ 重构 app 目录结构（30分钟）
3. ⏳ 更新所有组件使用翻译（20分钟）
4. ⏳ 添加语言切换器（10分钟）
5. ⏳ 测试所有页面和功能（15分钟）
6. ⏳ 更新SEO配置（10分钟）
7. ⏳ 添加英文塔罗牌数据（可选，30分钟）
8. ⏳ AI解读多语言支持（20分钟）
9. ⏳ 部署和验证（10分钟）

**预计总时长：** 2-3小时

---

## 📚 参考资料

- [next-intl 官方文档](https://next-intl-docs.vercel.app/)
- [Next.js 国际化指南](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [i18n 最佳实践](https://www.i18next.com/principles/best-practices)

---

## 💡 注意事项

1. **测试覆盖**
   - 确保两种语言的所有页面都能正常工作
   - 测试语言切换不会丢失用户状态

2. **SEO考虑**
   - 每种语言需要独立的metadata
   - 添加 hreflang 标签告诉搜索引擎语言版本关系
   - sitemap.xml 包含所有语言URL

3. **用户体验**
   - 自动检测浏览器语言
   - 记住用户语言偏好
   - 语言切换保持在当前页面

4. **AI解读**
   - 根据界面语言调整解读语言
   - prompt需要针对不同语言优化

---

## 📅 执行时机建议

**建议在以下情况启动i18n任务：**
- ✅ 所有核心功能已稳定
- ✅ 准备好2-3小时专注时间
- ✅ 已完成充分测试
- ✅ 有时间处理可能出现的问题

**不建议现在执行的原因：**
- 项目还在快速迭代中
- 可能会影响现有功能
- 需要大量测试时间

---

## 🚀 快速启动命令（已准备好）

当准备开始时，运行：

```bash
# 方案已就绪，next-intl已安装
# 配置文件已创建：i18n.ts, middleware.ts
# 翻译文件已完成：messages/en.json, messages/zh.json

# 只需执行路由重构即可开始
```

---

**最后更新：** 2026-01-16
**状态：** 准备就绪，等待执行
