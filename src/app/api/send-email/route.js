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
            to: process.env.RECEIVER_EMAIL,
            subject: `New Lead: ${name} - ${subject || 'No Subject'}`,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Portfolio Inquiry</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a; color: #ffffff;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0a0a0a;">
                    <tr>
                        <td style="padding: 40px 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #111827; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                                
                                <!-- Header -->
                                <tr>
                                    <td style="background: linear-gradient(135deg, #111827 0%, #1f2937 100%); padding: 40px 40px 30px 40px; text-align: center; border-bottom: 1px solid rgba(52, 211, 153, 0.3);">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: center;">
                                                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #34d399 0%, #10b981 100%); border-radius: 12px; margin: 0 auto 20px auto; display: inline-block; line-height: 60px;">
                                                        <span style="font-size: 28px;">✉️</span>
                                                    </div>
                                                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                                                        New <span style="color: #34d399;">Portfolio</span> Inquiry
                                                    </h1>
                                                    <p style="margin: 10px 0 0 0; font-size: 14px; color: #9ca3af;">
                                                        You've received a new message from your portfolio
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Lead Score Badge -->
                                <tr>
                                    <td style="padding: 25px 40px 0 40px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); border: 1px solid rgba(52, 211, 153, 0.2); border-radius: 12px;">
                                            <tr>
                                                <td style="padding: 20px;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                        <tr>
                                                            <td style="width: 50px; vertical-align: top;">
                                                                <div style="width: 44px; height: 44px; background-color: #34d399; border-radius: 50%; text-align: center; line-height: 44px;">
                                                                    <span style="font-size: 20px;">🎯</span>
                                                                </div>
                                                            </td>
                                                            <td style="vertical-align: middle; padding-left: 15px;">
                                                                <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #34d399; font-weight: 600;">New Lead Received</p>
                                                                <p style="margin: 5px 0 0 0; font-size: 16px; color: #ffffff; font-weight: 500;">${name}</p>
                                                            </td>
                                                            <td style="text-align: right; vertical-align: middle;">
                                                                <span style="display: inline-block; padding: 6px 14px; background-color: rgba(52, 211, 153, 0.2); color: #34d399; font-size: 12px; font-weight: 600; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Active</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Contact Details Section -->
                                <tr>
                                    <td style="padding: 30px 40px 0 40px;">
                                        <h2 style="margin: 0 0 20px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #374151; padding-bottom: 10px;">
                                            Contact Information
                                        </h2>
                                    </td>
                                </tr>

                                <!-- Name & Email Row -->
                                <tr>
                                    <td style="padding: 0 40px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="width: 50%; padding-right: 10px; vertical-align: top;">
                                                    <div style="background-color: #1f2937; border-radius: 10px; padding: 20px; border: 1px solid #374151;">
                                                        <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; font-weight: 600;">
                                                            👤 Full Name
                                                        </p>
                                                        <p style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 500;">
                                                            ${name}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td style="width: 50%; padding-left: 10px; vertical-align: top;">
                                                    <div style="background-color: #1f2937; border-radius: 10px; padding: 20px; border: 1px solid #374151;">
                                                        <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; font-weight: 600;">
                                                            📧 Email Address
                                                        </p>
                                                        <a href="mailto:${email}" style="margin: 0; font-size: 16px; color: #34d399; font-weight: 500; text-decoration: none;">
                                                            ${email}
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Subject & Budget Row -->
                                <tr>
                                    <td style="padding: 15px 40px 0 40px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="width: 50%; padding-right: 10px; vertical-align: top;">
                                                    <div style="background-color: #1f2937; border-radius: 10px; padding: 20px; border: 1px solid #374151;">
                                                        <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; font-weight: 600;">
                                                            📱 Phone / Subject
                                                        </p>
                                                        <p style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 500;">
                                                            ${subject || '<span style="color: #6b7280; font-style: italic;">Not provided</span>'}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td style="width: 50%; padding-left: 10px; vertical-align: top;">
                                                    <div style="background-color: #1f2937; border-radius: 10px; padding: 20px; border: 1px solid #374151;">
                                                        <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; font-weight: 600;">
                                                            💰 Budget Range
                                                        </p>
                                                        <p style="margin: 0; font-size: 16px; color: ${budget ? '#34d399' : '#6b7280'}; font-weight: 600;">
                                                            ${budget || '<span style="color: #6b7280; font-style: italic; font-weight: 500;">Not provided</span>'}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Message Section -->
                                <tr>
                                    <td style="padding: 30px 40px 0 40px;">
                                        <h2 style="margin: 0 0 20px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #374151; padding-bottom: 10px;">
                                            Message Details
                                        </h2>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding: 0 40px;">
                                        <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border-radius: 12px; padding: 25px; border-left: 4px solid #34d399; border: 1px solid #374151; border-left: 4px solid #34d399;">
                                            <p style="margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; font-weight: 600;">
                                                💬 Client Message
                                            </p>
                                            <p style="margin: 0; font-size: 15px; color: #e5e7eb; line-height: 1.7; font-weight: 400;">
                                                ${message}
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                <!-- Action Button -->
                                <tr>
                                    <td style="padding: 30px 40px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: center;">
                                                    <a href="mailto:${email}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #34d399 0%, #10b981 100%); color: #111827; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 15px rgba(52, 211, 153, 0.4);">
                                                        Reply to ${name.split(' ')[0]}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Divider -->
                                <tr>
                                    <td style="padding: 0 40px;">
                                        <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, #374151 50%, transparent 100%);"></div>
                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td style="padding: 30px 40px; text-align: center;">
                                        <p style="margin: 0 0 10px 0; font-size: 12px; color: #6b7280;">
                                            This email was automatically generated from your portfolio contact form
                                        </p>
                                        <p style="margin: 0; font-size: 11px; color: #4b5563;">
                                            © ${new Date().getFullYear()} Your Portfolio • All rights reserved
                                        </p>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                </table>
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