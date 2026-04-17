import { Box, Typography, Divider, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import paymentimg from "../../../assets/images/Payment.jpg";
import LuggageIcon from "@mui/icons-material/Luggage";

import { getPrice } from "../../../utils/pricing";
import { useRef } from "react";

const SummarySection = ({ data, onConfirm }: any) => {
  const getValue = (val: any) => val || "Not set";
  

  const price = getPrice(data.fromCity, data.toCity, data.car?.category);
  const pricebyhour = data.car?.hourRate * data.hours;

  const categoryKey = data.car?.category;
  const packagePrice = data.price?.[categoryKey];

  const confirmRef = useRef<HTMLButtonElement | null>(null);
  const summaryRef = useRef<HTMLButtonElement | null>(null);

  const totalPassengers = data.adults + data.children + data.infants;

  // const formatDate = (date: string) =>
  //   date ? new Date(date).toLocaleDateString() : "Not set";

  // const formatTime = (time: string) =>
  //   time ? new Date(time).toLocaleTimeString() : "Not set";

  const isComplete =
    data.type &&
    data.from &&
    data.date &&
    data.time &&
    data.adults &&
    data.car &&
    data.name &&
    data.phone;

  // 📲 WhatsApp
  // const handleWhatsApp = () => {
  //   //     const message = encodeURIComponent(`
  //   // Hello, I would like to book a transfer:

  //   // From: ${data.from}
  //   // To: ${data.to}
  //   // Date: ${data.date}
  //   // Time: ${data.time}
  //   // Passengers: ${data.passengers}
  //   // Car: ${data.car?.name}
  //   // FlightNum: ${data.flightNumber || "Not Set"}
  //   // ${data.pickupDetails || "Not Set"}
  //   // ${data.dropoffDetails || "Not Set"}
  //   // ${data.returnDate || "Not Set"}
  //   // ${data.returnTime || "Not Set"}
  //   // ${data.notes || "Not Set"}

  //   // Name: ${data.name}
  //   // Phone: ${data.phone}
  //   // `);

  //   // window.open(`https://wa.me/+201022225621?text=${message}`, "_blank");
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //     // setSuccess(true);
  //   }, 50); // dynamic
  // };

  // 📧 Email
  // const handleEmail = () => {
  //   const subject = "New Booking Request";

  //   const body = `
  //       From: ${data.from}
  //       To: ${data.to}
  //       Date: ${data.date}
  //       Time: ${data.time}
  //       Passengers: ${data.passengers}
  //       ${data.pickupDetails ? `PickupDetails: ${data.pickupDetails}` : ""}
  //       ${data.dropoffDetails ? `DropoffDetails: ${data.dropoffDetails}` : ""}
  //       Car: ${data.car?.name}

  //       Name: ${data.name}
  //       Phone: ${data.phone}
  //       `;

  //   window.location.href = `mailto:your@email.com?subject=${subject}&body=${encodeURIComponent(
  //     body,
  //   )}`;
  // };

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
        }}
      />

      <Box sx={{ p: 3 }}>
        <Typography sx={{ fontWeight: 700, mb: 1 }}>Trip Summary</Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Estimated for your selections
        </Typography>

        {/* FROM & TO */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <LocationOnIcon sx={{ color: "#1FB1F9" }} />
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
            <Box sx={{ display: "flex", gap: 1 }}>
              <FlightTakeoffIcon sx={{ color: "#f59e0b" }} />
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
        {/* TRIP TYPE */}
        <Typography variant="body2" sx={{ my: 1 }} color="text.secondary">
          {data.type === "hourly"
            ? "Hire By Hour"
            : `${data.returnDate ? "Round Trip" : "One Way"}`}
        </Typography>

        {/* DATE & TIME */}
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CalendarTodayIcon />
            <Typography variant="body2" id="summary-sec" ref={summaryRef}>
              {data.date ? new Date(data.date).toLocaleDateString() : "TBD"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <AccessTimeIcon />
            <Typography variant="body2">
              {data.time ? new Date(data.time).toLocaleTimeString() : "TBD"}
            </Typography>
          </Box>
        </Box>
        {/* Return DATE & TIME */}
        {data.returnDate && (
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CalendarTodayIcon />
              <Typography variant="body2">
                {data.returnDate
                  ? new Date(data.returnDate).toLocaleDateString()
                  : "TBD"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon />
              <Typography variant="body2">
                {data.returnTime
                  ? new Date(data.returnTime).toLocaleTimeString()
                  : "TBD"}
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
          <Box sx={{ display: "flex", gap: 1 }}>
            <DirectionsCarIcon />
            <Typography variant="body2">
              {data.car?.name || "Not set"} ({data.car?.category || "Not set"})
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <PeopleIcon />
              <Typography variant="body2">{totalPassengers} Pax</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <LuggageIcon />
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

          <Typography variant="h5" sx={{ color: "#1FB1F9", fontWeight: 700 }}>
            {data.type === "hourly"
              ? `${pricebyhour ? pricebyhour : "--"}`
              : data.type === "city" && data.price
                ? `${packagePrice ? packagePrice : "--"}`
                : `${price ? price : "--"}`}
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
          disabled={!isComplete}
          // onClick={handleWhatsApp}
          onClick={onConfirm}
          sx={{
            backgroundColor: "#1FB1F9",
            borderRadius: "999px",
            mb: 1,
          }}
        >
          Confirm via WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default SummarySection;
