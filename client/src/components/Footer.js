"use client";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-black text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
        {/* Left Side */}
        <p className="flex items-center gap-1">
          <span>&copy;</span> {year} All Rights Reserved Timbrown Works
        </p>

        {/* Right Side */}
        <p className="text-right">
          Developed by{" "}
          <span className="font-semibold text-white">
            Inspireme Media Networks
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
