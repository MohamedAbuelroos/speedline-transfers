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
        borderRadius: "28px",

        overflow: "hidden",

        backgroundColor: "#fff",

        border: "1px solid rgba(226,232,240,0.7)",

        boxShadow: "0 10px 35px rgba(15,23,42,0.06)",

        transition: "0.35s ease",

        position: "relative",

        "&:hover": {
          transform: "translateY(-8px)",

          boxShadow: "0 25px 50px rgba(15,23,42,0.12)",
        },
      }}
    >
      {/* Image + Category */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          loading="lazy"
          sx={{
            width: "100%",

            height: 240,

            objectFit: "cover",

            transition: "0.6s ease",

            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />

        {/* Category badge */}
        <Box
          sx={{
            position: "absolute",

            top: 18,
            left: 18,

            backdropFilter: "blur(10px)",

            backgroundColor:
              category === "Luxury" || category === "Business"
                ? "rgba(245,158,11,0.92)"
                : "rgba(31,177,249,0.92)",

            color: "#fff",

            px: 2,
            py: 0.8,

            borderRadius: "999px",

            fontSize: "12px",

            fontWeight: 700,

            letterSpacing: 0.3,

            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        >
          {category}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3 }}>
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
              fontWeight: 800,

              color: "#111827",

              lineHeight: 1.3,

              display: "flex",

              flexDirection: "column",

              fontSize: 22,
            }}
          >
            {name}
            {location.pathname === "/" ? (
              <Typography
                component="span"
                sx={{ color: "text.secondary", fontSize: 13 }}
              >
                (Or similar)
              </Typography>
            ) : (
              ""
            )}
          </Typography>
          <Box
            sx={{
              textAlign: "right",

              backgroundColor: "#f8fbff",

              borderRadius: "16px",

              px: 1.8,
              py: 1,
            }}
          >
            <Typography variant="caption" sx={{ color: "#6b7280" }}>
              STARTING AT
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,

                color: "primary.main",

                mt: -0.5,
              }}
            >
              SAR {price}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2.5 }} />

        {/* Features */}
        <Box
          sx={{
            display: "flex",
            mb: 3.5,
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
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

            borderRadius: "16px",

            justifyContent: "center",

            background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

            color: "#fff",

            fontWeight: 700,

            gap: 1,

            px: 2,

            py: 1.4,

            boxShadow: "0 12px 25px rgba(31,177,249,0.2)",

            transition: "0.3s ease",

            "&:hover": {
              transform: "translateY(-2px)",

              background: "linear-gradient(135deg, #19a6ec 0%, #138cc5 100%)",
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
