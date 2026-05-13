import fs from "node:fs"
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const repoRoot = path.resolve(__dirname, "../..")

// Reuse the mkcert pair the root storybook script uses, only when both
// files are present and the script opted in via HTTPS=1.
const httpsConfig = (() => {
  if (process.env.HTTPS !== "1") return undefined
  const key = path.join(repoRoot, "localhost-key.pem")
  const cert = path.join(repoRoot, "localhost.pem")
  if (!fs.existsSync(key) || !fs.existsSync(cert)) return undefined
  return {
    key: fs.readFileSync(key),
    cert: fs.readFileSync(cert),
  }
})()

// The sample blog ships with the Storybook bundle on Vercel,
// served under https://<host>/examples/blog/.
export default defineConfig({
  root: __dirname,
  base: "/examples/blog/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../src"),
      "@blog": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../../storybook-static/examples/blog"),
    emptyOutDir: true,
  },
  server: {
    port: 6007,
    https: httpsConfig,
  },
  preview: {
    port: 6007,
    https: httpsConfig,
  },
})
