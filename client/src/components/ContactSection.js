"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#192a42] text-white overflow-hidden"
    >
      {/* GLOBAL LIGHT SWEEP */}
      <motion.span
        className="absolute inset-0 pointer-events-none block bg-gradient-to-r
        from-transparent via-[#fff]/20 to-transparent"
        animate={{ x: ["-50%", "120%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        style={{
          width: "40%",
          height: "100%",
          transform: "skewX(-25deg)",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT SIDE TEXT */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Get in Touch
            </h2>

            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Have a project in mind? Let’s build something outstanding
              together.
            </p>

            <div className="space-y-2 text-white/90 text-lg">
              <p>+234 708 691 0605, +234 811 766 8314</p>
              <p>info@timbrown.com</p>
              <p>
                Office Address: Shop F18 road 3 Ikota shopping complex
                Ajah, Lagos.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={itemVariants}
            className="bg-[#fe8513] p-8 rounded-sm shadow-xl"
          >
            <form className="space-y-5">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white text-black rounded-sm outline-none"
              />

              {/* Phone Number */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white text-black rounded-sm outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white text-black rounded-sm outline-none"
              />

              {/* Message */}
              <textarea
                rows={4}
                placeholder="Leave a Request"
                className="w-full px-4 py-3 bg-white text-black rounded-sm outline-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-[#192a42] text-white font-semibold rounded-sm hover:opacity-90 transition"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
