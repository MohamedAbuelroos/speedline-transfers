import { Box, Container, Typography, Grid } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import PaidIcon from "@mui/icons-material/Paid";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const features = [
  {
    icon: <BoltIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
    title: "Instant Confirmation",
    desc: "Book your route and receive confirmation quickly via WhatsApp or Email.",
  },
  {
    icon: <PaidIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
    title: "Transparent Pricing",
    desc: "Prices shown are approximate with no hidden fees. Final fare is confirmed after booking.",
  },
  {
    icon: <EmojiPeopleIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
    title: "Expert Drivers",
    desc: "Local professional chauffeurs who know every corner of the Kingdom.",
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8, background: "#f3f7fb" }}>
      <Container>
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box sx={{ textAlign: "center" }}>
                {/* Icon */}
                <Box
                  sx={{
                    mb: 2,
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#1FB1F91A",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    mx: "auto",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Title */}
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" sx={{ color: "#555D6DFF" }}>
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
