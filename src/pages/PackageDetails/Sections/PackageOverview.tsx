import { Box, Typography, Grid } from "@mui/material";

import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";

import type { PackageTranslation, TravelPackage } from "../../../utils/types";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

type Props = {
  data: TravelPackage;
};

const PackageOverview = ({ data }: Props) => {
  const lang = useLanguage();
  const translate = translations[lang];
  const packageTranslation = translate.packages[
    data.id as keyof typeof translate.packages
  ] as PackageTranslation;

  const features = [
    {
      title: "Ideal For",
      value: "Families & VIPs",
      icon: <Groups2OutlinedIcon />,
      color: "rgba(31, 176, 249, 0.20)",
      iconColor: "primary.main",
    },

    {
      title: "Cities",
      value: data.cities.join(" / "),
      icon: <LocationCityOutlinedIcon />,
      color: "rgba(245, 153, 61, 0.20)",
      iconColor: "secondary.main",
    },

    {
      title: "Fleet",
      value: "Sedans, SUVs & Vans",
      icon: <DirectionsCarFilledOutlinedIcon />,
      color: "rgba(31, 176, 249, 0.20)",
      iconColor: "primary.main",
    },

    {
      title: "Service",
      value: packageTranslation.highlights[0],
      icon: <FlightTakeoffOutlinedIcon />,
      color: "rgba(245, 153, 61, 0.20)",
      iconColor: "secondary.main",
    },
  ];

  return (
    <Box
      sx={{
        mb: 8,
      }}
    >
      {/* SECTION TITLE */}
      <Box
        sx={{
          mb: 4,
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
              xs: 30,
              md: 44,
            },

            fontWeight: 900,

            lineHeight: 1.1,

            color: "#111827",

            mb: 2,
          }}
        >
          Package Overview
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",

            fontSize: 17,

            lineHeight: 1.9,

            maxWidth: "850px",
          }}
        >
          {packageTranslation.overview}
        </Typography>
      </Box>

      {/* FEATURE CARDS */}
      <Grid
        container
        spacing={2.5}
        sx={{
          mb: 5,
        }}
      >
        {features.map((item) => (
          <Grid
            key={item.title}
            size={{
              xs: 6,
              md: 3,
            }}
          >
            <Box
              sx={{
                backgroundColor: item.color,

                borderRadius: "24px",

                p: 3,

                height: "100%",

                display: "flex",

                flexDirection: "column",

                alignItems: "center",

                justifyContent: "center",

                textAlign: "center",

                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",

                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 68,
                  height: 68,

                  borderRadius: "20px",

                  backgroundColor: "#f0f9ff",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  color: item.iconColor,

                  mb: 2,

                  "& svg": {
                    fontSize: 38,
                  },
                }}
              >
                {item.icon}
              </Box>

              {/* LABEL */}
              <Typography
                sx={{
                  fontSize: 13,

                  color: "#9ca3af",

                  textTransform: "uppercase",

                  letterSpacing: 1,

                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* VALUE */}
              <Typography
                sx={{
                  fontWeight: 800,

                  fontSize: { xs: 14, md: 18 },

                  color: "#111827",

                  lineHeight: 1.4,
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* DESCRIPTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            color: "#4b5563",
            maxWidth: "850px",
            fontSize: 16,
            lineHeight: 2,
          }}
        >
          SpeedLine Transfers offers a prestigious transportation experience
          focused on comfort, professionalism, and premium service quality
          across Saudi Arabia.
        </Typography>

        <Typography
          sx={{
            color: "#4b5563",

            fontSize: 16,
            maxWidth: "850px",
            lineHeight: 2,
          }}
        >
          Our professional multilingual chauffeurs ensure smooth airport
          arrivals, intercity transfers, and private travel experiences using
          modern luxury vehicles designed for maximum comfort.
        </Typography>

        <Typography
          sx={{
            color: "#4b5563",

            fontSize: 16,

            lineHeight: 2,
          }}
        >
          The itinerary is optimized for efficiency while maintaining
          flexibility for prayer stops, sightseeing, and personalized travel
          requests.
        </Typography>
      </Box>
    </Box>
  );
};

export default PackageOverview;
