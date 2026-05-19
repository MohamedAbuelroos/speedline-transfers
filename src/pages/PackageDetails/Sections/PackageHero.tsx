import { Box, Typography, Chip, Stack } from "@mui/material";
import packageHeroImg from "../../../assets/packages/PackageHero.webp";

import type { PackageTranslation, TravelPackage } from "../../../utils/types";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

type Props = {
  data: TravelPackage;
};

const PackageHero = ({ data }: Props) => {
  const lang = useLanguage();
  const translate = translations[lang];
  // const isRtl = lang === "ar";

  const packageTranslation = translate.packages[
    data.id as keyof typeof translate.packages
  ] as PackageTranslation;
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: 400,
          md: 410,
        },
        borderRadius: "32px",
        overflow: "hidden",
        mb: 5,
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src={packageHeroImg}
        alt={packageTranslation.title}
        loading="lazy"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: {
            xs: 3,
            md: 6,
          },
          py: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
          }}
        >
          {/* TOP BADGES */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              flexWrap: "wrap",
              mb: 3,
            }}
          >
            <Chip
              label={packageTranslation.category}
              sx={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#fff",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            />
            <Chip
              label={packageTranslation.duration}
              sx={{
                backgroundColor: "#f59e0b",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "999px",
              }}
            />
          </Stack>

          {/* TITLE */}
          <Typography
            sx={{
              fontSize: {
                xs: 32,
                md: 52,
              },
              lineHeight: 1,
              fontWeight: 900,
              color: "#fff",
              mb: 1,
            }}
          >
            {packageTranslation.title}
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              fontSize: {
                xs: 18,
                md: 22,
              },
              fontWeight: 700,
              color: "#1FB1F9",
              fontStyle: "italic",
              mb: 3,
            }}
          >
            {packageTranslation.subtitle}
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.9,
              fontSize: 16,
              mb: 4,
              maxWidth: "650px",
            }}
          >
            {packageTranslation.overview}
          </Typography>

          {/* BUTTONS */}
          {/* <Stack
            spacing={2}
            sx={{ flexWrap: "wrap" }}
            direction={{ xs: "column", sm: "row" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundImage:
                  "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                px: 4,
                py: 1.5,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: 16,

                "&:hover": {
                  boxShadow: "0 1px 25px rgba(31,177,249,0.35)",
                },
              }}
            >
              Book This Package
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "#fff",

                px: 4,
                py: 1.5,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: 16,

                backdropFilter: "blur(10px)",

                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              WhatsApp Inquiry
            </Button>
          </Stack> */}
        </Box>
      </Box>
    </Box>
  );
};

export default PackageHero;
