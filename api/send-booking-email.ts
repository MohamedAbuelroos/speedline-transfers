/// <reference types="node" />

import { Resend } from "resend";
import { bookingCustomerTemplate } from "../src/emails/bookingCustomerTemplate";

import type { EmailBookingData } from "../src/utils/emailTypes";

const resend = new Resend(process.env.RESEND_API_KEY);

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
