import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { cars } from "../../../data/cars";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import type { PackageTranslation, TravelPackage } from "../../../utils/types";
import { useState } from "react";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";
import { useCurrencyFormatter } from "../../../hooks/useCurrencyFormatter";

type Props = {
  data: TravelPackage;
};

const PackageBookingCard = ({ data }: Props) => {
  const lang = useLanguage();
  const translate = translations[lang];
  const formatCurrency = useCurrencyFormatter();

  const packageTranslation = translate.packages[
    data.id as keyof typeof translate.packages
  ] as PackageTranslation;

  const availableVehicles = cars.filter(
    (car) => data.vehiclePricing?.[car.category],
  );

  const [selectedVehicleId, setSelectedVehicleId] = useState(
    availableVehicles[2]?.id,
  );

  const vehicle =
    availableVehicles.find((car) => car.id === selectedVehicleId) ||
    availableVehicles[0];

  const navigate = useDelayedNavigate();

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
          src={vehicle?.image}
          alt={vehicle?.name}
          loading="lazy"
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
        {/* <Typography
          sx={{
            position: "absolute",
            left: 20,
            bottom: 20,

            color: "#fff",

            fontWeight: 800,

            fontSize: 24,
          }}
        >
          {vehicle?.name}
          
        </Typography> */}

        {/* VEHICLE INFO BOX */}
        <Box
          sx={{
            position: "absolute",
            left: 20,
            bottom: 10,
            backgroundColor: "rgba(31,177,249,0.3)", // your primary blue
            color: "#fff",
            borderRadius: "10px",
            px: 2.5,
            py: 1.5,
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            backdropFilter: "blur(4px)",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 22,
              lineHeight: 1.2,
              letterSpacing: "0.5px",
            }}
          >
            {vehicle?.name}
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              opacity: 0.9,
              mt: 0.3,
            }}
          >
            Or similar
          </Typography>
        </Box>
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
            {translate.common.startingFrom}
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
            {vehicle
              ? formatCurrency(data.vehiclePricing?.[vehicle.category])
              : "--"}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 600,
            }}
          >
            {translate.common.selectVehicle}
          </Typography>

          <TextField
            select
            fullWidth
            value={selectedVehicleId}
            onChange={(e) => setSelectedVehicleId(e.target.value)}
          >
            {availableVehicles.map((car) => (
              <MenuItem key={car.id} value={car.id}>
                {car.category}
              </MenuItem>
            ))}
          </TextField>
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

              <Typography>{translate.common.routes}</Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              {packageTranslation.duration}
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

              <Typography>{translate.common.vehicle}</Typography>
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

              <Typography>{translate.common.capacity}</Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              {vehicle.passengers} {translate.common.pax} • {vehicle.bags}{" "}
              {translate.common.bags}
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
            {translate.packages.packageNote}
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Button
          fullWidth
          onClick={() => {
            navigate("/booking", {
              state: {
                type: "package",
                data: data,
                selectedVehicle: vehicle,
              },
            });
          }}
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
          {translate.common.bookPackage}
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
          {translate.common.whatsAppBtn}
        </Button>
      </Box>
    </Box>
  );
};

export default PackageBookingCard;
