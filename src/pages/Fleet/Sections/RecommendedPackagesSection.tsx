import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { travelPackages } from "../../../data/travelPackages";

export default function RecommendedPackagesSection() {
  const { t } = useTranslation();

  const recommendedPackages = travelPackages
    .filter((pkg) => pkg.featured || pkg.popular)
    .slice(0, 4);

  return (
    <Box
      sx={{
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            // textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Complete Your Journey
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: 1,
              fontSize: "1.05rem",
            }}
          >
            Explore our most popular transfer packages across
            Makkah, Madinah, Jeddah and beyond.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {recommendedPackages.map((pkg) => (
            <Grid
              key={pkg.id}
              size={{
                xs: 12,
                sm: 6,
                lg: 3,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 1,
                  overflow: "hidden",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                      "0 16px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={pkg.coverImage}
                  alt={t(`packages.${pkg.id}.title`)}
                  sx={{
                    height: 180,
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      minHeight: 56,
                    }}
                  >
                    {t(`packages.${pkg.id}.title`)}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                    }}
                  >
                    {pkg.cities.join(" • ")}
                  </Typography>

                  <Box sx={{ mt: "auto" }}>
                    <Typography
                      sx={{
                        color: "#1FB1F9",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        mb: 2,
                      }}
                    >
                      From USD {pkg.startingPrice}
                    </Typography>

                    <Button
                      component={Link}
                      to={`/packages/${pkg.slug}`}
                      fullWidth
                      variant="contained"
                      sx={{
                        borderRadius: 999,
                        py: 1.2,
                        fontWeight: 600,
                        textTransform: "none",
                      }}
                    >
                      View Package
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}