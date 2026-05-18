import { Box, Button, Container, Grid, Typography } from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import airportImg from "../../../assets/images/AirService.webp";
import religiousImg from "../../../assets/about/Umrah.webp";
import cityImg from "../../../assets/about/CityToCity.webp";
import vipImg from "../../../assets/about/VIPService.webp";
import hourlyImg from "../../../assets/about/Hourly.webp";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";
import CorporateImg from "../../../assets/about/Corporate.webp";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const ServicesSection = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";
  const navigate = useDelayedNavigate();

  const services = [
    {
      title: translate.home.servicesSection.airport.title,
      serviceType: "airport",
      description: translate.home.servicesSection.airport.description,
      image: airportImg,
    },

    {
      title: translate.home.servicesSection.events.title,
      serviceType: "events",
      description: translate.home.servicesSection.events.description,
      image: religiousImg,
    },

    {
      title: translate.home.servicesSection.city.title,
      serviceType: "city",
      description: translate.home.servicesSection.city.description,
      image: cityImg,
    },

    {
      title: translate.home.servicesSection.vip.title,
      serviceType: "vip",
      description: translate.home.servicesSection.vip.description,
      image: vipImg,
    },

    {
      title: translate.home.servicesSection.hourly.title,
      serviceType: "hourly",
      description: translate.home.servicesSection.hourly.description,
      image: hourlyImg,
    },

    {
      title: translate.home.servicesSection.corporate.title,
      serviceType: "corporate",
      description: translate.home.servicesSection.corporate.description,
      image: CorporateImg,
    },
  ];
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

                fontSize: isRtl ? 16 : 14,

                mb: 2,
              }}
            >
              {translate.home.servicesSection.badge}
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: isRtl
                  ? {
                      xs: 46,
                      md: 58,
                    }
                  : {
                      xs: 36,
                      md: 48,
                    },

                lineHeight: 1.1,

                fontWeight: 900,

                mb: 2,
              }}
            >
              {translate.home.servicesSection.title1}
              {isRtl ? " " : <br />}
              {translate.home.servicesSection.title2}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                maxWidth: 650,

                lineHeight: 1.9,

                fontSize: isRtl ? 25 : 20,
              }}
            >
              {translate.home.servicesSection.desc}
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
            {translate.home.servicesSection.btn}
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

                      fontSize: isRtl ? 34 : 24,

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

                      fontSize: isRtl ? 18 : 14,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* LINK */}
                  <Box
                    onClick={() =>
                      navigate("/services", undefined, service.serviceType)
                    }
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
                    {translate.home.servicesSection.learnMore}
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
