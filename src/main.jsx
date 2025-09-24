import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

export function App() {
    return (
        <StrictMode>
            <h1>Hello World!</h1>
        </StrictMode>
    )
}

const root = document.getElementById("root")

createRoot(root).render(
  <App />
)
