// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';

import { config } from '@/lib/config';

type EmailJsResponse = {
  status: number;
  text: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if required environment variables are available
    if (
      !config.emailjs.serviceId ||
      !config.emailjs.templateId ||
      !config.emailjs.publicKey
    ) {
      console.error('Missing EmailJS configuration:', {
        serviceId: !!config.emailjs.serviceId,
        templateId: !!config.emailjs.templateId,
        publicKey: !!config.emailjs.publicKey,
        privateKey: !!config.emailjs.privateKey,
      });
      return NextResponse.json(
        { error: 'Email service configuration is incomplete' },
        { status: 500 }
      );
    }

    // Check if private key is available for authentication
    if (!config.emailjs.privateKey) {
      console.error('Missing EmailJS private key for authentication');
      return NextResponse.json(
        { error: 'Email service authentication is not configured' },
        { status: 500 }
      );
    }
    console.log('PRIVATE_KEY exists:', !!process.env.EMAILJS_PRIVATE_KEY);

    // Send via EmailJS REST API on the server with private key authentication
    // Docs: https://www.emailjs.com/docs/rest-api/send/
    const params = {
      service_id: config.emailjs.serviceId,
      template_id: config.emailjs.templateId,
      user_id: config.emailjs.publicKey,
      accessToken: config.emailjs.privateKey,
      template_params: {
        name,
        email,
        message,
      },
    };

    console.log('Sending email with params:', { ...params, user_id: '***' }); // Log for debugging

    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.emailjs.privateKey}`,
        },
        body: JSON.stringify(params),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS API error:', {
        status: response.status,
        statusText: response.statusText,
        errorText,
        params: { ...params, user_id: '***' }, // Hide sensitive data
      });
      return NextResponse.json(
        { error: 'Failed to send email', details: errorText },
        { status: 502 }
      );
    }

    // EmailJS can return either JSON or plain text "OK"
    const contentType = response.headers.get('content-type');
    let data: EmailJsResponse | string | unknown;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    console.log('EmailJS API success:', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
