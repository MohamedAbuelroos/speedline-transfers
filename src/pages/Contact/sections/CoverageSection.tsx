import { Box, Container, Typography } from "@mui/material";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const CoverageSection = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";

  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 10,
        },

        background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

        color: "#fff",

        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          sx={{
            fontWeight: 900,

            mb: 3,

            lineHeight: 1.2,

            fontSize: {
              xs: 34,
              md: isRtl ? 62 : 52,
            },
          }}
        >
          {translate.contact.coverage.title}
        </Typography>

        <Typography
          sx={{
            lineHeight: 1.9,

            opacity: 0.92,

            fontSize: {
              xs: 15,
              md: isRtl ? 20 : 17,
            },
          }}
        >
          {translate.contact.coverage.subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default CoverageSection;
