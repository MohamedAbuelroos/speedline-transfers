import { Box, CircularProgress, Fade, Typography } from "@mui/material";

type Props = {
  loading: boolean;
};

const RouteLoader = ({ loading }: Props) => {
  return (
    <Fade in={loading}>
      <Box
        sx={{
          position: "fixed",

          top: 100,
          right: 20,

          zIndex: 99999,

          display: "flex",

          alignItems: "center",

          gap: 1.5,

          px: 2,
          py: 1.2,

          borderRadius: "999px",

          backdropFilter: "blur(16px)",

          backgroundColor: "rgba(255,255,255,0.75)",

          border: "1px solid rgba(226,232,240,0.8)",

          boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
        }}
      >
        <CircularProgress
          size={25}
          thickness={5}
          sx={{
            color: "#1FB1F9",
          }}
        />

        <Typography
          sx={{
            fontWeight: 600,

            fontSize: 14,

            color: "#111827",
          }}
        >
          Loading...
        </Typography>
      </Box>
    </Fade>
  );
};

export default RouteLoader;
