import "../css/courseList/App.css"
import CourseList from "../components/course/CourseList.jsx";
import Header from "../components/course/Header.jsx";

export function CourseListPage() {
    return (
        <div>
            <Header/>
            <CourseList/>
        </div>
    )
}

export default CourseListPage; // default export


