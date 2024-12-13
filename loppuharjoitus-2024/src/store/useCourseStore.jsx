
import { create } from "zustand";

const courseURL = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";

const useCourseStore = create((set) => ({
    courses: [],
    fetchCourses: async () => {
        const response = await fetch(courseURL);
        const data = await response.json();
        set({ courses: data});
    },
}));

export default useCourseStore;