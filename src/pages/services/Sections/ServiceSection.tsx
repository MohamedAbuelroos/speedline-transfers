import { Box, Container, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
type Props = {
  serviceType: string;
  title: string;
  description: string;
  image: string;
  features: string[]; // ✅ NEW
  reverse?: boolean;
  icon: React.ReactNode;
};

const ServiceSection = ({
  serviceType,
  title,
  description,
  image,
  reverse,
  features,
  icon,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            flexDirection: reverse ? "row-reverse" : "row",
          }}
        >
          {/* TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Box
                sx={{
                  mb: 2,
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                  backgroundColor: "#F9FAFBFF",
                  borderRadius: "15px",
                  border: "1px solid #DEE1E6FF",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                {icon}
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                {title}
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 3 }}>
                {description}
              </Typography>

              {/* Features */}
              <Grid container spacing={1} sx={{ mb: 3 }}>
                {features.map((item, i) => (
                  <Grid size={{ sm: 12, md: 6 }} sx={{ mb: 3 }} key={i}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon
                        sx={{ fontSize: 18, color: "text.primary" }}
                      />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Button */}
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/booking", {
                    state: {
                      type: "service",
                      data: { serviceType },
                    },
                  });
                }}
                sx={{
                  backgroundColor: "#1FB1F9",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#199ad8",
                  },
                }}
              >
                Book This Service
              </Button>
            </Box>
          </Grid>

          {/* IMAGE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                borderRadius: "16px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
