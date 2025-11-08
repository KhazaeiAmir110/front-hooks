import "../css/notes/App.css"
import AddNewNote from "../components/notes/AddNewNote.jsx";
import NoteList from "../components/notes/NoteList.jsx";
import {useState} from "react";
import NoteStatus from "../components/notes/NoteStatus.jsx";

function CourseListPage(){
    const [notes, setNotes] = useState([]);

    const handelNote = (newNote) => {
        setNotes((prevNote) => [...prevNote, newNote]);
    }

    const handelDeleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    }

    const handelCompleteNote = (e) => {
        const noteId = e.target.value;
        const newNotes = notes.map(
            (note) => note.id === noteId ? {...note, completed : !note.completed} : note
        );
        setNotes(newNotes);
    }

    return (
        <div className="container">
            <div className="note-header">header</div>
            <div className="note-app">
                <AddNewNote onAddNewNode={handelNote}/>
                <div className="note-container">
                    <NoteStatus notes={notes}/>
                    <NoteList notes={notes} onDeleteNote={handelDeleteNote} onCompleteNote={handelCompleteNote}/>
                </div>
            </div>
        </div>
    )
}

export default CourseListPage;