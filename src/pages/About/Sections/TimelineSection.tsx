import { Box, Container, Grid, Typography } from "@mui/material";

import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const timeline = [
  {
    year: "2015",

    title: "The Beginning",

    description:
      "SpeedLine launched in Riyadh with a small luxury fleet focused on premium airport transportation.",
  },

  {
    year: "2018",

    title: "Expansion to Jeddah",

    description:
      "Expanded operations to serve Makkah, Jeddah, and western Saudi Arabia travelers.",
  },

  {
    year: "2021",

    title: "Digital Innovation",

    description:
      "Introduced real-time booking systems, flight monitoring, and premium dispatch operations.",
  },

  {
    year: "2023",

    title: "Pilgrim Priority",

    description:
      "Launched specialized Umrah and pilgrimage transportation packages with multilingual support.",
  },

  {
    year: "2026",

    title: "Vision 2030 Ready",

    description:
      "Expanded premium fleet and services aligned with Saudi Vision 2030 tourism growth.",
  },
];

const TimelineSection = () => {
  return (
    <Box
      id="timeline-section"
      sx={{
        py: 8,
        px: {
          xs: 2,
          md: 10,
        },

        background: "linear-gradient(to bottom, #ffffff 0%, #f8fbff 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, lg: 6 }}>
            {/* BADGE */}
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
              OUR JOURNEY
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

                mb: 3,
              }}
            >
              A Legacy Built
              <br />
              on Trust
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                color: "#6b7280",

                lineHeight: 1.9,

                fontSize: 16,

                maxWidth: 600,

                mb: 5,
              }}
            >
              From a luxury airport transfer provider to a trusted
              transportation partner across Saudi Arabia, our journey has always
              focused on premium hospitality and exceptional service.
            </Typography>

            {/* TIMELINE */}
            <Box
              sx={{
                position: "relative",

                pl: 5,
              }}
            >
              {/* LINE */}
              <Box
                sx={{
                  position: "absolute",

                  top: 0,
                  left: 18,

                  width: 2,

                  height: "100%",

                  background:
                    "linear-gradient(to bottom, #1FB1F9, rgba(31,177,249,0.15))",
                }}
              />

              {timeline.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",

                    mb: 6,
                  }}
                >
                  {/* DOT */}
                  <Box
                    sx={{
                      position: "absolute",

                      left: -45,
                      top: 0,

                      width: 38,
                      height: 38,

                      borderRadius: "50%",

                      background:
                        "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                      color: "#fff",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      fontWeight: 800,

                      fontSize: 12,

                      boxShadow: "0 10px 30px rgba(31,177,249,0.25)",
                    }}
                  >
                    {item.year}
                  </Box>

                  {/* CONTENT */}
                  <Typography
                    sx={{
                      fontSize: 24,

                      fontWeight: 600,

                      color: "#111827",

                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6b7280",

                      lineHeight: 1.9,

                      fontSize: 14,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 12, lg: 6 }}>
            {/* MISSION CARD */}
            <Box
              sx={{
                p: {
                  xs: 4,
                  md: 5,
                },

                borderRadius: "36px",

                backgroundColor: "#fff",

                border: "1px solid rgba(31,177,249,0.08)",

                boxShadow: "0 20px 60px rgba(15,23,42,0.06)",

                position: "relative",

                overflow: "hidden",

                mb: 4,
              }}
            >
              {/* DECOR */}
              <Box
                sx={{
                  position: "absolute",

                  top: -40,
                  right: -40,

                  width: 180,
                  height: 180,

                  borderRadius: "50%",

                  background:
                    "radial-gradient(circle, rgba(31,177,249,0.08) 0%, transparent 70%)",
                }}
              />

              {/* MISSION */}
              <Box sx={{ mb: 5 }}>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 1.5,

                    mb: 2,
                  }}
                >
                  <TrackChangesOutlinedIcon
                    sx={{
                      color: "#1FB1F9",
                    }}
                  />

                  <Typography
                    sx={{
                      fontWeight: 800,

                      fontSize: 30,

                      color: "#111827",
                    }}
                  >
                    Our Mission
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#6b7280",

                    lineHeight: 2,

                    fontSize: 16,

                    fontStyle: "italic",
                  }}
                >
                  "To provide safer, smarter, and more comfortable luxury
                  transportation experiences across Saudi Arabia."
                </Typography>
              </Box>

              {/* DIVIDER */}
              <Box
                sx={{
                  width: "100%",
                  height: 1,

                  background:
                    "linear-gradient(to right, rgba(31,177,249,0.15), rgba(245,153,61,0.2))",

                  mb: 5,
                }}
              />

              {/* VISION */}
              <Box>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 1.5,

                    mb: 2,
                  }}
                >
                  <VisibilityOutlinedIcon
                    sx={{
                      color: "#F5993D",
                    }}
                  />

                  <Typography
                    sx={{
                      fontWeight: 800,

                      fontSize: 30,

                      color: "#111827",
                    }}
                  >
                    Our Vision
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#6b7280",

                    lineHeight: 2,

                    fontSize: 16,
                  }}
                >
                  To become Saudi Arabia’s most trusted luxury transportation
                  brand for pilgrims, executives, and travelers worldwide.
                </Typography>
              </Box>
            </Box>

            {/* STATS */}
            <Grid container spacing={3}>
              {/* STAT 1 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    p: 4,

                    borderRadius: "28px",

                    background:
                      "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                    color: "#fff",

                    textAlign: "center",

                    boxShadow: "0 20px 50px rgba(31,177,249,0.25)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 40,

                      fontWeight: 900,

                      lineHeight: 1,
                    }}
                  >
                    99.8%
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,

                      fontWeight: 700,

                      letterSpacing: 1,
                    }}
                  >
                    ON-TIME RATE
                  </Typography>
                </Box>
              </Grid>

              {/* STAT 2 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    p: 4,

                    borderRadius: "28px",

                    background:
                      "linear-gradient(135deg, #F5993D 0%, #d97706 100%)",

                    color: "#fff",

                    textAlign: "center",

                    boxShadow: "0 20px 50px rgba(245,153,61,0.25)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 40,

                      fontWeight: 900,

                      lineHeight: 1,
                    }}
                  >
                    5★
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,

                      fontWeight: 700,

                      letterSpacing: 1,
                    }}
                  >
                    CLIENT EXPERIENCE
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TimelineSection;
