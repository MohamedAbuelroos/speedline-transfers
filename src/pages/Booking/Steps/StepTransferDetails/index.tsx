import { Box, Typography, Button } from "@mui/material";

import { useState } from "react";

import AirportTransferForm from "./AirportTransferForm";
import CityTransferForm from "./CityTransferForm";
import HourlyTransferForm from "./HourlyTransferForm";
import PackageTransferForm from "./PackageTransferForm";
import OptionalDetails from "./OptionalDetails";
import type {
  BookingData,
  BookingStepProps,
  HandleBookingChange,
} from "../../../../utils/bookingTypes";

const StepTransferDetails = ({
  bookingData,
  setBookingData,
  onNext,
  onBack,
}: BookingStepProps) => {
  const [openOptional, setOpenOptional] = useState(true);

  const [stops, setStops] = useState<string[]>(bookingData.stops || []);

  const handleChange = (
    field: keyof BookingData,
    value: BookingData[keyof BookingData],
  ): HandleBookingChange => {
    return () => {
      setBookingData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  };

  const addStop = () => {
    if (stops.length < 3) {
      setStops([...stops, ""]);
    }
  };

  const updateStop = (index: number, value: string) => {
    const newStops = [...stops];

    newStops[index] = value;

    setStops(newStops);

    handleChange("stops", newStops);
  };

  const removeStop = (index: number) => {
    const newStops = stops.filter((_, i) => i !== index);

    setStops(newStops);

    handleChange("stops", newStops);
  };

  const isValid =
    bookingData.date &&
    bookingData.time &&
    (bookingData.type === "package"
      ? bookingData.packageData
      : bookingData.from &&
        (bookingData.type === "hourly" ? bookingData.hours : bookingData.to)) &&
    (!bookingData.roundTrip ||
      (bookingData.returnDate && bookingData.returnTime));

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 600,
          mb: 3,
        }}
      >
        Transfer Details
      </Typography>

      {/* FORMS */}
      {bookingData.type === "airport" && (
        <AirportTransferForm
          bookingData={bookingData}
          handleChange={handleChange}
        />
      )}

      {bookingData.type === "city" && (
        <CityTransferForm
          bookingData={bookingData}
          handleChange={handleChange}
          stops={stops}
          addStop={addStop}
          updateStop={updateStop}
          removeStop={removeStop}
        />
      )}

      {bookingData.type === "package" && (
        <PackageTransferForm
          bookingData={bookingData}
          handleChange={handleChange}
          stops={stops}
          addStop={addStop}
          updateStop={updateStop}
          removeStop={removeStop}
        />
      )}

      {bookingData.type === "hourly" && (
        <HourlyTransferForm
          bookingData={bookingData}
          handleChange={handleChange}
        />
      )}

      {/* OPTIONAL */}
      <OptionalDetails
        bookingData={bookingData}
        openOptional={openOptional}
        setOpenOptional={setOpenOptional}
        handleChange={handleChange}
      />

      {/* ACTIONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button onClick={onBack}>Back</Button>

        <Button
          variant="contained"
          disabled={!isValid}
          onClick={onNext}
          sx={{
            backgroundColor: "#1FB1F9",
            borderRadius: "999px",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default StepTransferDetails;
