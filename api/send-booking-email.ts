/// <reference types="node" />
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const bookingCustomerTemplate = (name: string) => {
  return `
    <div>
      <h1>
        Hello ${name}
      </h1>

      <p>
        Booking confirmed.
      </p>
    </div>
  `;
};
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name: string;
      email: string;
      bookingId: string;
      from: string;
      to: string;
      price: number;
    };

    const { email, name } = body;

    // CUSTOMER EMAIL
    await resend.emails.send({
      from: "SpeedLine Transfers <noreply@speedlinetransfers.com>",

      to: [email],

      subject: "Your Booking Request Has Been Received",

      html: bookingCustomerTemplate(name),
    });

    // COMPANY EMAIL
    // await resend.emails.send({
    //   from: "SpeedLine Transfers <noreply@speedlinetransfers.com>",

    //   to: ["mohamedabuelroos31@gmail.com"],

    //   subject: "New Booking Request as company",

    //   html: `
    //     <div
    //       style="
    //         font-family: Arial;
    //         padding: 20px;
    //       "
    //     >
    //       <h2>
    //         New Booking Request
    //       </h2>

    //       <p>
    //         <strong>Name:</strong>
    //         ${name}
    //       </p>

    //       <p>
    //         <strong>Email:</strong>
    //         ${email}
    //       </p>

    //       <p>
    //         <strong>Route:</strong>
    //         ${from} → ${to}
    //       </p>

    //       <p>
    //         <strong>Price:</strong>
    //         SAR ${price}
    //       </p>

    //       <p>
    //         <strong>Booking ID:</strong>
    //         ${bookingId}
    //       </p>
    //     </div>
    //   `,
    // });

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
