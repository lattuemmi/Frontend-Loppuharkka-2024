import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
    return(
      <div>
          <nav class="nav-list">
            <li class="nav-button"><Link to="/add-notes">Create Notes</Link></li>
            <li class="nav-button"><Link to="/add-course">Add course</Link></li>
            <li class="nav-button"><Link to="/view-notes">View Notes</Link></li>
          </nav>
      </div>
    )
  }

  export default Home;