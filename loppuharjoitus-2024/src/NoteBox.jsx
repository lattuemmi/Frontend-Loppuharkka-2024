import React, { useEffect } from "react";
import useNoteStore from "./store/useNoteStore";


function NoteBox({note}){

    return(

        <div>
            <h3>{note.course.name}</h3>
            <p>{note.text}</p>
            <p>{note.timestamp}</p>
        </div>
    )
}

export default NoteBox;