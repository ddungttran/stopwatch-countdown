import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Easy from "./Easy";
import Medium from "./Medium";
import Hard from "./Hard";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/easy">Easy</Link></li>
            <li><Link to="/medium">Medium</Link></li>
            <li><Link to="/hard">Hard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
