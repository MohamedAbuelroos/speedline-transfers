import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import { lazy, Suspense } from "react";
import Loader from "../components/common/Loader";

const AboutPage = lazy(() => import("../pages/About/About"));
const FleetPage = lazy(() => import("../pages/Fleet/Fleet"));
const ServicesPage = lazy(() => import("../pages/services/Services"));
const PackagesPage = lazy(() => import("../pages/Packages/Packages"));
const BookingPage = lazy(() => import("../pages/Booking/Booking"));
const ContactPage = lazy(() => import("../pages/Contact/ContactPage"));
const PackageDetails = lazy(
  () => import("../pages/PackageDetails/PackageDetails"),
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:slug" element={<PackageDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
