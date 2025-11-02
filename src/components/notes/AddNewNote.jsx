import "../../css/notes/App.css"
import {useState} from "react";

function AddNewNote(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="add-new-note">
            <h2>Add New Note</h2>
            <form className="note-form" onSubmit={handelSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="text-field"
                    placeholder="Note title ..."/>
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="text-field"
                    placeholder="Note description ..."/>

                <button type="submit" className="btn btn--primary">Add New Note</button>
            </form>
        </div>
    );
}

export default AddNewNote;