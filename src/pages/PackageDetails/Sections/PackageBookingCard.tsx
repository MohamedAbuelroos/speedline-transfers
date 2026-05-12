import { Box, Typography, Button } from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import type { TravelPackage } from "../../../utils/types";

type Props = {
  data: TravelPackage;
};

const PackageBookingCard = ({ data }: Props) => {
  const vehicle = data.vehicleTypes[0];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",

        borderRadius: "28px",

        overflow: "hidden",

        boxShadow: "0 10px 40px rgba(0,0,0,0.06)",

        position: {
          lg: "sticky",
        },

        top: 100,
      }}
    >
      {/* VEHICLE IMAGE */}
      <Box
        sx={{
          position: "relative",
          height: 220,
        }}
      >
        <Box
          component="img"
          src={vehicle.image}
          alt={vehicle.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
          }}
        />

        {/* VEHICLE NAME */}
        <Typography
          sx={{
            position: "absolute",
            left: 20,
            bottom: 20,

            color: "#fff",

            fontWeight: 800,

            fontSize: 24,
          }}
        >
          {vehicle.name}
        </Typography>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          p: 3,
        }}
      >
        {/* PRICE */}
        <Box
          sx={{
            mb: 4,
          }}
        >
          <Typography
            sx={{
              color: "#6b7280",
              fontSize: 14,
              mb: 1,
            }}
          >
            Starting from
          </Typography>

          <Typography
            variant="h4"
            sx={{
              // fontSize: 40,
              fontWeight: 900,
              lineHeight: 1,

              color: "#111827",
            }}
          >
            SAR {data.startingPrice}
          </Typography>
        </Box>

        {/* DETAILS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,

            mb: 4,
          }}
        >
          {/* DURATION */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CalendarMonthOutlinedIcon
                sx={{
                  color: "primary.main",
                }}
              />

              <Typography>Duration</Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              {data.duration}
            </Typography>
          </Box>

          {/* VEHICLE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <DirectionsCarOutlinedIcon
                sx={{
                  color: "primary.main",
                }}
              />

              <Typography>Vehicle</Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              {vehicle.name}
            </Typography>
          </Box>

          {/* CAPACITY */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <GroupsOutlinedIcon
                sx={{
                  color: "primary.main",
                }}
              />

              <Typography>Capacity</Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              {vehicle.capacity}
            </Typography>
          </Box>
        </Box>

        {/* INFO */}
        <Box
          sx={{
            backgroundColor: "#f0f9ff",

            borderRadius: "18px",

            p: 2,

            mb: 3,
          }}
        >
          <Typography
            sx={{
              color: "#0369a1",

              lineHeight: 1.8,

              fontSize: 14,
            }}
          >
            - Vehicle selection can be updated during booking.
          </Typography>
          <Typography
            sx={{
              color: "#0369a1",

              lineHeight: 1.8,

              fontSize: 14,
            }}
          >
            - Price includes all tolls, fuel, airport greeting, and hotel
            parking fees.
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mb: 2,

            py: 1.6,

            borderRadius: "16px",

            textTransform: "none",

            fontWeight: 700,

            fontSize: 16,

            backgroundImage:
              "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",
          }}
        >
          Book This Package
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<WhatsAppIcon />}
          sx={{
            py: 1.6,

            borderRadius: "16px",

            textTransform: "none",

            fontWeight: 700,

            fontSize: 16,

            borderColor: "#25D366",

            color: "#25D366",

            "&:hover": {
              borderColor: "#25D366",

              backgroundColor: "rgba(37,211,102,0.05)",
            },
          }}
        >
          Contact via WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default PackageBookingCard;
