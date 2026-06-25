#!/usr/bin/env bash
# 在本地已登录 gh 的环境执行，配置 GitHub Actions 部署密钥
set -euo pipefail
REPO="${1:-nissachen23-lang/-new}"
read -rsp "请输入 SSH 密码: " SSH_PASSWORD; echo
read -rp "预览地址 [http://124.220.78.14]: " PREVIEW_URL
PREVIEW_URL="${PREVIEW_URL:-http://124.220.78.14}"
gh secret set SSH_PASSWORD -b "$SSH_PASSWORD" -R "$REPO"
gh secret set SSH_HOST -b "124.220.78.14" -R "$REPO"
gh secret set SSH_PORT -b "22" -R "$REPO"
gh secret set SSH_USER -b "root" -R "$REPO"
gh secret set DEPLOY_PATH -b "/www/wwwroot/rong" -R "$REPO"
gh secret set PREVIEW_URL -b "$PREVIEW_URL" -R "$REPO"
echo "密钥配置完成！推送 main 后将自动部署。"
