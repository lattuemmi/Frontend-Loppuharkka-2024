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
  const [newNotes, setNewNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
    fetchCourses();
  }, [fetchNotes, fetchCourses]);

  const handleSave = () => {
    if (selectedCourse && noteText) {
      const course = courses.find((c) => c.name === selectedCourse);
      if (course) {
        const createdNote = {
          id: course.id,
          course: { name: course.name },
          text: noteText,
          timestamp: new Date().toISOString(),
        };
        addNote(createdNote);
        setNewNotes((prevNotes) => [createdNote, ...prevNotes]);
        setNoteText("");
      }
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
      </div>

      {newNotes.length > 0 && (
        <div>
          <h3>New Notes Added:</h3>
          <ul>
            {newNotes.map((note) => (
              <li key={note.id}>
                <NoteBox note={note} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default AddNotes;
