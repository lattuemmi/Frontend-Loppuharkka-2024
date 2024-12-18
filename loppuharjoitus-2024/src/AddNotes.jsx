import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import useNoteStore from "./store/useNoteStore";
import useCourseStore from "./store/useCourseStore";
import NoteBox from "./NoteBox";

function AddNotes() {
  const notes = useNoteStore((state) => state.notes);
  const fetchNotes = useNoteStore((state) => state.fetchNotes);
  const addNote = useNoteStore((state) => state.addNote);

  const courses = useCourseStore((state) => state.courses);
  const fetchCourses = useCourseStore((state) => state.fetchCourses);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [noteText, setNoteText] = useState("");
  const [newNote, setNewNote] = useState(null); 

  useEffect(() => {
    fetchNotes();
    fetchCourses();
  }, [fetchNotes, fetchCourses]);

  const handleSave = () => {
    if (selectedCourse && noteText) {
      const createdNote = {
        course: { name: selectedCourse },
        text: noteText,
        timestamp: new Date().toISOString(),
      };
      addNote(createdNote); 
      setNewNote(createdNote); 
      setNoteText("");
    }
  };

  return (
    <>
      <BackButton />
      <p>Add new notes for course</p>

      <p>Course:</p>
      <div>
        <select
          name="kurssi"
          id="courseDropdown"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          name="noteText"
          id="noteText"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleSave}>Save</button>
        <button>Back</button>
      </div>

      {newNote && (
        <div>
          <h3>New Note Added:</h3>
          <NoteBox note={newNote} /> 
        </div>
      )}
    </>
  );
}

export default AddNotes;
