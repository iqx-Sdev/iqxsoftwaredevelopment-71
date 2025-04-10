// api/email.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { data, fromEmail, origin } = req.body;

  if (!data?.email || !fromEmail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const processedOrigin =
    origin
      ?.replace(/^\//, "")
      .replace(/-/g, " ")
      .replace(/\//g, "-")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Unknown Origin";

  const formatData = (obj: any): string => {
    if (typeof obj === "object" && !Array.isArray(obj)) {
      return Object.entries(obj)
        .map(([key, value]) => {
          const cleanKey = key.trim().replace(/\s+/g, " ").replace(/\*/g, "");
          return typeof value === "object"
            ? `<p><strong>${cleanKey}:</strong></p>${formatData(value)}`
            : `<p><strong>${cleanKey}:</strong> ${value}</p>`;
        })
        .join("");
    }
    return `<p>${obj}</p>`;
  };

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "activecollab@plusonex.com",
        pass: "IqX@2025",
      },
    });

    await transporter.sendMail({
      from: "activecollab@plusonex.com",
      to: `${data.email}, ${fromEmail}`,
      subject: `New Inquiry from ${processedOrigin}`,
      html: `
        <h2>Contact Form Submission</h2>
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          ${formatData(data)}
        </div>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("SMTP Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
