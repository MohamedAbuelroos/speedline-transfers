import { Box, Container, Typography, Grid } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaidIcon from "@mui/icons-material/Paid";

const features = [
  {
    icon: <SecurityIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
    title: "Safety First",
    desc: "Our drivers undergo rigorous background checks and safety training.",
  },
  {
    icon: <AccessTimeIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
    title: "Punctuality",
    desc: "We value your time. Guaranteed 15-minute early arrival for all bookings.",
  },
  {
    icon: <DirectionsCarIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
    title: "Modern Fleet",
    desc: "Ride in the latest models, all equipped with high-speed Wi-Fi.",
  },
  {
    icon: <PaidIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
    title: "Fixed Pricing",
    desc: "No hidden fees. Prices shown are approximate — final fare is confirmed within booking.",
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8,backgroundColor: "#f3f7fb" }}>
      <Container>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Excellence in Every Mile
          </Typography>
        </Box>

        {/* Features */}
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box sx={{ textAlign: "center" }}>
                {/* Icon */}
                <Box
                  sx={{
                    mb: 2,
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    backgroundColor: "#F9FAFBFF",
                    borderRadius: "15px",
                    border: "1px solid #DEE1E6FF",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
