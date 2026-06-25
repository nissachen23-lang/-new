import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 部署在子路径 /-new/ 下，本地开发使用根路径
const base = process.env.GITHUB_ACTIONS ? '/-new/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
