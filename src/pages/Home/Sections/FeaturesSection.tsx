import { Box, Container, Typography, Grid } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaidIcon from "@mui/icons-material/Paid";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const FeaturesSection = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";

  const features = [
    {
      icon: <SecurityIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
      title: translate.home.featuresSection.safety.title,
      desc: translate.home.featuresSection.safety.desc,
    },
    {
      icon: <AccessTimeIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
      title: translate.home.featuresSection.punctuality.title,
      desc: translate.home.featuresSection.punctuality.desc,
    },
    {
      icon: <DirectionsCarIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
      title: translate.home.featuresSection.fleet.title,
      desc: translate.home.featuresSection.fleet.desc,
    },
    {
      icon: <PaidIcon sx={{ color: "#1FB1F9", fontSize: 32 }} />,
      title: translate.home.featuresSection.pricing.title,
      desc: translate.home.featuresSection.pricing.desc,
    },
  ];
  return (
    <Box sx={{ py: 8, backgroundColor: "#f3f7fb" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: isRtl ? 44 : 34,
            }}
          >
            {translate.home.featuresSection.title}
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
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, fontSize: isRtl ? 24 : 20 }}
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: isRtl ? 16 : 13 }}
                >
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
