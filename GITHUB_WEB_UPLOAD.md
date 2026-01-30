# 📤 通过 GitHub 网页上传文件指南

命令行 push 失败？没关系！通过 GitHub 网页直接上传文件也是一种有效的方法。

---

## 📋 需要上传的文件清单

### ✅ 必须上传的核心文件（14 个文件夹/文件）

#### 1. 配置文件（7 个）

| 文件名 | 说明 | 大小 |
|--------|------|------|
| `package.json` | 项目依赖清单 | ~2 KB |
| `pnpm-lock.yaml` | 锁定依赖版本 | ~100 KB |
| `next.config.ts` | Next.js 配置 | ~1 KB |
| `tsconfig.json` | TypeScript 配置 | ~1 KB |
| `tailwind.config.ts` | Tailwind CSS 配置 | ~2 KB |
| `.babelrc` | Babel 配置 | ~1 KB |
| `next-env.d.ts` | Next.js 类型定义 | ~1 KB |

#### 2. 根目录文件（5 个）

| 文件/文件夹 | 说明 | 大小 |
|------------|------|------|
| `.coze` | Vercel 配置文件夹 | <1 KB |
| `.cozeproj` | 项目脚本文件夹 | <1 KB |
| `.gitignore` | Git 忽略规则 | ~1 KB |
| `README.md` | 项目说明文档 | ~4 KB |

#### 3. 源代码文件夹（2 个）

| 文件夹 | 说明 | 大小 |
|--------|------|------|
| `src/` | 源代码（包含 app、components 等） | ~50 KB |
| `public/` | 静态资源（图片、图标等） | ~20 KB |

---

### ❌ 不需要上传的文件

#### 千万不要上传！

| 文件/文件夹 | 原因 |
|------------|------|
| `node_modules/` | 依赖包（几百 MB），Vercel 会自动安装 |
| `.next/` | 构建产物，Vercel 会自动生成 |
| `.git/` | Git 仓库信息，上传后创建 |
| `Joe-checkin-dist.tar.gz` | 压缩文件，不需要 |
| `*.log` | 日志文件，不需要 |

---

## 🚀 通过 GitHub 网页上传的详细步骤

### 第 1 步：创建 GitHub 仓库

1. 访问 https://github.com
2. 登录账号
3. 点击右上角的 "+" → "New repository"
4. 填写信息：
   - **Repository name**：`Joe-checkin`
   - **Description**：杨子祐寒假打卡攒积分应用
   - **Public/Private**：选择 Public（公开）
   - **Initialize this repository**：勾选 "Add a README file"
5. 点击 "Create repository"

### 第 2 步：准备文件（在本地）

在您的电脑上，找到解压后的 `Joe-checkin` 文件夹，确认包含以下文件：

```
Joe-checkin/
├── .coze                          ✅ 上传
├── .cozeproj                      ✅ 上传
├── .gitignore                     ✅ 上传
├── .babelrc                       ✅ 上传
├── next.config.ts                 ✅ 上传
├── next-env.d.ts                  ✅ 上传
├── package.json                   ✅ 上传
├── pnpm-lock.yaml                 ✅ 上传
├── tailwind.config.ts             ✅ 上传
├── tsconfig.json                  ✅ 上传
├── README.md                      ✅ 上传
├── src/                           ✅ 上传整个文件夹
├── public/                        ✅ 上传整个文件夹
├── node_modules/                  ❌ 不要上传
└── .next/                         ❌ 不要上传
```

### 第 3 步：上传根目录文件

#### 方式 A：单个上传（适合文件少的情况）

1. 在 GitHub 仓库页面，点击 "Add file" → "Upload files"
2. 拖拽或选择以下文件（逐个上传）：
   - `.coze`
   - `.cozeproj`
   - `.gitignore`
   - `.babelrc`
   - `next.config.ts`
   - `next-env.d.ts`
   - `package.json`
   - `pnpm-lock.yaml`
   - `tailwind.config.ts`
   - `tsconfig.json`

3. 每上传一个文件，底部会显示
4. 全部上传后，在 "Commit changes" 区域填写：
   - **Add files via upload**
5. 点击 "Commit changes"

#### 方式 B：批量上传（推荐）

1. 在本地文件管理器中，选中所有根目录文件（不包括文件夹）
2. 拖拽到 GitHub 的上传区域
3. 等待上传完成
4. 在 "Commit changes" 填写：`Add core files`
5. 点击 "Commit changes"

