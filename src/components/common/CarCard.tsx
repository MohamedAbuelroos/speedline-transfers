import { Box, Typography, Button, Divider } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import WifiIcon from "@mui/icons-material/Wifi";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocation } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";

type CarCardProps = {
  id: string;
  name: string;
  image: string;
  category: string;
  passengers: number;
  bags: number;
  price: number;
  onSelect?: () => void;
};

const CarCard = ({
  name,
  image,
  category,
  passengers,
  bags,
  price,
  onSelect,
}: CarCardProps) => {
  const location = useLocation();
  const lang = useLanguage();
  const isRTL = lang === "ar";

  return (
    <Box
      sx={{
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 6px #17191C12, 0px 0px 0px #171a1f00",
      }}
    >
      {/* Image + Category */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt={name}
          loading="lazy"
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            transition: "0.5s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />

        {/* Category badge */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: `${category === "Luxury" ? "secondary.main" : "primary.main"}`,
            color: "black",
            px: 1.5,
            py: 0.5,
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          {category}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2 }}>
        {/* Name */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {name}
            {location.pathname === "/" ? (
              <Typography
                component="span"
                sx={{ color: "text.secondary", fontSize: "small" }}
              >
                (Or similar)
              </Typography>
            ) : (
              ""
            )}
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              STARTING AT
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "primary.main", mt: -0.5 }}
            >
              SAR {price}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Features */}
        <Box sx={{ display: "flex", mb: 3, gap: 2.5, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <PeopleAltIcon sx={{ fontSize: 18, color: "#555D6DFF" }} />
            <Typography variant="body2">{passengers} Pax</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <WorkIcon sx={{ fontSize: 18, color: "#555D6DFF" }} />
            <Typography variant="body2">{bags} Bags</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <WifiIcon sx={{ fontSize: 18, color: "#555D6DFF" }} />
            <Typography variant="body2">WiFi</Typography>
          </Box>
        </Box>

        {/* Button */}
        <Button
          fullWidth
          onClick={onSelect}
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            justifyContent: "center",
            color: "black",
            fontWeight: 600,
            gap: 1,
            px: 2,
            mb: 1.5,
            "&:hover": {
              backgroundColor: "#f3f7fb",
              borderColor: "#1FB1F9",
              color: "primary.main",
              transition: "0.3s",
            },
          }}
        >
          Book This Car
          <ArrowForwardIcon
            sx={{ fontSize: 18, transform: isRTL ? "rotate(180deg)" : "none" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default CarCard;
