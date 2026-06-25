#!/usr/bin/env bash
# GEO 支付页面 — 服务器部署脚本
# 用法: ./deploy.sh [服务器IP] [SSH端口]
# 示例: ./deploy.sh 124.220.78.14 22

set -euo pipefail

SERVER_HOST="${1:-124.220.78.14}"
SERVER_PORT="${2:-22}"
SERVER_USER="root"
DEPLOY_PATH="/www/wwwroot/rong"

echo "==> 构建生产包..."
npm ci
npm run build

echo "==> 部署到 ${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}"
rsync -avz --delete \
  -e "ssh -p ${SERVER_PORT}" \
  dist/ "${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}/"

echo "==> 部署完成！"
echo "    访问路径取决于 Nginx 站点配置（通常为 /www/wwwroot/rong 对应域名）"
