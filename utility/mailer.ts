import nodemailer, { Transporter } from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //create a hashes token
    const hashedToken = await bcryptjs.hash(userId.toSting(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verfiyTokenExpiry: Date.now() + 360000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 360000,
      });
    }

    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use environment variable
      },
    });

    // Dynamically set HTML content based on the emailType
    const htmlContent =
      emailType === "VERIFY"
        ? `<b> Hello, Please verify your email using the link: </b>`
        : `<b> Hello, Please reset your password using the link: </b>`;

    const emailOptions = {
      from: process.env.EMAIL_FROM || "amrinder@gmail.com", // Set a default or use environment variable
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset Your Password",
      text: "", // You could add plain text here as a fallback
      html: htmlContent, // Set HTML content
    };

    const mailResponse = await transporter.sendMail(emailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
