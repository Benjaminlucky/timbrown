"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Folder,
  Recycle,
  Settings,
  Headphones,
} from "lucide-react";

const AboutSection = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const serviceItems = [
    {
      title: "Civil & Structural Engineering",
      imageUrl: "/structuralEngineering.jpg",
    },
    {
      title: "Real Estate Development",
      imageUrl: "/realestateDevelopment.webp",
    },
    {
      title: "Building Construction",
      imageUrl: "/buildingConstruction.jpg",
    },
    {
      title: "Architectural Design & Consultancy",
      imageUrl: "/architecturalDesign.jpg",
    },
    {
      title: "Road Construction & Maintenance",
      imageUrl: "/roadConstruction.jpeg",
    },
    {
      title: "Real Estate Investment",
      imageUrl: "/realEstateInvestment.jpg",
    },
  ];

  const features = [
    {
      title: "Quality Assurance",
      icon: ShieldCheck,
      color: "bg-[var(--primary-950)]",
    },
    {
      title: "Professional Delivery",
      icon: Folder,
      color: "bg-[var(--primary-800)]",
    },
    {
      title: "Sustainable Engineering",
      icon: Recycle,
      color: "bg-[var(--primary-700)]",
    },
    {
      title: "Technical Expertise",
      icon: Settings,
      color: "bg-[var(--primary-600)]",
    },
    {
      title: "Customer-Centric Approach",
      icon: Headphones,
      color: "bg-[var(--primary-400)]",
    },
  ];

  // Feature Card Component (sweep removed)
  const FeatureCard = ({ title, icon: Icon, color }) => {
    return (
      <motion.div
        className={`relative flex flex-col bg-["#192a42"] items-center min-h-[250px] justify-center p-6 space-y-3 overflow-hidden shadow-2xl ${color}`}
        variants={itemVariants}
      >
        <div className="relative z-10 p-3 rounded-full bg-white/10">
          <Icon className="h-14 w-14 text-white" />
        </div>

        <p className="relative z-10 text-white text-center font-semibold text-lg md:text-2xl">
          {title}
        </p>
      </motion.div>
    );
  };

  return (
    <section
      id="about"
      className="relative text-white bg-[#192a42] py-24 md:py-36 overflow-hidden"
    >
      {/* GLOBAL LIGHT SWEEP */}
      <motion.span
        className="absolute inset-0 pointer-events-none block bg-gradient-to-r from-transparent via-[#fff]/20 to-transparent"
        animate={{ x: ["-50%", "120%"] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        style={{
          width: "40%",
          height: "100%",
          transform: "skewX(-25deg)",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Who We Are - Header */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Who We Are
          </h2>
          <p className="max-w-3xl mx-auto text-white/70 text-2xl leading-relaxed">
            Tim Brown Works and Services LTD is a fast-rising engineering and
            development company providing reliable infrastructure, real estate,
            and construction solutions across Nigeria. We design, invent, and
            invest in tomorrow's landscape.
          </p>
        </motion.header>

        {/* Service Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-sm px-6 py-6 overflow-hidden shadow-xl group cursor-pointer hover:shadow-primary-500/50 transition-shadow duration-300"
            >
              <div>
                <div
                  className="h-74 bg-cover rounded-md bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />

                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-[#192a42]">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us - Header */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold  mb-4">
            Why Choose Us
          </h2>
          <p className="text-white/70 text-lg">
            Tim Brown Works and Services LTD stands out through:
          </p>
        </motion.header>

        {/* Feature Grid */}
        <motion.div
          className="w-full grid  grid-cols-1 md:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              color={feature.color}
              className="min-h-[220px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
