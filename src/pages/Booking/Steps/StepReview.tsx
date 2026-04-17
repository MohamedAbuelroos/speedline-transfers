import { Box, Typography, Button, Divider } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import NotesIcon from "@mui/icons-material/Notes";
import FlightIcon from "@mui/icons-material/Flight";

const StepReview = ({ bookingData, onBack }: any) => {
  const formatDate = (date: string) =>
    date ? new Date(date).toLocaleDateString() : "Not set";

  const formatTime = (time: string) =>
    time ? new Date(time).toLocaleTimeString() : "Not set";

  return (
    <Box>
      <Typography sx={{ fontWeight: 700, mb: 3 }}>
        Review Your Booking
      </Typography>

      {/* MAIN CARD */}
      <Box
        sx={{
          p: 3,
          borderRadius: "16px",
          backgroundColor: "#f9fafb",
        }}
      >
        {/* TRIP DETAILS */}
        <Typography sx={{ fontWeight: 600, mb: 2 }}>Trip Details</Typography>

        {/* FROM & TO */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <LocationOnIcon sx={{ color: "#1FB1F9" }} />
            <Typography>{bookingData.from || "Not set"}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <LocationOnIcon sx={{ color: "#f59e0b" }} />
            <Typography>{bookingData.to || "Not set"}</Typography>
          </Box>
        </Box>

        {/* DATE & TIME */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CalendarTodayIcon />
            <Typography>{formatDate(bookingData.date)}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <AccessTimeIcon />
            <Typography>{formatTime(bookingData.time)}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <DirectionsCarIcon />
            <Typography>
              {bookingData.car?.name || "Not set"} (
              {bookingData.car?.category || ""})
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <PeopleIcon />
            {bookingData.adults || 0} Adults • {bookingData.children || 0}{" "}
            Children • {bookingData.infants || 0} Infants
        
          </Box>
        </Box>

        {/* RETURN */}
        {bookingData.returnDate && (
          <Box>
            {/* Return DETAILS */}
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Return Details
            </Typography>

            {/* FROM & TO */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <LocationOnIcon sx={{ color: "#1FB1F9" }} />
                <Typography>{bookingData.to || "Not set"}</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <LocationOnIcon sx={{ color: "#f59e0b" }} />
                <Typography>{bookingData.from || "Not set"}</Typography>
              </Box>
            </Box>

            {/* DATE & TIME */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <CalendarTodayIcon />
                <Typography>{formatDate(bookingData.returnDate)}</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <AccessTimeIcon />
                <Typography>{formatTime(bookingData.returnTime)}</Typography>
              </Box>
            </Box>

            {/* VEHICLE & PASSENGERS */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <DirectionsCarIcon />
                <Typography>
                  {bookingData.car?.name || "Not set"} (
                  {bookingData.car?.category || ""})
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <PeopleIcon />
                <Typography>{bookingData.passengers || 0} Pax</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* TRIP TYPE */}
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {bookingData.returnDate ? "Round Trip" : "One Way"}
        </Typography>

        {/* ///////////////////////////////// */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/* Other DETAILS */}
          <Typography sx={{ fontWeight: 600, mb: 1 }}>Other Details</Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <FlightIcon
              sx={{ color: "primary.main", transform: "rotate(55deg)" }}
            />
            <Typography>
              Flight Number: {bookingData.flightNumber || "Not Set"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <LocationOnIcon sx={{ color: "secondary.main" }} />
            <Typography>
              Pickup location: {bookingData.pickupDetails || "Not Set"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <LocationOnIcon sx={{ color: "primary.main" }} />
            <Typography>
              Dropoff Location: {bookingData.dropoffDetails || "Not Set"}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* USER INFO */}
        <Typography sx={{ fontWeight: 600, mb: 2 }}>Personal Info</Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          <PersonIcon />
          <Typography>{bookingData.name}</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          <PhoneIcon />
          <Typography>{bookingData.phone}</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <NotesIcon />
          <Typography>{bookingData.notes || "No additional notes"}</Typography>
        </Box>
      </Box>

      {/* ACTIONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button onClick={onBack}>Back</Button>
      </Box>
    </Box>
  );
};

export default StepReview;
