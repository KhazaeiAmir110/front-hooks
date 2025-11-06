import React from 'react';

function NoteList({notes}) {
    return (
        <div className="note-list">
            {
                notes.map((note, index) => (
                    <NoteItem key={index} note={note}/>
                ))
            }
        </div>
    );
}

export default NoteList;

function NoteItem({note}) {
    return (
        <div className="note-item">
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.description}</p>
                </div>
                <div className="actions">
                    <button>❌</button>
                    <input type="checkbox" checked={note.checked}/>
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