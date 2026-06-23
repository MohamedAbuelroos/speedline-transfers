import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import InfoIcon from "@mui/icons-material/Info";
import logo from "/logo.png";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigationLoader } from "../../context/NavigationLoaderContext";

import MenuIcon from "@mui/icons-material/Menu";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "../common/LanguageSwitcher";
import CurrencySwitcher from "../common/CurrencySwitcher";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../i18n";
import { languages } from "../../utils/lang";
import useDelayedNavigate from "../../hooks/useDelayedNavigate";
import { useCurrency } from "../../context/CurrencyContext";

const Navbar = () => {
  const navigate = useDelayedNavigate();
  const location = useLocation();
  const theme = useTheme();
  const lang = useLanguage();
  const translate = translations[lang];
  const isRTL = lang === "ar";
  const { currency, setCurrency } = useCurrency();

  const { startLoading } = useNavigationLoader();

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: translate.navbar.home, path: "/", icon: <HomeIcon /> },
    {
      label: translate.navbar.fleet,
      path: "/fleet",
      icon: <DirectionsCarIcon />,
    },
    {
      label: translate.navbar.services,
      path: "/services",
      icon: <MiscellaneousServicesIcon />,
    },
    {
      label: translate.navbar.packages,
      path: "/packages",
      icon: <CardGiftcardIcon />,
    },
    { label: translate.navbar.about, path: "/about", icon: <InfoIcon /> },
    {
      label: translate.navbar.contact,
      path: "/contact",
      icon: <ContactSupportIcon />,
    },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(226,232,240,0.7)",
          color: "#111827",
          boxShadow: "0 8px 30px rgba(15,23,42,0.04)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",

            justifyContent: "space-between",

            flexDirection: isRTL ? "row-reverse" : "row",

            minHeight: {
              xs: 72,
              md: 84,
            },

            px: {
              xs: 1,
              md: 2,
            },
          }}
        >
          {/* Logo */}

          <Box
            component="img"
            onClick={() => navigate("/")}
            src={logo}
            alt={"SpeedLineTransfers Logo"}
            loading="lazy"
            sx={{
              width: {
                xs: 130,
                md: 155,
              },

              height: "auto",

              objectFit: "contain",

              cursor: "pointer",

              transition: "0.3s ease",

              "&:hover": {
                transform: "scale(1.03)",
              },

              marginInlineEnd: isRTL ? 0 : 2,

              marginInlineStart: isRTL ? 2 : 0,
            }}
          />

          {/* DESKTOP */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 1.2,
              }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Box
                    key={link.label}
                    onClick={() => navigate(link.path)}
                    sx={{
                      cursor: "pointer",

                      position: "relative",

                      px: 2.2,
                      py: 1.1,

                      borderRadius: "999px",

                      fontWeight: 600,

                      fontSize: 15,

                      transition: "0.3s ease",

                      color: isActive ? "#1FB1F9" : "#374151",

                      backgroundColor: isActive
                        ? "rgba(31,177,249,0.10)"
                        : "transparent",

                      "&:hover": {
                        color: "#1FB1F9",

                        backgroundColor: "rgba(31,177,249,0.06)",
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* RIGHT SIDE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexDirection: isRTL ? "row-reverse" : "row",
            }}
          >
            {" "}
            {/* Desktop Switchers */}
            {!isMobile && (
              <>
                {/* Language */}

                <LanguageSwitcher />

                {/* Currency */}
                <CurrencySwitcher />
              </>
            )}
            {/* Book Button */}
            <Button
              variant="contained"
              onClick={() => navigate("/booking")}
              sx={{
                borderRadius: "999px",

                textTransform: "none",

                px: 3,
                py: 1.1,

                fontWeight: 700,

                fontSize: 14,

                background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                boxShadow: "0 10px 25px rgba(31,177,249,0.22)",

                transition: "0.3s ease",

                "&:hover": {
                  transform: "translateY(-2px)",

                  boxShadow: "0 16px 35px rgba(31,177,249,0.30)",
                },
              }}
            >
              {translate.navbar.book}
            </Button>
            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  borderRadius: "14px",

                  backgroundColor: "rgba(31,177,249,0.08)",

                  color: "#1FB1F9",

                  "&:hover": {
                    backgroundColor: "rgba(31,177,249,0.14)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) */}
      <Drawer
        anchor={isRTL ? "right" : "left"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 280,

            p: 3,

            background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

            height: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              textAlign: "center",

              fontSize: isRTL ? 30 : 24,

              color: "#111827",
            }}
          >
            {translate.navbar.droweTitle}
          </Typography>

          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.label}
                onClick={() => {
                  startLoading(() => {
                    navigate(link.path);
                  });
                  setDrawerOpen(false);
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color:
                    location.pathname === link.path ? "primary.main" : "#000",
                  fontWeight:
                    location.pathname === link.path ? "bold" : "normal",
                }}
              >
                <span>{link.icon}</span>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>

          {/* Switchers inside drawer */}

          <Box sx={{ mt: 2 }}>
            {/* Language Accordion */}
            <Accordion elevation={0} disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <LanguageIcon fontSize="small" sx={{ marginInlineEnd: 1 }} />
                  {lang === "en"
                    ? "Language"
                    : lang === "ar"
                      ? "اللغات"
                      : "Язык"}
                  ({lang.toUpperCase()})
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 0 }}>
                <List>
                  {languages.map((lang) => {
                    const selected = localStorage.getItem("lang") === lang.code;

                    return (
                      <ListItem
                        key={lang.code}
                        onClick={() => {
                          const selectedLang = lang.code;
                          localStorage.setItem("lang", selectedLang);
                          window.dispatchEvent(new Event("languageChange"));
                          setDrawerOpen(false);
                        }}
                        sx={{
                          cursor: "pointer",
                          pl: 2,
                          backgroundColor: selected
                            ? "rgba(31,177,249,0.12)"
                            : "transparent",
                          borderLeft: selected
                            ? "4px solid #1FB1F9"
                            : "4px solid transparent",
                          transition: "0.2s ease",
                          "&:hover": {
                            backgroundColor: "rgba(31,177,249,0.08)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              component="span"
                              sx={{
                                fontWeight: selected ? 700 : 500,
                                color: selected ? "#1FB1F9" : "inherit",
                              }}
                            >
                              {lang.label}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>

            {/* Currency Accordion */}
            <Accordion elevation={0} disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <CurrencyExchangeIcon
                    fontSize="small"
                    sx={{ marginInlineEnd: 1 }}
                  />
                  Currency ({currency})
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 0 }}>
                <List>
                  {["SAR", "USD", "EUR"].map((cur) => (
                    <ListItem
                      key={cur}
                      onClick={() => {
                        setCurrency(cur as "SAR" | "USD" | "EUR");
                        setDrawerOpen(false);
                      }}
                      sx={{
                        cursor: "pointer",
                        pl: 2,

                        backgroundColor:
                          currency === cur
                            ? "rgba(31,177,249,0.12)"
                            : "transparent",

                        borderLeft:
                          currency === cur
                            ? "4px solid #1FB1F9"
                            : "4px solid transparent",

                        transition: "0.2s ease",

                        "&:hover": {
                          backgroundColor: "rgba(31,177,249,0.08)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            component="span"
                            sx={{
                              fontWeight: currency === cur ? 700 : 500,
                              color: currency === cur ? "#1FB1F9" : "inherit",
                            }}
                          >
                            {cur}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
