"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto flex justify-center">
      <div className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="md:w-full text-center px-4 md:px-20"
          >
            <p className="text-lg text-left py-8">
              <span className="font-extrabold text-2xl">
                Get in Touch with RAVIAN
              </span>
              <br />
              <br />
              <span className="text-[16px] opacity-80">
                We are here to assist you with any questions or inquiries you
                may have. Feel free to reach out to us through the following
                contact details or by filling out the contact form below.
              </span>
              <br />
              <br />

              <span className="text-[16px] opacity-80">
                <strong>Email:</strong> support@ravian.ai
              </span>
              <br />
              <br />
              <span className="text-[16px] opacity-80">
                <strong>Phone:</strong> +123 456 7890
              </span>
              <br />
              <br />
              <span className="text-[16px] opacity-80">
                <strong>Address:</strong> 123 RAVIAN Street, Data City, AI
                Country
              </span>
              <br />
              <br />

              <span className="text-[16px] opacity-80">
                <form className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-slate-800 p-2 rounded-md w-full  mx-auto"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-slate-800 p-2 rounded-md w-full mx-auto"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="border border-slate-800 p-2 rounded-md h-32 w-full  mx-auto"
                  ></textarea>
                  <button
                    type="submit"
                    className="border-2 border-slate-800 p-2 rounded-md w-full  mx-auto"
                  >
                    Send Message
                  </button>
                </form>
              </span>
            </p>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
