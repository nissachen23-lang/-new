# 服务器部署说明

## 服务器信息

| 配置项 | 值 |
|--------|-----|
| IP | 124.220.78.14 |
| 端口 | 22 |
| 用户 | root |
| 部署路径 | /www/wwwroot/rong |
| 预览地址 | http://124.220.78.14 |

## 自动部署

推送到 main 后 GitHub Actions 自动构建并部署，运行摘要中输出预览地址。

首次配置：`./scripts/setup-secrets.sh`
