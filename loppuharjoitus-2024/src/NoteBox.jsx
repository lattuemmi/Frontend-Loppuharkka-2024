import React, { useEffect } from "react";
import useNoteStore from "./store/useNoteStore";


function NoteBox({note}){

    const removeNote = useNoteStore((state) => state.removeNote);

    const handleDelete = () => {
        if ( window.confirm("Are you sure you want to delete this ntoe?")){
            removeNote(note.id);
        }
    }

    return(

        <div>
            <h3>{note.course.name}</h3>
            <p>{note.text}</p>
            <small>{note.timestamp}</small>
            <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
                Delete
            </button>
        </div>
    )
}

export default NoteBox;