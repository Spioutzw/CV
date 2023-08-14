import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

    const { params } = await req.json()


  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'matthieu.roquigny@gmail.com',
      reply_to: params.email,
      subject: params.subject,
      text: params.message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}