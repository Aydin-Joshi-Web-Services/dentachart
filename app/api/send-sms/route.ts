// File: app/api/send-sms/route.ts
import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client with your credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Verify required environment variables
if (!accountSid || !authToken || !twilioPhoneNumber) {
  console.error('Missing required Twilio environment variables');
}

export async function POST(request: Request) {
  try {
    const client = twilio(accountSid, authToken);
    const { to, message } = await request.json();

    // Validate inputs
    if (!to || !message) {
      return NextResponse.json(
        { error: 'Phone number and message are required' },
        { status: 400 }
      );
    }

    // Format the phone number to ensure it's in E.164 format if needed
    const formattedPhoneNumber = to.startsWith('+') ? to : `+1${to.replace(/\D/g, '')}`;

    // Send the SMS
    const messageResponse = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: formattedPhoneNumber,
    });

    return NextResponse.json({
      success: true,
      messageId: messageResponse.sid,
    });
  } catch (error: any) {
    console.error('Twilio SMS error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send SMS' },
      { status: 500 }
    );
  }
}