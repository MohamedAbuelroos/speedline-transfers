import { Box, Container, Typography } from "@mui/material";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import RouteIcon from "@mui/icons-material/Route";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarIcon from "@mui/icons-material/Star";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { IconButton } from "@mui/material";

import { useRef } from "react";
import SectionTitle from "../../../components/common/SectionTitle";

const services = [
  {
    title: "Airport Transfers",

    subtitle: "Meet & greet airport transportation",

    icon: <FlightTakeoffIcon />,

    id: "airport",
  },

  {
    title: "City Transfers",

    subtitle: "Comfortable intercity journeys",

    icon: <RouteIcon />,

    id: "city",
  },

  {
    title: "Hourly Chauffeur",

    subtitle: "Flexible bookings by the hour",

    icon: <AccessTimeIcon />,

    id: "hourly",
  },

  {
    title: "Corporate Travel",

    subtitle: "Professional business transport",

    icon: <BusinessCenterIcon />,

    id: "corporate",
  },

  {
    title: "VIP Services",

    subtitle: "Premium executive transportation",

    icon: <StarIcon />,

    id: "vip",
  },

  {
    title: "Event Transportation",

    subtitle: "Reliable rides for special occasions",

    icon: <EventSeatIcon />,

    id: "events",
  },
];

const ServicesQuickNav = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 320 : -320,

        behavior: "smooth",
      });
    }
  };
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 10,
        },

        background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: "center",

            gap: 2,

            mb: 5,

            flexWrap: "wrap",
          }}
        >
          {/* LEFT */}
          <Box>
            <SectionTitle title="Excellence in Motion" />
            <Typography
              sx={{
                fontWeight: 800,

                color: "#111827",

                mb: 1,

                fontSize: {
                  xs: 28,
                  md: 38,
                },
              }}
            >
              Explore Our Services
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",

                lineHeight: 1.9,

                maxWidth: 650,
              }}
            >
              Premium transportation solutions tailored for every journey across
              Saudi Arabia.
            </Typography>
          </Box>

          {/* ARROWS */}
          <Box
            sx={{
              display: "flex",

              gap: 1,
            }}
          >
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                width: 52,
                height: 52,

                borderRadius: "18px",

                backgroundColor: "#fff",

                border: "1px solid rgba(226,232,240,0.8)",

                transition: "0.3s ease",

                "&:hover": {
                  backgroundColor: "rgba(31,177,249,0.08)",

                  borderColor: "#1FB1F9",

                  color: "#1FB1F9",
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={() => scroll("right")}
              sx={{
                width: 52,
                height: 52,

                borderRadius: "18px",

                background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                color: "#fff",

                boxShadow: "0 10px 25px rgba(31,177,249,0.20)",

                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>

        {/* CARDS */}
        {/* NAVIGATION */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",

            gap: 2,

            overflowX: "auto",

            py: 1,

            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {services.map((service) => (
            <Box
              key={service.id}
              onClick={() => handleScroll(service.id)}
              sx={{
                minWidth: {
                  xs: 260,
                  md: "31%",
                },

                flexShrink: 0,

                p: 3,

                borderRadius: "24px",

                backgroundColor: "#fff",

                border: "1px solid rgba(226,232,240,0.8)",

                display: "flex",

                alignItems: "center",

                gap: 2,

                cursor: "pointer",

                transition: "0.3s ease",

                boxShadow: "0 4px 12px rgba(15,23,42,0.03)",

                "&:hover": {
                  transform: "translateY(-4px)",

                  borderColor: "#1FB1F9",

                  boxShadow: "0 15px 35px rgba(15,23,42,0.08)",
                },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 64,
                  height: 64,

                  borderRadius: "18px",

                  background:
                    "linear-gradient(135deg, rgba(31,177,249,0.12) 0%, rgba(31,177,249,0.18) 100%)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  color: "#1FB1F9",

                  flexShrink: 0,

                  "& svg": {
                    fontSize: 26,
                  },
                }}
              >
                {service.icon}
              </Box>

              {/* TEXT */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,

                    color: "#111827",

                    fontSize: 18,

                    lineHeight: 1.3,

                    mb: 0.3,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#6b7280",

                    fontSize: 13,
                  }}
                >
                  View Details
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesQuickNav;
