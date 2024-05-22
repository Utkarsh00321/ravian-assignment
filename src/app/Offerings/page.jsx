"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  return (
    <div className="container mx-auto lg:px-24  text-wrap">
      <div className="grid md:grid-cols-2 gap-8 items-center opacity-80">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="mb-12 md:mb-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/analytics.png"
                width={40}
                height={40}
                alt="Analytics Icon"
              />
              <p className="text-lg">AI Data Analyst</p>
            </div>
            <br />
            <p className="text-[15px] ">
              AI Data Analyst Meet Your AI Data Analyst Unlock the full
              potential of your data with RAVIAN AI is Data Analyst—an
              intelligent platform designed to transform raw data into
              actionable insights. Our AI Data Analyst is equipped with the
              latest machine learning algorithms and cutting-edge technologies
              to analyze, interpret, and visualize data with precision and
              speed.
            </p>
            <br />
            <br />
          </div>
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/risk-management.png"
                width={40}
                height={40}
                alt="Analytics Icon"
              />
              <p className="text-lg">Gen AI Vision Analyst</p>
            </div>

            <br />
            <p className="text-[15px] ">
              Introducing the Gen AI Vision Analyst: Redefining Visual
              Intelligence At RAVIAN AI, we are excited to introduce our
              revolutionary Gen AI Vision Analyst—a next-generation solution
              that sets a new standard for visual intelligence and data
              analysis.
            </p>
            <br />
            <br />
          </div>
        </motion.div>

        <Spline
          scene="https://prod.spline.design/QnbL02XQWsi7lmQP/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Page;
