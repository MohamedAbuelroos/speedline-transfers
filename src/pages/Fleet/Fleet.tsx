import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import TopSection from "./Sections/TopSection";
import FilterSection from "./Sections/FilterSection";
import { cars } from "../../data/cars";
import CarCard from "../../components/common/CarCard";
import { useState } from "react";
import CTASection from "./Sections/CTASection";
import { useNavigate } from "react-router-dom";

const Fleet = () => {
  const navigate = useNavigate();
  const handleSelectCar = (car: unknown) => {
    navigate("/booking", {
      state: {
        type: "car",
        data: car,
      },
    });
  };
  const [filters, setFilters] = useState({
    type: "All",
    capacity: "Any",
  });

  const filteredCars = cars.filter((car) => {
    const typeMatch = filters.type === "All" || car.category === filters.type;

    const capacityMatch =
      filters.capacity === "Any" ||
      (filters.capacity === "1-3" && car.passengers <= 3) ||
      (filters.capacity === "4-5" &&
        car.passengers >= 4 &&
        car.passengers <= 5) ||
      (filters.capacity === "6+" && car.passengers >= 6);

    return typeMatch && capacityMatch;
  });
  return (
    <Box sx={{ pb: 6, background: "white" }}>
      {/* TOP HEADER */}
      <TopSection />
      <Container>
        {/* FILTER BAR */}
        <FilterSection
          onFilterChange={setFilters}
          filteredCars={filteredCars}
        />

        <Divider sx={{ mb: 5 }} />

        {/* CAR GRID */}
        {filteredCars.length > 0 ? (
          <Grid container spacing={2}>
            {filteredCars.map((car) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={car.name}>
                <CarCard {...car} onSelect={() => handleSelectCar(car)} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
            No Result Found
          </Typography>
        )}
        <CTASection />
      </Container>
    </Box>
  );
};

export default Fleet;
