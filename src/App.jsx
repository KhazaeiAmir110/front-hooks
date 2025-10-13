import "./css/App.css"
import CourseList from "./components/CourseList.jsx";
import Header from "./components/Header.jsx";

export function App() {
    return (
        <div>
            <Header/>
            <CourseList/>
        </div>
    )
}

export default App; // default export


