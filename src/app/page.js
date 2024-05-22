"use client";
import React from "react";
import ParticleComponent from "@/components/Particle";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="#home"
        className="min-h-[400px] flex flex-col items-center py-14 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mt-16"
        >
          <h1 className="text-6xl font-bold">RAVIAN AI</h1>
          <p className="mt-4  opacity-80 text-3xl">
            Turn Data into Decisions, with our AI Data <br />
            Scientist.
          </p>
          <Link
            href="/Try"
            className="my-14 border-2 border-black dark:border-slate-500  bg-transparent  focus:outline-none focus:ring-2 focus:ring-white font-medium py-2 px-4 hover:border-slate-500 dark:hover:border-white rounded-full transition duration-300"
          >
            TRY RAVIAN
          </Link>
        </motion.div>
        <ParticleComponent />
      </section>
    </>
  );
}
