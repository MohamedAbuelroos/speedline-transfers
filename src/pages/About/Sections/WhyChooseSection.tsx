import { Box, Container, Grid, Typography } from "@mui/material";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const benefits = [
  {
    title: "Professional Chauffeurs",
    description:
      "Highly trained multilingual drivers with extensive knowledge of Saudi routes and premium hospitality.",

    icon: <VerifiedUserOutlinedIcon />,
  },

  {
    title: "Luxury Fleet",
    description:
      "Executive SUVs, luxury sedans, and spacious vans maintained to the highest standards.",

    icon: <DirectionsCarFilledOutlinedIcon />,
  },

  {
    title: "Flight Monitoring",
    description:
      "Real-time flight tracking ensures smooth airport pickups even during delays.",

    icon: <FlightTakeoffOutlinedIcon />,
  },

  {
    title: "Transparent Pricing",
    description:
      "Fixed pricing with no hidden fees. Clear luxury transportation rates.",

    icon: <BoltOutlinedIcon />,
  },

  {
    title: "Meet & Greet",
    description:
      "Personalized airport arrival assistance with professional reception service.",

    icon: <HandshakeOutlinedIcon />,
  },

  {
    title: "24/7 Support",
    description:
      "Dedicated support team available anytime via WhatsApp, phone, or email.",

    icon: <HeadsetMicOutlinedIcon />,
  },

  {
    title: "Multilingual Support",
    description:
      "Arabic, English, Urdu, and multilingual communication assistance.",

    icon: <PublicOutlinedIcon />,
  },

  {
    title: "VIP Experience",
    description:
      "Premium hospitality experience tailored for executives, families, and pilgrims.",

    icon: <WorkspacePremiumOutlinedIcon />,
  },
];

const WhyChooseSection = () => {
  return (
    <Box
      sx={{
        py: {
          xs: 10,
          md: 10,
        },
        px: {
          xs: 2,
          md: 10,
        },

        background: "linear-gradient(to bottom, #ffffff 0%, #f8fbff 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",

            mb: 8,
          }}
        >
          {/* SMALL BADGE */}
          <Box
            sx={{
              display: "inline-flex",

              px: 2,
              py: 0.7,

              borderRadius: "999px",

              backgroundColor: "#e0f2fe",

              border: "1px solid rgba(31,177,249,0.2)",

              color: "#1FB1F9",

              fontWeight: 700,

              fontSize: 13,

              mb: 3,
            }}
          >
            WHY CHOOSE SPEEDLINE
          </Box>

          {/* TITLE */}
          <Typography
            sx={{
              fontSize: {
                xs: 36,
                md: 48,
              },

              lineHeight: 1.1,

              fontWeight: 900,

              color: "#111827",

              mb: 2,
            }}
          >
            The Gold Standard
            <br />
            of Luxury Transfers
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              maxWidth: 700,

              mx: "auto",

              color: "#6b7280",

              lineHeight: 1.9,

              fontSize: 17,
            }}
          >
            Discover why business travelers, families, pilgrims, and VIP guests
            choose SpeedLine Transfers for seamless premium transportation
            across Saudi Arabia.
          </Typography>
        </Box>

        {/* BENEFITS GRID */}
        <Grid container spacing={3}>
          {benefits.map((item, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                lg: 3,
              }}
            >
              <Box
                sx={{
                  height: "100%",

                  p: 4,

                  borderRadius: "32px",

                  backgroundColor: "#fff",

                  border: "1px solid rgba(31,177,249,0.08)",

                  boxShadow: "0 10px 40px rgba(15,23,42,0.05)",

                  transition: "0.35s",

                  position: "relative",

                  overflow: "hidden",

                  "&:hover": {
                    transform: "translateY(-8px)",

                    boxShadow: "0 20px 60px rgba(31,177,249,0.15)",

                    borderColor: "rgba(31,177,249,0.2)",
                  },

                  "&::before": {
                    content: '""',

                    position: "absolute",

                    top: 0,
                    left: 0,

                    width: "100%",
                    height: 5,

                    background:
                      "linear-gradient(135deg, #1FB1F9 0%, #F5993D 100%)",
                  },
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,

                    borderRadius: "24px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    mb: 3,

                    background:
                      "linear-gradient(135deg, rgba(31,177,249,0.12) 0%, rgba(245,153,61,0.12) 100%)",

                    color: "#1FB1F9",

                    "& svg": {
                      fontSize: 34,
                    },
                  }}
                >
                  {item.icon}
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontWeight: 800,

                    fontSize: 22,

                    color: "#111827",

                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "#6b7280",

                    lineHeight: 1.9,

                    fontSize: 15,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;
