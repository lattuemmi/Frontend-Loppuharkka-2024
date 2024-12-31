import React, { useState } from "react";

function CourseForm({ onAddCourse, courses }) {
  const [courseName, setCourseName] = useState("");

  const handleAddCourse = () => {
    const newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 0;
    const newCourse = { id: newId, name: courseName };
    onAddCourse(newCourse);

    alert(`Course added successfully!\nID: ${newCourse.id}\nName: ${newCourse.name}`);
    setCourseName("");
  };

  return (
    <div>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Enter course name"
      />
      <button onClick={handleAddCourse}>Add course</button>
    </div>
  );
}

export default CourseForm;
