/// <reference types="node" />

import { Resend } from "resend";
import dayjs from "dayjs";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailBookingData = {
  bookingId: string;

  type?: string;

  name: string;

  email: string;

  phone?: string;

  currency: string;
  from: string;

  to: string;

  fromCity?: string;

  toCity?: string;

  date?: string;

  time?: string;

  returnDate?: string;

  returnTime?: string;

  roundTrip?: boolean;

  flightNumber?: string;

  pickupDetails?: string;

  dropoffDetails?: string;

  notes?: string;

  hours?: number;

  stops?: string[];

  adults?: number;

  children?: number;

  infants?: number;

  price: number;

  car?: {
    name?: string;

    category?: string;

    bags?: number;
  } | null;

  packageData?: {
    id?: string;
  } | null;
};

const formatDate = (date?: string) => {
  if (!date) return "-";

  return dayjs(date).format("MMMM D, YYYY");
};

const formatTime = (time?: string) => {
  if (!time) return "-";

  return dayjs(`2000-01-01 ${time}`).format("hh:mm A");
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

export const bookingCustomerTemplate = (data: EmailBookingData) => {
  const processingFee = Number((data.price * 0.03).toFixed(2));

  const totalPrice = Number((data.price + processingFee).toFixed(2));

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
          src="https://speedlinetransfers.com/logo.png"
          alt="SpeedLine Transfers"
          style="
            height:60px;
            width:auto;
            object-fit:contain;
            margin-bottom:16px;
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
            font-size:28px;
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
          Thank you for choosing SpeedLine Transfers.
          Our operations team is now reviewing your reservation details.
        </p>

        <!-- STATUS -->
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
            padding:24px;
            margin-bottom:24px;
          "
        >
          <h3
            style="
              margin-top:0;
              margin-bottom:20px;
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
              <td style="padding:10px 0;color:#6b7280;">
                Booking ID
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.bookingId}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Service
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${getTransferType(data.type)}
              </td>
            </tr>

            ${
              data.packageData?.id
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Package
              </td>

              <td
                style="
                  padding:10px 0;
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
              <td style="padding:10px 0;color:#6b7280;">
                Route
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.from} → ${data.to}
              </td>
            </tr>

            ${
              data.stops?.length
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Stops
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.stops.join(" • ")}
              </td>
            </tr>
            `
                : ""
            }

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Travel Date
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatDate(data.date)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Pickup Time
              </td>

              <td
                style="
                  padding:10px 0;
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
              <td style="padding:10px 0;color:#6b7280;">
                Flight Number
              </td>

              <td
                style="
                  padding:10px 0;
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

            ${
              data.pickupDetails
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Pickup Details
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.pickupDetails}
              </td>
            </tr>
            `
                : ""
            }

            ${
              data.dropoffDetails
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Dropoff Details
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.dropoffDetails}
              </td>
            </tr>
            `
                : ""
            }

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Vehicle
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.name || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Vehicle Category
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.category || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Passengers
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${totalPassengers}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Luggage
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.bags || 0} PCS
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Trip Type
              </td>

              <td
                style="
                  padding:10px 0;
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
            padding:24px;
            margin-bottom:24px;
          "
        >
          <h3
            style="
              margin-top:0;
              margin-bottom:18px;
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
              <td style="padding:10px 0;color:#6b7280;">
                Return Route
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.to} → ${data.from}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Return Date
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatDate(data.returnDate)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Return Time
              </td>

              <td
                style="
                  padding:10px 0;
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
            padding:20px;
            margin-bottom:24px;
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
                ${data.currency} ${data.price}
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
                ${data.currency} ${processingFee}
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
                ${data.currency} ${totalPrice}
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
            • If you need assistance, simply reply to booking@speedlinetransfers.com.
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
          SpeedLine Transfers
        </div>
      </div>
    </div>
  </div>
  `;
};

