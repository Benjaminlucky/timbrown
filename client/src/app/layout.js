import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar"; // Adjust path if needed
import "./globals.css";
import Footer from "@/components/Footer";

// 1. Configure Poppins with the weights you need
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Define the CSS variable name
});

export const metadata = {
  title: "Tim Brown Works & Services - Civil Engineering & Construction",
  description:
    "Delivering sustainable civil engineering, construction, and real estate development projects with integrity, safety, and technical excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
