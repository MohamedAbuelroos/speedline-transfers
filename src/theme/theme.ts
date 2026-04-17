import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1FB1F9",
    },
    secondary: {
      light: "#10b981",
      main: "#F5993DFF",
    },
    background: {
      default: "#f9fafb",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
