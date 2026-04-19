import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Autocomplete,
  InputAdornment,
  Divider,
  Dialog,
  DialogContent,
  Snackbar,
  Alert,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NearMeIcon from "@mui/icons-material/NearMe";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import CircularProgress from "@mui/material/CircularProgress";
import { getPrice } from "../../../utils/pricing";

import { allLocations } from "../../../data/locations";

import { useState } from "react";
import { theme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
import { cars } from "../../../data/cars";
import type { Car } from "../../../utils/types";

const HeroSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [result, setResult] = useState<{
    from: string;
    to: string;
    car: Car | null;
    price: number;
    distance: string;
  } | null>(null);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const [form, setForm] = useState({
    from: "",
    fromCity: "",
    to: "",
    toCity: "",
    passengers: 1,
  });

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getSuggestedCar = () => {
    let category: string;

    if (form.passengers <= 3) {
      category = "Sedan";
    } else if (form.passengers <= 6) {
      category = "SUV";
    } else {
      category = "Van";
    }

    return cars.find((car) => car.category === category) || null;
  };

  // Search for city-specific pricing
  const handleSearch = () => {
    if (
      !form.fromCity ||
      !form.toCity ||
      form.passengers > 20 ||
      form.passengers < 1
    ) {
      setSnackbar({
        open: true,
        message: "Please fill all fields with valid data.",
        severity: "error",
      });
      return;
    }
    setLoading(true);

    const car = getSuggestedCar();

    const price = getPrice(
      form.fromCity,
      form.toCity,
      car?.category || "Sedan",
    );

    // simple fake distance (optional realistic touch)
    const distance =
      form.fromCity === form.toCity ? "10 - 25 km" : "400 - 900 km";

    const delay = Math.random() * 1000 + 1000;
    setTimeout(() => {
      setResult({
        from: form.from,
        to: form.to,
        car,
        price,
        distance,
      });

      setLoading(false);
      setOpen(true);
    }, delay);
  };

  // handele booking button
  const handleContinue = () => {
    setLoading(true);

    const delay = Math.random() * 1000 + 900;

    setTimeout(() => {
      navigate("/booking", {
        state: {
          type: "home",
          data: {
            from: form.from,
            to: form.to,
            fromCity: form.fromCity,
            toCity: form.toCity,
            adults: form.passengers,
            car: result?.car,
          },
        },
      });

      setLoading(false);
    }, delay);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 12 }, py: 6, minHeight: "calc(100vh - 60px)" }}>
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        {/* LEFT */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 800 }}>
            Reliable{" "}
            <Box component="span" sx={{ color: "#1FB1F9" }}>
              Transfers
            </Box>{" "}
            in the Kingdom
          </Typography>

          <Typography sx={{ mb: 3, color: "gray" }}>
            Seamless airport pick-ups, city-to-city excellence, and professional
            chauffeur services.
          </Typography>

          <Button
            variant="outlined"
            onClick={() => navigate("/booking")}
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              px: 4,
              mx: 1,
            }}
          >
            Book Your Ride
          </Button>
          <Button
            variant="contained"
            href="https://wa.me/+201022225621?text=Hello,%20I%20want%20to%20book%20a%20custom%20transfer"
            target="_blank"
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              px: 4,
              "&:hover": {
                background: theme.palette.secondary.light,
              },
            }}
          >
            Chat with Us
          </Button>
        </Grid>

        {/* RIGHT IMAGE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/HERRRRO.png"
            alt="car"
            loading="lazy"
            sx={{
              width: "100%",
              borderRadius: "20px",
              height: {
                xs: "220px",
                sm: "320px",
                md: "420px",
              },
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>

      {/* FORM */}
      <Paper
        elevation={3}
        sx={{
          width: { xs: "100%", lg: "80%" },
          mt: 2,
          px: 3,
          py: 4,
          borderRadius: "20px",
          mx: "auto",
          boxShadow: "2px 2px 5px #1fb0f9b3",
        }}
      >
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          {/* FROM */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Autocomplete
              options={allLocations}
              getOptionLabel={(option) => option.label}
              onChange={(_e, value) => {
                handleChange("from", value?.label || "");
                handleChange("fromCity", value?.cityId || "");
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Pickup Location"
                  fullWidth
                  slotProps={{
                    ...params.slotProps,
                    input: {
                      ...params.slotProps?.input,
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="primary" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
          </Grid>

          {/* TO */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Autocomplete
              options={allLocations}
              getOptionLabel={(option) => option.label}
              onChange={(_e, value) => {
                handleChange("to", value?.label || "");
                handleChange("toCity", value?.cityId || "");
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Drop-off Location"
                  fullWidth
                  slotProps={{
                    ...params.slotProps,
                    input: {
                      ...params.slotProps?.input,
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon sx={{ color: "secondary.main" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
          </Grid>

          {/* PASSENGERS */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <TextField
              fullWidth
              type="number"
              label="Passengers"
              value={form.passengers}
              onChange={(e) =>
                handleChange("passengers", Number(e.target.value))
              }
              slotProps={{
                htmlInput: {
                  min: 1,
                  max: 24,
                },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PeopleIcon color="primary" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          {/* BUTTON */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Button
              fullWidth
              onClick={handleSearch}
              variant="contained"
              disabled={loading}
              sx={{
                height: "56px",
                borderRadius: "12px",
                textTransform: "none",
              }}
            >
              {loading && !open ? (
                <CircularProgress size={20} sx={{ color: "#fff" }} />
              ) : (
                "Calculate Price"
              )}
            </Button>
          </Grid>
        </Grid>

        {/* // Results Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
          {/* HEADER */}
          <Box
            sx={{
              background: "#e6f6fd",
              p: 3,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "25px",
                color: theme.palette.primary.main,
              }}
            >
              Estimated Transfer Details
            </Typography>

            <Typography sx={{ fontSize: "14px", color: "gray" }}>
              Review your quote before proceeding with the booking.
            </Typography>
          </Box>

          <DialogContent sx={{ p: 3 }}>
            {/* ROW COMPONENT */}
            {[
              {
                icon: <LocationOnIcon color="primary" />,
                label: "From",
                value: result?.from,
              },
              {
                icon: <ArrowForwardIcon color="primary" />,
                label: "To",
                value: result?.to,
              },
              {
                icon: <NearMeIcon color="primary" />,
                label: "Distance",
                value: result?.distance,
              },
              {
                icon: <DirectionsCarIcon color="primary" />,
                label: "Suggested Vehicle",
                value: result?.car?.category,
              },
            ].map((item, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                      sx={{
                        background: "#e6f6fd",
                        borderRadius: "50%",
                        p: 1,
                        display: "flex",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography color="gray">{item.label}</Typography>
                  </Box>

                  <Typography sx={{ fontWeight: "500" }}>
                    {item.value}
                  </Typography>
                </Box>

                {index !== 3 && <Divider />}
              </Box>
            ))}

            {/* PRICE BOX */}
            <Box
              sx={{
                mt: 3,
                p: 2,
                borderRadius: "12px",
                border: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#FBEDDF4D",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                Total Price
              </Typography>

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                {result?.price} SAR
              </Typography>
            </Box>

            {/* HINT */}
            <Typography
              sx={{
                mt: 2,
                fontSize: "13px",
                color: "gray",
              }}
            >
              * Distance and price are approximate estimates based on standard
              rates and conditions.
            </Typography>

            {/* ACTIONS */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 3,
              }}
            >
              <Button
                fullWidth
                variant="outlined"
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>

              <Button
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                onClick={handleContinue}
              >
                {loading ? (
                  <CircularProgress size={20} sx={{ color: "#fff" }} />
                ) : (
                  "Continue To Book"
                )}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
        {/* alert  */}
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HeroSection;
