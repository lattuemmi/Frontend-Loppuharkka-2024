
import { create } from "zustand";

const courseURL = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";

const useCourseStore = create((set) => ({
    courses: [],
    fetchCourses: async () => {
        const response = await fetch(courseURL);
        const data = await response.json();
        set((state) => ({
            courses: [...state.courses, ...data.filter(apiCourse => !state.courses.some(c => c.id === apiCourse.id))],
        }));
    },
    
    addCourse: (newCourse) => {
        set((state) => ({
            courses: [...state.courses, newCourse],
        }));
    },
}));

export default useCourseStore;