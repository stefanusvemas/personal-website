"use server";

import { Resend } from "resend";
import React from "react";
import { validateString, getErrorMesssage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      statusCode: 400,
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      statusCode: 400,
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Vemas.dev Contact Form <contact-form@web.vemas.dev>",
      to: "stefanusvemas@gmail.com",
      subject: "New message from vemas.dev",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMesssage(error),
    };
  }

  return {
    data,
  };
};
