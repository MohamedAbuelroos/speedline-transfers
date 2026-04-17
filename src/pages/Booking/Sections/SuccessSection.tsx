import { Box, Typography } from "@mui/material";
import ScrollToTop from "../../../utils/ScrollToTop";

const SuccessSection = ({ data, bookingId }: any) => {

  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      <ScrollToTop/>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        🎉 Booking Confirmed!
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Thank you for choosing Speed Line. Your booking is confirmed.
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Booking ID: <strong>{bookingId}</strong>
      </Typography>

      {/* DETAILS */}
      <Box sx={{ maxWidth: 500, mx: "auto", textAlign: "left" }}>
        <Typography>From: {data.from}</Typography>
        <Typography>To: {data.to}</Typography>
        <Typography>Car: {data.car?.name}</Typography>
        <Typography>
          Passengers: {data.adults + data.children + data.infants}
        </Typography>
      </Box>
    </Box>
  );
};

export default SuccessSection;
