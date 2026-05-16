
import { Box, Button, Container, Typography } from "@mui/material";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: {
          xs: 10,
          md: 14,
        },

        background: "linear-gradient(to bottom, #ffffff 0%, #f8fbff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",

            overflow: "hidden",

            borderRadius: "40px",

            px: {
              xs: 3,
              md: 8,
            },

            py: {
              xs: 7,
              md: 9,
            },

            textAlign: "center",

            background:
              "linear-gradient(135deg, rgba(3,27,45,0.97) 0%, rgba(11,52,80,0.96) 100%)",

            boxShadow: "0 30px 80px rgba(3,27,45,0.12)",
          }}
        >
          {/* BACKGROUND GLOW */}
          <Box
            sx={{
              position: "absolute",

              top: -120,
              right: -120,

              width: 350,
              height: 350,

              borderRadius: "50%",

              background:
                "radial-gradient(circle, rgba(31,177,249,0.14) 0%, transparent 70%)",
            }}
          />

          <Box
            sx={{
              position: "absolute",

              bottom: -140,
              left: -120,

              width: 350,
              height: 350,

              borderRadius: "50%",

              background:
                "radial-gradient(circle, rgba(245,153,61,0.10) 0%, transparent 70%)",
            }}
          />

          {/* CONTENT */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* TITLE */}
            <Typography
              sx={{
                color: "#fff",

                fontWeight: 900,

                lineHeight: 1.15,

                mb: 3,

                fontSize: {
                  xs: 36,
                  md: 56,
                },
              }}
            >
              Travel Saudi Arabia
              <br />
              <Box
                component="span"
                sx={{
                  color: "#1FB1F9",
                }}
              >
                With Comfort & Confidence
              </Box>
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",

                maxWidth: 700,

                mx: "auto",

                lineHeight: 1.9,

                fontSize: {
                  xs: 15,
                  md: 17,
                },

                mb: 5,
              }}
            >
              Join thousands of travelers who trust SpeedLine Transfers for
              transportation across Saudi Arabia.
            </Typography>

            {/* BUTTONS */}
            <Box
              sx={{
                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                flexWrap: "wrap",

                gap: 2,

                mb: 5,
              }}
            >
              {/* PRIMARY */}
              <Button
                variant="contained"
                onClick={() => navigate("/booking")}
                sx={{
                  background:
                    "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                  color: "#fff",

                  px: 4,
                  py: 1.5,

                  borderRadius: "999px",

                  textTransform: "none",

                  fontWeight: 800,

                  fontSize: 15,

                  boxShadow: "0 15px 40px rgba(31,177,249,0.25)",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #1aa3e8 0%, #1488c0 100%)",
                  },
                }}
              >
                Book Your Transfer
              </Button>

              {/* SECONDARY */}
              <Button
                variant="outlined"
                onClick={() => navigate("/contact")}
                sx={{
                  borderColor: "rgba(255,255,255,0.2)",

                  color: "#fff",

                  px: 4,
                  py: 1.5,

                  borderRadius: "999px",

                  textTransform: "none",

                  fontWeight: 700,

                  fontSize: 15,

                  "&:hover": {
                    borderColor: "#fff",

                    backgroundColor: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>

            {/* FEATURES */}
            <Box
              sx={{
                display: "flex",

                justifyContent: "center",

                flexWrap: "wrap",

                gap: {
                  xs: 2,
                  md: 4,
                },
              }}
            >
              {["Instant Confirmation", "Secure Booking", "24/7 Support"].map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",

                      alignItems: "center",

                      gap: 1,
                    }}
                  >
                    <CheckCircleOutlineRoundedIcon
                      sx={{
                        color: "#1FB1F9",

                        fontSize: 18,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.72)",

                        fontSize: 14,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ),
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
