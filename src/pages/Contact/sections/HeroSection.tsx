import { Box, Container, Typography } from "@mui/material";

import heroImage from "../../../assets/images/ContactHero.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",

        minHeight: {
          xs: "55vh",
          md: "65vh",
        },

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={heroImage}
        alt="Contact Us"
        loading="lazy"
        sx={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "cover",
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background: "linear-gradient(rgba(7,16,24,0.72), rgba(7,16,24,0.74))",
        }}
      />

      {/* CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,

          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",

            fontWeight: 900,

            lineHeight: 1.15,

            mb: 3,

            fontSize: {
              xs: 40,
              md: 64,
            },
          }}
        >
          Let’s Plan Your Next Journey
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.82)",

            lineHeight: 1.9,

            fontSize: {
              xs: 16,
              md: 18,
            },

            maxWidth: 760,

            mx: "auto",
          }}
        >
          Our team is ready to assist you with bookings, inquiries, and
          personalized transportation solutions across Saudi Arabia.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
