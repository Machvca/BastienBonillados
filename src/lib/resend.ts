"use server";

import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async () => {
    await resend.emails.send({
        to:"jjorgemachuca@gmail.com",
        from:'jjorgemachuca@gmail.com',
        subject: 'Hello from Resend',   
        html: '<strong>It works!</strong>',
})
}