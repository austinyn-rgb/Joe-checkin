# 🚀 寒假打卡应用 - 完整部署攻略

## 📖 攻略概述

本攻略将手把手教你如何将寒假打卡应用部署到网上，让杨子祐可以在任何设备上使用。

**部署流程**：
```
沙箱环境 → 下载代码 → GitHub → Vercel → 网页链接 → 飞书分享
```

**预计时间**：15-20 分钟

**难度**：⭐⭐ 简单（跟着步骤做就行）

---

## 📋 准备工作清单

开始之前，请确认你已准备好：

- [ ] 电脑已安装 Git（如果没有，会在后面安装）
- [ ] GitHub 账号（如果没有，会在后面注册）
- [ ] Vercel 账号（可以用 GitHub 账号登录）
- [ ] 网络连接正常
- [ ] 有一个可以接收验证码的手机号

---

## 📦 第一步：从沙箱下载代码

### 方法 1：通过文件管理器下载（推荐）

#### 步骤 1.1：查看项目文件

1. 在沙箱的文件浏览器中，找到项目根目录
2. 确认包含以下重要文件：
   - `src/` 文件夹（包含源代码）
   - `package.json`（依赖配置）
   - `.coze` 文件（项目配置）
   - `tsconfig.json`（TypeScript 配置）
   - `README.md` 等文档

#### 步骤 1.2：压缩项目文件

**Windows 用户**：
1. 选中所有项目文件（`src/`, `package.json`, `.coze`, `tsconfig.json` 等）
2. 右键 → 选择"发送到" → "压缩（zipped）文件夹"
3. 重命名为 `winter-checkin-app.zip`

**Mac 用户**：
1. 选中所有项目文件
2. 右键 → 选择"压缩"
3. 重命名为 `winter-checkin-app.zip`

#### 步骤 1.3：下载压缩包

将压缩好的 `winter-checkin-app.zip` 下载到你的电脑桌面或其他方便的位置。

---

### 方法 2：使用 Git 命令（进阶）

如果你熟悉 Git 命令，可以使用：

```bash
# 1. 在沙箱中初始化 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 2. 连接到 GitHub（后面会详细说明）
# 先跳到 GitHub 部分
```

---

## 🐙 第二步：创建 GitHub 仓库

### 步骤 2.1：注册 GitHub 账号（如果没有）

1. 访问：https://github.com/
2. 点击右上角的"Sign up"
3. 输入邮箱、密码、用户名
4. 完成邮箱验证
5. 选择免费计划（Free）
6. 点击"Continue"完成注册

### 步骤 2.2：创建新仓库

1. 登录 GitHub
2. 点击右上角的 "+" 按钮
3. 选择"New repository"

### 步骤 2.3：填写仓库信息

**必填项**：
- **Repository name**：`winter-checkin-app`（仓库名称）
- **Description**：`杨子祐寒假打卡应用 - 积分管理系统`（描述）

**选项（根据情况选择）**：
- **Public / Private**：
  - 如果想分享给家人朋友 → 选择 **Public**（公开）
  - 如果只想自己看到 → 选择 **Private**（私有）
  - **建议**：选择 Public，方便后续在 Vercel 部署

**其他选项**（全部留空即可）：
- ❌ 不勾选"Add a README file"
- ❌ 不勾选"Add .gitignore"
- ❌ 不勾选"Choose a license"

### 步骤 2.4：创建仓库

点击页面底部的绿色按钮 **"Create repository"**

### 步骤 2.5：记录仓库地址

创建成功后，你会看到仓库地址：
```
https://github.com/你的用户名/winter-checkin-app.git
```

**重要**：复制这个地址，后面会用到。

---

## 📤 第三步：上传代码到 GitHub

### 方法 1：使用 GitHub Desktop（推荐新手）

#### 步骤 3.1：安装 GitHub Desktop

1. 下载地址：https://desktop.github.com/
2. 下载安装包（Windows 或 Mac 版本）
3. 双击安装包，按提示完成安装
4. 安装完成后，用 GitHub 账号登录

#### 步骤 3.2：创建本地仓库

1. 打开 GitHub Desktop
2. 点击左上角的 **"File"** → **"Add Local Repository"**
3. 点击 **"Choose..."** 按钮
4. 找到并选择你刚才解压的 `winter-checkin-app` 文件夹
5. 点击 **"Add repository"**

#### 步骤 3.3：提交代码

1. 在左下角的 **"Summary"** 输入框中输入：`Initial commit`
2. 点击左下角的 **"Commit to main"** 按钮
3. 等待提交完成

#### 步骤 3.4：推送到 GitHub

