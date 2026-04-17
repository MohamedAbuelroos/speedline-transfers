import { Box, Container, Typography, Grid } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import GroupsIcon from "@mui/icons-material/Groups";

const items = [
  {
    icon: <VerifiedUserIcon sx={{ color: "#1FB1F9" }} />,
    title: "Verified Safety",
    desc: "Regular vehicle inspections and fully licensed professional drivers.",
  },
  {
    icon: <WifiIcon sx={{ color: "#1FB1F9" }} />,
    title: "Connectivity",
    desc: "Stay productive with high-speed Wi-Fi available in our executive fleet.",
  },
  {
    icon: <LocalCafeIcon sx={{ color: "#1FB1F9" }} />,
    title: "Refreshments",
    desc: "Chilled water and luxury amenities provided for your comfort.",
  },
  {
    icon: <GroupsIcon sx={{ color: "#1FB1F9" }} />,
    title: "Group Options",
    desc: "Vans and SUVs available for family or corporate group travel.",
  },
];

const StandardsSection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: "#e6f6fd" }}>
      <Container>
        {/* Header */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, textAlign: "center", mb: 5 }}
        >
          Standard on Every Journey
        </Typography>

        {/* Cards */}
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  p: 4,
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  height:220
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>

                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{lineHeight:1.7}}>
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

export default StandardsSection;
