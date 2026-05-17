import { Box, Button, Container, Grid, Typography } from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import airportImg from "../../../assets/images/AirService.jpg";
import religiousImg from "../../../assets/about/Umrah.png";
import cityImg from "../../../assets/about/CityToCity.jpg";
import vipImg from "../../../assets/about/VIPService.png";
import hourlyImg from "../../../assets/about/Hourly.png";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";
import CorporateImg from "../../../assets/about/Corporate .png";

const services = [
  {
    title: "Airport Transfers",

    description:
      "Professional airport arrivals and departures across all major Saudi airports with real-time flight monitoring.",

    image: airportImg,
  },

  {
    title: "Event Transportation",

    description:
      "Reliable group and individual transportation for weddings, conferences, exhibitions, sporting events.",

    image: religiousImg,
  },

  {
    title: "City-to-City Transfers",

    description:
      "Comfortable intercity rides between Riyadh, Jeddah, Madinah, Makkah, and beyond.",

    image: cityImg,
  },

  {
    title: "VIP Executive Travel",

    description:
      "Private chauffeur solutions tailored for executives, diplomats, and premium guests.",

    image: vipImg,
  },

  {
    title: "Hourly Chauffeur Service",

    description:
      "Flexible chauffeur bookings for meetings, shopping, tours, and business travel.",

    image: hourlyImg,
  },

  {
    title: "Corporate Travel",

    description:
      "Professional transportation solutions tailored for executives, business meetings, conferences, and corporate clients.",

    image: CorporateImg,
  },
];

const ServicesSection = () => {
  const navigate = useDelayedNavigate();
  return (
    <Box
      sx={{
        py: {
          xs: 10,
          md: 8,
        },

        px: {
          xs: 2,
          md: 12,
        },

        background: "white",
      }}
    >
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: 3,

            mb: 6,
          }}
        >
          {/* LEFT */}
          <Box>
            {/* BADGE */}
            <Box
              sx={{
                display: "inline-flex",

                px: 2,
                py: 0.7,

                borderRadius: "999px",

                backgroundColor: "rgba(245,153,61,0.12)",

                border: "1px solid rgba(245,153,61,0.2)",

                color: "#F5993D",

                fontWeight: 700,

                fontSize: 13,

                mb: 2,
              }}
            >
              OUR SERVICES
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

                mb: 2,
              }}
            >
              Seamless Travel Solutions
              <br />
              for Every Journey
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                maxWidth: 650,

                lineHeight: 1.9,

                fontSize: 17,
              }}
            >
              Professional transportation designed to meet the needs of all
              travelers in Saudi Arabia.
            </Typography>
          </Box>

          {/* BUTTON */}
          <Button
            variant="contained"
            onClick={() => navigate("/services")}
            sx={{
              px: 4,
              py: 1.2,
              color: "white",
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: 15,
              backgroundColor: "#1FB1F9",
              "&:hover": {
                backgroundColor: "#1697d2",
              },
            }}
          >
            View All Services
          </Button>
        </Box>

        {/* GRID */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                lg: 4,
              }}
            >
              <Box
                sx={{
                  borderRadius: "30px",

                  overflow: "hidden",

                  backgroundColor: "rgba(255,255,255,0.03)",

                  border: "1px solid rgba(255,255,255,0.06)",

                  transition: "0.4s",

                  height: "100%",

                  backdropFilter: "blur(10px)",

                  "&:hover": {
                    transform: "translateY(-10px)",

                    borderColor: "rgba(31,177,249,0.25)",

                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    position: "relative",

                    overflow: "hidden",

                    height: 280,
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",

                      objectFit: "cover",

                      transition: "0.6s",

                      "&:hover": {
                        transform: "scale(1.08)",
                      },
                    }}
                  />

                  {/* OVERLAY */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,

                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)",
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <Box
                  sx={{
                    p: 4,
                  }}
                >
                  {/* TITLE */}
                  <Typography
                    sx={{
                      fontWeight: 800,

                      fontSize: 24,

                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography
                    sx={{
                      color: "rgba(0,0,0,0.72)",

                      lineHeight: 1.9,

                      mb: 3,

                      fontSize: 14,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* LINK */}
                  <Box
                    sx={{
                      display: "inline-flex",

                      alignItems: "center",

                      gap: 1,

                      color: "#1FB1F9",

                      fontWeight: 700,

                      cursor: "pointer",

                      transition: "0.3s",

                      "&:hover": {
                        gap: 1.5,
                      },
                    }}
                  >
                    Learn More
                    <ArrowOutwardRoundedIcon fontSize="small" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
