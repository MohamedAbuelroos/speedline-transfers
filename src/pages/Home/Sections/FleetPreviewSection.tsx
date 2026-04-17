import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarCard from "../../../components/common/CarCard";
import { cars } from "../../../data/cars";

const FleetPreviewSection = () => {
  const navigate = useNavigate();

  const handleSelectCar = (car: object) => {
    navigate("/booking", {
      state: {
        type: "car",
        data: car,
      },
    });
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#f3f7fb" }}>
      <Container>
        {/* Header Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            mb: 5,
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { sm: "center", md: "left" } }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              The Speed Line Fleet
            </Typography>

            <Typography
              sx={{ mt: 1.5, color: "text.secondary", maxWidth: "500px" }}
            >
              Maintained to the highest standards, our vehicles offer the
              pinnacle of comfort and safety
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={() => navigate("/fleet")}
            sx={{
              backgroundColor: "#1FB1F9",
              borderRadius: "999px",
              textTransform: "none",
              color: "#fff",
              px: 3,
              "&:hover": {
                backgroundColor: "#199ad8",
              },
            }}
          >
            View Full Fleet
          </Button>
        </Box>

        {/* Cards */}
        <Grid container spacing={3} sx={{ px: 2 }}>
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
