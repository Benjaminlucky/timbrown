"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Users, Award, Globe } from "lucide-react";

// --- Reusable Shimmer Button Component ---
const ShimmerButton = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      className={`relative overflow-hidden text-sm md:text-base font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Light Sweep Effect */}
      <motion.span
        className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-700"
        initial={{ left: "-150%" }}
        animate={{ left: "-150%" }}
        whileHover={{
          left: "150%",
          opacity: 1,
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ width: "50px", transform: "skewX(-20deg)" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// --- The Main Home Section Component ---
const HomeSection = () => {
  // Animation variants for text reveal (Blur + Slide Up)
  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for button/staggered reveal
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const stats = [
    {
      icon: Users,
      value: "10+ Years",
      label: "of Combined Project Experience",
    },
    {
      icon: Truck,
      value: "100+ Delivered",
      label: "Engineering & Development Projects",
    },
    { icon: Award, value: "ISO & Industry", label: "Compliant Operations" },
    { icon: Globe, value: "Proven Expertise", label: "Across Nigeria" },
  ];

  return (
    <section id="home" className="relative pt-24 lg:pt-0">
      {/* --- 1. Hero Banner Section --- */}
      <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden bg-gray-900 flex items-center justify-center">
        {/* Fixed Background Image (Parallax Removed) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/heroBg.jpeg')",
            backgroundAttachment: "fixed", // Optional: makes it truly fixed on desktop
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-50" />

        {/* Content */}
        <motion.div
          className="relative text-center max-w-5xl px-4 z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
            variants={textVariants}
          >
            Engineering Solutions for a Modern and Developing Nation
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Delivering sustainable civil engineering, construction, and real
            estate development projects with integrity, safety, and technical
            excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            variants={textVariants}
          >
            <ShimmerButton
              href="#services"
              onClick={(e) =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[var(--primary-500)] text-white hover:bg-[var(--primary-600)]"
            >
              Explore Our Services
            </ShimmerButton>
            <ShimmerButton
              href="#contact"
              onClick={(e) =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-[var(--secondary-brand-700)] hover:bg-gray-100"
            >
              Get a Quote
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>

      {/* --- 2. Stats Bar Section --- */}
      <motion.div
        className="relative bg-[#f4eb82] py-8 md:py-12 -mt-1 z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
              viewport={{ once: true }}
            >
              <stat.icon className="h-10 w-10 mb-4 text-[#192a42]" />
              <div className="text-2xl md:text-3xl text-[#192a42] font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-[#192a42] ">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
