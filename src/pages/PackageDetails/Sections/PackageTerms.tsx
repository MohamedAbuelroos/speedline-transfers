import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

import type { TravelPackage } from "../../../utils/types";
import type { JSX } from "react";

type Props = {
  data: TravelPackage;
};

const iconMap: Record<string, JSX.Element> = {
  driver: <VerifiedUserOutlinedIcon />,
  car: <DirectionsCarFilledOutlinedIcon />,
  water: <WaterDropOutlinedIcon />,
  location: <PlaceOutlinedIcon />,
  time: <AccessTimeOutlinedIcon />,
  support: <SupportAgentOutlinedIcon />,
};

const PackageTerms = ({ data }: Props) => {
  return (
    <Box
      sx={{
        mb: 8,
      }}
    >
      {/* INCLUSIONS */}
      <Box
        sx={{
          mb: 8,
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            mb: 4,
          }}
        >
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
            What's Included
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",

              fontSize: 17,

              lineHeight: 1.9,

              maxWidth: "850px",
            }}
          >
            Everything you need for a premium and seamless transportation
            experience.
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid container spacing={3}>
          {data.inclusions.map((item) => (
            <Grid
              key={item.title}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",

                  borderRadius: "28px",

                  p: 4,

                  height: "100%",

                  boxShadow: "0 10px 35px rgba(0,0,0,0.04)",

                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-5px)",

                    boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 72,
                    height: 72,

                    borderRadius: "22px",

                    backgroundColor: "#f0f9ff",

                    color: "primary.main",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    mb: 3,

                    "& svg": {
                      fontSize: 38,
                    },
                  }}
                >
                  {iconMap[item.icon]}
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: 22,

                    fontWeight: 800,

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
      </Box>

      {/* TERMS */}
      <Box>
        {/* HEADER */}
        <Box
          sx={{
            mb: 4,
          }}
        >
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
            Terms & Conditions
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",

              fontSize: 17,

              lineHeight: 1.9,

              maxWidth: "850px",
            }}
          >
            Important policies and booking conditions for your transportation
            package.
          </Typography>
        </Box>

        {/* ACCORDIONS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {data.terms.map((term, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                backgroundColor: "#fff",

                borderRadius: "22px !important",

                overflow: "hidden",

                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",

                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 3,
                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,

                    fontSize: 18,
                  }}
                >
                  {term.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#6b7280",

                    lineHeight: 2,

                    fontSize: 15,
                  }}
                >
                  {term.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PackageTerms;
