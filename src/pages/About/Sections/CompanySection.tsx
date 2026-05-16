import { Box, Button, Container, Grid, Typography } from "@mui/material";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import about1 from "../../../assets/about/about-1.png";
import about2 from "../../../assets/about/about-2.png";
import about3 from "../../../assets/about/about-3.png";
import about4 from "../../../assets/about/about-4.png";

const features = [
  "Specialized Umrah & Hajj transfer logistics",

  "Multilingual professional chauffeurs",

  "Real-time flight monitoring & optimization",

  "Premium luxury fleet across Saudi Arabia",
];

const CompanySection = () => {
  return (
    <Box
      sx={{
        py: {
          xs: 10,
          md: 14,
        },

        px: {
          xs: 2,
          md: 10,
        },

        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{
            xs: 6,
            md: 10,
          }}
          sx={{ alignItems: "center" }}
        >
          {/* LEFT IMAGES */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Grid container spacing={2}>
                {/* TOP LEFT */}
                <Grid size={{ xs: 6 }}>
                  <Box
                    component="img"
                    src={about2}
                    alt="Saudi Skyline"
                    sx={{
                      width: "100%",
                      height: 330,

                      objectFit: "cover",

                      borderRadius: "28px",

                      mt: 4,

                      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    }}
                  />
                </Grid>

                {/* TOP RIGHT */}
                <Grid size={{ xs: 6 }}>
                  <Box
                    component="img"
                    src={about1}
                    alt="Kaaba"
                    sx={{
                      width: "100%",
                      height: 240,

                      objectFit: "cover",

                      borderRadius: "28px",

                      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    }}
                  />
                </Grid>

                {/* BOTTOM LEFT */}
                <Grid size={{ xs: 6 }}>
                  <Box
                    component="img"
                    src={about3}
                    alt="Luxury Interior"
                    sx={{
                      width: "100%",
                      height: 240,

                      objectFit: "cover",

                      borderRadius: "28px",

                      mt: -1.5,

                      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    }}
                  />
                </Grid>

                {/* BOTTOM RIGHT */}
                <Grid size={{ xs: 6 }}>
                  <Box
                    component="img"
                    src={about4}
                    alt="Professional Chauffeur"
                    sx={{
                      width: "100%",
                      height: 330,

                      objectFit: "cover",

                      borderRadius: "28px",

                      mt: -17,

                      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    }}
                  />
                </Grid>
              </Grid>

              {/* FLOATING CARD */}
              <Box
                sx={{
                  position: "absolute",

                  bottom: -30,
                  right: { xs: "-10px", md: "-130px" },

                  transform: "translateX(-50%)",

                  width: 180,

                  background:
                    "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                  color: "#fff",

                  borderRadius: "28px",

                  p: 3,

                  textAlign: "center",

                  boxShadow: "0 20px 50px rgba(31,177,249,0.3)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 48,

                    fontWeight: 900,

                    lineHeight: 1,
                  }}
                >
                  15+
                </Typography>

                <Typography
                  sx={{
                    mt: 1,

                    opacity: 0.92,

                    lineHeight: 1.7,
                  }}
                >
                  Cities across the Kingdom covered
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* SMALL TITLE */}
            <Typography
              sx={{
                color: "#1FB1F9",

                fontWeight: 800,

                textTransform: "uppercase",

                letterSpacing: 1.5,

                mb: 2,
              }}
            >
              About SpeedLine Transfers
            </Typography>

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

                mb: 3,
              }}
            >
              Your Gateway to
              <br />
              Trusted{" "}
              <Box
                component="span"
                sx={{
                  color: "#F5993D",
                }}
              >
                Saudi Transfers
              </Box>
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                color: "#6b7280",

                lineHeight: 2,

                fontSize: 16,

                mb: 4,
              }}
            >
              SpeedLine Transfers was founded with a vision to redefine luxury
              transportation across Saudi Arabia. We combine modern travel
              standards with local expertise to deliver exceptional transfer
              experiences for pilgrims, tourists, corporate travelers, and VIP
              guests.
            </Typography>

            {/* FEATURES */}
            <Grid container spacing={2} sx={{ mb: 5 }}>
              {features.map((item) => (
                <Grid key={item} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                    }}
                  >
                    <CheckCircleOutlineRoundedIcon
                      sx={{
                        color: "#1FB1F9",

                        mt: "2px",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#4b5563",

                        lineHeight: 1.8,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* BUTTON */}
            <Button
              variant="contained"
              onClick={() => {
                const section = document.getElementById("timeline-section");

                section?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              sx={{
                px: 4,
                py: 1.5,

                borderRadius: "999px",

                textTransform: "none",

                fontWeight: 700,

                background: "linear-gradient(135deg, #F5993D 0%, #ffae52 100%)",
              }}
            >
              Read Our Full Story
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanySection;
