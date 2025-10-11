import {createRoot} from "react-dom/client"
import {StrictMode} from "react";

import TestApp from "./App.jsx";
import "./css/index.css"


const root = document.getElementById("root")

createRoot(root).render(
    <StrictMode>
        <TestApp/>
    </StrictMode>
)
