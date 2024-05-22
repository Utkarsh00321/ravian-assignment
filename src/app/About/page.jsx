"use client";
import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Page = () => {
  return (
    <section id="about" className="mx-auto flex justify-center">
      <div className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="md:w-full text-center px-4 md:px-20"
          >
            <div className="font-extrabold text-left text-2xl ">
              <span className="font-extrabold text-left text-2xl ">
                At RAVIAN, we are dedicated to transforming the landscape of
                data analytics through innovation and cutting-edge technology.
              </span>
              <Spline
                scene="https://prod.spline.design/wmJjPSUkmj5RQvCI/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-lg text-left py-8">
              <br />
              <br />
              <span className="text-[15px] opacity-80">
                As pioneers in the field, we have developed the worlds leading
                AI data scientist—an intelligent platform that leads the way in
                crafting machine learning and deep learning models, conducting
                comprehensive data analysis, and delivering actionable insights
                through intuitive visualizations.
              </span>
              <br />
              <br />

              <span className="text-[15px] opacity-80">
                Our journey began with a vision to empower businesses with the
                tools they need to harness the power of their data and make
                informed decisions that drive success. With a team of passionate
                experts and a commitment to excellence, we have turned that
                vision into reality.
              </span>
              <br />
              <br />
              <span className="text-[15px] opacity-80">
                Today, RAVIAN stands at the forefront of AI-driven analytics,
                helping businesses of all sizes unlock the full potential of
                their data assets. Whether you are uncovering hidden patterns,
                predicting future trends, or optimizing operations, RAVIAN AI is
                your trusted partner in navigating the complexities of
                data-driven decision-making. Join us on this journey as we
                continue to push the boundaries of what is possible in the realm
                of data analytics. Welcome to RAVIAN AI—where innovation meets
                intelligence.
              </span>
            </p>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Page;
