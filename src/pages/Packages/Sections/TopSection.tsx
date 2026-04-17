import { Box, Typography } from "@mui/material";
import SectionTitle from "../../../components/common/SectionTitle";

function TopSection() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
          py: 10,
          backgroundColor: "#f3f7fb",
          borderRadius: 2,
          boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        <SectionTitle title="Fixed Rate Transfers" />

        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Transparent{" "}
          <Box component={"span"} sx={{ color: "#1FB1F9" }}>
            Package Pricing
          </Box>
        </Typography>

        <Typography color="text.default" sx={{ mt: 1 }}>
          Explore our curated list of popular routes across the Kingdom.
        </Typography>
      </Box>
    </>
  );
}

export default TopSection;
