import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // BrowserRouter --> Router icin as Router yazildi.
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher"
import CourseCard from "./pages/CourseCard"
import Paths from "./pages/Paths";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div>
      <Router>
      <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/courses" element={<CourseCard/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/paths" element={<Paths/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
