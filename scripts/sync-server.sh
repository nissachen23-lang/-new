#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG="$ROOT/deploy.config.json"

# 从 .deploy.env 或环境变量读取密码（不提交到仓库）
if [ -f "$ROOT/.deploy.env" ]; then
  # shellcheck disable=SC1091
  source "$ROOT/.deploy.env"
fi
PASS="${SSHPASS:?请设置 SSHPASS 环境变量或创建 .deploy.env 文件}"

HOST=$(python3 -c "import json; print(json.load(open('$CONFIG'))['host'])")
PORT=$(python3 -c "import json; print(json.load(open('$CONFIG'))['port'])")
USER=$(python3 -c "import json; print(json.load(open('$CONFIG'))['user'])")
PATH_REMOTE=$(python3 -c "import json; print(json.load(open('$CONFIG'))['path'])")
PREVIEW=$(python3 -c "import json; print(json.load(open('$CONFIG'))['previewUrl'])")

cd "$ROOT"
echo "==> 构建..."
npm run build

echo "==> 同步到 ${USER}@${HOST}:${PATH_REMOTE}"
/usr/bin/sshpass -p "$PASS" ssh -o StrictHostKeyChecking=no -p "$PORT" \
  "$USER@$HOST" "mkdir -p $PATH_REMOTE"

cd dist
tar czf - . | /usr/bin/sshpass -p "$PASS" ssh -o StrictHostKeyChecking=no -p "$PORT" \
  "$USER@$HOST" "cd $PATH_REMOTE && tar xzf -"

echo ""
echo "=========================================="
echo "  部署成功！"
echo "  预览地址: $PREVIEW"
echo "=========================================="
