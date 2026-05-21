import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { sendCustomerEmail, sendCompanyEmail } from "../../utils/email";
import HeaderSection from "./Sections/HeaderSection";
import ProgressSection from "./Sections/ProgressSection";
import SummarySection from "./Sections/SummarySection";
import StepTransferDetails from "./Steps/StepTransferDetails";
import StepServiceType from "./Steps/StepServiceType";
import StepVehicle from "./Steps/StepVehicle";
import StepUserInfo from "./Steps/StepUserInfo";
import LoadingOverlay from "../../components/common/LoadingOverlay";
import { generateBookingId } from "../../utils/generateId";
import SuccessSection from "./Sections/SuccessSection";
import ScrollToTop from "../../utils/ScrollToTop";
import type { BookingData } from "../../utils/bookingTypes";
import { Snackbar, Alert } from "@mui/material";
import { sendBookingEmail } from "../../utils/sendBookingEmail";

const Booking = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // 🔥 Prefill logic (basic for now)
  const initialState = location.state;

  // const totalPassengers =
  //   bookingData.adults + bookingData.children + bookingData.infants;
  const [step, setStep] = useState(
    initialState?.type && initialState?.type !== "car" ? 1 : 0,
  );
  const [bookingData, setBookingData] = useState<BookingData>(() => {
    const base: BookingData = {
      bookingId: "",
      type: "",

      packageData: null,

      flightNumber: "",

      stops: [],

      from: "",
      fromCity: "",

      to: "",
      toCity: "",

      date: "",
      time: "",

      price: 0,

      returnDate: "",
      returnTime: "",

      adults: 1,
      children: 0,
      infants: 0,

      car: null,

      name: "",
      phone: "",
      notes: "",
      email: "",
    };

    if (!initialState) return base;

    // 🔥 Handle incoming data
    if (initialState?.type === "package") {
      return {
        ...base,

        type: "package" as BookingData["type"],

        packageData: initialState.data,

        from: initialState.data.cities?.[0] || "",

        to:
          initialState.data.cities?.[initialState.data.cities.length - 1] || "",

        fromCity: initialState.data.cities?.[0]?.toLowerCase() || "",

        toCity:
          initialState.data.cities?.[
            initialState.data.cities.length - 1
          ]?.toLowerCase() || "",

        price: initialState.data.startingPrice,
        car: initialState.selectedVehicle || null,
      };
    }

    if (initialState?.type === "car") {
      return {
        ...base,
        car: initialState.data,
      };
    }

    if (initialState?.type === "service") {
      return {
        ...base,
        type: initialState.data.serviceType as BookingData["type"], // "airport" | "city" | "hourly"
      };
    }

    if (initialState?.type === "home") {
      return {
        ...base,
        type: "city",
        from: initialState.data.from,
        to: initialState.data.to,
        fromCity: initialState.data.fromCity,
        toCity: initialState.data.toCity,
        adults: initialState.data.adults || 1,
        car: initialState.data.car,
      };
    }

    return base;
  });

  const handleConfirm = async (price: string | number) => {
    try {
      setLoading(true);

      const id = generateBookingId();

      const confirmedPrice = typeof price === "string" ? Number(price) : price;

      const fullData: BookingData = {
        ...bookingData,

        bookingId: id,

        price: confirmedPrice as BookingData["price"],
      };

      await sendBookingEmail(fullData);

      setBookingId(id);

      setSuccess(true);

      setSnackbar({
        open: true,
        message: "Booking request sent successfully.",
        severity: "success",
      });
    } catch (error) {
      console.error("Booking error:", error);

      setSnackbar({
        open: true,
        message: "Failed to send booking request.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box sx={{ py: 6 }}>
      <LoadingOverlay open={loading} />

      {success ? (
        <SuccessSection data={bookingData} bookingId={bookingId} />
      ) : (
        <>
          <Container>
            <HeaderSection />
            <Grid container spacing={4}>
              {/* LEFT */}

              <Grid size={{ xs: 12, md: 8 }}>
                <ProgressSection step={step} />
                {step === 0 && (
                  <>
                    <ScrollToTop />
                    <StepServiceType
                      bookingData={bookingData}
                      setBookingData={setBookingData}
                      onNext={() => setStep(1)}
                    />
                  </>
                )}

                {step === 1 && (
                  <>
                    <ScrollToTop />
                    <StepTransferDetails
                      bookingData={bookingData}
                      setBookingData={setBookingData}
                      onNext={() => setStep(2)}
                      onBack={() => setStep(0)}
                    />
                  </>
                )}
                {step === 2 && (
                  <>
                    <ScrollToTop />
                    <StepVehicle
                      bookingData={bookingData}
                      setBookingData={setBookingData}
                      onNext={() => setStep(3)}
                      onBack={() => setStep(1)}
                    />
                  </>
                )}
                {step === 3 && (
                  <>
                    <ScrollToTop />
                    <StepUserInfo
                      bookingData={bookingData}
                      setBookingData={setBookingData}
                      onNext={() => setStep(4)}
                      onBack={() => setStep(2)}
                    />
                  </>
                )}
              </Grid>

              {/* RIGHT */}
              <Grid size={{ xs: 12, md: 4 }}>
                <SummarySection
                  data={bookingData}
                  onConfirm={handleConfirm}
                  steps={step}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          severity={snackbar.severity as "success" | "error"}
          variant="filled"
          sx={{
            width: "100%",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Booking;