### 第 4 步：上传 src 文件夹

1. 在 GitHub 仓库页面，点击 "Add file" → "Upload files"
2. 先点击创建文件夹按钮（文件夹图标）
3. 输入文件夹名：`src`
4. 按回车创建
5. 进入 src 文件夹
6. 点击 "Upload files"
7. 将本地 `src` 文件夹中的所有文件和子文件夹拖拽上传：
   - `app/` 文件夹（包含所有 .tsx、.ts、.css 文件）
   - `components/` 文件夹
   - `lib/` 文件夹
   - `hooks/` 文件夹

**提示**：可以直接拖拽整个 `src` 文件夹到上传区域，GitHub 会自动保留文件夹结构。

8. 提交信息：`Add src folder`
9. 点击 "Commit changes"

### 第 5 步：上传 public 文件夹

1. 返回仓库根目录（点击仓库名称）
2. 点击 "Add file" → "Upload files"
3. 拖拽整个 `public` 文件夹到上传区域
4. 提交信息：`Add public folder`
5. 点击 "Commit changes"

### 第 6 步：上传其他文档（可选）

如果您想上传 README.md 等文档：

1. 点击 "Add file" → "Upload files"
2. 上传 `README.md`
3. 提交信息：`Add documentation`
4. 点击 "Commit changes"

---

## ⚠️ 重要注意事项

### 1. 文件大小限制

- 单个文件不能超过 25 MB
- 如果文件超过限制，需要使用命令行上传

### 2. 文件夹结构

**正确**：保持原有的文件夹结构
```
src/
  app/
    layout.tsx
    page.tsx
  components/
    ui/
      button.tsx
```

**错误**：把所有文件都放在根目录
```
layout.tsx
page.tsx
button.tsx  ❌ 错误！
```

### 3. 文件扩展名

确保文件扩展名正确：
- `.ts` 文件必须有 `.ts` 扩展名
- `.tsx` 文件必须有 `.tsx` 扩展名
- `.json` 文件必须有 `.json` 扩展名

### 4. 不要上传 node_modules

`node_modules` 文件夹非常大（几百 MB），而且 Vercel 会自动根据 `package.json` 和 `pnpm-lock.yaml` 安装依赖。

如果上传了 node_modules：
- 上传会非常慢
- 占用大量存储空间
- 可能导致上传失败

### 5. 提交信息

每次上传时，填写清晰的提交信息：
- 上传核心文件：`Add core files`
- 上传 src 文件夹：`Add src folder`
- 上传 public 文件夹：`Add public folder`
- 上传文档：`Add documentation`

这样方便后续查看历史记录。

---

## 🎯 快速上传流程（最简单）

### 方式：分三批上传

#### 第 1 批：根目录文件

1. 打开 GitHub 仓库
2. "Add file" → "Upload files"
3. 拖拽选中所有根目录文件（不包括文件夹）
4. 提交：`Add core files`

#### 第 2 批：src 文件夹

1. "Add file" → "Upload files"
2. 拖拽整个 `src` 文件夹
3. 提交：`Add src folder`

#### 第 3 批：public 文件夹

1. "Add file" → "Upload files"
2. 拖拽整个 `public` 文件夹
3. 提交：`Add public folder`

**完成！总共 3 次提交。**

---

## 📊 上传文件大小估算

| 类别 | 文件/文件夹 | 估算大小 |
|------|-----------|---------|
| 根目录文件 | 10 个文件 | ~110 KB |
| src 文件夹 | 包含子文件夹 | ~50 KB |
| public 文件夹 | 图片等资源 | ~20 KB |
| **总计** | | **~180 KB** |

**上传时间**：约 1-3 分钟（取决于网速）

---

## ✅ 上传完成后验证

### 检查清单

上传完成后，在 GitHub 仓库页面检查：

- [ ] 看到根目录的 10 个配置文件
- [ ] 看到 `src` 文件夹
- [ ] 看到 `public` 文件夹
- [ ] 点击 `src` 文件夹，能看到 `app`、`components` 等
- [ ] 点击 `src/app/page.tsx`，能看到页面代码
- [ ] 看到 `package.json` 文件

### 验证代码完整性

1. 点击 `src/app/page.tsx`
2. 检查代码是否完整
3. 确认有 `杨子祐寒假打卡攒积分` 相关代码

