import { Box, Container, Typography, Button, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CTASection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box
          sx={{
            backgroundImage: "linear-gradient(135deg, #1FB1F9 0%, #F5993DFF 100%)",
            borderRadius: "20px",
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            color: "#fff",
          }}
        >
          {/* LEFT */}
          <Box sx={{ textAlign: { xs: "center", md: "left", maxWidth: 600 } }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Not seeing your preferred vehicle?
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 3 }}>
              We specialize in custom fleet solutions for VIPs, corporate
              events, and large group transfers. Contact our concierge for
              specialized requests.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#199ad8",
                  },
                }}
              >
                Contact Support
              </Button>

              <Button
                variant="contained"
                sx={{
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  backgroundColor: "transparent",
                  color:"white"
                }}
              >
                Custom Quote
              </Button>
            </Box>
          </Box>

          {/* RIGHT BOX */}
          <Box
            sx={{
              borderRadius: "16px",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              boxShadow: "2px 2px 2px rgba(201, 201, 201, 0.05)",
              p: 3,
              minWidth: 320,
            }}
          >
            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <PhoneIcon
                sx={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  background: "#1FB1F9",
                  borderRadius: "50%",
                  p: 1,
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                  Call Us 24/7
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +966 50 000 0000
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Response Time */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <AccessTimeIcon
                sx={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  background: "#1fb0f9e1",
                  borderRadius: "50%",
                  p: 1,
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                  Avg Response Time
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2 Minutes
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
