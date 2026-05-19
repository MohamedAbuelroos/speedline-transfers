import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      customerEmail: string;

      customerName: string;
    };

    const { customerEmail, customerName } = body;

    const data = await resend.emails.send({
      from: "SpeedLine Transfers <noreply@speedlinetransfers.com>",

      to: [customerEmail],

      subject: "Booking Confirmation",

      html: `
        <div style="font-family:sans-serif;">
          <h2>Hello ${customerName}</h2>

          <p>
            Your booking request has been received successfully.
          </p>

          <p>
            SpeedLine Transfers will contact you shortly.
          </p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      },
    );
  }
}
