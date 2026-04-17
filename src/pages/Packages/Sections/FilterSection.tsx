import { Box } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import FlightIcon from "@mui/icons-material/Flight";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

type Props = {
  active: string;
  onChange: (value: string) => void;
};
const filters = [
  { title: "All Packages", icon: <BoltIcon fontSize="medium" /> },
  {
    title: "Airport",
    icon: <FlightIcon fontSize="medium" sx={{ transform: "rotate(35deg)" }} />,
  },
  { title: "City", icon: <LocationCityIcon fontSize="medium" /> },
  { title: "Religious", icon: <SwapHorizIcon fontSize="medium" /> },
];

const FilterSection = ({ active, onChange }: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mb: 5,
          flexWrap: "wrap",
        }}
      >
        {filters.map((item) => (
          <Box
            key={item.title}
            onClick={() => onChange(item.title)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              px: 2,
              py: 0.8,
              borderRadius: "999px",
              cursor: "pointer",
              backgroundColor: active === item.title ? "#1FB1F9" : "#f3f7fb",
              color: active === item.title ? "#fff" : "#000",
              fontSize: "14px",
              transition: "0.2s",
            }}
          >
            {item.icon}
            {item.title}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FilterSection;
