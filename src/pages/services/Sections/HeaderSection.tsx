import { Box, Container, Typography } from "@mui/material";
import SectionTitle from "../../../components/common/SectionTitle";

const HeaderSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 2,
        py: 8,
        backgroundColor: "#f3f7fb",
        borderRadius: 2, // optional rounded corners
        boxShadow: "0px 1px 2px rgba(0,0,0,0.1)", // 👈
      }}
    >
      <Container maxWidth="md">
        {/* Small badge */}
        <SectionTitle title="Excellence in Motion" />

        {/* Title */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Professional Chauffeur Services Across Saudi Arabia
        </Typography>

        {/* Description */}
        <Typography color="text.secondary">
          Experience the pinnacle of comfort and reliability. From seamless
          airport transfers to flexible hourly bookings, we tailor every journey
          to your highest standards.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeaderSection;
