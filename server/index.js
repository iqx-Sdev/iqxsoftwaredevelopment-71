// server\index.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/email", async (req, res) => {
  const { data, fromEmail, origin } = req.body;

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
    subject: `Dev Email: ${origin}`,
    html: `<p>Mocked email from local server</p>`,
  });

  res.status(200).json({ message: "Local email sent" });
});

app.listen(PORT, () => {
  console.log(`✅ Dev API listening at http://localhost:${PORT}`);
});
