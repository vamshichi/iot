import { NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  company: string
  email: string
  phone: string
  jobTitle: string
  country: string
  interestType: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    const requiredFields = ["name", "company", "email", "phone", "jobTitle", "country", "interestType"]
    for (const field of requiredFields) {
      if (!data[field as keyof ContactFormData]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log the submission (in production, this would send to email/sheets)
    console.log("New contact form submission:", {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // Here you would integrate with:
    // 1. Nodemailer for email notifications
    // 2. Google Sheets API or Excel Online API for lead storage
    // 
    // Example Nodemailer setup (requires SMTP credentials):
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    //
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: "leads@iotsecuritysummit.ae",
    //   subject: `New ${data.interestType} Enquiry: ${data.name}`,
    //   html: `<h2>New Lead</h2>...`,
    // })

    // Example Google Sheets integration:
    // const auth = new google.auth.GoogleAuth({
    //   credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // })
    // const sheets = google.sheets({ version: 'v4', auth })
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEET_ID,
    //   range: 'Leads!A:I',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [[
    //       new Date().toISOString(),
    //       data.name,
    //       data.company,
    //       data.email,
    //       data.phone,
    //       data.jobTitle,
    //       data.country,
    //       data.interestType,
    //       data.message || '',
    //     ]],
    //   },
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your enquiry. We will contact you shortly." 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    )
  }
}
