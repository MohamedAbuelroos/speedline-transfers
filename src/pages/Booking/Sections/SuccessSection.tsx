import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Box, Typography, Divider, Link } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import { useRef } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ScrollToTop from "../../../utils/ScrollToTop";

const SuccessSection = ({ data, bookingId }: any) => {
  const voucherRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!voucherRef.current) return;

    const canvas = await html2canvas(voucherRef.current, {
      scale: 2, // higher resolution for clarity
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add extra pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`voucher-${bookingId}.pdf`);
  };

  const totalPassengers = data.adults + data.children + data.infants;

  const formatDate = (d: string) =>
    d
      ? new Date(d).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "-";

  const formatTime = (t: string) =>
    t
      ? new Date(t).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "numeric",
          hour12: true,
        })
      : "-";
  return (
    <Box sx={{ py: 6, position: "relative" }}>
      <ScrollToTop />
      {/* ✅ TOP SUCCESS */}
      <Box sx={{ textAlign: "center", mb: 1 }}>
        <CheckCircleIcon
          sx={{
            fontSize: 80,
            color: "#22c55e",
            mb: 1,
            animation: "pop 0.5s ease",
          }}
        />

        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Booking Confirmed
        </Typography>

        {/* <Typography color="text.secondary">
          Your transfer voucher is ready
        </Typography> */}
      </Box>
      <Box
        sx={{
          textAlign: "center",
          my: 1,
        }}
      >
        <Typography variant="body1">
          You can download your voucher from{" "}
          <Link
            onClick={handleDownload}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#1FB1F9",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            here <DownloadIcon sx={{ ml: 0.5, fontSize: 18 }} />
          </Link>
        </Typography>
      </Box>
      {/* 📄 VOUCHER */}
      <Box
        ref={voucherRef}
        sx={{
          maxWidth: 900,
          mx: "auto",
          p: 4,
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          {/* LEFT TEXT */}
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              Transfer Voucher No.
            </Typography>

            <Typography
              sx={{
                color: "#1FB1F9",
                fontWeight: 600,
              }}
            >
              {bookingId}
            </Typography>
          </Box>

          {/* RIGHT LOGO */}
          <Box
            component="img"
            src="/logo.png" // 🔥 adjust path if needed
            alt="SpeedLine Logo"
            sx={{
              height: 50,
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 1 }}>
          Transfer {formatDate(data.date)}{" "}
          {data.type === "airport"
            ? `at the arrival of ${data.flightNumber || "(FlightNo.)"} time`
            : `at ${formatTime(data.time)}`}
        </Typography>

        <Typography sx={{ color: "#22c55e", mb: 1 }}>
          Includes {data.type === "airport" ? "60" : "30"} minutes of free
          waiting time
        </Typography>

        <Typography sx={{ mb: 1 }}>
          {data.type === "airport"
            ? "Airport Transfer"
            : data.type === "city"
              ? "City Transfer"
              : "Hourly Service"}
          : {data.from} → {data.to}
        </Typography>
        <Typography
          sx={{
            mb: 1,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 0.6,
          }}
        >
          {data?.roundTrip ? "Round Trip" : "One Way"}
          <AutorenewIcon fontSize="small" />
        </Typography>
        {data?.roundTrip && (
          <Typography sx={{ mb: 1 }}>
            {data.type === "airport"
              ? "Airport Transfer"
              : data.type === "city"
                ? "City Transfer"
                : "Hourly Service"}
            : {data.to} → {data.from}
          </Typography>
        )}
        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Passenger Details
            </Typography>

            <Typography>Name: {data.name}</Typography>
            <Typography>Phone: {data.phone}</Typography>

            <Typography sx={{ mt: 1 }}>Vehicle: {data.car?.name}</Typography>

            <Typography>Passengers: {totalPassengers}</Typography>
            <Typography>Luggage: {data.car.bags} PCS</Typography>

            <Typography sx={{ mt: 1 }}>Pickup: {data.from}</Typography>

            <Typography>Dropoff: {data.to}</Typography>
            <Typography>Time: {formatTime(data.time)}</Typography>
            {data.roundTrip && (
              <>
                <Box sx={{ mt: 1 }}>
                  <Typography sx={{ fontWeight: 600 }} variant="body1">
                    Return Details:
                  </Typography>
                  <Typography>Date: {formatDate(data?.returnDate)}</Typography>
                  <Typography>Time: {formatTime(data?.returnTime)}</Typography>
                </Box>
              </>
            )}
            <Typography sx={{ mt: 1 }}>
              Notes: {data.notes || "No additional notes"}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              If you can’t find the driver:
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Typography>📍</Typography>
              <Typography>
                The driver will be waiting for you with a sign.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Typography>✈️</Typography>
              <Typography>
                The driver will meet you{" "}
                {data.type === "airport"
                  ? "in the arrivals area"
                  : "at the entrance to the building to which the transfer service has been ordered."}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Typography>📱</Typography>
              <Typography>Make sure your phone is on and reachable.</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Typography>📶</Typography>
              <Typography>
                Connect to Wi-Fi so driver can contact you.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Typography>💬</Typography>
              <Typography>
                Contact the driver via WhatsApp/SMS after arrival.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>⚠️</Typography>
              <Typography>
                If you can’t find the driver, contact support center.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Please note</Typography>

            <Typography sx={{ mb: 1 }}>
              📡 Waiting time depends on flight arrival.
            </Typography>

            <Typography sx={{ mb: 1 }}>
              📢 Extra waiting may incur charges.
            </Typography>

            <Typography sx={{ mb: 1 }}>
              📞 Contact support to update passengers.
            </Typography>

            <Typography>
              📌 Sign text will match your booking details.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Conditions</Typography>

            <Typography sx={{ mb: 1 }}>
              Free cancellation before scheduled time.
            </Typography>

            <Typography sx={{ mb: 1 }}>Changes may affect pricing.</Typography>

            <Typography sx={{ mb: 1 }}>
              Service quality depends on provider.
            </Typography>

            <Typography>Contact support for any issues.</Typography>
          </Box>
        </Box>

        {/* FOOTER */}
        <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
          Please keep this voucher with you and present it to your driver.
        </Typography>
        <Typography sx={{ fontWeight: 600 }}>Support Center</Typography>

        <Typography sx={{ color: "primary.main" }}>
          (+966) 9600000000
        </Typography>
      </Box>
    </Box>
  );
};

export default SuccessSection;
