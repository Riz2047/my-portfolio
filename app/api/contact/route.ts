import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // For now, we'll use a simple email service
    // In production, you should use a service like Resend, SendGrid, or similar
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}

---
Sent from Portfolio Contact Form
    `

    // Here you would integrate with your email service
    // For example, with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'portfolio@yourdomain.com',
      to: 'rizwanramzan648@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
    })
    */

    // For now, we'll just log the email content
    console.log("Contact form submission:", emailContent)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
