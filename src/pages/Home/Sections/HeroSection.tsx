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
import { getDistance } from "../../../utils/getDistance";

const HeroSection = () => {
  const navigate = useDelayedNavigate();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [result, setResult] = useState<{
    from: string;
    to: string;
    car: Car | null;
    price: number | null;
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
      category = "Economy Sedan";
    } else if (form.passengers <= 6) {
      category = "Economy MPV";
    } else if (form.passengers <= 12) {
      category = "Economy Van";
    } else {
      category = "Economy Minibus";
    }

    return cars.find((car) => car.category === category) || null;
  };

  // Search for city-specific pricing
  const handleSearch = () => {
    if (
      !form.fromCity ||
      !form.toCity ||
      form.passengers > 24 ||
      form.passengers < 1 ||
      form.from === form.to
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
      car?.category || "Economy Sedan",
    );

    const distance = getDistance(form.fromCity, form.toCity);

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

  //handleCustomQuote
  const handleCustomQuote = () => {
    setLoading(true);

    const delay = Math.random() * 1000 + 900;

    setTimeout(() => {
      // Build WhatsApp message with selected data
      const message = `Hello, I would like a custom quotation for:
- From: ${form.from} (${form.fromCity})
- To: ${form.to} (${form.toCity})
- Passengers: ${form.passengers}
- Car: ${result?.car?.category || "Not selected"}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);

      const whatsappNumber = "966547417085";

      // Open WhatsApp chat
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank",
      );

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
          handleCustomQuote={handleCustomQuote}
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
