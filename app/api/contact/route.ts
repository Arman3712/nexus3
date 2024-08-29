import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      last_name,
      email,
      company_name,
      help,
      services,
      info,
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "blackm10s53@gmail.com",
          pass: "acds gtkf brmt neuv",
        },
      });

      const mailOptions = {
        from: email,
        to: "armankureeshi@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <div>
                      <h1>Contact Form</h1>
                      <p>Name: ${first_name} ${last_name}</p>
                      <p>Email: ${email}</p>
                      <p>Phone: ${company_name}</p>
                      <p>Help: ${help}</p>
                      <p>Massage: ${info}</p>
                      <p>Service: ${services}</p>
                    </div>
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}
