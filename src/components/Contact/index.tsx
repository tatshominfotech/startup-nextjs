"use client";
import emailjs from 'emailjs-com';

import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Clear any previous error messages
    setError("");
  
    // Simple validation for empty fields
    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }
  
    emailjs
    .send(
      'Jj@9638937040',     // Replace with your Service ID from EmailJS
      'tatshominfotech',     // Replace with your Template ID from EmailJS
      { name, email, message },  // Data to be sent to the email template
      '6_Xe070WGmRVeufvF'          // Replace with your User ID from EmailJS
    )
    .then(
      (result) => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        setError("Failed to submit the form. Please try again later.");
      }
    );
};

  
  

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>{error && (
  <div className="mb-6 rounded bg-red-100 p-4 text-red-800 shadow">
    ⚠️ {error}
  </div>
)}

              <form onSubmit={handleSubmit}>{success && (
  <div className="mb-6 rounded bg-green-100 p-4 text-green-800 shadow">
    ✅ Your message has been submitted successfully!
  </div>
)}

              
                
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
  className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
/>

                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
/>

                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
  rows={5}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Enter your Message"
 className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
