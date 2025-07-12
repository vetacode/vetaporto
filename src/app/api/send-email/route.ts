// src/app/api/send-email/route.ts
import emailjs from '@emailjs/browser';
import { NextResponse } from 'next/server';

import { config } from '@/lib/config';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    await emailjs.send(
      config.emailjs.serviceId,
      config.emailjs.templateId,
      {
        name,
        email,
        message,
      },
      config.emailjs.publicKey
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
