import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddNotes from "./AddNotes.jsx"
import AddCourse from './AddCourse.jsx';
import ViewNotes from './ViewNotes.jsx';
import HomePage from "./HomePage.jsx";
import './App.css';

function App() {

  return (
    <div class="main">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/add-notes" element={<AddNotes />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/view-notes" element={<ViewNotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
