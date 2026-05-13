import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

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
  },
})
