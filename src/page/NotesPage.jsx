import "../css/notes/App.css"
import AddNewNote from "../components/notes/AddNewNote.jsx";

function CourseListPage(props){
    return (
        <div className="container">
            <div className="note-header">header</div>
            <div className="note-app">
                <AddNewNote/>
                <div className="note-container">container note</div>
            </div>
        </div>
    )
}

export default CourseListPage;