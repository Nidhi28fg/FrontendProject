import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Recommend from "./component/Recommend";
import Placement from "./component/Placement";
import Certification from "./component/Certification";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Testimonials from "./component/Testimonial";
import Category from "./component/Category";
import Internship from "./pages/Internship";
import InternshipDetail from "./pages/InternshipDetail";
import Course from "./pages/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Recommend />
              <Category />
              <Placement />
              <Certification />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/internship" element={<Internship />} />
         <Route path="/internshipdetail/:id" element={<InternshipDetail />} />
          <Route path="/course" element={<Course/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
