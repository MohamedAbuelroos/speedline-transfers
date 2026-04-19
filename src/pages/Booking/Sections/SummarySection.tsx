import { Box, Typography, Divider, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import paymentimg from "../../../assets/images/Payment.jpg";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import { getPrice } from "../../../utils/pricing";
import { useRef } from "react";

const SummarySection = ({ data, onConfirm }: any) => {
  const getValue = (val: any) => val || "Not set";
  const formatReturnTime = (dateStr: string) =>
    new Date(dateStr).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  const getBookingPrice = (data: any) => {
    if (data.type === "hourly") {
      return data.car?.hourRate && data.hours
        ? data.car.hourRate * data.hours
        : "--";
    }

    if (data.type === "city" && data.price) {
      const categoryKey = data.car?.category;
      return data.price?.[categoryKey] ?? "--";
    }

    // Default case: point-to-point
    return getPrice(data.fromCity, data.toCity, data.car?.category) ?? "--";
  };

  const confirmRef = useRef<HTMLButtonElement | null>(null);
  const summaryRef = useRef<HTMLButtonElement | null>(null);

  const totalPassengers = data.adults + data.children + data.infants;
  const isEmailValid =
    data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  const isComplete =
    data.type &&
    data.from &&
    data.date &&
    data.time &&
    data.adults &&
    data.car &&
    data.name &&
    data.phone;

  return (
    <Box
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        backgroundColor: "#fff",
        position: "sticky",
        top: 100,
      }}
    >
      {/* IMAGE */}

      <Box
        component="img"
        src={paymentimg}
        sx={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          position: "relative",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "21%",
          zIndex: 5,
          top: 0,
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.33) 40%, rgba(255,255,255,0) 100%)",
        }}
      />
      <Box sx={{ p: 3, pt: 2 }}>
        <Typography sx={{ fontWeight: 700, mb: 1 }}>Trip Summary</Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Estimated for your selections
        </Typography>

        {/* FROM & TO */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box
              sx={{
                color: "#1FB1F9",
                width: "40px",
                height: "40px",
                backgroundColor: "#1fb0f926",

                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  color: "#1FB1F9",
                }}
              />
            </Box>
            <Box>
              <Typography variant="caption">FROM</Typography>
              <Typography style={{ fontWeight: 500 }}>
                {getValue(data.from)}
              </Typography>
            </Box>
          </Box>

          {data.type === "hourly" ? (
            ""
          ) : (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box
                sx={{
                  color: "#1FB1F9",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#f59f0b1d",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NearMeOutlinedIcon
                  sx={{
                    color: "#f59e0b",
                  }}
                />
              </Box>
              <Box>
                <Typography variant="caption">TO</Typography>
                <Typography sx={{ fontWeight: 500 }}>
                  {getValue(data.to)}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        <Divider />

        {/* DATE & TIME */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="body2" id="summary-sec" ref={summaryRef}>
              {data.date ? new Date(data.date).toLocaleDateString() : "TBD"}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ my: 1 }} color="text.secondary">
            {data.type === "hourly"
              ? "Hire By Hour"
              : `${data.returnDate ? "Round Trip" : "One Way"}`}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">
              {data.time ? formatReturnTime(data.time) : "TBD"}
            </Typography>
          </Box>
        </Box>
        {/* Return DATE & TIME */}
        {data.returnDate && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 2,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="body2">
                {data.returnDate
                  ? new Date(data.returnDate).toLocaleDateString()
                  : "TBD"}
              </Typography>
            </Box>
            <AutorenewIcon sx={{ color: "secondary.main" }} />
            <Box sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2">
                {data.returnTime ? formatReturnTime(data.returnTime) : "TBD"}
              </Typography>
            </Box>
          </Box>
        )}

        <Divider />

        {/* VEHICLE & PASSENGERS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <DirectionsCarIcon sx={{ color: "primary.main" }} />
            <Box sx={{fontWeight:"700"}}>
              {data.car?.name || "Not set"}
              {data.car?.name && (
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  (Or similar)
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <PeopleIcon fontSize="small" />
              <Typography variant="body2">{totalPassengers} Pax</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <LuggageIcon fontSize="small" />
              <Typography variant="body2">
                {data?.car?.bags || "0"} Bags
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        {/* PRICE BOX */}
        <Box
          sx={{
            backgroundColor: "#f3f7fb",
            borderRadius: "12px",
            p: 2,
            textAlign: "center",
            my: 3,
          }}
        >
          <Typography variant="caption">TOTAL ESTIMATED FARE</Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, display: "flex", justifyContent: "center" }}
          >
            {getBookingPrice(data)}
            <Typography
              variant="body1"
              sx={{ alignSelf: "flex-end", color: "primary.main", ml: 0.5 }}
            >
              {getBookingPrice(data) !== "--" ? "SAR" : ""}
            </Typography>
          </Typography>

          <Typography variant="caption" color="text.secondary">
            You will receive a confirmation with a payment link to confirm the
            reservation.
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Button
          fullWidth
          id="confirm-btn"
          ref={confirmRef}
          variant="contained"
          disabled={!isComplete || !isEmailValid}
          onClick={() => onConfirm(getBookingPrice(data))}
          sx={{
            backgroundColor: "#1FB1F9",
            borderRadius: "999px",
            mb: 1,
          }}
        >
          Confirm Booking
        </Button>
      </Box>
    </Box>
  );
};

export default SummarySection;
