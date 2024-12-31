import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import useNoteStore from "./store/useNoteStore";
import useCourseStore from "./store/useCourseStore";
import CourseSelector from "./CourseSelector";
import NotesList from "./NotesList";

function ViewNotes() {
  const notes = useNoteStore((state) => state.notes);
  const fetchNotes = useNoteStore((state) => state.fetchNotes);

  const courses = useCourseStore((state) => state.courses);
  const fetchCourses = useCourseStore((state) => state.fetchCourses);

  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    fetchNotes();
    fetchCourses();
  }, [fetchNotes, fetchCourses]);

  const filteredNotes = selectedCourse
    ? notes.filter((note) => note.course.name === selectedCourse)
    : notes;

  return (
    <>
    <div class="container">
      <div>
          <BackButton />
          <CourseSelector 
            courses={courses} 
            selectedCourse={selectedCourse} 
            onChange={setSelectedCourse} 
          />
      </div>
      <div>
        <NotesList notes={filteredNotes} />
      </div>
    </div>
    </>
  );
}

export default ViewNotes;
