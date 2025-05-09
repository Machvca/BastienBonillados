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
    <main className=" min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-4 py-48 md:px-8  font-rubik animate-fade-in-up">
        <div className="w-full max-w-2xl bg-magic-lavender  rounded-2xl shadow-xl shadow-magic-dark/90 p-8 border border-gray-900">
          <h2 className="text-4xl font-medium mb-6 text-magic-dark text-center font-syne">
            Contact Me
          </h2>
          <p className="text-magic-dark text-base mb-8 text-center font-rubik">
            Please leave a short explanation of the event you&apos;d like to
            hire me for, including any relevant details. This will help me check
            availability and better understand your needs. I’ll get back to you
            as soon as possible!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-magic-dark"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="youremail@gmail.com"
                className="w-full p-4 text-base text-magic-dark border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-magic-dark invalid:border-magic-dark invalid:focus:ring-magic-gold"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-base font-medium text-magic-dark"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Birthday party, corporate event, etc."
                className="w-full p-4 text-base text-magic-dark border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-magic-dark"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="Tell me about your event and preferred date/time..."
                className="w-full p-4 text-base text-magic-dark border border-magic-lavender rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-magic-dark/20 shadow-2xl shadow-magic-dark text-magic-darkbg-magic-dark font-medium py-3 rounded-xl hover:bg-magic-dark hover:text-stone-100 transition duration-300"
            >
              Send Message
            </button>

            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2 text-center">
                Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
