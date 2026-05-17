import {
  Box,
  Container,
  Typography,
} from "@mui/material";

const CoverageSection = () => {
  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 10,
        },

        background:
          "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

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
              md: 52,
            },
          }}
        >
          Serving Cities Across Saudi Arabia
        </Typography>

        <Typography
          sx={{
            lineHeight: 1.9,

            opacity: 0.92,

            fontSize: {
              xs: 15,
              md: 17,
            },
          }}
        >
          From Riyadh and Jeddah to Makkah,
          Madinah, and beyond — we provide
          professional transportation services
          wherever your journey takes you.
        </Typography>
      </Container>
    </Box>
  );
};

export default CoverageSection;