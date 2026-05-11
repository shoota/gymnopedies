import React from "react"
import ReactDOM from "react-dom/client"
import "@/styles/globals.css"

const App = () => (
  <main className="min-h-screen flex items-center justify-center p-12 bg-background text-foreground">
    <div className="max-w-xl space-y-4 text-center">
      <h1 className="text-5xl">Gymnopédies</h1>
      <p className="text-muted-foreground">
        A shadcn registry of dark, serif, glow-leaning components for
        long-form reading experiences. Browse the catalog via Storybook.
      </p>
      <a
        className="inline-block underline decoration-primary"
        href="/storybook"
      >
        Open Storybook →
      </a>
    </div>
  </main>
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
