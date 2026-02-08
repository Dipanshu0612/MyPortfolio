"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;" bgcolor="#0a0a0a">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 20px;" bgcolor="#0a0a0a">
    <tr>
      <td align="center" bgcolor="#0a0a0a" style="background-color:#0a0a0a;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:16px;border:1px solid #2a2a2a;overflow:hidden;" bgcolor="#141414">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0ea5e9,#6366f1);padding:32px 40px;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">New Portfolio Message</h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">Someone reached out via your contact form</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;background-color:#141414;" bgcolor="#141414">
              <!-- Sender Info -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:16px 20px;background-color:#1a1a1a;border-radius:12px;border:1px solid #2a2a2a;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:12px;border-bottom:1px solid #2a2a2a;">
                          <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;">From</p>
                          <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#f3f4f6;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:12px;">
                          <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;">Email</p>
                          <a href="mailto:${email}" style="display:inline-block;margin-top:4px;font-size:14px;color:#38bdf8;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- Message -->
              <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;">Message</p>
              <div style="padding:20px;background-color:#1a1a1a;border-radius:12px;border:1px solid #2a2a2a;border-left:3px solid #6366f1;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#d1d5db;white-space:pre-wrap;">${message}</p>
              </div>
              <!-- Reply Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;padding:12px 32px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:10px;">Reply to ${name}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #2a2a2a;background-color:#141414;" bgcolor="#141414">
              <p style="margin:0;font-size:12px;color:#4b5563;text-align:center;">Sent from your portfolio contact form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Failed to send message." };
  }
}
