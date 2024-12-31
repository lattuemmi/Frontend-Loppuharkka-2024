import React from "react";

function NoteInput({ noteText, onTextChange}){
    return(
        <div>
        <textarea
          name="noteText"
          id="noteText"
          value={noteText}
          onChange={(e) => onTextChange(e.target.value)}
        />
      </div>
    );
}

export default NoteInput;