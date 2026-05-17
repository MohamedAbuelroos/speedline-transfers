import { Box, Button, Typography } from "@mui/material";
import useDelayedNavigate from "../../../../hooks/useDelayedNavigate";

const HeroContent = () => {
  const navigate = useDelayedNavigate();

  return (
    <Box>
      {/* BADGE */}
      <Box
        sx={{
          display: "inline-flex",

          alignItems: "center",

          gap: 1,

          px: 2,
          py: 1,

          borderRadius: "999px",

          backgroundColor: "rgba(255,255,255,0.08)",

          backdropFilter: "blur(10px)",

          border: "1px solid rgba(255,255,255,0.12)",

          color: "#fff",

          fontSize: 13,

          fontWeight: 700,

          mb: 3,
        }}
      >
        Trusted Transportation Across Saudi Arabia
      </Box>

      {/* TITLE */}
      <Typography
        component={"h1"}
        sx={{
          color: "#fff",

          fontWeight: 900,

          lineHeight: 1.05,

          letterSpacing: "-2px",

          maxWidth: 850,

          mb: 3,

          fontSize: {
            xs: 44,
            sm: 58,
            md: 68,
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
          In Comfort &
        </Box>{" "}
        Confidence
      </Typography>

      {/* SUBTITLE */}
      <Typography
        sx={{
          color: "rgba(255,255,255,0.78)",

          fontSize: {
            xs: 16,
            md: 18,
          },

          lineHeight: 1.9,

          maxWidth: 650,

          mb: 5,
        }}
      >
        Seamless airport transfers, intercity transportation, and professional
        chauffeur services across the Kingdom.
      </Typography>

      {/* BUTTONS */}
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",

          gap: 2,

          mb: 5,
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/booking")}
          sx={{
            px: 4,
            py: 1.4,

            borderRadius: "999px",

            textTransform: "none",

            fontSize: 15,

            fontWeight: 700,

            background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

            boxShadow: "0 5px 20px rgba(31,177,249,0.3)",
          }}
        >
          Book Your Ride
        </Button>

        <Button
          variant="outlined"
          href="https://wa.me/+201022225621?text=Hello,%20I%20want%20to%20book%20a%20custom%20transfer"
          target="_blank"
          sx={{
            px: 4,
            py: 1.4,

            borderRadius: "999px",

            textTransform: "none",

            fontSize: 15,

            fontWeight: 700,

            borderColor: "rgba(255,255,255,0.2)",

            color: "#fff",

            backdropFilter: "blur(10px)",

            backgroundColor: "rgba(255,255,255,0.04)",
            "&:hover": {
              borderColor: "rgba(255,255,255,0.4)",
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#fff",
              transition: "0.3s",
            },
          }}
        >
          Chat with Us
        </Button>
      </Box>

      {/* TRUST */}
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",

          gap: {
            xs: 2,
            md: 4,
          },
        }}
      ></Box>
    </Box>
  );
};

export default HeroContent;
