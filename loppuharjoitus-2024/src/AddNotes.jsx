import React, {useEffect} from "react";

import BackButton from "./BackButton";
import useNoteStore from "./store/useNoteStore";


function AddNotes (){

    const notes = useNoteStore((state) => state.notes);
    const fetchNotes = useNoteStore((state) => state.fetchNotes);

    useEffect(() => {
      fetchNotes();
    }, [fetchNotes]);

    return(
    <>
    <BackButton />

      <div>
        <p>Add new notes for course</p>
      </div>
      
      <p>Course:</p>

      <div>
        <select name="kurssi" id="">
          <option value="kurssi1">Versionhallinta</option>
          <option value="kurssi2">Java</option>
          <option value="kurssi3">Ruotsi</option>
          <option value="kurssi4">Ohjelmointi1</option>
        </select>
      </div>
      
      <div>
        <textarea name="" id=""></textarea>
      </div>

      <div>
        <button>Save</button>
        <button>Back</button>
      </div>

      <div>
        <h2>Muistiinpanot</h2>

        <ul>
          {notes.map((notes, i) => (
            <li key={i}>{notes.text}</li>
          ))}
        </ul>
      </div>

    </>
    )
}

export default AddNotes;