1. 点击顶部的 **"Publish repository"** 按钮
2. **Repository name**：自动填充（`winter-checkin-app`）
3. **Privacy**：选择 **Public**（公开）
4. 点击 **"Publish repository"** 按钮
5. 等待推送完成

**完成**：代码已经成功上传到 GitHub！

---

### 方法 2：使用 Git 命令行（推荐进阶用户）

#### 步骤 3.1：安装 Git

**Windows 用户**：
1. 访问：https://git-scm.com/
2. 下载 Windows 版本
3. 双击安装包，一直点击"Next"即可
4. 安装完成后，打开"Git Bash"（在开始菜单中找到）

**Mac 用户**：
- Mac 通常已经预装了 Git，可以直接使用
- 如果没有，在终端输入 `git --version` 会提示安装

#### 步骤 3.2：解压项目文件

1. 找到你下载的 `winter-checkin-app.zip`
2. 右键 → "解压到当前文件夹"
3. 解压后得到 `winter-checkin-app` 文件夹

#### 步骤 3.3：初始化 Git 仓库

**Windows（Git Bash）**：
```bash
cd ~/Desktop/winter-checkin-app
git init
git add .
git commit -m "Initial commit"
```

**Mac（终端）**：
```bash
cd ~/Desktop/winter-checkin-app
git init
git add .
git commit -m "Initial commit"
```

#### 步骤 3.4：连接到 GitHub

**Windows（Git Bash）**：
```bash
git branch -M main
git remote add origin https://github.com/你的用户名/winter-checkin-app.git
git push -u origin main
```

**Mac（终端）**：
```bash
git branch -M main
git remote add origin https://github.com/你的用户名/winter-checkin-app.git
git push -u origin main
```

**注意**：将 `你的用户名` 替换为你的实际 GitHub 用户名。

#### 步骤 3.5：登录验证

如果出现登录提示：
1. 输入 GitHub 用户名
2. 输入密码（或 Personal Access Token）
3. 等待推送完成

**完成**：代码已经成功上传到 GitHub！

---

## 🌐 第四步：在 Vercel 部署

### 步骤 4.1：访问 Vercel

1. 访问：https://vercel.com/
2. 点击右上角的 **"Login"**
3. 选择 **"Continue with GitHub"**
4. 授权 Vercel 访问你的 GitHub 账号

### 步骤 4.2：创建新项目

1. 登录后，点击顶部的 **"Add New..."**
2. 选择 **"Project"**

### 步骤 4.3：导入 GitHub 仓库

1. Vercel 会自动显示你的 GitHub 仓库列表
2. 找到 `winter-checkin-app` 仓库
3. 点击右侧的 **"Import"** 按钮

### 步骤 4.4：配置项目

**Project Name**：
- 保持默认 `winter-checkin-app`
- 或者自定义，如 `yangziyou-checkin`

**Framework Preset**：
- 保持默认 **"Next.js"**

**Root Directory**：
- 保持默认 `./`（根目录）

**Build Command**：
- 保持默认 `pnpm run build`

**Output Directory**：
- 保持默认 `.next`

**Install Command**：
- 保持默认 `pnpm install`

### 步骤 4.5：环境变量（不需要）

本项目不需要环境变量，直接跳过。

### 步骤 4.6：部署

1. 点击页面底部的 **"Deploy"** 按钮
2. 等待部署（通常 1-3 分钟）
3. 你会看到部署进度：
   - Cloning repository...
   - Installing dependencies...
   - Building application...
   - Uploading...

### 步骤 4.7：部署成功

看到绿色对勾和 **"Congratulations!"**，说明部署成功！

**重要**：复制你的域名地址，格式如：
```
https://winter-checkin-app.vercel.app
```

或
```
https://yangziyou-checkin.vercel.app
```

---

## 🔗 第五步：配置自定义域名（可选）

如果你想使用自己的域名，可以这样做：

### 步骤 5.1：购买域名（可选）

1. 在阿里云、腾讯云、Namecheap 等平台购买域名
2. 例如：`yangziyou.com`

### 步骤 5.2：在 Vercel 添加域名

1. 进入 Vercel 项目页面
2. 点击 **"Settings"** → **"Domains"**
3. 输入你的域名（如 `yangziyou.com`）
4. 点击 **"Add"**

### 步骤 5.3：配置 DNS

Vercel 会提示你配置 DNS 记录：
1. 登录你的域名管理后台
2. 添加 CNAME 记录：
   - **Name**：`www`
   - **Value**：`cname.vercel-dns.com`

**跳过**：如果你不需要自定义域名，直接使用 Vercel 提供的域名即可。

---

## 📱 第六步：测试网页

### 步骤 6.1：打开网页

1. 在浏览器中输入你的 Vercel 域名：
   ```
   https://winter-checkin-app.vercel.app
   ```
