import { Box, Typography, TextField, Button } from "@mui/material";
import { cars } from "../../../data/cars";
import { getPrice } from "../../../utils/pricing";
import useLanguage from "../../../hooks/useLanguage";
import type {
  BookingData,
  BookingStepProps,
} from "../../../utils/bookingTypes";
import type { Car } from "../../../utils/types";

const StepVehicle = ({
  bookingData,
  setBookingData,
  onNext,
  onBack,
}: BookingStepProps) => {
  const isValid =
    bookingData.car &&
    (bookingData.type === "hourly" || bookingData.adults > 0);

  const lang = useLanguage();
  const isRTL = lang === "ar";

  const pricebyhour = (car: Car) => {
    return car.hourRate * (bookingData?.hours ?? 0);
  };

  const handlePassengersChange = (total: number) => {
    if (bookingData?.car) return;

    let suggestedType = "Sedan";

    if (total <= 3) suggestedType = "Sedan";
    else if (total <= 6) suggestedType = "SUV";
    else suggestedType = "Van";

    const suggestedCar = cars.find((car) => car.category === suggestedType);

    setBookingData((prev: BookingData) => ({
      ...prev,
      car: suggestedCar || null,
    }));
  };

  const selectCar = (car: Car) => {
    setBookingData((prev) => ({
      ...prev,
      car,
    }));
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3 }}>
        Vehicle & Passengers
      </Typography>

      {/* Passengers */}
      {bookingData.type !== "hourly" && (
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1 }}>Passengers</Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Adults"
              type="number"
              fullWidth
              sx={{
                direction: isRTL ? "rtl" : "ltr",
                "& input": {
                  textAlign: isRTL ? "right" : "left",
                },
              }}
              value={bookingData.adults}
              slotProps={{
                htmlInput: {
                  min: 1,
                  max: 20,
                },
              }}
              onChange={(e) => {
                const val = Number(e.target.value);
                setBookingData((prev) => ({
                  ...prev,
                  adults: val,
                }));
                handlePassengersChange(
                  val + bookingData.children + bookingData.infants,
                );
              }}
            />

            <TextField
              label="Children"
              type="number"
              fullWidth
              sx={{
                direction: isRTL ? "rtl" : "ltr",
                "& input": {
                  textAlign: isRTL ? "right" : "left",
                },
              }}
              slotProps={{
                htmlInput: {
                  min: 0,
                  max: 20,
                },
              }}
              value={bookingData.children}
              onChange={(e) => {
                const val = Number(e.target.value);
                setBookingData((prev) => ({
                  ...prev,
                  children: val,
                }));
                handlePassengersChange(
                  bookingData.adults + val + bookingData.infants,
                );
              }}
            />

            <TextField
              label="Infants"
              type="number"
              fullWidth
              sx={{
                direction: isRTL ? "rtl" : "ltr",
                "& input": {
                  textAlign: isRTL ? "right" : "left",
                },
              }}
              slotProps={{
                htmlInput: {
                  min: 0,
                  max: 20,
                },
              }}
              value={bookingData.infants}
              onChange={(e) => {
                const val = Number(e.target.value);
                setBookingData((prev) => ({
                  ...prev,
                  infants: val,
                }));
                handlePassengersChange(
                  bookingData.adults + bookingData.children + val,
                );
              }}
            />
          </Box>
        </Box>
      )}
      {/* Cars */}
      <Typography sx={{ mb: 2 }}>Select Vehicle</Typography>

      <Box
        sx={{
          maxHeight: 350,
          overflowY: "auto",
          pr: 1,
        }}
      >
        {cars.map((car) => {
          const isSelected = bookingData.car?.id === car.id;
          const price = getPrice(
            bookingData.fromCity,
            bookingData.toCity,
            car.category,
          );

          return (
            <Box
              key={car.id}
              onClick={() => selectCar(car)}
              sx={{
                display: "flex",
                gap: 2,
                p: 2,
                mb: 2,
                borderRadius: "16px",
                cursor: "pointer",
                border: isSelected ? "2px solid #1FB1F9" : "1px solid #e5e7eb",
                backgroundColor: isSelected ? "#f0f9ff" : "#fff",
                transition: "0.2s",
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={car.image}
                alt={car.name}
                loading="lazy"
                sx={{
                  width: 100,
                  height: 70,
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {/* DETAILS */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {car.name}
                  <Typography component="span" sx={{ fontSize: 12 }}>
                    (Or Similar)
                  </Typography>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {car.category}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {car.passengers} Pax • {car.bags} Bags • Free WiFi
                </Typography>
              </Box>

              {/* PRICE */}
              <Box sx={{ textAlign: "right" }}>
                <Typography
                  sx={{
                    color: "#1FB1F9",
                    fontWeight: 600,
                  }}
                >
                  {bookingData.type === "hourly"
                    ? pricebyhour(car)
                    : (bookingData.type === "city" ||
                          bookingData.type === "package") &&
                        bookingData.price
                      ? bookingData.packageData?.vehiclePricing?.[car.category]
                      : price}
                  USD
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* ACTIONS */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={onBack}>Back</Button>

        <Button
          variant="contained"
          onClick={onNext}
          disabled={!isValid}
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

export default StepVehicle;
