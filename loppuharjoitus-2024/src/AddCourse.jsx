import React, {useState} from "react";
import Popup from "reactjs-popup";

import CourseList from "./CourseList";
import BackButton from "./BackButton";
import useCourseStore from "./store/useCourseStore";

function AddCourse(){

    
    const [courseName, setCourseName] = useState("");
    const addCourse = useCourseStore((state) => state.addCourse);
    const courses = useCourseStore((state) => state.courses);

    const handleAddCourse = () => {
        const newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 0;

        const newCourse = {id: newId, name:courseName };
        addCourse(newCourse);

        alert(`Course added successfully!\nID: ${newCourse.id}\nName: ${newCourse.name}`);
        setCourseName("");
    }

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    

    return(
    <>
    <BackButton />

    <div>
        <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Enter course name"
        />
        <button onClick={handleAddCourse}>Add course</button>
    </div>

    <CourseList />

    </>
    )
}

export default AddCourse;