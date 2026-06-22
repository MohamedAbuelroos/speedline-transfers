import { Box, Typography, TextField, Button } from "@mui/material";
import type { BookingStepProps } from "../../../utils/bookingTypes";

const StepUserInfo = ({
  bookingData,
  setBookingData,
  onBack,
}: BookingStepProps) => {
  const handleChange = (field: string, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isEmailValid =
    bookingData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.email);

  const isValid = bookingData.name && bookingData.phone && isEmailValid;

  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3 }}>
        Personal Information
      </Typography>

      {/* Name */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          label="Full Name"
          value={bookingData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </Box>

      {/* Email */}
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Email Address"
          fullWidth
          type="email"
          value={bookingData.email}
          onChange={(e) =>
            setBookingData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
      </Box>

      {/* Phone */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          label="Phone Number"
          value={bookingData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="(+123)4567891"
        />
      </Box>

      {/* Notes */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Additional Notes (Optional)"
          value={bookingData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          placeholder="Child seat, extra luggage, special request..."
        />
      </Box>

      {/* ACTIONS */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={onBack}>Back</Button>

        <Button
          variant="contained"
          disabled={!isValid}
          onClick={() => {
            setTimeout(() => {
              // Decide which button to scroll to
              const targetBtn =
                document.getElementById("confirm-btn") ||
                document.getElementById("quote-btn");

              targetBtn?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });

              // Pulse animation
              targetBtn?.classList.remove("pulse");
              void targetBtn?.offsetWidth; // force reflow
              targetBtn?.classList.add("pulse");

              setTimeout(() => {
                targetBtn?.classList.remove("pulse");
              }, 2000);
            }, 200);
          }}
          sx={{
            backgroundColor: "#1FB1F9",
            borderRadius: "999px",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default StepUserInfo;
