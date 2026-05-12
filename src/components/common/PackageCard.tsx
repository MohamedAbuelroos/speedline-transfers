import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import type { TravelPackage } from "../../utils/types";
type Props = {
  data: TravelPackage;
};

const PackageCard = ({ data }: Props) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate(`/packages/${data.slug}`);
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
      <Box sx={{ position: "relative", overflow: "hidden", height: 200 }}>
        <Box
          component="img"
          onClick={handleSelect}
          src={data.coverImage}
          alt={data.title}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            cursor: "pointer",

            transition: "transform 0.5s ease",

            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.15), transparent)",
            pointerEvents: "none",
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
                px: 1.5,
                py: 0.5,
                borderRadius: "999px",
                fontSize: "12px",
              }}
            >
              Popular
            </Box>
          )}

          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.95)",
              color: "#111",
              px: 1.5,
              py: 0.5,
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 700,
              backdropFilter: "blur(6px)",
            }}
          >
            {data.category}
          </Box>
        </Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ p: 2 }}>
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 1,
            color: "#111",
          }}
        >
          {data.title}
        </Typography>

        {/* SUBTITLE */}
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 14,
            lineHeight: 1.7,
            mb: 1,
            minHeight: 50,
          }}
        >
          {data.subtitle}
        </Typography>

        {/* META */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            pb: 2,
            mb: 2,
            borderBottom: "1px dashed #DEE1E6",
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            {data.cities.join(" • ")}
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "text.secondary",
            }}
          >
            • {data.duration}
          </Typography>
        </Box>

        {/* Price */}
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 13,
              mb: 0.5,
            }}
          >
            Starting from
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", gap:1}}>
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 800,
                color: "#111",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              SAR {data.startingPrice}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 13,
                mt: 0.5,
              }}
            >
              / vehicle
            </Typography>
          </Box>
        </Box>

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSelect}
          sx={{
            backgroundImage:
              "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",
            borderRadius: "14px",
            textTransform: "none",
            fontWeight: 700,
            py: 1.4,
            fontSize: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 10px 20px rgba(31,177,249,0.25)",
            },
          }}
        >
          View Package
          <NearMeOutlinedIcon sx={{ fontSize: 20 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default PackageCard;
