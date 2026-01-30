# 🚀 快速部署 - 3步完成（最简单版）

## 方式一：在当前沙箱环境部署（如果有 Vercel 账号和 Token）

### 前提条件
- 您有 Vercel 账号
- 您有 Vercel Token（访问 https://vercel.com/account/tokens 创建）

### 操作步骤

#### 第 1 步：登录 Vercel
```bash
vercel login --token YOUR_TOKEN_HERE
```
将 `YOUR_TOKEN_HERE` 替换为您的实际 Token。

#### 第 2 步：部署
```bash
cd /workspace/projects
vercel --prod
```

#### 第 3 步：按提示操作
全部按回车键，使用默认配置。

#### 完成！
复制终端显示的链接，例如：
```
✅ Production: https://Joe-checkin-abc123.vercel.app
```

---

## 方式二：在本地电脑部署（推荐）

### 前提条件
- 电脑上已安装 Node.js 和 pnpm
- 有 Vercel 账号

### 操作步骤

#### 第 1 步：准备项目

如果您在沙箱环境中，先导出项目：

```bash
cd /workspace/projects
tar -czf Joe-checkin.tar.gz .
```

然后下载 `Joe-checkin.tar.gz` 到本地电脑，解压后进入目录。

#### 第 2 步：在本地操作

```bash
# 进入项目目录
cd Joe-checkin

# 安装依赖
pnpm install

# 安装 Vercel CLI
pnpm add -g vercel

# 登录 Vercel（浏览器会打开）
vercel login

# 部署
vercel --prod
```

全部按回车，使用默认配置。

#### 第 3 步：获取链接

复制显示的链接！

---

## 方式三：使用网页界面（无需命令行）

### 步骤

1. **上传代码到 GitHub**
   ```bash
   cd /workspace/projects
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/Joe-checkin.git
   git push -u origin main
   ```

2. **在 Vercel 网页上导入**
   - 访问 https://vercel.com
   - 点击 "Add New" → "Project"
   - 选择 GitHub 仓库
   - 点击 "Import"
   - 点击 "Deploy"

3. **获取链接**
   - 部署成功后，复制页面顶部显示的链接

---

## 📱 分享到飞书

### 方法一：使用应用内按钮
1. 打开部署链接
2. 点击"分享到飞书"按钮
3. 选择好友或群组

### 方法二：复制链接
1. 点击"复制链接"按钮
2. 在飞书中粘贴并发送

---

## ✅ 验证

打开链接，检查：
- ✅ 页面显示"杨子祐寒假打卡攒积分"
- ✅ 5 项活动全部显示
  - 🎨 寒假生活
  - 📚 中文阅读
  - 🔢 数学练习
  - 🌍 英文阅读
  - 🏃 体育锻炼
- ✅ 连续打卡天数和积分显示正常
- ✅ 分享按钮可用

---

## 🔄 更新应用

修改代码后：

```bash
vercel --prod
```

链接不变，内容已更新。

---

## 💡 提示

- **首次部署 2-3 分钟**，后续 1-2 分钟
- **完全免费**，无需付费
- **链接永久有效**
- **全球 CDN 加速**

---

需要更详细的说明？查看 [DEPLOY_NOW.md](DEPLOY_NOW.md)
