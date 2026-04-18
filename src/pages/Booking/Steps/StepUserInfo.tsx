import { Box, Typography, TextField, Button } from "@mui/material";

const StepUserInfo = ({ bookingData, setBookingData, onBack }: any) => {
  const handleChange = (field: string, value: string) => {
    setBookingData((prev: any) => ({
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
            setBookingData((prev: any) => ({
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
              const btn = document.getElementById("confirm-btn");
              btn?.scrollIntoView({ behavior: "smooth", block: "center" });

              btn?.classList.remove("pulse");
              void btn?.offsetWidth;
              btn?.classList.add("pulse");

              setTimeout(() => {
                btn?.classList.remove("pulse");
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
