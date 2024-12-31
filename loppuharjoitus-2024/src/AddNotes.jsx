import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import useNoteStore from "./store/useNoteStore";
import useCourseStore from "./store/useCourseStore";
import CourseSelector from "./CourseSelector";
import NoteInput from "./NoteInput";
import NewNotesList from "./NewNotesList";

function AddNotes() {
  const addNote = useNoteStore((state) => state.addNote);
  const courses = useCourseStore((state) => state.courses);
  const fetchCourses = useCourseStore((state) => state.fetchCourses);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [noteText, setNoteText] = useState("");
  const [newNotes, setNewNotes] = useState([]);
  const [isCourseLocked, setIsCourseLocked] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleSave = () => {
    if (!selectedCourse) {
      alert(`Please select a course first!`);
      return;
    }
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
        setIsCourseLocked(true); 
      }
    }
  };

  return (
    <>
    <div class="container">
    <BackButton />

    <h5>Add new notes for course</h5>

      <CourseSelector
        courses={courses}
        selectedCourse={selectedCourse}
        onChange={(value) => {
          if (!isCourseLocked) {
            setSelectedCourse(value);
          }
        }}
        disabled={isCourseLocked}
      />
      <NoteInput noteText={noteText} onTextChange={setNoteText} />
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <NewNotesList notes={newNotes} />
    </div>
    </>
  );
}

export default AddNotes;
