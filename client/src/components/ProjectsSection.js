"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Transportation & Road Infrastructure",
      imageUrl: "/roadConstruction.jpeg",
    },
    {
      title: "Real Estate & Housing Development",
      imageUrl: "/realestateDevelopment.webp",
    },
    {
      title: "Drainage & Environmental Engineering",
      imageUrl: "/drainageConstruction.jpg",
    },
    {
      title: "Industrial Facility Development",
      imageUrl: "/industrialFacility.jpg",
    },
    {
      title: "Commercial & Institutional Buildings",
      imageUrl: "/commercialDevelopment.jpg",
    },
    {
      title: "Government Housing Scheme",
      imageUrl: "/govtHousingScheme.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-[#000] text-white overflow-hidden"
    >
      {/* SWEEP LIGHT EFFECT */}
      <motion.span
        className="absolute inset-0 block pointer-events-none bg-gradient-to-r 
        from-transparent via-[var(--primary-500)]/20 to-transparent"
        animate={{ x: ["-50%", "120%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        style={{
          width: "40%",
          height: "100%",
          transform: "skewX(-25deg)",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* HEADER */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Projects
          </h2>

          <p className="max-w-2xl mx-auto text-white/80 mt-5 text-lg md:text-xl leading-relaxed">
            A Showcase of Engineering Excellence and Successful Project Delivery
          </p>
        </motion.header>

        {/* PROJECT GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[var(--primary-900)] rounded-lg overflow-hidden shadow-xl cursor-pointer 
              hover:shadow-[var(--primary-brand)]/40 transition-shadow duration-300"
            >
              {/* IMAGE */}
              <div
                className="h-56 bg-cover bg-center rounded-t-lg transition-transform duration-500 
                hover:scale-105"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              />

              {/* TITLE */}
              <div className="p-4 text-center">
                <p className="text-white font-semibold text-sm md:text-base">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
