import { useEffect, useState } from "react";

import BackButton from "./BackButton";
import useNoteStore from "./store/useNoteStore";
import useCourseStore from "./store/useCourseStore";
import NoteBox from "./NoteBox";

function ViewNotes(){

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

    return(
    <>
    <BackButton />

    <p>Course:</p>

      <div>
        <select 
        name="kurssi" 
        id="courseDropdown"
        onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">All</option>
          {courses.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => <NoteBox key={note.id} note={note} />)
        ) : (
            <p>No notes available for this course</p>
        )}
      </div>


    </>
    )
}

export default ViewNotes;