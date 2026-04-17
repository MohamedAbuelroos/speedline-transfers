import { Box, Typography } from "@mui/material";

const steps = ["Service", "Details", "Vehicle", "Info"];

const ProgressSection = ({ step }: { step: number }) => {
  return (
    <Box
      sx={{
        display: "flex",
        mb: 4,
        flex: 1,
        width: { xs: "100%", md: "85%" },
      }}
    >
      {steps.map((label, index) => {
        const isActive = step === index;
        const isCompleted = step > index;

        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",

              flex: 1,
            }}
          >
            {/* Circle */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  backgroundColor:
                    isActive || isCompleted ? "#1FB1F9" : "#e5e7eb",
                  color: isActive || isCompleted ? "#fff" : "#6b7280",
                }}
              >
                {index + 1}
              </Box>

              {/* Label */}
              <Typography
                sx={{
                  fontSize: 12,
                  color: isActive ? "#000" : "#6b7280",
                }}
              >
                {label}
              </Typography>
            </Box>

            {/* Line */}
            {index !== steps.length - 1 && (
              <Box
                sx={{
                  flex: 1,
                  height: 2,
                  mx: 1,
                  backgroundColor: step > index ? "#1FB1F9" : "#e5e7eb",
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default ProgressSection;
