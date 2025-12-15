"use client";

import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  // Global stagger container
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      title: "Civil & Structural Engineering",
      imageUrl: "/structuralEngineering.jpg",
      description:
        "We provide innovative and durable engineering design and construction services for public and private sector development. Our solutions are supported by global standards and modern technology.",
    },
    {
      title: "Building Construction",
      imageUrl: "/buildingConstruction.jpg",
      description:
        "From residential estates to commercial and industrial structures, we deliver high-quality building projects from blueprint to completion—on time and within budget.",
    },
    {
      title: "Real Estate Development",
      imageUrl: "/realestateDevelopment.webp",
      description:
        "We develop affordable and premium housing projects, estates, and mixed-use commercial environments designed to meet modern urban lifestyles.",
    },
    {
      title: "Architectural Design & Consultancy",
      imageUrl: "/architecturalDesign.jpg",
      description:
        "Our team of architects and planners produce functional, aesthetically appealing, and cost-efficient building designs using cutting-edge software and international building codes.",
    },
    {
      title: "Road Construction & Maintenance",
      imageUrl: "/roadConstruction.jpeg",
      description:
        "We construct durable highways, access roads, major transportation routes, and drainage systems designed for heavy load performance and longevity.",
    },
    {
      title: "Renovation & Facility Management",
      imageUrl: "/buildingConstruction.jpg",
      description:
        "We restore, upgrade, and maintain existing structures—enhancing aesthetics, structural stability, and operational efficiency.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#192a42]  text-white overflow-hidden"
    >
      {/* Soft sweeping highlight (global effect) */}
      <motion.span
        className="absolute inset-0 block pointer-events-none bg-gradient-to-r from-transparent via-white-300/10 to-transparent"
        animate={{ x: ["-40%", "110%"] }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "linear",
        }}
        style={{
          width: "35%",
          height: "100%",
          transform: "skewX(-18deg)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Services
          </h2>

          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto text-white/70 leading-relaxed">
            Engineering and Construction Solutions Built for Long-Term
            Performance
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((svc, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-md shadow-xl overflow-hidden hover:shadow-yellow-500/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="px-6 py-6">
                <div
                  className="h-64 rounded-sm bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url(${svc.imageUrl})` }}
                />

                {/* Content */}
                <div className="p-6 ">
                  <h3 className="text-lg text-[#192a42] font-bold mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