2. 或者点击 Vercel 部署成功的页面上的 **"Visit"** 按钮

### 步骤 6.2：检查页面

确认以下功能正常：
- [ ] 页面能正常打开
- [ ] 显示"杨子祐寒假打卡攒积分"标题
- [ ] 显示当前日期
- [ ] 显示 5 个活动项目（寒假生活、中文阅读、数学练习、英文阅读、体育锻炼）
- [ ] 每个活动有输入框和复选框
- [ ] 有"提交打卡"按钮
- [ ] 有"打卡历史记录"区域
- [ ] 有"数据导出"区域

### 步骤 6.3：测试打卡功能

1. 在"中文阅读"输入框输入：`《西游记》第10-20页`
2. 勾选"中文阅读"复选框
3. 点击"🎯 提交打卡"按钮
4. 看到"🎉 恭喜杨子祐完成今日1项任务！积分+100"提示
5. 向下滚动，确认历史记录中显示今天的打卡记录

### 步骤 6.4：测试导出功能

1. 滚动到"数据导出"区域
2. 点击"导出汇总报告"（紫色按钮）
3. 确认文件下载成功
4. 打开文件，确认内容正确

---

## 📤 第七步：分享到飞书

### 方法 1：复制链接分享

#### 步骤 7.1：复制链接

1. 打开你的网页：
   ```
   https://winter-checkin-app.vercel.app
   ```
2. 在网页中点击"复制链接"按钮
3. 确认提示"已复制链接"

#### 步骤 7.2：发送到飞书

**方式 A：飞书聊天**
1. 打开飞书
2. 选择要发送的聊天（给家长的）
3. 粘贴链接
4. 发送

**方式 B：飞书文档**
1. 在飞书中创建一个文档
2. 粘贴链接
3. 添加说明文字：
   ```
   杨子祐寒假打卡应用：
   https://winter-checkin-app.vercel.app

   使用方法：
   1. 每天填写活动内容
   2. 勾选完成
   3. 点击"提交打卡"
   4. 查看积分和连续打卡天数

   注意：数据保存在设备浏览器中，不跨设备同步
   ```

---

### 方法 2：使用网页内分享按钮

#### 步骤 7.1：点击分享按钮

1. 在网页中点击"分享到飞书"按钮
2. 浏览器会弹出分享菜单

#### 步骤 7.2：选择分享方式

**方式 A：系统分享**
1. 在分享菜单中找到"飞书"
2. 选择要分享的聊天
3. 点击发送

**方式 B：复制链接**
1. 在分享菜单中选择"复制链接"
2. 打开飞书
3. 粘贴链接并发送

---

## 📊 第八步：设置 Vercel 自动更新

当你更新代码时，Vercel 会自动重新部署。

### 步骤 8.1：推送新代码

修改代码后，在 Git 中提交：

**GitHub Desktop**：
1. 修改文件
2. 在 GitHub Desktop 中查看更改
3. 输入提交信息（如：`fix: 修复打卡按钮样式`）
4. 点击"Commit to main"
5. 点击"Push origin"

**Git 命令行**：
```bash
git add .
git commit -m "fix: 修复打卡按钮样式"
git push
```

### 步骤 8.2：自动部署

推送代码后：
1. Vercel 会自动检测到新的提交
2. 自动开始构建和部署
3. 通常 1-3 分钟后完成
4. 网页会自动更新到最新版本

---

## 🔒 第九步：设置访问权限（可选）

如果你设置了 **Private** 仓库，可以限制访问。

### 方法 1：使用 Vercel 密码保护

1. 进入 Vercel 项目页面
2. 点击 **"Settings"** → **"Protection"**
3. 点击 **"Edit"**
4. 勾选 **"Password Protection"**
5. 设置用户名和密码
6. 点击 **"Save"**

**注意**：访问时需要输入用户名和密码。

### 方法 2：使用 IP 白名单（高级）

**跳过**：一般家庭使用不需要此功能。

---

## 📱 第十步：在 iPad 上使用

### 步骤 10.1：保存网页到主屏幕

1. 在 Safari 浏览器中打开你的网页：
   ```
   https://winter-checkin-app.vercel.app
   ```
2. 点击底部的"分享"按钮（方形图标，带向上箭头）
3. 向下滑动，找到"添加到主屏幕"
4. 点击"添加到主屏幕"
5. 点击"添加"

**结果**：主屏幕会出现一个应用图标，点击即可打开。

### 步骤 10.2：日常使用

1. 点击主屏幕的图标打开应用
2. 填写活动内容
3. 勾选完成
4. 点击"提交打卡"
5. 查看积分和连续打卡天数

**注意**：
- 数据保存在 Safari 浏览器中
- 清除浏览器数据会丢失打卡记录
- 不跨设备同步

