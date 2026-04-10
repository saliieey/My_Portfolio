import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, subject, message, botcheck } = await req.json();

    // Honeypot check: if bot filled this invisible field, silently return success
    if (botcheck) {
      return NextResponse.json({ success: true, message: 'Message sent!' }, { status: 200 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    // Basic Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address provided.' }, { status: 400 });
    }
    
    // Length Validation constraints
    if (name.length > 100 || subject.length > 200) {
      return NextResponse.json({ error: 'Name or Subject is too long.' }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long (max 5000 characters).' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend testing email
      to: ['salihck7777@gmail.com'], // Recipient email
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <div>
          <h2>New Message from your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
