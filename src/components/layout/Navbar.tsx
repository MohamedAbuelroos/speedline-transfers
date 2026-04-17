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

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "../common/LanguageSwitcher";
import CurrencySwitcher from "../common/CurrencySwitcher";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../i18n";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const lang = useLanguage();
  const translate = translations[lang];

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: translate.Home, path: "/", icon: <HomeIcon /> },
    { label: translate.Fleet, path: "/fleet", icon: <DirectionsCarIcon /> },
    {
      label: translate.Services,
      path: "/services",
      icon: <MiscellaneousServicesIcon />,
    },
    {
      label: translate.Packages,
      path: "/packages",
      icon: <CardGiftcardIcon />,
    },
    { label: translate.About, path: "/about", icon: <InfoIcon /> },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ background: "#fff", color: "#000" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}

          <Box
            component="img"
            onClick={() => navigate("/")}
            src={logo}
            alt={logo}
            loading="lazy"
            sx={{
              width: "150px",
              height: "auto",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />

          {/* DESKTOP */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Box
                    key={link.label}
                    onClick={() => navigate(link.path)}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      color: isActive ? "primary.main" : "#000",

                      "&:hover": { color: "primary.main" },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: isActive ? "100%" : "0%",
                        height: "2px",
                        background: theme.palette.primary.main,
                        left: 0,
                        bottom: -4,
                        transition: "0.3s",
                      },

                      "&:hover::after": {
                        width: "100%",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                borderRadius: "5px",
                textTransform: "none",
                background: "primary.main",
                boxShadow: "none",
                backgroundColor: "primary.main",
                "&:hover": {
                  // background: "#0ea5e9",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              Book Now
            </Button>

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Menu
          </Typography>

          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.label}
                onClick={() => {
                  navigate(link.path);
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
                  <LanguageIcon fontSize="small" sx={{ mr: 1 }} />
                  Language
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 0 }}>
                <List>
                  {["English", "Arabic", "Russian"].map((lang) => (
                    <ListItem
                      key={lang}
                      onClick={() => setDrawerOpen(false)}
                      sx={{
                        pl: 2,
                      }}
                    >
                      <ListItemText primary={lang} />
                    </ListItem>
                  ))}
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
                  <CurrencyExchangeIcon fontSize="small" sx={{ mr: 1 }} />
                  Currency
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 0 }}>
                <List>
                  {["SAR", "USD", "EUR"].map((cur) => (
                    <ListItem
                      key={cur}
                      onClick={() => setDrawerOpen(false)}
                      sx={{ pl: 2 }}
                    >
                      <ListItemText primary={cur} />
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
