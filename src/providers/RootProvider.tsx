import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";

import { getTheme } from "../theme/theme";
import useLanguage from "../hooks/useLanguage";

import App from "../App";

const ltrCache = createCache({
  key: "mui",
  stylisPlugins: [prefixer],
});

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const RootProvider = () => {
  const lang = useLanguage();
  const direction = lang === "ar" ? "rtl" : "ltr";

  const theme = getTheme(direction);

  return (
    <CacheProvider value={direction === "rtl" ? rtlCache : ltrCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div dir={direction}>
            <App />
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default RootProvider;
