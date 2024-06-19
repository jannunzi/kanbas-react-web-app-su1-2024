import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "../Courses/client";
import * as enrollmentClient from "../Courses/Enrollments/client";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const [publishedCourses, setPublishedCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const fetchEnrolledCourses = async () => {
    const courses = await enrollmentClient.findMyEnrollments();
    setEnrolledCourses(courses);
  };
  const fetchPublishedCourses = async () => {
    const courses = await client.fetchPublishedCourses();
    setPublishedCourses(courses);
  };
  const enrollInCourse = async (courseId: string) => {
    await enrollmentClient.createEnrollment(courseId);
    fetchEnrolledCourses();
  };
  const unenrollFromCourse = async (courseId: string) => {
    await enrollmentClient.deleteEnrollment(courseId);
    fetchEnrolledCourses();
  };
  useEffect(() => {
    fetchPublishedCourses();
    fetchEnrolledCourses();
  }, []);
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">My Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {publishedCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none"
              >
                <div className="card rounded-3 overflow-hidden">
                  {" "}
                  <img src="/images/reactjs.jpg" />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      {course.name}
                    </span>

                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                    <a
                      href="#/Kanbas/Courses/1234/Home"
                      className="btn btn-primary"
                    >
                      {" "}
                      Go{" "}
                    </a>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>

                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <h2 id="wd-dashboard-published">
        Courses I'm enrolled in ({enrolledCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {enrolledCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none"
              >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          unenrollFromCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                      >
                        Unenroll
                      </button>
                      {course.name}
                    </span>

                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                    <a
                      href="#/Kanbas/Courses/1234/Home"
                      className="btn btn-primary"
                    >
                      Go
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <h2 id="wd-dashboard-published">All Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <img src="/images/reactjs.jpg" />
                <div className="card-body">
                  <span
                    className="wd-dashboard-course-link"
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    <button
                      onClick={() => enrollInCourse(course._id)}
                      className="btn btn-success float-end"
                    >
                      Enroll
                    </button>
                    {course.name}
                  </span>

                  <p
                    className="wd-dashboard-course-title card-text"
                    style={{ maxHeight: 53, overflow: "hidden" }}
                  >
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