const bookingCompanyTemplate = (data: EmailBookingData) => {
  const processingFee = Number((data.price * 0.03).toFixed(2));

  const totalPrice = Number((data.price + processingFee).toFixed(2));

  const totalPassengers =
    (data.adults || 0) + (data.children || 0) + (data.infants || 0);

  return `
  <div
    style="
      font-family:Arial,sans-serif;
      background:#f5f7fb;
      padding:30px;
      color:#111827;
    "
  >
    <div
      style="
        max-width:800px;
        margin:auto;
        background:white;
        border-radius:20px;
        overflow:hidden;
        box-shadow:0 8px 30px rgba(0,0,0,0.08);
      "
    >
      <!-- HEADER -->
      <div
        style="
          background:#111827;
          color:white;
          padding:28px;
        "
      >
        <h1
          style="
            margin:0;
            font-size:28px;
          "
        >
          New Booking Request
        </h1>

        <p
          style="
            margin-top:10px;
            color:#d1d5db;
          "
        >
          A new booking has been submitted
          through SpeedLine Transfers.
        </p>
      </div>

      <!-- BODY -->
      <div style="padding:28px;">
        <!-- CUSTOMER -->
        <div
          style="
            margin-bottom:30px;
          "
        >
          <h2
            style="
              margin-top:0;
              margin-bottom:18px;
              font-size:22px;
            "
          >
            Customer Information
          </h2>

          <table
            style="
              width:100%;
              border-collapse:collapse;
            "
          >
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Name
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.name}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Email
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.email}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Phone
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.phone || "-"}
              </td>
            </tr>
          </table>
        </div>

        <!-- BOOKING -->
        <div
          style="
            background:#f9fafb;
            border-radius:18px;
            padding:24px;
            margin-bottom:24px;
          "
        >
          <h2
            style="
              margin-top:0;
              margin-bottom:20px;
              font-size:22px;
            "
          >
            Booking Details
          </h2>

          <table
            style="
              width:100%;
              border-collapse:collapse;
            "
          >
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Booking ID
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.bookingId}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Service Type
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${getTransferType(data.type)}
              </td>
            </tr>

            ${
              data.packageData?.id
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Package
              </td>

              <td
                style="
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
              <td style="padding:10px 0;color:#6b7280;">
                Route
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.from} → ${data.to}
              </td>
            </tr>

            ${
              data.stops?.length
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Stops
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.stops.join(" • ")}
              </td>
            </tr>
            `
                : ""
            }

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Travel Date
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatDate(data.date)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Pickup Time
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatTime(data.time)}
              </td>
            </tr>

            ${
              data.roundTrip
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Return Date
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatDate(data.returnDate)}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Return Time
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${formatTime(data.returnTime)}
              </td>
            </tr>
            `
                : ""
            }

            ${
              data.flightNumber
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Flight Number
              </td>

              <td
                style="
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

            ${
              data.pickupDetails
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Pickup Details
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.pickupDetails}
              </td>
            </tr>
            `
                : ""
            }

            ${
              data.dropoffDetails
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Dropoff Details
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.dropoffDetails}
              </td>
            </tr>
            `
                : ""
            }

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Vehicle
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.name || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Category
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.category || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Passengers
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${totalPassengers}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Luggage
              </td>

              <td
                style="
                  text-align:right;
                  font-weight:700;
                "
              >
                ${data.car?.bags || 0} PCS
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Trip Type
              </td>

              <td
                style="
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
          data.notes
            ? `
        <div
          style="
            background:#fff7ed;
            border-radius:18px;
            padding:20px;
            margin-bottom:24px;
          "
        >
          <h3
            style="
              margin-top:0;
              margin-bottom:12px;
            "
          >
            Customer Notes
          </h3>

          <p
            style="
              margin:0;
              line-height:1.8;
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
          "
        >
          <table style="width:100%;">
            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Base Price
              </td>

              <td
                style="
                  text-align:right;
                "
              >
                ${data.currency} ${data.price}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;color:#6b7280;">
                Processing Fee
              </td>

              <td
                style="
                  text-align:right;
                "
              >
                ${data.currency} ${processingFee}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding-top:16px;
                  font-size:22px;
                  font-weight:800;
                "
              >
                Total
              </td>

              <td
                style="
                  text-align:right;
                  padding-top:16px;
                  font-size:22px;
                  font-weight:800;
                  color:#1FB1F9;
                "
              >
                ${data.currency} ${totalPrice}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  `;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as EmailBookingData;

    const { email } = body;

    // CUSTOMER EMAIL
    await resend.emails.send({
      from: "SpeedLine Transfers <noreply@speedlinetransfers.com>",

      to: [email],

      subject: "Your Booking Request Has Been Received",

      html: bookingCustomerTemplate(body),
    });

    // SPEEDLINE EMAIL
    await resend.emails.send({
      from: "SpeedLine Transfers <noreply@speedlinetransfers.com>",

      to: ["booking@speedlinetransfers.com"],
      replyTo: body.email,

      subject: `New Booking - ${body.bookingId}`,

      html: bookingCompanyTemplate(body),
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,

        message: "Failed to send emails",
      },
      {
        status: 500,
      },
    );
  }
}
