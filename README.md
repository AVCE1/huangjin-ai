# huangjin-ai

黄金 AI 分析平台，前端使用 Next.js 静态导出，API 使用 Cloudflare Pages Functions。

## 本地开发

```bash
pnpm install
pnpm run build
```

## Cloudflare Pages 部署

连接 GitHub 仓库 `AVCE1/huangjin-ai` 后，Cloudflare Pages 建议配置：

- Framework preset: `Next.js`
- Build command: `pnpm run build`
- Build output directory: `out`
- Functions directory: `functions`

需要在 Cloudflare Pages 的环境变量中添加：

```text
DEEPSEEK_API_KEY=你的 DeepSeek API Key
```

如果没有配置 `DEEPSEEK_API_KEY`，页面可以打开，但点击分析会返回环境变量缺失错误。
