import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  }),
);

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Server running" });
});

// Test email endpoint
app.get("/test-email", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: "587",
      secure: false,
      auth: {
        user: "activecollab@plusonex.com",
        pass: "IqX@2025",
      },
    });

    await transporter.sendMail({
      from: "activecollab@plusonex.com",
      to: "drana@plusonex.com", // Send to yourself for testing
      subject: "Test Email",
      text: "Server is working",
    });

    res.status(200).json({ message: "Test email sent successfully" });
  } catch (error) {
    console.error("Test email error:", error);
    res.status(500).json({ error: "Test email failed" });
  }
});

// Main email endpoint
app.post("/api/email", async (req, res) => {
  try {
    const { data, fromEmail, origin } = req.body;

    // Validate required fields
    if (!data?.email) {
      return res.status(400).json({ error: "Missing email address" });
    }
    if (!fromEmail) {
      return res.status(400).json({ error: "Missing sender email" });
    }

    // Process origin string
    const processedOrigin =
      origin
        ?.replace(/^\//, "")
        .replace(/-/g, " ")
        .replace(/\//g, "-")
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase()) || "Unknown Origin";

    // Format data recursively
    const formatData = (obj) => {
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

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: "587",
      secure: false,
      auth: {
        user: "activecollab@plusonex.com",
        pass: "IqX@2025",
      },
      tls: {
        rejectUnauthorized: false, // Use with caution (for self-signed certs)
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

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("SMTP Error Details:", {
      code: error.code,
      message: error.message,
      response: error.response,
      command: error.command,
    });
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
