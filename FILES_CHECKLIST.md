# 📋 Joe-checkin 文件上传清单

## 🎯 上传策略

### 核心文件（必须正确上传）- 11 个
这些文件需要仔细检查，特别是 `package.json`

### UI 组件文件 - 约 50 个
这些文件可以直接从本地项目复制，不需要逐个检查

### 静态资源 - 5 个
SVG 图标文件

---

## 📂 必须上传的核心文件（11 个）

### 1. package.json ⚠️ 最重要

**位置**：根目录
**格式**：JSON
**必须检查**：name 字段必须为 `Joe-checkin`

**完整内容**：

```json
{
  "name": "Joe-checkin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "eslint",
    "start": "next start",
    "ts-check": "tsc -p tsconfig.json"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.958.0",
    "@aws-sdk/lib-storage": "^3.958.0",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "coze-coding-dev-sdk": "^0.7.3",
    "date-fns": "^4.1.0",
    "drizzle-kit": "^0.31.8",
    "drizzle-orm": "^0.45.1",
    "drizzle-zod": "^0.8.3",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.468.0",
    "next": "16.1.1",
    "next-themes": "^0.4.6",
    "pg": "^8.16.3",
    "react": "19.2.3",
    "react-day-picker": "^9.13.0",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.70.0",
    "react-resizable-panels": "^4.2.0",
    "recharts": "2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^2.6.0",
    "tw-animate-css": "^1.4.0",
    "vaul": "^1.1.2",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@react-dev-inspector/babel-plugin": "^2.0.1",
    "@react-dev-inspector/middleware": "^2.0.1",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/pg": "^8.16.0",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "only-allow": "^1.2.2",
    "react-dev-inspector": "^2.0.1",
    "shadcn": "latest",
    "tailwindcss": "^4",
    "typescript": "^5"
  },
  "packageManager": "pnpm@9.0.0",
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=9.0.0"
  },
  "pnpm": {
    "overrides": {
      "esbuild": "^0.25.12"
    }
  }
}
```

**验证要点**：
- ✅ 第一个字符是 `{`
- ✅ 最后一个字符是 `}`
- ✅ 没有 ```json 标记
- ✅ name 为 `Joe-checkin`
- ✅ 使用标准 Next.js 命令（next build, next dev, next start）

---

### 2. next.config.ts

**位置**：根目录
**格式**：TypeScript

**完整内容**：

```typescript
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf-coze-web-cdn.coze.cn',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

### 3. tsconfig.json

**位置**：根目录
**格式**：JSON

**完整内容**：

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

---

### 4. components.json

**位置**：根目录
**格式**：JSON

**完整内容**：

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

### 5. .gitignore

**位置**：根目录
**格式**：纯文本

**完整内容**：

```
.next

# Dependencies
node_modules/
.pnp
.pnp.js

# Production build
dist/
build/
out/
.next/
.rsbuild/

# Testing
coverage/
*.lcov
.nyc_output

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Diagnostic reports
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Cache
.cache/
.parcel-cache/
.eslintcache
.stylelintcache
.npm
.yarn/cache/
.yarn/unplugged/
.yarn/build-state.yml
.yarn/install-state.gz

# Editor directories and files
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
*.swp
*.swo
*~

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
Desktop.ini

# Temporary files
*.tmp
*.temp
.tmp/
.temp/

# Optional files
*.tgz
*.gz
*.zip
*.tar

# TypeScript
*.tsbuildinfo

# Misc
.vercel
.turbo

.coze-logs
```

---

### 6. .npmrc

**位置**：根目录
**格式**：纯文本

**完整内容**：

```
loglevel=error
registry=https://registry.npmmirror.com

strictStorePkgContentCheck=false
verifyStoreIntegrity=false

# 网络优化
network-concurrency=16
fetch-retries=3
fetch-timeout=60000

# 严格使用 peer dependencies
strict-peer-dependencies=false

# 自动生成 lockfile
auto-install-peers=true

# lockfile 配置
lockfile=true
prefer-frozen-lockfile=true

# 如果 lockfile 存在但过期，更新而不是失败
resolution-mode=highest
```

---

### 7. postcss.config.mjs

**位置**：根目录
**格式**：JavaScript

**完整内容**：

```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
```

---

### 8. eslint.config.mjs

**位置**：根目录
**格式**：JavaScript

**完整内容**：

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

---

### 9. next-env.d.ts

**位置**：根目录
**格式**：TypeScript

