"use client";
import React, { useState } from "react";
import Link from "next/link";
import ModeToggle from "@/components/ModeToggleButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-8 mb-4  border-slate-300 w-full relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <div
          className="hidden opacity-90 text-[12px] md:flex space-x-3 font-extralight"
          style={{ marginLeft: "calc(50% - 200px - 0px)" }}
        >
          <Link href="/About" className="">
            About
          </Link>
          <Link href="/Vision" className="">
            Vision
          </Link>
        </div>

        {/* Centered brand name */}
        <div className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">RAVIAN AI</Link>
        </div>

        {/* Navigation links for larger screens */}
        <div
          className="hidden opacity-90 text-[12px] md:flex space-x-3 font-extralight"
          style={{ marginRight: "calc(50% - 200px - 30px)" }}
        >
          <Link href="/Offerings" className="">
            Offerings
          </Link>
          <Link href="/Contact" className="">
            Contact
          </Link>
        </div>

        {/* ModeToggle button */}
        <div className="hidden md:block fixed top-6 right-8">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden space-y-4 py-4 px-6 absolute w-full top-full left-0 shadow-lg z-10">
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/vision" className="block">
            Vision
          </Link>
          <Link href="/offerings" className="block">
            Offerings
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>
          <div className="block">
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
