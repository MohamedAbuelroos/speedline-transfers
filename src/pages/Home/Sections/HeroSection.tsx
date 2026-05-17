import { Box, Grid, Snackbar, Alert } from "@mui/material";
import heroImg from "/HeroHome.webp";
import { getPrice } from "../../../utils/pricing";
import HeroContent from "./HeroSection/HeroContent";
import HeroBookingCard from "./HeroSection/HeroBookingCard";

import { useState } from "react";
import { cars } from "../../../data/cars";
import type { Car } from "../../../utils/types";
import TransferEstimateDialog from "./HeroSection/TransferEstimateDialog";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";

const HeroSection = () => {
  const navigate = useDelayedNavigate();
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
    <Box
      sx={{
        position: "relative",

        overflow: "hidden",

        minHeight: "calc(100vh - 60px)",

        display: "flex",

        flexDirection: "column",

        justifyContent: "center",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src={heroImg}
        alt="SpeedLine Hero"
        loading="lazy"
        sx={{
          position: "absolute",

          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "cover",

          zIndex: 0,
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",

          inset: 0,

          background: `
      linear-gradient(
        90deg,
        rgba(3, 27, 45, 0.88) 0%,
        rgba(3, 27, 45, 0.75) 35%,
        rgba(3, 27, 45, 0.35) 65%,
        rgba(3, 27, 45, 0.25) 100%
      )
    `,

          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          px: {
            xs: 2,
            sm: 4,
            md: 8,
          },

          py: {
            xs: 6,
            sm: 8,
            md: 10,
          },
        }}
      >
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <HeroContent />
          </Grid>

          {/* FORM */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <HeroBookingCard
              form={form}
              open={open}
              loading={loading}
              handleSearch={handleSearch}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
        <TransferEstimateDialog
          open={open}
          setOpen={setOpen}
          result={result}
          loading={loading}
          handleContinue={handleContinue}
        />
      </Box>

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
