import { Box, Container, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";
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
  const navigate = useDelayedNavigate();

  return (
    <Box
      id={serviceType}
      sx={{
        py: {
          xs: 8,
          md: 12,
        },

        position: "relative",

        overflow: "hidden",
      }}
    >
      <Container>
        <Grid
          container
          spacing={{
            xs: 5,
            md: 8,
          }}
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
                  mb: 3,

                  width: 74,
                  height: 74,

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  color: "#1FB1F9",

                  background:
                    "linear-gradient(135deg, rgba(31,177,249,0.10) 0%, rgba(31,177,249,0.16) 100%)",

                  borderRadius: "24px",

                  border: "1px solid rgba(31,177,249,0.12)",

                  boxShadow: "0 10px 30px rgba(31,177,249,0.08)",

                  "& svg": {
                    fontSize: 36,
                  },
                }}
              >
                {icon}
              </Box>
              <Typography
                sx={{
                  fontWeight: 900,

                  mb: 2.5,

                  lineHeight: 1.2,

                  color: "#111827",

                  fontSize: {
                    xs: 34,
                    md: 46,
                  },
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  mb: 4,

                  color: "#6b7280",

                  lineHeight: 1.9,

                  fontSize: {
                    xs: 15,
                    md: 17,
                  },

                  maxWidth: 620,
                }}
              >
                {description}
              </Typography>

              {/* Features */}
              <Grid container spacing={2} sx={{ mb: 5 }}>
                {features.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",

                      alignItems: "center",

                      gap: 1.2,

                      backgroundColor: "#fff",

                      border: "1px solid rgba(226,232,240,0.7)",

                      borderRadius: "18px",

                      px: 2,
                      py: 1.5,

                      transition: "0.3s ease",

                      "&:hover": {
                        borderColor: "#1FB1F9",

                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon
                        sx={{ fontSize: 18, color: "#1FB1F9" }}
                      />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  </Box>
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
                  borderRadius: "999px",

                  textTransform: "none",

                  px: 4,
                  py: 1.6,

                  fontWeight: 700,

                  fontSize: 16,

                  background:
                    "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                  boxShadow: "0 15px 35px rgba(31,177,249,0.22)",

                  "&:hover": {
                    transform: "translateY(-2px)",

                    boxShadow: "0 18px 40px rgba(31,177,249,0.28)",
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
              loading="lazy"
              sx={{
                width: "100%",

                height: {
                  xs: 320,
                  md: 520,
                },

                objectFit: "cover",

                borderRadius: "32px",

                boxShadow: "0 30px 60px rgba(15,23,42,0.10)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
