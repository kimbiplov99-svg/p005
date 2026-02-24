import "./App.css";

const courses = [
  {
    title: "Data Structure and Algorithms",
    duration: "40hrs",
    fee: "Rs. 100",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  },
  {
    title: "Java Programming",
    duration: "30hrs",
    fee: "Rs. 80",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    title: "React JS",
    duration: "40hrs",
    fee: "Rs. 120",
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    title: "Machine Learning",
    duration: "35hrs",
    fee: "Rs. 200",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
  },
];

function App() {
  return (
    <div className="app">
      {}
      <header className="header">
        <h2>Course Catalog - 2500031486 - Biplob M.</h2>
      </header>

      {}
      <div className="course-container">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <img src={course.image} alt={course.title} />
            <div className="card-body">
              <h3>{course.title}</h3>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Course Fee:</strong> {course.fee}
              </p>
            </div>
          </div>
        ))}
      </div>

      {}
      <footer className="footer">
        Copyright © 2026. All rights reserved. Biplob M. 
      </footer>
    </div>
  );
}

export default App;