---

## 🚀 上传成功后：部署到 Vercel

### 第 1 步：登录 Vercel

1. 访问 https://vercel.com
2. 点击 "Login"
3. 使用账号登录

### 第 2 步：导入 GitHub 仓库

1. 登录后，点击 "Add New" → "Project"
2. 找到 `Joe-checkin` 仓库
3. 点击 "Import"

### 第 3 步：配置项目

保持默认配置，检查：
```
Framework Preset: Next.js
Build Command: pnpm build
Output Directory: .next
```

**注意**：使用 `pnpm build` 而不是 `npm run build`

### 第 4 步：部署

点击 "Deploy" 按钮，等待 1-3 分钟。

### 第 5 步：获取链接

部署成功后，复制显示的链接！

---

## ⚠️ 常见问题

### Q1：上传失败，提示文件太大

**原因**：单个文件超过 25 MB

**解决方法**：
- 检查是否误上传了 `node_modules`
- 使用命令行上传：`git push`

### Q2：文件夹上传后结构不对

**原因**：没有拖拽整个文件夹，而是逐个上传

**解决方法**：
1. 删除错误的文件
2. 重新拖拽整个文件夹上传

### Q3：上传很慢

**原因**：网络问题或文件太多

**解决方法**：
- 检查网络连接
- 分批上传
- 或者使用命令行上传

### Q4：上传后 Vercel 构建失败

**可能原因**：
- 缺少 `package.json`
- 缺少 `pnpm-lock.yaml`
- 文件结构不正确

**解决方法**：
1. 检查是否上传了所有必需文件
2. 查看 Vercel 构建日志
3. 重新上传缺失的文件

### Q5：如何删除已上传的文件？

**方法**：
1. 在 GitHub 仓库页面找到文件
2. 点击文件名
3. 点击右上角的 "..." → "Delete file"
4. 填写提交信息
5. 点击 "Commit changes"

### Q6：如何修改已上传的文件？

**方法**：
1. 点击文件名
2. 点击右上角的 "..." → "Edit file"
3. 修改内容
4. 填写提交信息
5. 点击 "Commit changes"

---

## 💡 小贴士

1. **分批上传**：不要一次上传太多文件，分批更稳定
2. **保持结构**：拖拽整个文件夹，保持原有的文件夹结构
3. **检查上传**：每次上传后检查文件是否正确
4. **使用 README**：可以上传 README.md 提供项目说明
5. **不要着急**：慢慢上传，确保每个文件都正确

---

## 📋 完整上传清单（打印版）

### ✅ 根目录文件（10 个）

```
[ ] .coze
[ ] .cozeproj
[ ] .gitignore
[ ] .babelrc
[ ] next.config.ts
[ ] next-env.d.ts
[ ] package.json
[ ] pnpm-lock.yaml
[ ] tailwind.config.ts
[ ] tsconfig.json
```

### ✅ 文件夹（2 个）

```
[ ] src/       (整个文件夹)
[ ] public/    (整个文件夹)
```

### ❌ 不要上传

```
[ ] node_modules/
[ ] .next/
[ ] .git/
[ ] *.tar.gz
```

---

## 🎉 总结

### 通过网页上传的步骤

```
1. 创建 GitHub 仓库
   ↓
2. 分三批上传文件
   ├─ 第 1 批：根目录文件（10 个）
   ├─ 第 2 批：src 文件夹
   └─ 第 3 批：public 文件夹
   ↓
3. 验证文件完整性
   ↓
4. 在 Vercel 导入仓库
   ↓
5. 部署成功！
```

### 关键点

✅ 必须上传：14 个文件/文件夹
❌ 不要上传：node_modules、.next 等
⏰ 总耗时：约 5-10 分钟
📦 总大小：约 180 KB

---

## 📚 相关文档

- **GITHUB_WEB_UPLOAD.md** - GitHub 网页上传指南（本文件）
- [GITHUB_DEPLOY.md](GITHUB_DEPLOY.md) - GitHub 部署完整教程
- [WINDOWS_CMD.md](WINDOWS_CMD.md) - Windows CMD 使用指南
- [QUICK_DEPLOY.md](QUICK_DEPLOY.md) - 快速部署指南

---

按照这个指南，通过 GitHub 网页上传文件，就可以完成部署了！🚀
