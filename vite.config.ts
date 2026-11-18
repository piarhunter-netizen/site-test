import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Только для `npm run dev`: на проде /api/request обслуживает Vercel (api/request.ts).
function devRequestApi(env: Record<string, string>) {
  return {
    name: 'dev-request-api',
    configureServer(server) {
      server.middlewares.use('/api/request', async (req, res) => {
        const chunks: Buffer[] = []
        for await (const c of req) chunks.push(c as Buffer)
        let body = {}
        try { body = JSON.parse(Buffer.concat(chunks).toString() || '{}') } catch {}
        const { sendRequestToTelegram } = await server.ssrLoadModule('/api/_telegram.ts')
        const result = req.method === 'POST'
          ? await sendRequestToTelegram(body, env)
          : { status: 405, body: { ok: false, error: 'Method not allowed' } }
        res.statusCode = result.status
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(result.body))
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [
    figmaAssetResolver(),
    devRequestApi(loadEnv(mode, process.cwd(), '')),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
