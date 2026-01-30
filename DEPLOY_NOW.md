# 🚀 立即部署 - 傻瓜式操作指南

本指南手把手教您如何将"杨子祐寒假打卡攒积分"应用部署到网上，5分钟内获得可分享的链接！

---

## ✅ 前置条件检查

在开始之前，请确保您有：

- [x] 一台可以访问互联网的电脑
- [x] 一个 Vercel 账号（免费注册：https://vercel.com）
- [x] 一个 GitHub 账号（可选，但推荐）
- [x] 项目代码已准备好（您已经有了）

---

## 📝 方式一：在沙箱环境中部署（如果适用）

### 第 1 步：验证 Vercel CLI 已安装

在终端中输入：

```bash
vercel --version
```

如果看到版本号（如 `Vercel CLI 50.9.5`），说明已安装。

如果没有安装，执行：

```bash
pnpm add -g vercel
```

### 第 2 步：登录 Vercel

#### 方法 A：使用 Token 登录（推荐用于 CI/CD 或无浏览器环境）

1. 访问 https://vercel.com/account/tokens
2. 点击 "Create" 创建新的 Token
3. 给 Token 起个名字，如 "Deploy Script"
4. 复制生成的 Token

然后在终端中执行：

```bash
vercel login --token YOUR_TOKEN_HERE
```

将 `YOUR_TOKEN_HERE` 替换为您复制的 Token。

#### 方法 B：浏览器登录（需要图形界面）

在终端中执行：

```bash
vercel login
```

终端会显示：

```
? Log in to Vercel [Y/n]
```

输入 `Y` 并按回车，浏览器会自动打开 Vercel 登录页面。

### 第 3 步：进入项目目录

```bash
cd /workspace/projects
```

### 第 4 步：部署到生产环境

```bash
vercel --prod
```

### 第 5 步：按提示操作

终端会显示一系列配置选项，**全部按回车键选择默认值**：

```
? Set up and deploy "~/projects"? [Y/n]
```
→ 按 `Y`，然后按回车

```
? Which scope do you want to deploy to? Your Name
```
→ 按回车（选择您的个人账号）

```
? Link to existing project? [y/N]
```
→ 按 `N`，然后按回车（创建新项目）

```
? What's your project's name? [yangziyou-checkin]
```
→ 按回车（使用默认项目名）或输入您想要的名字

```
? In which directory is your code located? [./]
```
→ 按回车（当前目录）

```
? Want to override the settings? [y/N]
```
→ 按 `N`，然后按回车（使用默认设置）

### 第 6 步：等待部署完成

终端会显示部署进度：

```
Vercel CLI 50.9.5
🔍  Inspecting...
✅  Valid Next.js project found
📦  Installing dependencies...
🔨  Building...
🚀  Deploying...
✅  Production: https://yangziyou-checkin-xxx.vercel.app
```

这个过程大约需要 1-3 分钟。

### 第 7 步：获取部署链接

部署成功后，终端会显示类似这样的输出：

```
✅ Production: https://yangziyou-checkin-abc123.vercel.app
```

**复制这个链接**，这就是您要分享给小朋友的链接！

---

## 📝 方式二：在本地电脑上部署（推荐）

如果您在自己的电脑上操作，请按照以下步骤：

### 第 1 步：准备项目文件

如果您当前在沙箱环境中，需要先将项目导出：

#### 方法 A：打包下载

```bash
# 在项目目录下
cd /workspace/projects
tar -czf yangziyou-checkin.tar.gz .
```

然后下载 `yangziyou-checkin.tar.gz` 文件到您的本地电脑。

#### 方法 B：使用 Git（推荐）

```bash
# 初始化 Git 仓库
cd /workspace/projects
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 杨子祐寒假打卡应用"

# 如果有 GitHub 仓库，推送到 GitHub
git remote add origin https://github.com/your-username/Joe-checkin.git
git branch -M main
git push -u origin main
```

### 第 2 步：在本地电脑上操作

#### 打开终端/命令行

