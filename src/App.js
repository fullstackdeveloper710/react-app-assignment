import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="main-root">
      <Header />
      <div className="main-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
