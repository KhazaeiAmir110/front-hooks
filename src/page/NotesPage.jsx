import "../css/notes/App.css"
import AddNewNote from "../components/notes/AddNewNote.jsx";
import NoteList from "../components/notes/NoteList.jsx";
import {useState} from "react";

function CourseListPage(){
    const [notes, setNotes] = useState([]);

    const handelNote = (newNote) => {
        setNotes((prevNote) => [...prevNote, newNote]);
    }

    return (
        <div className="container">
            <div className="note-header">header</div>
            <div className="note-app">
                <AddNewNote onAddNewNode={handelNote}/>
                <div className="note-container">
                    <NoteList notes={notes}/>
                </div>
            </div>
        </div>
    )
}

export default CourseListPage;