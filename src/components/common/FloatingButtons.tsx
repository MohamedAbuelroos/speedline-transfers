import { Box, Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* LEFT SIDE (WhatsApp + Call) */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 80, md: 20 },
          left: 20,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 1000,
        }}
      >
        {/* WhatsApp */}
        <Fab
          sx={{ backgroundColor: "#25D366", color: "#fff" }}
          href="https://wa.me/966500000000"
          target="_blank"
        >
          <WhatsAppIcon />
        </Fab>

        {/* Call */}
        <Fab
          sx={{ backgroundColor: "#1FB1F9", color: "#fff" }}
          href="tel:+966500000000"
        >
          <PhoneIcon />
        </Fab>
      </Box>

      {/* SCROLL TO TOP */}
      <Zoom in={showScroll}>
        <Box
          sx={{
            position: "fixed",
            bottom: { xs: 80, md: 20 },
            right: 20,
            zIndex: 1000,
          }}
        >
          <Fab
            sx={{ backgroundColor: "#1FB1F9", color: "#fff" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </>
  );
};

export default FloatingButtons;
