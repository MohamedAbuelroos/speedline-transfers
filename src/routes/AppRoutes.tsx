import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Fleet from "../pages/Fleet/Fleet";
import Services from "../pages/services/Services";
import Packages from "../pages/Packages/Packages";
import Booking from "../pages/Booking/Booking";
import About from "../pages/About/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/services" element={<Services />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
