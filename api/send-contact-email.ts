import { Resend } from "resend";

type ContactBody = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const contactCompanyTemplate = (data: ContactBody) => {
  return `
    <div
      style="
        font-family:Arial,sans-serif;
        padding:30px;
        background:#f5f7fb;
      "
    >
      <div
        style="
          max-width:700px;
          margin:auto;
          background:#fff;
          border-radius:20px;
          padding:30px;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
        "
      >
        <h1
          style="
            margin-top:0;
            color:#1FB1F9;
          "
        >
          New Contact Request
        </h1>

        <table
          style="
            width:100%;
            border-collapse:collapse;
          "
        >
          <tr>
            <td style="padding:10px 0;font-weight:bold;">
              Name
            </td>
            <td>${data.name}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:bold;">
              Email
            </td>
            <td>${data.email}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:bold;">
              Phone
            </td>
            <td>${data.phone}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:bold;">
              Service
            </td>
            <td>${data.service}</td>
          </tr>
        </table>

        <div
          style="
            margin-top:24px;
            padding:20px;
            background:#f8fafc;
            border-radius:12px;
          "
        >
          <h3>Message</h3>

          <p
            style="
              line-height:1.8;
              color:#444;
            "
          >
            ${data.message}
          </p>
        </div>
      </div>
    </div>
  `;
};
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;

    await resend.emails.send({
      from: "SpeedLine Transfers <noreply@speedlinetransfers.com>",

      to: ["mohamedabuelroos31@gmail.com"],

      subject: `New Contact Request - ${body.name}`,

      html: contactCompanyTemplate(body),
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to send contact email",
      },
      {
        status: 500,
      },
    );
  }
}
