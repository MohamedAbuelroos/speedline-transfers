import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { travelPackages } from "../../../data/travelPackages";
import PackageCard from "../../../components/common/PackageCard";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";

const PopularTransfersSection = () => {
  const navigate = useDelayedNavigate();

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 12 }, background: "#fff" }}>
      <Container maxWidth="xl">
        {/* SECTION HEADER */}
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: 3,

            mb: 6,
          }}
        >
          {/* LEFT */}
          <Box>
            {/* BADGE */}
            <Box
              sx={{
                display: "inline-flex",

                alignItems: "center",

                justifyContent: "center",

                px: 2.5,
                py: 1,

                borderRadius: "999px",

                backgroundColor: "rgba(245,153,61,0.12)",

                border: "1px solid rgba(245,153,61,0.2)",

                color: "#F5993D",

                fontSize: 13,

                fontWeight: 700,

                mb: 2,
              }}
            >
              Popular Travel Packages
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontWeight: 900,

                lineHeight: 1.15,

                color: "#111827",

                mb: 1.5,

                fontSize: {
                  xs: 32,
                  md: 44,
                },
              }}
            >
              Most Popular Transfers
            </Typography>

            {/* SUBTITLE */}
            <Typography
              sx={{
                color: "#6b7280",

                maxWidth: 620,

                lineHeight: 1.9,

                fontSize: {
                  xs: 15,
                  md: 16,
                },
              }}
            >
              Fixed transparent pricing with professional chauffeurs, premium
              vehicles, airport meet & greet, and seamless transportation across
              Saudi Arabia.
            </Typography>
          </Box>

          {/* BUTTON */}
          <Button
            variant="contained"
            onClick={() => navigate("/packages")}
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: "999px",
              textTransform: "none",
              color: "white",
              fontWeight: 600,
              fontSize: 15,
              backgroundColor: "#1FB1F9",
              "&:hover": {
                backgroundColor: "#1697d2",
              },
            }}
          >
            Explore All Packages
          </Button>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{
            px: {
              xs: 0,
              md: 2,
            },
          }}
        >
          {travelPackages.slice(0, 3).map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.id}>
              <PackageCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularTransfersSection;
