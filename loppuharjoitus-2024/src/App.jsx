import { useState } from 'react';
import CourseItem from './CourseItem.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddNotes from "./AddNotes.jsx"
import AddCourse from './AddCourse.jsx';
import ViewNotes from './ViewNotes.jsx';
import HomePage from "./HomePage.jsx";

function App() {

  let courses = [
    {
      id: 0,
      name: 'versionhallinta',
    },
    {
      id: 1,
      name: 'java',
    },
    {
      id: 2,
      name: 'ruotsi',
    },
    {
      id: 3,
      name: 'ohjelmointi 1',
    },
  ];

  return (
    <Router>
      <Routes>
        {/* Kotisivun reitti */}
        <Route path="/" element={<HomePage />} />

        {/* Muut reitit */}
        <Route path="/add-notes" element={<AddNotes />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/view-notes" element={<ViewNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
