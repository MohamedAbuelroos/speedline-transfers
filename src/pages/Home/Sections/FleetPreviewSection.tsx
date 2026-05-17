import { Box, Container, Typography, Grid, Button } from "@mui/material";
import CarCard from "../../../components/common/CarCard";
import { cars } from "../../../data/cars";
import type { Car } from "../../../utils/types";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";

const FleetPreviewSection = () => {
  const navigate = useDelayedNavigate();

  const handleSelectCar = (car: Car) => {
    navigate("/booking", {
      state: {
        type: "car",
        data: car,
      },
    });
  };

  return (
    <Box
      sx={{
        py: {
          xs: 10,
          md: 8,
        },
        px: {
          xs: 2,
          md: 12,
        },
        background: "linear-gradient(135deg, #f8fbff 0%, #edf6fc 100%)",
      }}
    >
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

                backgroundColor: "#e6f6fd",

                color: "#1FB1F9",

                fontSize: 13,

                fontWeight: 700,

                mb: 2.5,
              }}
            >
              Premium Vehicle Collection
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontWeight: 900,

                lineHeight: 1.15,

                color: "#111827",

                mb: 2,

                fontSize: {
                  xs: 34,
                  md: 48,
                },
              }}
            >
              The SpeedLine Fleet
            </Typography>

            {/* SUBTITLE */}
            <Typography
              sx={{
                color: "#6b7280",

                maxWidth: 700,

                lineHeight: 1.9,

                fontSize: {
                  xs: 15,
                  md: 17,
                },
              }}
            >
              From comfortable sedans to spacious luxury vans, our
              professionally maintained fleet is designed to provide safe,
              reliable, and comfortable transportation across Saudi Arabia.
            </Typography>
          </Box>

          {/* BUTTON */}
          <Button
            onClick={() => navigate("/fleet")}
            variant="contained"
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
            Explore Full Fleet
          </Button>
        </Box>
        {/* Cards */}
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
          {cars.slice(0, 3).map((car) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={car.id}>
              <CarCard {...car} onSelect={() => handleSelectCar(car)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FleetPreviewSection;
