import { Box, Typography, Divider, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import paymentimg from "../../../assets/images/Payment.webp";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import { getPrice } from "../../../utils/pricing";
import { useRef } from "react";
import PriceLoader from "../../../components/common/PriceLoader";
import type { BookingData } from "../../../utils/bookingTypes";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";
import type { PackageTranslation } from "../../../utils/types";
import dayjs from "dayjs";

type SummarySectionProps = {
  data: BookingData;

  onConfirm: (price: number | string) => void;

  steps: number;
};

const SummarySection = ({ data, onConfirm, steps }: SummarySectionProps) => {
  const lang = useLanguage();
  const translate = translations[lang];
  // const isRtl = lang === "ar";

  const packageTranslation = translate.packages[
    data.packageData?.id as keyof typeof translate.packages
  ] as PackageTranslation;

  const getValue = (val: string) => val || "Not set";

  const formatReturnTime = (timeStr: string) =>
    dayjs(`2000-01-01 ${timeStr}`).format("hh:mm A");

  const getBookingPrice = (data: BookingData) => {
    const categoryKey = data.car?.category;

    if (!categoryKey) return "--";

    if (data.type === "hourly") {
      return data.car?.hourRate && data.hours
        ? data.car.hourRate * data.hours
        : "--";
    }

    if (data.type === "city" && data.price && typeof data.price === "object") {
      return data.price?.[categoryKey] ?? "--";
    }

    if (data.type === "package") {
      return data.packageData?.vehiclePricing?.[categoryKey] ?? "--";
    }

    return getPrice(data.fromCity, data.toCity, categoryKey) ?? "--";
  };

  const bookingPrice = getBookingPrice(data);

  const confirmRef = useRef<HTMLButtonElement | null>(null);
  const summaryRef = useRef<HTMLButtonElement | null>(null);
  const quoteRef = useRef<HTMLButtonElement | null>(null);

  const totalPassengers = data.adults + data.children + data.infants;
  const isEmailValid =
    data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  const isComplete =
    data.type &&
    data.from &&
    data.date &&
    data.time &&
    data.adults &&
    data.car &&
    data.name &&
    data.phone;

  const handleCustomQuote = () => {
    // Build WhatsApp message with selected data
    const message = `Hello, I would like a custom quotation for:
- From: ${data.from} (${data.fromCity})
- To: ${data.to} (${data.toCity})
- Passengers: ${totalPassengers}
- Car: ${data.car?.category || "Not selected"}
- Date: ${data.date ? new Date(data.date).toLocaleDateString() : "TBD"}
- Time: ${data.time ? formatReturnTime(data.time) : "TBD"}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your business WhatsApp number
    const whatsappNumber = "966547417085";

    // Open WhatsApp chat
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <Box
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        backgroundColor: "#fff",
        position: "sticky",
        top: 100,
      }}
    >
      {/* IMAGE */}

      <Box sx={{ position: "relative", width: "100%", height: 140 }}>
        <Box
          component="img"
          src={paymentimg}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "80%",
            zIndex: 5,
            pointerEvents: "none",
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.33) 40%, rgba(255,255,255,0) 100%)",
          }}
        />
      </Box>

      <Box sx={{ p: 3, pt: 2 }}>
        <Typography sx={{ fontWeight: 700, mb: 1 }}>Trip Summary</Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Estimated for your selections
        </Typography>
        {data.type === "package" && (
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
            }}
          >
            {packageTranslation?.title} Package
          </Typography>
        )}
        {/* FROM & TO */}
        <Box
          sx={{
            display: "flex",
            flexDirection: `${!data.from ? "row" : "column"}`,
            justifyContent: "space-between",
            mb: 2,
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box
              sx={{
                color: "#1FB1F9",
                width: "40px",
                height: "40px",
                backgroundColor: "#1fb0f926",

                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  color: "#1FB1F9",
                }}
              />
            </Box>
            <Box>
              <Typography variant="caption">
                {data.type !== "package" ? "FROM" : "Starting From"}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                }}
              >
                {getValue(data.from)}
              </Typography>
            </Box>
          </Box>

          {data.type === "hourly" ? (
            ""
          ) : (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box
                sx={{
                  color: "#1FB1F9",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#f59f0b1d",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NearMeOutlinedIcon
                  sx={{
                    color: "#f59e0b",
                  }}
                />
              </Box>
              <Box>
                <Typography variant="caption">
                  {data.type !== "package" ? "TO" : "Ends At"}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {getValue(data.to)}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        <Divider />

        {/* DATE & TIME */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="body2" id="summary-sec" ref={summaryRef}>
              {data.date ? new Date(data.date).toLocaleDateString() : "TBD"}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ my: 1 }} color="text.secondary">
            {data.type === "hourly"
              ? "Hire By Hour"
              : data.type === "package"
                ? "Package"
                : `${data?.roundTrip ? "Round Trip" : "One Way"}`}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">
              {data.time ? formatReturnTime(data.time) : "TBD"}
            </Typography>
          </Box>
        </Box>
        {/* Return DATE & TIME */}
        {data.returnDate && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 2,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="body2">
                {data.returnDate
                  ? new Date(data.returnDate).toLocaleDateString()
                  : "TBD"}
              </Typography>
            </Box>
            <AutorenewIcon sx={{ color: "secondary.main" }} />
            <Box sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2">
                {data.returnTime ? formatReturnTime(data.returnTime) : "TBD"}
              </Typography>
            </Box>
          </Box>
        )}

        <Divider />

        {/* VEHICLE & PASSENGERS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <DirectionsCarIcon sx={{ color: "primary.main" }} />
            <Box sx={{ fontWeight: "700" }}>
              {data.car?.name || "Not set"}
              {data.car?.name && (
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  (Or similar)
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <PeopleIcon fontSize="small" />
              <Typography variant="body2">{totalPassengers} Pax</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <LuggageIcon fontSize="small" />
              <Typography variant="body2">
                {data?.car?.bags || "0"} Bags
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        {/* PRICE BOX */}
        <Box
          sx={{
            backgroundColor: "#f3f7fb",
            borderRadius: "12px",
            p: 2,
            textAlign: "center",
            my: 3,
          }}
        >
          <Typography variant="caption">TOTAL ESTIMATED FARE</Typography>
          {steps < 3 ? (
            <PriceLoader step={steps} totalSteps={3} />
          ) : (
            <Box
              sx={{
                fontWeight: 700,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {data?.roundTrip
                  ? typeof bookingPrice === "number"
                    ? bookingPrice * 2
                    : "Special Pricing Available Upon Request"
                  : typeof bookingPrice === "number"
                    ? bookingPrice
                    : "Custom Quote Required"}
              </Typography>
              <Typography
                variant="body1"
                sx={{ alignSelf: "flex-end", color: "primary.main", ml: 0.5 }}
              >
                {getBookingPrice(data) !== "--" ? "USD" : ""}
              </Typography>
            </Box>
          )}

          <Typography variant="caption" color="text.secondary">
            You will receive a confirmation with a payment link to confirm the
            reservation.
          </Typography>
        </Box>

        {/* BUTTONS */}
        {bookingPrice !== "--" ? (
          <Button
            fullWidth
            id="confirm-btn"
            ref={confirmRef}
            variant="contained"
            disabled={!isComplete || !isEmailValid || steps < 3}
            onClick={() => onConfirm(getBookingPrice(data))}
            sx={{
              backgroundColor: "#1FB1F9",
              borderRadius: "999px",
              mb: 1,
            }}
          >
            Confirm Booking
          </Button>
        ) : (
          <Button
            fullWidth
            id="quote-btn"
            variant="contained"
            ref={quoteRef}
            disabled={!isComplete || !isEmailValid || steps < 3}
            onClick={handleCustomQuote}
            sx={{
              backgroundColor: "#1FB1F9",
              borderRadius: "999px",
              mb: 1,
            }}
          >
            Request Quote
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SummarySection;
