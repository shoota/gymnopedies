import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [
    react({
      plugins: [["@swc/plugin-emotion", {}]],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "index",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
        },
      },
    },
  },
})
