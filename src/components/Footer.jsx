"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-slate-800 py-8">
      <div className="container mx-auto px-4 lg:px-24">
        <p className="text-center font-semibold text-2xl pb-4">
          RAVIAN AI<span className="text-red-500">.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[15px] font-bold mb-4">About RAVIAN AI</h3>
            <p className="text-[10px] opacity-80">
              RAVIAN AI is dedicated to transforming the landscape of data
              analytics through innovation and cutting-edge technology. We
              empower businesses to harness the power of their data for informed
              decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[15px] font-bold mb-4">Contact Us</h3>
            <p className="text-[12px] opacity-80">
              <strong>Email:</strong> support@ravian.ai
            </p>
            <p className="text-[12px] opacity-80">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-[12px] opacity-80">
              <strong>Address:</strong> 123 RAVIAN Street, Data City, AI Country
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[15px] font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap space-x-4">
              <a href="#" className="text-[12px] opacity-80">
                Facebook
              </a>
              <a href="#" className="text-[12px] opacity-80">
                Twitter
              </a>
              <a href="#" className="text-[12px] opacity-80">
                LinkedIn
              </a>
              <a href="#" className="text-[12px] opacity-80">
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 text-center text-[12px] opacity-80">
          Copyright &copy; 2024 <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