**Windows**：
- 按 `Win + R`
- 输入 `cmd` 或 `powershell`
- 按回车

**Mac**：
- 按 `Cmd + Space`
- 输入"终端"
- 按回车

#### 进入项目目录

```bash
# 如果是下载的压缩包
cd Downloads
tar -xzf Joe-checkin.tar.gz
cd Joe-checkin

# 如果是从 Git 克隆
git clone https://github.com/your-username/Joe-checkin.git
cd Joe-checkin
```

#### 安装依赖

```bash
pnpm install
```

#### 安装 Vercel CLI

```bash
pnpm add -g vercel
```

#### 登录 Vercel

```bash
vercel login
```

按 `Y`，然后按回车，浏览器会打开登录页面。

#### 部署

```bash
vercel --prod
```

全部按回车选择默认值。

#### 获取链接

等待部署完成，复制显示的链接！

---

## 🌐 方式三：使用 Vercel 网页界面（无需命令行）

### 第 1 步：准备代码

将代码上传到 GitHub：

1. 访问 https://github.com
2. 创建新仓库（New repository）
3. 仓库名：`Joe-checkin`
4. 勾选"Public"
5. 点击"Create repository"

然后在本地上传代码：

```bash
cd /workspace/projects
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/Joe-checkin.git
git branch -M main
git push -u origin main
```

### 第 2 步：登录 Vercel

1. 访问 https://vercel.com
2. 点击右上角"Login"
3. 使用账号登录（GitHub、Email 等）

### 第 3 步：导入项目

1. 登录后，点击"Add New..."
2. 选择"Project"
3. 点击"Continue with GitHub"（首次需要授权）
4. 选择 `Joe-checkin` 仓库
5. 点击"Import"

### 第 4 步：配置项目

保持默认配置，检查以下内容：

```
Framework Preset: Next.js
Root Directory: ./
Build Command: pnpm build
Output Directory: .next
Install Command: pnpm install
```

### 第 5 步：部署

1. 点击"Deploy"按钮
2. 等待 1-3 分钟
3. 部署成功后会显示链接

### 第 6 步：获取链接

在项目页面顶部会显示：

```
https://Joe-checkin-xxx.vercel.app
```

复制这个链接！

---

## 📱 部署后：分享到飞书

### 方法一：使用应用内分享按钮

1. 在浏览器中打开部署链接
2. 页面顶部有两个按钮：
   - 📋 **复制链接**
   - 📤 **分享到飞书**
3. 点击"分享到飞书"
4. 选择要分享的飞书好友或群组

### 方法二：复制链接手动分享

1. 点击"复制链接"按钮
2. 打开飞书
3. 在聊天窗口粘贴（Ctrl+V）
4. 点击发送

### 方法三：直接复制浏览器地址

1. 在浏览器地址栏选中链接
2. 复制（Ctrl+C）
3. 在飞书中粘贴并发送

---

## ✅ 测试部署是否成功

### 1. 在浏览器中测试

打开部署链接，检查：
- [ ] 页面正常显示"杨子祐寒假打卡攒积分"
- [ ] 5项活动都能看到（寒假生活、中文阅读、数学练习、英文阅读、体育锻炼）
- [ ] 连续打卡天数显示正常
- [ ] 总积分显示正常
- [ ] 分享按钮可以点击

### 2. 在手机上测试

1. 用手机浏览器打开链接
2. 测试打卡功能
3. 测试分享功能

### 3. 在飞书中测试

1. 在飞书中打开链接
2. 确认页面正常加载
3. 测试打卡功能

---

## 🔄 如何更新应用

### 如果修改了代码

```bash
# 1. 进入项目目录
cd /workspace/projects

# 2. 重新部署
vercel --prod

# 3. 等待部署完成
# 链接不变，内容已更新
```

### 查看部署历史

1. 访问 https://vercel.com/dashboard
2. 点击您的项目
3. 查看"Deployments"标签
4. 可以看到所有部署记录，支持回滚

---

