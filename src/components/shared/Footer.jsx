import Image from "next/image";
import Logo from "@/assets/logo.png";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image src={Logo} alt="FitLog Logo" width={40} height={40} />
          <span className="font-bold text-lg tracking-wide">FITLOG</span>
        </div>

        {/* Right: Copyright Text */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          © 2026 FitLog — Workout Library.{" "}
          <span className="text-gray-300">Train hard, log honest.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
