import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { sendCustomerEmail, sendCompanyEmail } from "../../utils/email";
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

const Booking = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // 🔥 Prefill logic (basic for now)
  const initialState = location.state;

  // const totalPassengers =
  //   bookingData.adults + bookingData.children + bookingData.infants;
  const [step, setStep] = useState(initialState?.type ? 1 : 0);
  const [bookingData, setBookingData] = useState(() => {
    const base = {
      bookingId: "",
      type: "",

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
        type: "city",
        from: initialState.data.from,
        to: initialState.data.to,
        price: initialState.data.price,
        fromCity: initialState.data.fromCity,
        toCity: initialState.data.toCity,
      };
    }

    if (initialState?.type === "car") {
      return {
        ...base,
        type: "city",
        car: initialState.data,
      };
    }

    if (initialState?.type === "service") {
      return {
        ...base,
        type: initialState.data.serviceType, // "airport" | "city" | "hourly"
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
      };
    }

    return base;
  });

  const handleConfirm = async (price: number | []) => {
    setLoading(true);

    const id = generateBookingId();

    const fullData = {
      ...bookingData,
      bookingId: id,
      price,
    };

    try {
      // 🔥 send both emails
      await sendCompanyEmail(fullData);
      await sendCustomerEmail(fullData);
      setBookingId(id);
      setSuccess(true);
    } catch (error) {
      console.error("Email error:", error);
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
            <ProgressSection step={step} />
            <Grid container spacing={4}>
              {/* LEFT */}

              <Grid size={{ xs: 12, md: 8 }}>
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
                  id={bookingId}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </Box>
  );
};

export default Booking;
