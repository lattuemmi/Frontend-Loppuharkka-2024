import React, { useState } from "react";
import BackButton from "./BackButton";
import useCourseStore from "./store/useCourseStore";
import CourseForm from "./CourseForm";


function AddCourse() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const courses = useCourseStore((state) => state.courses);

  return (
    <>
    <div>
        <BackButton />
        <CourseForm onAddCourse={addCourse} courses={courses} />
    </div>
    </>
  );
}

export default AddCourse;
