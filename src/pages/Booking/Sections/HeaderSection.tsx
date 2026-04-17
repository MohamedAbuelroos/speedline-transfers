import { Box, Typography } from "@mui/material";

const HeaderSection = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Complete Your Booking
      </Typography>

      <Typography color="text.secondary">
        Fill in the details below to confirm your transfer
      </Typography>
    </Box>
  );
};

export default HeaderSection;
