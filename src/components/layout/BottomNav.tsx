import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { md: "none" },
        zIndex: 10,
      }}
      elevation={3}
    >
      <BottomNavigation value={location.pathname}>
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon />}
          onClick={() => navigate("/")}
        />

        <BottomNavigationAction
          label="Fleet"
          value="/fleet"
          icon={<DirectionsCarIcon />}
          onClick={() => navigate("/fleet")}
        />

        <BottomNavigationAction
          label="Booking"
          value="/booking"
          icon={<BookOnlineIcon />}
          onClick={() => navigate("/booking")}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;