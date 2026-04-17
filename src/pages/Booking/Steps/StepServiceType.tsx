import { Box, Typography, Button } from "@mui/material";

const StepServiceType = ({ bookingData, setBookingData, onNext }: any) => {
  const options = [
    { label: "Airport Transfer", value: "airport" },
    { label: "City to City", value: "city" },
    { label: "Hire by Hour", value: "hourly" },
  ];
  const selectType = (type: string) => {
    setBookingData((prev: any) => ({
      ...prev,
      type,
    }));
  };


  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 2 }}>
        Select Service Type
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        {options.map((opt) => {
          const selected = bookingData.type === opt.value;

          return (
            <Box
              key={opt.value}
              onClick={() => selectType(opt.value)}
              sx={{
                flex: 1,
                p: 2,
                borderRadius: "16px",
                cursor: "pointer",
                border: selected ? "2px solid #1FB1F9" : "1px solid #e5e7eb",
                backgroundColor: selected ? "#f0f9ff" : "#fff",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {opt.label}
            </Box>
          );
        })}
      </Box>

      <Button
        variant="contained"
        disabled={!bookingData.type}
        onClick={onNext}
        sx={{
          backgroundColor: "#1FB1F9",
          borderRadius: "999px",
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default StepServiceType;
