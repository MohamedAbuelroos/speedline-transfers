import { Box, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RouteIcon from "@mui/icons-material/Route";
import { useNavigate } from "react-router-dom";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
type Props = {
  data: any;
};

const PackageCard = ({ data }: Props) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate("/booking", {
      state: {
        type: "package",
        data,
      },
    });
  };

  return (
    <Box
      sx={{
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 6px #17191C12, 0px 0px 0px #171a1f00",
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={data.image}
          alt={data.from}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            transition: "0.4s",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />

        {/* Tags */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            gap: 1,
            fontWeight: 600,
          }}
        >
          {data.popular && (
            <Box
              sx={{
                backgroundColor: "#f59e0b",
                color: "#fff",
                px: 1,
                borderRadius: "999px",
                fontSize: "12px",
              }}
            >
              Popular
            </Box>
          )}

          <Box
            sx={{
              backgroundColor: "#fff",
              px: 1,
              borderRadius: "999px",
              fontSize: "12px",
            }}
          >
            {data.category}
          </Box>
        </Box>

        {/* Route */}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            color: "#fff",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 700,
              fontSize: 18,
              mb: 0.5,
            }}
          >
            {data.from}
            <SwapHorizIcon />
            {data.to}
          </Typography>
        </Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ p: 2 }}>
        {/* Info */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: 3,
            mb: 2,
            borderBottom: "1px dashed black",
            borderColor: "#DEE1E6FF",
          }}
        >
          {/* Duration */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontWeight: 600 }}
            >
              Duration
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 16, color: "primary.main" }} />
              <Typography variant="body2">{data.duration}</Typography>
            </Box>
          </Box>

          {/* Distance */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontWeight: 600 }}
            >
              Distance
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <RouteIcon sx={{ fontSize: 16, color: "primary.main" }} />
              <Typography variant="body2">{data.distance}</Typography>
            </Box>
          </Box>
        </Box>

        {/* Price */}
        <Typography component="span" variant="body2" color="text.secondary">
          Starting from
        </Typography>
        <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 22 }}>
          SAR {data.price.Sedan}{" "}
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 13 }}
          >
            / vehicle
          </Typography>
        </Typography>

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSelect}
          sx={{
            backgroundColor: "#1FB1F9",
            borderRadius: "999px",
            textTransform: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              backgroundColor: "#199ad8",
            },
          }}
        >
          Book This Route
          <NearMeOutlinedIcon sx={{ fontSize: 20 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default PackageCard;
