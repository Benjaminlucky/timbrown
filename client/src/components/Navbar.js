"use client"; // <--- CRITICAL: This line makes hooks work

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const NAVIGATION_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Industries Served", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

// Animation variants for the mobile menu container
const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

// Animation variants for individual menu items
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar shadow on scroll
      if (typeof window !== "undefined" && window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active Section Spy
      const sections = NAVIGATION_LINKS.map((link) => link.href.substring(1));

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is currently visible or just crossed the top threshold
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Only attach listener in the client environment
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      setIsMobileMenuOpen(false);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold tracking-tight text-black hover:text-[var(--secondary-brand-600)] transition-colors"
          >
            TimBrown
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-medium transition-colors duration-200 
                  ${
                    isActive
                      ? "text-[#4b0d70] font-semibold"
                      : "text-gray-600 hover:text-[var(--primary-500)]"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-[var(--primary-500)] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Framer Motion Enhanced) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div className="flex flex-col py-2">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    variants={itemVariants}
                    className={`block w-full text-base font-medium py-3 px-6 transition-colors duration-200 
                      ${
                        isActive
                          ? "bg-[var(--secondary-brand-100)] text-[var(--secondary-brand-700)] font-semibold border-l-4 border-[var(--secondary-brand-600)]"
                          : "text-gray-700 hover:bg-[var(--primary-50)] hover:text-[var(--primary-600)]"
                      }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
