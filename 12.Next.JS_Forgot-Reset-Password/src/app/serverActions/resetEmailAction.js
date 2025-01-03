"use server"

import { nanoid } from "nanoid"
import DBconnection from "../utils/config/db"
import UserModel from "../utils/models/User"
import nodemailer from "nodemailer"

export async function resetEmailAction(email){
    console.log("resetEmail",email)

    DBconnection()

    const existingUser = await UserModel.findOne({email})
    if(existingUser){
        console.log("user exist")
        const token = nanoid(32)
        console.log("nanoToken", token)
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "YOUR_LOGIN",
              pass: "PASSWORD",
            },
          });

          const content = `Click here to <a href= "http://localhost:3000/reset-password/${token}">Reset Password</a>`

          const resetLink ={
            from: '"Maddison Foo Koch 👻" <sender@email>', // sender address
    to: email, // list of receivers
    subject: "reset link", // Subject line
    text: "New password", // plain text body
    html:  content, // html body
          }
          const info = await transporter.sendMail(resetLink)

          console.log("Message sent: %s", info.messageId);

          await UserModel.findOneAndUpdate({email:email}, {verifytoken: token})

    }else{
        console.log("no record found")
    }   

} 