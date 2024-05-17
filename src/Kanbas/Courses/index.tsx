import { Routes, Route } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Piazza" element={<h1>Piazza</h1>} />
            <Route path="/Zoom" element={<h1>Zoom</h1>} />
            <Route path="/Assignments" element={<h1>Assignments</h1>} />
            <Route path="/Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="/Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
