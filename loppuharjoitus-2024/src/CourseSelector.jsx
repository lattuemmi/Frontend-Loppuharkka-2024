import React from "react";

function CourseSelector({courses, selectedCourse, onChange}){
  return(
    <div>
        <p>Course:</p>
        <select 
            name="kurssi" 
            id="courseDropdown" 
            value={selectedCourse}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="">All</option>
            {courses.map((course) => (
            <option key={course.id} value={course.name}>
                {course.name}
            </option>
            ))}
        </select>
    </div>
  );
}

export default CourseSelector;