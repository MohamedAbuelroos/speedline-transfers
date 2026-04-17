import { Box, Typography, Chip, Container } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SectionTitle from "../../../components/common/SectionTitle";

const TopSection = () => {
  return (
    <Box
      sx={{
        mb: 2,
        py: 10,
        backgroundColor: "#f3f7fb",
        borderRadius: 2, // optional rounded corners
        boxShadow: "0px 1px 2px rgba(0,0,0,0.1)", // 👈
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {/* LEFT */}
        <Box sx={{ maxWidth: 600 }}>
          {/* Title */}
          <SectionTitle title="Premium Service" />
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            Explore Our{" "}
            <Box component="span" sx={{ color: "#1FB1F9" }}>
              Fleet
            </Box>
          </Typography>

          {/* Description */}
          <Typography color="text.secondary">
            Choose from our carefully maintained collection of vehicles. Whether
            it's an airport transfer or a city ride, we have the perfect option
            for your journey across Saudi Arabia.
          </Typography>
        </Box>

        {/* RIGHT BADGES */}
        <Box
          sx={{
            display: "flex",
            alignSelf: "end",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Chip
            sx={{
              background: "#FFFFFFFF",
              px: 1,
              boxShadow: "1px 1px 2px #1FB1F9",
            }}
            label="24/7 Availability"
            icon={<AccessTimeIcon fontSize="small" />}
          />
          <Chip
            sx={{
              background: "#FFFFFFFF",
              px: 1,
              boxShadow: "1px 1px 2px #1FB1F9",
            }}
            label="Verified Drivers"
            icon={<VerifiedUserIcon fontSize="small" />}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TopSection;
