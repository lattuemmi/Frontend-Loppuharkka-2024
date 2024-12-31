import React, { useState } from "react";
import BackButton from "./BackButton";
import useCourseStore from "./store/useCourseStore";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";

function AddCourse() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const courses = useCourseStore((state) => state.courses);

  return (
    <>
      <BackButton />
      <CourseForm onAddCourse={addCourse} courses={courses} />
      <CourseList />
    </>
  );
}

export default AddCourse;
