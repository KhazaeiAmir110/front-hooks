import {createRoot} from "react-dom/client"
import {StrictMode} from "react";

import TestApp from "./page/CourseListPage.jsx";
import LinePublic from "./components/public/LinePublic.jsx";

import "./css/courseList/index.css"
import "./css/tabMarkup/index.css"


const root = document.getElementById("root")

createRoot(root).render(
    <StrictMode>
        <TestApp/>
        <LinePublic/>
    </StrictMode>
)
