"use client";
import Footer from "@/src/components/sections/Footer";
import Navbar from "@/src/components/sections/Navbar";
// import { sendEmail } from "@/src/lib/resend";
import { useState } from "react";

export default function Home() {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement & {
        email: { value: string };
        subject: { value: string };
        message: { value: string };
      };

      const data = {
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      };

      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    };



// function send() {
//    sendEmail()
// }

  return (
    <main className="bg-transparent min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 my-20 md:my-40 gap-10">
        {/* <form action={send}> */}
          {/* <button type="submit">send</button> */}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-stone-900 block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className=" border border-slate-500 placeholder-indigo-200 text-gray-900 text-sm rounded-lg block w-full p-2.53"
                placeholder="jorge@googleeeeeeee.com"
              />
            </div>

            <div>
              <label
                htmlFor="Subject"
                className="text-stone-900 block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" border mb-2 border-slate-500 placeholder-indigo-900 text-gray-300 text-sm rounded-lg block w-full p-2.53"
                placeholder="hola"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-stone-900 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className=" border border-slate-500 placeholder-indigo-900 text-stone-900 text-sm rounded-lg block w-full p-2.53"
                placeholder="Leave your message here!"
              />
            </div>
            <button
              type="submit"
              className="bg-stone-500    text-stone-900 font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )}
          </form>
        {/* </form> */}
      </section>

      <Footer />
    </main>
  );
}


