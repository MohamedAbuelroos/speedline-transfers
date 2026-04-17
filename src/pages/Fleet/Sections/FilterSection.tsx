import { Box, Divider, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useState } from "react";

const carTypes = ["All", "Business", "Economy", "Luxury", "Van"];
const capacities = ["Any", "1-3", "4-5", "6+"];

type Props = {
  filteredCars: object[];
  onFilterChange: (filters: { type: string; capacity: string }) => void;
};

const FilterSection = ({ onFilterChange, filteredCars }: Props) => {
  const [activeType, setActiveType] = useState("All");
  const [activeCapacity, setActiveCapacity] = useState("Any");

  const handleType = (type: string) => {
    setActiveType(type);
    onFilterChange({ type, capacity: activeCapacity });
  };

  const handleCapacity = (capacity: string) => {
    setActiveCapacity(capacity);
    onFilterChange({ type: activeType, capacity });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        mb: 2,
      }}
    >
      {/* LEFT */}
      <Box sx={{ display: "flex", gap: { xs: 2, md: 6 }, flexWrap: "wrap" }}>
        {/* CAR TYPE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FilterListIcon sx={{ color: "text.secondary" }} />
          <Typography variant="body2">Car Type:</Typography>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#f3f7fb",
              borderRadius: "999px",
              p: 0.5,
              gap: 0.5,
              ml: { sm: 0, md: 1 },
            }}
          >
            {carTypes.map((type) => (
              <Box
                key={type}
                onClick={() => handleType(type)}
                sx={{
                  px: { xs: 1, md: 2 },
                  py: 0.5,
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "14px",
                  backgroundColor: activeType === type ? "#fff" : "transparent",
                  color: activeType === type ? "#1FB1F9" : "text.secondary",
                  fontWeight: activeType === type ? 600 : 400,
                  transition: "0.2s",
                }}
              >
                {type}
              </Box>
            ))}
          </Box>
        </Box>

        {/* CAPACITY */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PeopleAltIcon sx={{ color: "text.secondary" }} />
          <Typography variant="body2">Capacity:</Typography>

          <Box
            sx={{
              display: "flex",
              ml: { sm: 0, md: 1 },
              backgroundColor: "#f3f7fb",
              borderRadius: "999px",
              p: 0.5,
              gap: 0.5,
            }}
          >
            {capacities.map((cap) => (
              <Box
                key={cap}
                onClick={() => handleCapacity(cap)}
                sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "14px",
                  backgroundColor:
                    activeCapacity === cap ? "#fff" : "transparent",
                  color: activeCapacity === cap ? "#1FB1F9" : "text.secondary",
                  fontWeight: activeCapacity === cap ? 600 : 400,
                  transition: "0.2s",
                }}
              >
                {cap}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        variant="inset"
        flexItem
        sx={{ display: { xs: "none", md: "block" } }}
      />
      {/* RIGHT */}
      <Typography variant="body2" color="text.secondary">
        Showing {filteredCars.length} results
      </Typography>
    </Box>
  );
};

export default FilterSection;
