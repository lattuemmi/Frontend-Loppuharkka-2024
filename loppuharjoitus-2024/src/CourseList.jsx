import {useState} from "react";
import React, { useEffect } from "react";

import useCourseStore from "./store/useCourseStore";

function CourseList (){
    const courses = useCourseStore((state) => state.courses);
    const fetchCourses = useCourseStore((state) => state.fetchCourses)


    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    return(
        <div>
            <h2>Kurssilista</h2>

            <ul>
                {courses.map((course, i) => (
                    <li key={i}>{course.name}</li>
                ))}
            </ul>
        </div>

        
    )

    
}

export default CourseList;