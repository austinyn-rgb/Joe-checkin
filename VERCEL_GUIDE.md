# Vercel 部署超详细傻瓜教程 🚀

本教程面向完全不懂技术的人，一步一步教您如何将杨子祐打卡应用部署到网上，生成可以分享给小朋友的链接。

## 准备工作 📋

### 需要准备的账号和工具

1. **一个 Vercel 账号**（免费）
   - 访问：https://vercel.com
   - 使用邮箱注册（推荐使用 Gmail 或企业邮箱）
   - 也可以直接用 GitHub 或 Google 账号登录

2. **一个 GitHub 账号**（推荐，但不是必须）
   - 访问：https://github.com
   - 注册并登录

3. **电脑上的终端/命令行工具**
   - Windows：PowerShell 或 CMD
   - Mac：终端（Terminal）
   - Linux：终端

---

## 方法一：使用命令行部署（推荐）⭐

### 第一步：打开终端/命令行

**Windows 用户**：
- 按 `Win + R` 键
- 输入 `cmd` 或 `powershell`
- 按回车键

**Mac 用户**：
- 按 `Cmd + Space` 打开搜索
- 输入"终端"
- 按回车键打开

### 第二步：进入项目目录

在终端中输入：

```bash
cd /workspace/projects
```

按回车键，确保当前在项目目录下。

### 第三步：安装 Vercel CLI

输入以下命令并按回车：

```bash
pnpm add -g vercel
```

等待安装完成（可能需要 1-2 分钟）。

**验证是否安装成功**：

```bash
vercel --version
```

如果显示版本号（如 `Vercel CLI 37.3.0`），说明安装成功。

### 第四步：登录 Vercel

输入以下命令：

```bash
vercel login
```

按回车后，会显示：

```
? Log in to Vercel
```

按 `Y` 键，然后按回车。

浏览器会自动打开 Vercel 登录页面：

1. **如果您还没有 Vercel 账号**：
   - 点击 "Sign Up"
   - 使用邮箱注册
   - 验证邮箱

2. **如果您已有账号**：
   - 输入邮箱和密码登录

登录成功后，关闭浏览器窗口，返回终端。

### 第五步：部署应用

在终端中输入：

```bash
vercel --prod
```

按回车后，会显示一系列配置选项，**全部按回车键选择默认值**即可：

```
? Set up and deploy "~/projects"? [Y/n] 
```
→ 按 `Y`，然后按回车

```
? Which scope do you want to deploy to? Your Name or Team
```
→ 按回车（选择您的个人账号）

```
? Link to existing project? [y/N]
```
→ 按 `N`，然后按回车（创建新项目）

```
? What's your project's name? yangziyou-checkin
```
→ 直接按回车（使用默认项目名，或者输入自己想的名字）

```
? In which directory is your code located? ./
```
→ 直接按回车（当前目录）

```
? Want to override the settings? [y/N]
```
→ 按 `N`，然后按回车（使用默认设置）

### 第六步：等待部署完成

终端会显示部署进度：

```
Vercel CLI 37.3.0
🔍  Inspecting...
👀  Inspect: Validating Next.js project
✅  Valid Next.js project found
📦  Installing dependencies...
📦  Dependencies installed
🔨  Building...
🔨  Build completed in 32s
🚀  Deploying...
🚀  Deployment completed
```

这个过程大约需要 1-3 分钟，请耐心等待。

### 第七步：获取部署链接

部署成功后，终端会显示：

```
✅ Production: https://yangziyou-checkin-xxx.vercel.app
📝  Inspect: https://vercel.com/your-username/Joe-checkin/xxx
```

**复制 `https://yangziyou-checkin-xxx.vercel.app` 这个链接**，这就是可以分享给小朋友的链接！

---

## 方法二：使用网页界面部署（无需命令行）🌐

### 第一步：登录 Vercel

1. 打开浏览器，访问：https://vercel.com
2. 点击右上角的 "Login" 登录您的账号

### 第二步：创建新项目

1. 登录后，点击页面上的 "Add New..." 按钮
2. 选择 "Project"

### 第三步：导入项目

**选项 A：从 GitHub 导入（推荐）**

如果您有 GitHub 账号：

