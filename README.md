# GEO 监测服务 — 支付购买页面

GEO 智能监测服务的前端支付购买展示页面，包含核心亮点、多档位会员方案、权益对比和常见问题模块。

## 在线预览

**预览地址：** https://nissachen23-lang.github.io/-new/

### 启用步骤（仅需一次）

1. 打开仓库 [Settings → Pages](https://github.com/nissachen23-lang/-new/settings/pages)
2. **Build and deployment → Source** 选择 **Deploy from a branch**
3. **Branch** 选择 `gh-pages`，文件夹选 `/ (root)`，点击 **Save**
4. 等待 1～2 分钟，即可通过上方链接访问

> 每次推送到 `main` 分支后，GitHub Actions 会自动构建并更新 `gh-pages` 分支。

## 功能特性

- **核心亮点展示** — AI 问题挖掘、GEO 排名、链接检测、无水印报告四大能力
- **五档会员方案** — 免费版 / 入门版 / 进阶版 / 高阶版 / 至尊版
- **权益详细对比表** — 各栏目免费次数、积分规则一目了然
- **常见问题 FAQ** — 手风琴式展开，解答积分规则疑虑
- **支付购买弹窗** — 选择支付方式、确认订单、模拟支付流程

## 技术栈

- React 19 + Vite 6
- Tailwind CSS 4
- GitHub Pages 自动部署

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:5173 查看页面。

## 构建

```bash
npm run build
npm run preview
```

## 会员定价（虚拟）

| 档位 | 月费 | 每月赠送积分 | 每日赠送积分 |
|------|------|-------------|-------------|
| 免费版 | ¥0 | — | 10 |
| 入门版 | ¥99 | 500 | 30 |
| 进阶版 | ¥299 | 2,000 | 80 |
| 高阶版 | ¥699 | 6,000 | 200 |
| 至尊版 | ¥1,999 | 20,000 | 500 |
