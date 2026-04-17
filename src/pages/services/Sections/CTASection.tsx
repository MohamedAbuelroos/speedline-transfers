import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box
          sx={{
            backgroundColor: "#1FB1F9",
            borderRadius: "24px",
            py: 6,
            px: 3,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          {/* Title */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Experience the Difference?
          </Typography>

          {/* Description */}
          <Typography sx={{ opacity: 0.9, mb: 4 }}>
            Book your next transfer in less than 60 seconds or chat with our
            24/7 support team on WhatsApp for a custom quote.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/booking")}
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "999px",
                px: 3,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              Book Online Now
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/fleet")}
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "999px",
                px: 3,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              Check Fleet Availability
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
