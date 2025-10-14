import {createRoot} from "react-dom/client"
import {StrictMode} from "react";

import TestApp from "./page/CourseListPage.jsx";
import "./css/courseList/index.css"


const root = document.getElementById("root")

createRoot(root).render(
    <StrictMode>
        <TestApp/>
    </StrictMode>
)
