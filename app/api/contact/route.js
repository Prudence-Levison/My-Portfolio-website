import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { email, subject, message } = body;

  try {
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['uzoekwelevisonc@gmail.com'], // your real inbox
      subject: subject,
      react: (
        <div>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong> {message}</p>
        </div>
      ),
    });

    if (error) return NextResponse.json({ error }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
