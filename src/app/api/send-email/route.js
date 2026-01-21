// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, budget, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Professional HTML Template (Dark Theme with Emerald Accents)
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.RECEIVER_EMAIL, // sending to ahsanarshad291@gmail.com
            subject: `New Lead: ${name} - ${subject || 'No Subject'}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                    .header { background-color: #111827; padding: 30px 20px; text-align: center; border-bottom: 4px solid #34d399; }
                    .header h1 { color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; }
                    .header span { color: #34d399; }
                    .content { padding: 30px; color: #374151; }
                    .field { margin-bottom: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 15px; }
                    .label { font-size: 12px; text-transform: uppercase; color: #9ca3af; font-weight: bold; margin-bottom: 5px; display: block; }
                    .value { font-size: 16px; color: #1f2937; line-height: 1.5; font-weight: 500; }
                    .message-box { background-color: #f9fafb; border-left: 4px solid #34d399; padding: 15px; border-radius: 4px; }
                    .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New <span>Portfolio</span> Inquiry</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                            <span class="label">Name</span>
                            <div class="value">${name}</div>
                        </div>
                        <div class="field">
                            <span class="label">Email</span>
                            <div class="value"><a href="mailto:${email}" style="color: #34d399; text-decoration: none;">${email}</a></div>
                        </div>
                        <div class="field">
                            <span class="label">Phone / Subject</span>
                            <div class="value">${subject || 'Not provided'}</div>
                        </div>
                        <div class="field">
                            <span class="label">Budget</span>
                            <div class="value">${budget || 'Not provided'}</div>
                        </div>
                        <div class="field">
                            <span class="label">Message</span>
                            <div class="value message-box">${message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This email was sent from your portfolio contact form.</p>
                    </div>
                </div>
            </body>
            </html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}