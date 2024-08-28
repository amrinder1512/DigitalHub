import nodemailer, { Transporter } from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
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
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset Your Password",
      text: "", // You could add plain text here as a fallback
      html: htmlContent, // Set HTML content
    };

    const mailResponse = await transporter.sendMail(emailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
