import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomCTASection = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I would like to book a custom transfer. Can you assist me?",
    );

    window.open(`https://wa.me/966500000000?text=${message}`, "_blank");
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Box
          sx={{
            backgroundColor: "#1FB1F90D",
            borderRadius: "20px",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* LEFT */}
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Don’t see your destination?
            </Typography>

            <Typography color="text.secondary">
              We provide custom city-to-city transfers anywhere in Saudi Arabia.
              Contact our concierge for a personalized quote.
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={() => navigate("/booking")}
              sx={{
                backgroundColor: "white",
                borderRadius: "999px",
                textTransform: "none",
                px: 3,
              }}
            >
              Request Custom Quote
            </Button>

            <Button
              variant="contained"
              onClick={handleWhatsApp}
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                px: 3,
                backgroundColor: "#25D366FF",
              }}
            >
              WhatsApp Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomCTASection;
