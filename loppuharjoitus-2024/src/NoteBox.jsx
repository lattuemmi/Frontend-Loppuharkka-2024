import React, { useEffect } from "react";
import useNoteStore from "./store/useNoteStore";


function NoteBox({note}){

    const removeNote = useNoteStore((state) => state.removeNote);

    const handleDelete = () => {
        if ( window.confirm("Are you sure you want to delete this note?")){
            removeNote(note.id);
        }
    }

    return(

        <div className="note-box">
            <h3>{note.course.name}</h3>
            <p>{note.text}</p>
            <small>{note.timestamp}</small>
            <button class="delete-button" onClick={handleDelete}>
                🗑️
            </button>
        </div>
    )
}

export default NoteBox;