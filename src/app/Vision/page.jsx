"use client";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section id="vision" className="mx-auto flex justify-center">
      <div className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="md:w-full text-center px-4 md:px-36"
          >
            <p className="text-lg text-left py-8">
              <span className="font-extrabold text-2xl opa">
                At RAVIAN AI, our vision is to redefine the frontiers of data
                science by integrating artificial intelligence with human
                ingenuity.
              </span>
              <br />
              <br />
              <span className="text-[16px] opacity-80">
                We strive to develop AI-driven solutions that not only solve
                complex business problems but also cultivate a deeper
                understanding of the data that shapes our world. We envision a
                future where every organization, regardless of its size or
                sector, has access to the power of advanced data analytics,
                enabling them to make smarter decisions, innovate faster, and
                drive meaningful progress. Our goal is to become the cornerstone
                for transformative analytics that empower businesses to lead
                with confidence and clarity.
              </span>
              <br />
              <br />
            </p>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Page;
