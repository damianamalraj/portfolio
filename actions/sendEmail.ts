'use server';

import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }
  try {
    await resend.emails.send({
      from: 'Resend Contact Form <onboarding@resend.dev>',
      to: 'damian.amalraj@hotmail.com',
      subject: 'New message from your portfolio',
      reply_to: senderEmail as string,
      text: `From: ${senderEmail as string}\n\n${message as string}`,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