**完整内容**：

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```

---

### 10. pnpm-lock.yaml

**位置**：根目录
**格式**：YAML
**说明**：依赖锁定文件，从本地项目复制即可

---

### 11. .coze

**位置**：根目录
**格式**：TOML

**完整内容**：

```toml
[project]
requires = ["nodejs-24"]

[dev]
build = ["pnpm", "install"]
run = ["pnpm", "run", "dev"]

[deploy]
build = ["pnpm", "run", "build"]
run = ["pnpm", "run", "start"]
```

---

## 📂 源代码文件

### src/app/page.tsx

**位置**：src/app/
**说明**：主页面（打卡界面）

从本地项目复制即可。

---

### src/app/layout.tsx

**位置**：src/app/
**说明**：应用布局

从本地项目复制即可。

---

### src/app/globals.css

**位置**：src/app/
**说明**：全局样式

从本地项目复制即可。

---

### src/app/favicon.ico

**位置**：src/app/
**说明**：网站图标

从本地项目复制即可。

---

### src/app/robots.ts

**位置**：src/app/
**说明**：SEO 配置

从本地项目复制即可。

---

## 🎨 UI 组件文件（约 50 个）

**位置**：src/components/ui/
**说明**：shadcn/ui 组件

**文件列表**：

```
accordion.tsx
alert-dialog.tsx
alert.tsx
aspect-ratio.tsx
avatar.tsx
badge.tsx
breadcrumb.tsx
button-group.tsx
button.tsx
calendar.tsx
card.tsx
carousel.tsx
chart.tsx
checkbox.tsx
collapsible.tsx
command.tsx
context-menu.tsx
dialog.tsx
drawer.tsx
dropdown-menu.tsx
empty.tsx
field.tsx
form.tsx
hover-card.tsx
input-group.tsx
input-otp.tsx
input.tsx
item.tsx
kbd.tsx
label.tsx
menubar.tsx
navigation-menu.tsx
pagination.tsx
popover.tsx
progress.tsx
radio-group.tsx
resizable.tsx
scroll-area.tsx
select.tsx
separator.tsx
sheet.tsx
sidebar.tsx
skeleton.tsx
slider.tsx
sonner.tsx
spinner.tsx
switch.tsx
table.tsx
tabs.tsx
textarea.tsx
toggle-group.tsx
toggle.tsx
```

**说明**：这些组件文件从本地项目直接复制即可，不需要逐个检查。

---

## 🖼️ 静态资源（5 个）

**位置**：public/

**文件列表**：

```
file.svg
globe.svg
next.svg
vercel.svg
window.svg
```

**说明**：SVG 图标文件，从本地项目复制即可。

---

## 📊 文件统计

| 类别 | 数量 | 说明 |
|-----|------|------|
| 核心配置文件 | 11 | 必须检查 |
| 源代码文件 | 5 | 从本地复制 |
| UI 组件 | 约 50 | 从本地复制 |
| 静态资源 | 5 | 从本地复制 |
| **总计** | **约 71** | |

---

## ✅ 上传检查清单

### 核心文件检查

- [ ] package.json - name 为 `Joe-checkin`
- [ ] next.config.ts - 格式正确
- [ ] tsconfig.json - 格式正确
- [ ] components.json - 格式正确
- [ ] .gitignore - 格式正确
- [ ] .npmrc - 格式正确
- [ ] postcss.config.mjs - 格式正确
- [ ] eslint.config.mjs - 格式正确
- [ ] next-env.d.ts - 格式正确
- [ ] pnpm-lock.yaml - 已上传
- [ ] .coze - 格式正确

### 源代码检查

- [ ] src/app/page.tsx - 已上传
- [ ] src/app/layout.tsx - 已上传
- [ ] src/app/globals.css - 已上传
- [ ] src/app/favicon.ico - 已上传
- [ ] src/app/robots.ts - 已上传

### UI 组件检查

- [ ] src/components/ui/ 下所有组件已上传

### 静态资源检查

- [ ] public/ 下所有文件已上传

---

## 🚀 推荐上传方式

### 使用 Git 命令行（最快）

```bash
# 1. 克隆仓库
cd Desktop
git clone https://github.com/austinyn-rgb/Joe-checkin.git
cd Joe-checkin

# 2. 复制所有文件到这个文件夹

# 3. 提交
git add .
git commit -m "Initial commit"
git push origin main
```

### 使用 GitHub Web 上传

1. 打开仓库页面
2. 点击 "uploading an existing file"
3. 拖拽所有文件
4. 提交

---

祝上传顺利！🎉
