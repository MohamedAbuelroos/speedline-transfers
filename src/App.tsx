import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BottomNav from "./components/layout/BottomNav";
import FloatingButtons from "./components/common/FloatingButtons";
import ScrollToTop from "./utils/ScrollToTop";
import RouteChangeHandler from "./components/common/RouteChangeHandler";

import RouteLoader from "./components/common/RouteLoader";

import { useNavigationLoader } from "./context/NavigationLoaderContext";

function App() {
  const { loading } = useNavigationLoader();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <RouteChangeHandler />
      <RouteLoader loading={loading} />
      <AppRoutes />
      <BottomNav />
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
