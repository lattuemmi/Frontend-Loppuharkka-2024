import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App.jsx";

function Home() {
    return(
      <div>
        <div>
            <nav>
              <li><Link to="/add-notes">Add Notes</Link></li>
              <li><Link to="/add-course">Add course</Link></li>
              <li><Link to="/view-notes">View Notes</Link></li>
            </nav>
          </div>
      </div>
    )
  }

  export default Home;