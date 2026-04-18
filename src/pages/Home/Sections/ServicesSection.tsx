import { Box, Typography, Grid, Paper } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const services = [
  {
    title: "Airport Transfers",
    description:
      "Professional meet-and-greet at all major KSA airports. We track flight to ensure punctual pickup, every time,60minutes complimentary waiting time",
    icon: <FlightTakeoffIcon fontSize="large" color="primary" />,
  },
  {
    title: "City-to-City",
    description:
      "Comfortable long-distance travel between Riyadh, Jeddah, Dammam, and more. Skip the domestic flight stress.",
    icon: <SwapHorizIcon fontSize="large" color="primary" />,
  },
  {
    title: "Hourly Chauffeur",
    description:
      "A private driver at your disposal. Perfect for executive meetings, shopping trips, or specialized city tours.",
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 12 },
        background: "white",
        textAlign: "center",
      }}
    >
      {/* HEADER */}
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        First-Class Service Suite
      </Typography>

      <Typography
        sx={{
          maxWidth: "600px",
          mx: "auto",
          color: "gray",
          mb: 5,
        }}
      >
        Whether you're arriving at King Khalid International or need a chauffeur
        for your Riyadh business meetings, we have the perfect solution.
      </Typography>

      {/* CARDS */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "16px",
                height: "100%",
                transition: "0.3s",
                border: "1px solid #eee",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  background: "#e6f6fd",
                  borderRadius: "50%",
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  mb: 2,
                  mx: "auto",
                }}
              >
                {service.icon}
              </Box>

              {/* TITLE */}
              <Typography sx={{ fontWeight: "bold", mb: 1, lineHeight: 2 }}>
                {service.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography sx={{ fontSize: "14px", color: "gray" }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
