import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingOverlay = ({ open, text = "Processing..." }: any) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <CircularProgress sx={{ color: "#fff" }} />
      <Typography sx={{ mt: 2 }}>{text}</Typography>
    </Box>
  );
};

export default LoadingOverlay;
