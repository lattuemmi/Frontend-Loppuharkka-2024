import React from "react";
import NewNoteBox from "./NewNoteBox";

function NewNotesList({ notes }) {
  return (
    <div>
      {notes.length > 0 && (
        <>
          <h3>New Notes Added:</h3>
          <ul>
            {notes.map((note) => (
              <li key={note.id}>
                <NewNoteBox note={note} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default NewNotesList;
