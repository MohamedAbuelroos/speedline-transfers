import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

import useLanguage from "../../../hooks/useLanguage";

import { translations } from "../../../i18n";

import type { PackageTranslation } from "../../../utils/types";

import { travelPackages } from "../../../data/travelPackages";
import { useCurrencyFormatter } from "../../../hooks/useCurrencyFormatter";

export default function RecommendedPackagesSection() {
  const lang = useLanguage();
  const formatCurrency = useCurrencyFormatter();
  const translate = translations[lang];

  const recommendedPackages = travelPackages
    .filter((pkg) => pkg.featured || pkg.popular)
    .slice(0, 4);

  return (
    <Box
      sx={{
        py: {
          xs: 4,
          md: 6,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
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
              fontSize: "1.05rem",
            }}
          >
            Discover Saudi Arabia’s Top Transfer Packages — Reliable Airport,
            City, and Pilgrimage Rides at the Best Value
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {recommendedPackages.map((pkg) => {
            const packageTranslation = translate.packages[
              pkg.id as keyof typeof translate.packages
            ] as PackageTranslation;

            return (
              <Grid
                key={pkg.id}
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 3,
                }}
              >
                <Card
                  component={Link}
                  to={`/packages/${pkg.slug}`}
                  sx={{
                    height: "100%",
                    borderRadius: 1,
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    transition: "0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 14px 35px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {/* IMAGE */}

                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={pkg.coverImage}
                      alt={packageTranslation.title}
                      sx={{
                        height: 200,
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        bgcolor: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 600,
                        zIndex: 2,
                      }}
                    >
                      {pkg.category}
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* TITLE */}
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: "text.primary",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        lineHeight: 1.3,

                        "&:hover": {
                          color: "#1FB1F9",
                        },
                      }}
                    >
                      {packageTranslation.title}
                    </Typography>

                    {/* SUBTITLE */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mt: 1.5,
                        mb: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        minHeight: 22,
                      }}
                    >
                      {packageTranslation.subtitle}
                    </Typography>

                    {/* CITIES */}
                    <Typography
                      sx={{
                        color: "#1FB1F9",
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {pkg.cities.slice(0, 3).join(" . ")}
                      {pkg.cities.length > 3 && " ..."}
                    </Typography>

                    <Divider />

                    {/* PRICE */}
                    <Box
                      sx={{
                        mt: "auto",
                        pt: 2,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Starting From
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: "1.8rem",
                          color: "#1FB1F9",
                          lineHeight: 1.1,
                        }}
                      >
                        {formatCurrency(pkg.startingPrice)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
