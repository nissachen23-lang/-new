#!/usr/bin/env bash
set -euo pipefail
CONFIG_FILE="$(dirname "$0")/deploy.config.json"
SERVER_HOST=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['host'])")
SERVER_PORT=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['port'])")
SERVER_USER=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['user'])")
DEPLOY_PATH=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['path'])")
PREVIEW_URL=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['previewUrl'])")
echo "==> 构建生产包..."
npm ci
npm run build
echo "==> 部署到 ${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}"
if [ -z "${SSHPASS:-}" ]; then
  rsync -avz --delete -e "ssh -p ${SERVER_PORT}" dist/ "${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}/"
else
  sshpass -e rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no -p ${SERVER_PORT}" dist/ "${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}/"
fi
echo ""
echo "=========================================="
echo "  部署成功！"
echo "  预览地址: ${PREVIEW_URL}"
echo "  部署路径: ${DEPLOY_PATH}"
echo "=========================================="