1. 点击 "Import Git Repository"
2. 点击 "Connect to GitHub"（首次需要授权）
3. 选择您的 GitHub 仓库
4. 如果还没上传代码，先上传到 GitHub：
   - 在 GitHub 创建新仓库
   - 在项目目录执行：
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/your-username/your-repo.git
     git push -u origin main
     ```

**选项 B：直接上传文件夹**

如果没有 GitHub：

1. 选择 "Continue with Blank Project"
2. 在项目设置中：
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `pnpm build`
   - Output Directory: `.next`

### 第四步：配置项目

在项目配置页面，填写以下信息：

```
Project Name: yangziyou-checkin
Framework Preset: Next.js
Root Directory: ./
Build Command: pnpm build
Output Directory: .next
Install Command: pnpm install
```

点击 "Deploy" 按钮。

### 第五步：等待部署

等待 1-3 分钟，部署完成后会显示：

```
✅ Congratulations! Your project is now live
```

### 第六步：获取链接

在项目页面顶部，会显示：

```
https://yangziyou-checkin-xxx.vercel.app
```

复制这个链接！

---

## 如何分享到飞书 📱

### 方法一：使用应用内的分享按钮（推荐）

1. 在浏览器中打开部署好的链接
2. 页面顶部有"复制链接"和"分享到飞书"两个按钮
3. 点击"分享到飞书"按钮
4. 选择要分享的飞书好友或群组

### 方法二：复制链接手动分享

1. 点击"复制链接"按钮
2. 打开飞书
3. 在聊天窗口按 `Ctrl + V`（Mac 是 `Cmd + V`）粘贴
4. 点击发送

### 方法三：直接复制链接地址

1. 在浏览器地址栏选中链接
2. 复制（`Ctrl + C`）
3. 打开飞书粘贴并发送

---

## 测试部署是否成功 ✅

### 1. 在电脑上测试

在浏览器中打开部署的链接，检查：
- 页面是否正常显示
- 打卡功能是否正常
- 积分是否正确计算

### 2. 在手机上测试

1. 用手机浏览器访问部署链接
2. 测试所有功能是否正常
3. 尝试分享到飞书

### 3. 在飞书中测试

1. 在飞书中打开链接
2. 确认页面能正常加载
3. 测试打卡功能

---

## 如何更新应用 🔄

### 如果代码有修改

1. 修改代码后，在终端执行：

```bash
vercel --prod
```

2. 按回车，选择默认配置
3. 等待部署完成（1-2 分钟）
4. 链接不变，但内容已更新

### 查看部署历史

1. 访问 Vercel 控制台：https://vercel.com/dashboard
2. 点击您的项目
3. 查看 "Deployments" 标签页
4. 可以看到所有部署记录，支持回滚

---

## 常见问题 FAQ 🤔

### Q1: 部署失败怎么办？

**解决方法**：

1. **检查依赖是否安装完整**：
   ```bash
   pnpm install
   ```

2. **检查构建是否成功**：
   ```bash
   pnpm build
   ```

3. **重新部署**：
   ```bash
   vercel --prod --force
   ```

4. **查看详细错误信息**：
   - 访问 Vercel 控制台
   - 点击项目
   - 查看 "Deployments" 中的错误日志

### Q2: 部署后页面打不开？

**解决方法**：

1. **等待 1-2 分钟**：DNS 解析需要时间
2. **清除浏览器缓存**：按 `Ctrl + F5` 刷新
3. **检查链接是否正确**：确保没有多余的空格或符号
4. **查看 Vercel 状态**：访问 https://vercel-status.com 查看是否有服务故障

### Q3: 如何修改域名？

**默认域名**：`https://your-project.vercel.app`

**添加自定义域名**：

1. 访问 Vercel 控制台
2. 点击项目设置
3. 选择 "Domains"
4. 输入您的域名
5. 按提示配置 DNS

### Q4: 部署需要费用吗？

**答案**：完全免费！

- Vercel 免费版包括：
  - 无限项目
  - 100GB 带宽/月
  - 6,000 分钟构建时间/月
  - 自动 HTTPS
  - 全球 CDN 加速

对于这个打卡应用来说，免费版完全够用！

### Q5: 多个小朋友能用吗？

**答案**：可以，但需要注意：

- 每个小朋友使用**不同设备**打卡，数据是独立的
- 如果在**同一台设备**上切换账号，数据会覆盖
- 建议为每个小朋友单独部署一个应用

### Q6: 如何备份数据？

**方法**：

1. **截图备份**（推荐）：
   - 每周或每月截图保存积分和打卡记录
   - 保存到相册或电脑

2. **导出数据**（需要开发）：
   - 可以联系开发者添加导出功能
   - 支持导出为 Excel 或 PDF

### Q7: 飞书分享不成功？

**解决方法**：

1. **确认链接已部署到公网**（不是 localhost）
2. **使用"复制链接"按钮**手动复制
3. **尝试其他分享方式**：微信、QQ 等
4. **检查飞书权限**：确保可以发送外部链接

### Q8: 小朋友换了手机怎么办？

**答案**：

- 数据存储在**浏览器 localStorage** 中
- 换设备后数据**不会自动同步**
- 建议在换设备前**截图保存**积分记录
- 新设备需要重新开始打卡

### Q9: 如何查看访问量？

**方法**：

1. 访问 Vercel 控制台
2. 点击项目
3. 查看 "Analytics" 标签页
4. 可以看到访问量、访问者数量等

### Q10: Vercel 账号可以删除项目吗？

**答案**：可以

1. 访问 Vercel 控制台
2. 点击项目
3. 点击 "Settings"
4. 滚动到最底部
5. 点击 "Delete Project"
6. 确认删除

---

## 快速命令参考 📝

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 登录 Vercel
vercel login

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod

# 查看部署列表
vercel list

# 查看项目信息
vercel inspect

# 查看版本
vercel --version
```

---

## 完整部署流程总结 📊

```
1. 注册 Vercel 账号
   ↓
2. 安装 Vercel CLI
   ↓
3. 登录 Vercel
   ↓
4. 执行 vercel --prod
   ↓
5. 等待部署完成
   ↓
6. 复制部署链接
   ↓
7. 在飞书中分享
   ↓
8. 小朋友开始打卡！
```

---

## 重要提醒 ⚠️

1. **首次部署需要 1-3 分钟**，请耐心等待
2. **部署是免费的**，不需要输入信用卡
3. **链接永久有效**，除非您删除项目
4. **数据存储在设备上**，建议定期截图备份
5. **每次更新需要重新部署**，但链接不变
6. **确保小朋友有网络连接**才能打卡

---

## 需要帮助？🆘

如果遇到问题：

1. **查看 Vercel 文档**：https://vercel.com/docs
2. **查看 Vercel 状态**：https://vercel-status.com
3. **联系开发者**：提供错误信息截图

---

祝杨子祐寒假愉快，坚持打卡！🎉
