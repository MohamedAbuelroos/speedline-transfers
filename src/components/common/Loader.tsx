import { Box, CircularProgress, Typography } from "@mui/material";

import logo from "/logo.png";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",

        inset: 0,

        zIndex: 999999,

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        background: "linear-gradient(135deg, #f8fbff 0%, #eef7ff 100%)",
      }}
    >
      {/* CONTENT */}
      <Box
        sx={{
          display: "flex",

          flexDirection: "column",

          alignItems: "center",

          justifyContent: "center",
        }}
      >
        {/* LOGO */}
        <Box
          component="img"
          src={logo}
          alt="SpeedLine Transfers"
          sx={{
            width: {
              xs: 180,
              md: 240,
            },

            mb: 4,

            animation: "float 2.2s ease-in-out infinite",
          }}
        />

        {/* SPINNER */}
        <Box
          sx={{
            position: "relative",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            mb: 2,
          }}
        >
          <CircularProgress
            size={72}
            thickness={3.5}
            sx={{
              color: "rgba(31,177,249,0.18)",
            }}
            variant="determinate"
            value={100}
          />

          <CircularProgress
            size={72}
            thickness={4}
            sx={{
              color: "#1FB1F9",

              position: "absolute",

              left: 0,
            }}
          />
        </Box>

        {/* TEXT */}
        <Typography
          sx={{
            fontWeight: 700,

            color: "#111827",

            fontSize: 16,

            letterSpacing: 0.3,
          }}
        >
          Preparing Your Experience...
        </Typography>

        <Typography
          sx={{
            mt: 1,

            color: "#6b7280",

            fontSize: 14,
          }}
        >
          Loading premium transportation services
        </Typography>
      </Box>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Loader;
