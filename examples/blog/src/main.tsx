import React from "react"
import ReactDOM from "react-dom/client"

import "@blog/styles/blog.css"
import { App } from "@blog/App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