---

## 📋 完整检查清单

部署完成后，请确认以下事项：

- [ ] 代码已成功上传到 GitHub
- [ ] Vercel 部署成功
- [ ] 网页可以正常访问
- [ ] 打卡功能正常
- [ ] 历史记录显示正常
- [ ] 导出功能正常
- [ ] 链接已分享到飞书
- [ ] iPad 可以正常使用
- [ ] 已备份重要数据（导出 JSON 格式）

---

## ⚠️ 常见问题

### Q1: Vercel 部署失败怎么办？

**A**: 检查以下几点：
1. 确认 GitHub 仓库是 Public（公开）的
2. 确认 `package.json` 文件存在
3. 确认 `src/app/page.tsx` 文件存在
4. 查看错误日志，根据错误提示修复

---

### Q2: 网页打开后显示 404 错误？

**A**: 检查以下几点：
1. 确认 Vercel 部署成功
2. 确认访问的 URL 正确
3. 清除浏览器缓存后重试
4. 在 Vercel 控制台查看部署日志

---

### Q3: 数据会跨设备同步吗？

**A**: 不会。数据保存在设备浏览器中：
- 每个设备的数据是独立的
- 清除浏览器数据会丢失记录
- 建议：定期导出数据备份

---

### Q4: 可以多人使用同一个应用吗？

**A**: 可以，但：
- 每个人需要用自己的设备
- 数据不会相互干扰
- 每个人的数据是独立的

---

### Q5: 如何修改应用名称？

**A**: 两种方法：

**方法 1**：修改代码
1. 在 `src/app/page.tsx` 中找到标题
2. 修改 `杨子祐寒假打卡攒积分` 为其他名字
3. 提交到 GitHub
4. Vercel 自动更新

**方法 2**：多个应用
1. 修改代码后，创建新的 GitHub 仓库
2. 在 Vercel 部署新的应用
3. 每个人有自己的独立应用

---

### Q6: 如何备份数据？

**A**:
1. 定期（每周）导出 JSON 格式数据
2. 保存到电脑或云盘
3. 如需要恢复，需要手动处理（当前版本不支持导入）

---

### Q7: 网页加载速度慢怎么办？

**A**:
1. 检查网络连接
2. Vercel 默认使用全球 CDN，速度很快
3. 如果在中国大陆，可能需要等待几秒
4. 首次加载后会缓存，后续速度会更快

---

### Q8: 可以修改积分规则吗？

**A**: 可以，修改代码：
1. 在 `src/app/page.tsx` 中找到积分计算逻辑
2. 修改 `100` 为其他数值
3. 提交到 GitHub
4. Vercel 自动更新

**注意**：修改只影响未来的打卡，历史记录的积分不会改变。

---

### Q9: 可以添加更多活动项目吗？

**A**: 可以，修改代码：
1. 在 `src/app/page.tsx` 中找到 `ACTIVITIES_CONFIG`
2. 添加新的活动配置
3. 更新数据类型定义
4. 提交到 GitHub
5. Vercel 自动更新

**建议**：如果需要定制功能，可以联系开发者。

---

### Q10: 免费额度会用完吗？

**A**: Vercel 免费版包含：
- 每月 100GB 带宽
- 每月 6,000 分钟构建时间
- 无限项目数量

**结论**：家庭使用完全够用，不会用完。

---

## 🎉 完成！

恭喜你！现在杨子祐已经可以在任何设备上使用寒假打卡应用了！

**使用总结**：
1. ✅ 代码已部署到 Vercel
2. ✅ 网页可以正常访问
3. ✅ 链接已分享到飞书
4. ✅ iPad 可以正常使用
5. ✅ 数据可以导出备份

**日常使用**：
- 每天填写活动内容并打卡
- 定期导出数据备份
- 冬假结束时导出完整报告

---

## 📚 相关文档

- [README.md](README.md) - 应用使用说明
- [HOW_TO_VIEW_HISTORY.md](HOW_TO_VIEW_HISTORY.md) - 如何查看历史记录
- [HOW_TO_EXPORT_DATA.md](HOW_TO_EXPORT_DATA.md) - 如何导出数据
- [UPDATE_202501_PARTIAL_CHECKIN.md](UPDATE_202501_PARTIAL_CHECKIN.md) - 部分打卡功能
- [UPDATE_202501_EXPORT_FEATURE.md](UPDATE_202501_EXPORT_FEATURE.md) - 导出功能

---

## 🆘 需要帮助？

如果遇到问题，可以：

1. 查看本文档的"常见问题"部分
2. 查看 Vercel 部署日志
3. 检查 GitHub 仓库设置
4. 重新部署应用

**祝你使用愉快！** 🎊
