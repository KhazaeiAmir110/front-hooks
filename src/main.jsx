import {createRoot} from "react-dom/client"
import TestApp from "./App.jsx";
import {StrictMode} from "react";


const root = document.getElementById("root")

createRoot(root).render(
    <StrictMode>
        <TestApp/>
    </StrictMode>
)
