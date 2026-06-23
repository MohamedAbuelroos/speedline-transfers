import { Box, Container, Typography } from "@mui/material";

import heroImage from "../../../assets/images/ContactHero.webp";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const HeroSection = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";
  return (
    <Box
      sx={{
        position: "relative",

        minHeight: {
          xs: "55vh",
          md: "65vh",
        },

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={heroImage}
        alt="Contact Us"
        loading="lazy"
        sx={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "cover",
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background: "linear-gradient(rgba(7,16,24,0.72), rgba(7,16,24,0.74))",
        }}
      />

      {/* CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,

          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",

            fontWeight: 900,

            lineHeight: 1.15,

            mb: 3,

            fontSize: {
              xs: isRtl ? 50 : 40,
              md: isRtl ? 74 : 64,
            },
          }}
        >
          {translate.contact.hero.title}
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.82)",

            lineHeight: 1.9,

            fontSize: {
              xs: isRtl ? 18 : 16,
              md: isRtl ? 20 : 18,
            },

            maxWidth: 760,

            mx: "auto",
          }}
        >
          {translate.contact.hero.subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
