import React from "react";
import NoteBox from "./NoteBox";

function NotesList({ notes }) {
  return (
    <div>
      {notes.length > 0 ? (
        <ul class="notes-list">
          {notes.map((note) => (
            <li key={note.id}>
              <NoteBox note={note} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes available for this course</p>
      )}
    </div>
  );
}

export default NotesList;
