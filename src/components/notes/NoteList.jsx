import React from 'react';

function NoteList({notes, onDeleteNote, onCompleteNote}) {
    return (
        <div className="note-list">
            {
                notes.map((note, index) => (
                    <NoteItem key={index} note={note} onDeleteNote={onDeleteNote} onCompleteNote={onCompleteNote}/>
                ))
            }
        </div>
    );
}

export default NoteList;

function NoteItem({note, onDeleteNote, onCompleteNote}) {
    return (
        <div className={`note-item ${note.completed ? 'completed' : '' }`}>
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.description}</p>
                </div>
                <div className="actions">
                    <button onClick={() => onDeleteNote(note.id)}>❌</button>
                    <input name={note.id} id={note.id} value={note.id} onChange={onCompleteNote} type="checkbox" checked={note.checked}/>
                </div>
            </div>
            <div className="note-item__footer">
                {new Date().toLocaleDateString(
                    "en-US",
                    {
                        "year": "numeric",
                        "month": "long",
                        "day": "numeric"
                    })
                }
            </div>
        </div>
    )
}