## 🆘 常见问题快速解决

### 问题 1：部署时提示"Authentication failed"

**解决方法**：
```bash
vercel login
```
重新登录。

### 问题 2：构建失败，提示"Build failed"

**解决方法**：
```bash
# 检查依赖是否完整
pnpm install

# 测试本地构建
pnpm build

# 重新部署
vercel --prod --force
```

### 问题 3：部署后页面打不开

**解决方法**：
1. 等待 1-2 分钟（DNS 解析需要时间）
2. 清除浏览器缓存（Ctrl+F5）
3. 检查链接是否正确
4. 访问 https://vercel-status.com 查看 Vercel 状态

### 问题 4：如何删除已部署的项目

1. 访问 https://vercel.com/dashboard
2. 点击项目
3. 点击"Settings"
4. 滚动到底部
5. 点击"Delete Project"
6. 确认删除

### 问题 5：飞书分享时链接无法预览

**解决方法**：
- 确保链接已部署到公网（不是 localhost）
- 尝试使用"复制链接"按钮
- 等待 1-2 分钟后重试（Vercel 的 Open Graph 标签可能需要时间生效）

---

## 📊 快速命令速查表

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 检查版本
vercel --version

# 登录
vercel login

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod

# 查看部署列表
vercel list

# 查看项目信息
vercel inspect

# 强制重新部署
vercel --prod --force
```

---

## 🎯 完整部署流程（5分钟版）

```
1. 打开终端/命令行
   ↓
2. 进入项目目录: cd /workspace/projects
   ↓
3. 安装 Vercel CLI: pnpm add -g vercel
   ↓
4. 登录 Vercel: vercel login
   ↓
5. 部署应用: vercel --prod
   ↓
6. 全部按回车（使用默认设置）
   ↓
7. 等待 1-3 分钟
   ↓
8. 复制显示的链接
   ↓
9. 在飞书中分享给小朋友
   ↓
10. 完成部署！🎉
```

---

## 📋 部署检查清单

部署完成后，请检查以下内容：

- [ ] 链接可以在浏览器中打开
- [ ] 页面显示"杨子祐寒假打卡攒积分"
- [ ] 5 项活动全部显示正确
  - [ ] 🎨 寒假生活
  - [ ] 📚 中文阅读
  - [ ] 🔢 数学练习
  - [ ] 🌍 英文阅读
  - [ ] 🏃 体育锻炼
- [ ] 连续打卡天数显示
- [ ] 累计积分显示
- [ ] 复制链接按钮可用
- [ ] 分享到飞书按钮可用
- [ ] 在手机上可以正常访问
- [ ] 在飞书中可以正常打开

---

## 💡 小贴士

1. **首次部署较慢**：第一次部署需要 2-3 分钟，后续更新只需要 1-2 分钟
2. **链接永久有效**：除非删除项目，否则链接一直有效
3. **完全免费**：Vercel 免费版完全够用，不需要付费
4. **自动 HTTPS**：Vercel 会自动配置 HTTPS，无需手动设置
5. **全球加速**：Vercel 使用全球 CDN，访问速度快
6. **定期备份**：建议定期截图保存小朋友的打卡记录

---

## 🎉 部署成功后

恭喜！您现在已经成功部署了"杨子祐寒假打卡攒积分"应用！

接下来的步骤：

1. **测试应用**：自己先试用一下，确保所有功能正常
2. **分享给小朋友**：在飞书中分享链接
3. **指导小朋友使用**：教小朋友如何打卡
4. **定期查看**：每周查看小朋友的打卡情况
5. **鼓励坚持**：根据积分和连续打卡天数给予鼓励

---

## 🆘 需要帮助？

如果遇到问题：

1. 查看 [Vercel 文档](https://vercel.com/docs)
2. 查看 [Vercel 状态页](https://vercel-status.com)
3. 查看 [常见问题解答](VERCEL_GUIDE.md#常见问题-faq)
4. 联系开发者

---

祝部署顺利，杨子祐寒假快乐！🚀✨
