import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Verification from "../models/emailVerification.js";
import { generateOTP, hashString } from "./index.js";

dotenv.config();

const { AUTH_EMAIL, AUTH_PASSWORD } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASSWORD,
  },
});

export const sendVerificationEmail = async (user, res, token) => {
  const { _id, email, name } = user;
  const otp = generateOTP();

  //   mail options
  const mailOptions = {
    from: AUTH_EMAIL,
    to: email,
    subject: "Email Verification",
    html: `<div
    style='font-family: Arial, sans-serif; font-size: 20px; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 5px;'>
    <h3 style="color: rgb(8, 56, 188)">Please verify your email address</h3>
    <hr>
    <h4>Hi, ${name},</h4>
    <p>
        Please verify your email address with the OTP.
        <br>
        <h1 styles='font-size: 20px; color: rgb(8, 56, 188);'>${otp}</h1>
    <p>This OTP <b>expires in 2 mins</b></p>
    </p>
    <div style="margin-top: 20px;">
        <h5>Regards</h5>
        <h5>BlogWave</h5>
    </div>
</div>`,
  };

  try {
    const hashedToken = await hashString(String(otp));

    const newVerifiedEmail = await Verification.create({
      userId: _id,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 120000,
    });

    if (newVerifiedEmail) {
      transporter
        .sendMail(mailOptions)
        .then(() => {
          res.status(201).send({
            success: "PENDING",
            message:
              "OTP has been sent to your account. Check your email and verify your email.",
            user,
            token,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({ message: "Something went wrong" });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};
