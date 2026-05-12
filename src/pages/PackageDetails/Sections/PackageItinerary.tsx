import { Box, Typography, Grid } from "@mui/material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import type { TravelPackage } from "../../../utils/types";

type Props = {
  data: TravelPackage;
};

const PackageItinerary = ({ data }: Props) => {
  return (
    <Box
      sx={{
        mb: 8,
      }}
    >
      {/* SECTION HEADER */}
      <Box
        sx={{
          mb: 5,
        }}
      >
        {/* SMALL LINE */}
        <Box
          sx={{
            width: 50,
            height: 4,
            borderRadius: "999px",
            backgroundColor: "#F5993D",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: 34,
              md: 44,
            },

            fontWeight: 900,

            lineHeight: 1.1,

            color: "#111827",

            mb: 2,
          }}
        >
          Itinerary Details
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",

            fontSize: 17,

            lineHeight: 1.9,

            maxWidth: "850px",
          }}
        >
          A carefully curated luxury transportation experience focused on
          comfort, flexibility, and premium travel service.
        </Typography>
      </Box>

      {/* TIMELINE */}
      <Box
        sx={{
          position: "relative",

          "&::before": {
            content: '""',

            position: "absolute",

            left: {
              xs: 12,
              md: 14,
            },

            top: 0,
            bottom: 0,

            width: 2,

            backgroundColor: "#e5e7eb",
          },
        }}
      >
        {data.itinerary.map((item, index) => (
          <Box
            key={item.day}
            sx={{
              position: "relative",

              pl: {
                xs: 5,
                md: 8,
              },

              mb: index === data.itinerary.length - 1 ? 0 : 6,
            }}
          >
            {/* TIMELINE DOT */}
            <Box
              sx={{
                position: "absolute",

                left: {
                  xs: 5,
                  md: 7,
                },

                top: 8,

                transform: "translateX(-50%)",

                width: 18,
                height: 18,

                borderRadius: "50%",

                backgroundColor: "#1FB1F9",

                border: "4px solid #fff",

                boxShadow: "0 0 0 2px #1FB1F9",
              }}
            />

            {/* DAY BADGE */}
            <Box
              sx={{
                display: "inline-flex",

                alignItems: "center",

                justifyContent: "center",

                backgroundColor: "#e0f2fe",

                color: "#0284c7",

                px: 1.5,
                py: 0.6,

                borderRadius: "999px",

                fontSize: 12,

                fontWeight: 800,

                mb: 2,
              }}
            >
              {item.day}
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: {
                  xs: 24,
                  md: 30,
                },

                fontWeight: 900,

                color: "#111827",

                mb: 2,
              }}
            >
              {item.title}
            </Typography>

            {/* ROUTE */}
            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",

                alignItems: "center",

                gap: 1.5,

                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  gap: 0.7,

                  color: "#6b7280",
                }}
              >
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: "#F5993D",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 15,
                  }}
                >
                  {item.route.split("→")[0]}
                </Typography>
              </Box>

              <NearMeOutlinedIcon
                sx={{
                  color: "#1FB1F9",
                  fontSize: 18,
                }}
              />

              <Typography
                sx={{
                  fontSize: 15,

                  color: "#6b7280",
                }}
              >
                {item.route.split("→")[1]}
              </Typography>
            </Box>

            {/* ACTIVITIES */}
            <Grid container spacing={2}>
              {item.activities.map((activity) => (
                <Grid
                  key={activity}
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "18px",

                      px: 2,
                      py: 2,

                      display: "flex",

                      alignItems: "center",

                      gap: 1.5,

                      transition: "0.3s",

                      backgroundColor: "#f3f4f6",
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <CheckCircleOutlineOutlinedIcon
                      sx={{
                        color: "#111827",

                        fontSize: 22,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#374151",

                        lineHeight: 1.7,

                        fontSize: 15,
                      }}
                    >
                      {activity}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PackageItinerary;
