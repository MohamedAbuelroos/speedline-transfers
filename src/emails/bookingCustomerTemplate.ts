import type { BookingData } from "../utils/bookingTypes.ts";

const formatDate = (date?: string) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString();
};

const formatTime = (time?: string) => {
  if (!time) return "-";

  return new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getTransferType = (type?: string) => {
  switch (type) {
    case "airport":
      return "Airport Transfer";

    case "city":
      return "City Transfer";

    case "hourly":
      return "Hourly Chauffeur";

    case "package":
      return "Travel Package";

    default:
      return "Transfer Service";
  }
};

export const bookingCustomerTemplate = (data: BookingData) => {
  const basePrice = typeof data.price === "number" ? data.price : 0;

  const processingFee = Number((basePrice * 0.03).toFixed(2));

  const totalPrice = Number((basePrice + processingFee).toFixed(2));

  const totalPassengers =
    (data.adults || 0) + (data.children || 0) + (data.infants || 0);

  return `
  <div
    style="
      background:#f5f7fb;
      padding:40px 16px;
      font-family:Arial,sans-serif;
      color:#111827;
    "
  >
    <div
      style="
        max-width:720px;
        margin:auto;
        background:#ffffff;
        border-radius:24px;
        overflow:hidden;
        box-shadow:0 12px 40px rgba(0,0,0,0.08);
      "
    >
      <!-- HEADER -->
      <div
        style="
          background:
          linear-gradient(
            135deg,
            #1FB1F9 0%,
            #1697d2 100%
          );

          padding:40px 24px;
          text-align:center;
        "
      >
        <img
          src="https://www.speedlinetransfers.com/logo.png"
          alt="SpeedLine Transfers"
          style="
            height:60px;
            object-fit:contain;
            margin-bottom:16px;
            width:auto;
          "
        />

        <h1
          style="
            margin:0;
            color:white;
            font-size:32px;
            font-weight:800;
          "
        >
          Booking Confirmation
        </h1>

        <p
          style="
            margin-top:12px;
            color:rgba(255,255,255,0.92);
            font-size:15px;
            line-height:1.7;
          "
        >
          Your booking request has been received successfully.
        </p>
      </div>

      <!-- BODY -->
      <div style="padding:36px 28px;">
        <h2
          style="
            margin-top:0;
            margin-bottom:12px;
            font-size:26px;
          "
        >
          Hello ${data.name},
        </h2>

        <p
          style="
            color:#4b5563;
            line-height:1.8;
            margin-bottom:28px;
          "
        >
          Thank you for choosing
          SpeedLine Transfers.
          Our operations team is now reviewing
          your reservation details and will
          contact you shortly if needed.
        </p>

        <!-- BOOKING STATUS -->
        <div
          style="
            background:#ecfdf5;
            color:#16a34a;
            padding:14px 18px;
            border-radius:14px;
            font-weight:700;
            margin-bottom:28px;
          "
        >
          ✓ Booking Request Submitted Successfully
        </div>

        <!-- BOOKING DETAILS -->
        <div
          style="
            background:#f8fafc;
            border-radius:20px;
            padding:26px;
            margin-bottom:28px;
          "
        >
          <h3
            style="
              margin-top:0;
              margin-bottom:22px;
              font-size:22px;
            "
          >
            Booking Details
          </h3>

          <table
            style="
              width:100%;
              border-collapse:collapse;
            "
          >
            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Booking ID
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.bookingId}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Service Type
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${getTransferType(data.type)}
              </td>
            </tr>

            ${
              data.packageData
                ? `
            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Package
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.packageData.id}
              </td>
            </tr>
            `
                : ""
            }

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Route
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.from} → ${data.to}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Travel Date
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatDate(data.date)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Pickup Time
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatTime(data.time)}
              </td>
            </tr>

            ${
              data.flightNumber
                ? `
            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Flight Number
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.flightNumber}
              </td>
            </tr>
            `
                : ""
            }

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Vehicle
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.name || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Passengers
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${totalPassengers}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Luggage
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.bags || 0} PCS
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Trip Type
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.roundTrip ? "Round Trip" : "One Way"}
              </td>
            </tr>
          </table>
        </div>

        ${
          data.roundTrip
            ? `
        <!-- RETURN DETAILS -->
        <div
          style="
            background:#f8fafc;
            border-radius:20px;
            padding:26px;
            margin-bottom:28px;
          "
        >
          <h3
            style="
              margin-top:0;
              margin-bottom:22px;
              font-size:22px;
            "
          >
            Return Transfer
          </h3>

          <table
            style="
              width:100%;
              border-collapse:collapse;
            "
          >
            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Return Route
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.to} → ${data.from}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Return Date
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatDate(data.returnDate)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#6b7280;">
                Return Time
              </td>

              <td
                style="
                  padding:12px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatTime(data.returnTime)}
              </td>
            </tr>
          </table>
        </div>
        `
            : ""
        }

        ${
          data.notes
            ? `
        <!-- NOTES -->
        <div
          style="
            background:#fff7ed;
            border-radius:18px;
            padding:22px;
            margin-bottom:28px;
          "
        >
          <h3
            style="
              margin-top:0;
              margin-bottom:12px;
            "
          >
            Additional Notes
          </h3>

          <p
            style="
              margin:0;
              line-height:1.8;
              color:#444;
            "
          >
            ${data.notes}
          </p>
        </div>
        `
            : ""
        }

        <!-- PRICE -->
        <div
          style="
            border-top:1px solid #e5e7eb;
            padding-top:24px;
            margin-top:10px;
          "
        >
          <table style="width:100%;">
            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#6b7280;
                "
              >
                Transfer Price
              </td>

              <td
                style="
                  text-align:right;
                  padding:10px 0;
                "
              >
                SAR ${basePrice}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#6b7280;
                "
              >
                Payment Processing Fee (3%)
              </td>

              <td
                style="
                  text-align:right;
                  padding:10px 0;
                "
              >
                SAR ${processingFee}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding-top:18px;
                  font-size:22px;
                  font-weight:800;
                "
              >
                Total
              </td>

              <td
                style="
                  text-align:right;
                  padding-top:18px;
                  font-size:22px;
                  font-weight:800;
                  color:#1FB1F9;
                "
              >
                SAR ${totalPrice}
              </td>
            </tr>
          </table>
        </div>

        <!-- HELP -->
        <div
          style="
            margin-top:40px;
            background:#eff6ff;
            border-radius:18px;
            padding:24px;
          "
        >
          <h3
            style="
              margin-top:0;
              margin-bottom:16px;
            "
          >
            Important Information
          </h3>

          <p
            style="
              margin:0 0 12px;
              color:#374151;
              line-height:1.7;
            "
          >
            • Your driver will contact you before pickup.
          </p>

          <p
            style="
              margin:0 0 12px;
              color:#374151;
              line-height:1.7;
            "
          >
            • Airport bookings include 60 minutes free waiting time.
          </p>

          <p
            style="
              margin:0;
              color:#374151;
              line-height:1.7;
            "
          >
            • If you need assistance, simply reply to this email.
          </p>
        </div>

        <!-- FOOTER -->
        <div
          style="
            margin-top:40px;
            text-align:center;
            color:#6b7280;
            font-size:14px;
            line-height:1.8;
          "
        >
          SpeedLine Transfers

          <br />

          Professional Transportation Across Saudi Arabia

          <br /><br />

          © ${new Date().getFullYear()}
          SpeedLine Transfers.
        </div>
      </div>
    </div>
  </div>
  `;
};
