import { Box, Button, Container, Grid, Typography } from "@mui/material";

import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import heroImage from "../../../assets/about/about-hero.webp";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";

const stats = [
  {
    icon: <HeadsetMicOutlinedIcon />,
    title: "24/7 Support",
    subtitle: "Customer Care",
  },

  {
    icon: <VerifiedUserOutlinedIcon />,
    title: "Professional Drivers",
    subtitle: "Verified Expertise",
  },

  {
    icon: <DirectionsCarFilledOutlinedIcon />,
    title: "Latest Fleet",
    subtitle: "Exclusive Models",
  },

  {
    icon: <PublicOutlinedIcon />,
    title: "1000+ Happy Travelers",
    subtitle: "Global Trust",
  },
];

const HeroSection = () => {
  const navigate = useDelayedNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 64px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src={heroImage}
        alt="SpeedLine Transfers"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.82) 10%, rgba(0, 0, 0, 0.35) 60%, rgba(0, 0, 0, 0.5) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* CONTENT */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,

          py: {
            xs: 3,
            md: 5,
          },
          px: {
            xs: 2,
            md: 10,
          },
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: {
              xs: 38,
              md: 50,
            },

            lineHeight: 1.05,

            fontWeight: 900,

            color: "#fff",

            maxWidth: 900,

            mb: 3,
          }}
        >
          Professional Chauffeur
          <br />&{" "}
          <Box
            component="span"
            sx={{
              color: "#1FB1F9",
            }}
          >
            Transfer Experience
          </Box>
          <br />
          Across Saudi Arabia
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            fontSize: {
              xs: 16,
              md: 18,
            },

            lineHeight: 1.9,

            color: "rgba(255,255,255,0.82)",

            maxWidth: 700,

            mb: 5,
          }}
        >
          From corporate executives to religious pilgrims, we provide seamless
          luxury transportation services across all major Saudi cities with 24/7
          reliability.
        </Typography>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,

            mb: 8,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/booking")}
            sx={{
              px: 4,
              py: 1.5,

              borderRadius: "999px",

              textTransform: "none",

              fontWeight: 700,

              background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",
            }}
          >
            Book Your Transfer
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate("/packages")}
            sx={{
              px: 4,
              py: 1.5,

              borderRadius: "999px",

              textTransform: "none",

              fontWeight: 700,

              borderColor: "rgba(255,255,255,0.25)",

              color: "#fff",

              backdropFilter: "blur(12px)",

              backgroundColor: "rgba(255,255,255,0.05)",

              "&:hover": {
                borderColor: "#fff",
              },
            }}
          >
            Explore Packages
          </Button>
        </Box>

        {/* STATS */}
        <Grid container spacing={2}>
          {stats.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,

                  p: 3,

                  borderRadius: "24px",

                  backgroundColor: "rgba(17,24,39,0.72)",

                  backdropFilter: "blur(16px)",

                  border: "1px solid rgba(255,255,255,0.08)",

                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,

                    borderRadius: "18px",

                    backgroundColor: "rgba(31,177,249,0.15)",

                    color: "#1FB1F9",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",

                      fontSize: 12,

                      textTransform: "uppercase",

                      letterSpacing: 1,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",

                      fontWeight: 800,

                      fontSize: 18,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
