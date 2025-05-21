import React from "react";
import {
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

let links = [
  "Contract of carriage",
  "Lengthy tarmac delay plan",
  "Legal information",
  "Customer Commitment",
  "Help Center",
  "Accessible travel",
  "Privacy Policy",
  "Do Not Sell My Info",
  "Interest Based Ads",
  "United Jetstream",
  "Cargo",
  "Electronic Invoice",
];

function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b border-white/10 pb-6">
          <nav className="flex gap-4 flex-wrap text-sm text-gray-300">
            {links.map((text) => (
              <a
                href="#"
                className="hover:text-white transition duration-200"
              >
                {text}
              </a>
            ))}
          </nav>

          <p className="text-sm text-gray-400 flex items-center gap-1">
            <FaGlobe className="text-gray-400" /> English - United States ($) |
            Español
          </p>
        </section>

        <section className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <figure className="flex items-center gap-6">
            <img
              src="https://www.united.com/3149651732b3c9591453.UnitedLogoInverted.svg"
              alt="United logo"
              className="h-6"
            />
            <img
              src="https://www.united.com/dd45368f41b2bc6e1df9.StarAlliance.svg"
              alt="Star logo"
              className="h-6"
            />
          </figure>

          <nav className="flex gap-4">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              className="text-white hover:text-gray-300 transition"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-white hover:text-gray-300 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-white hover:text-gray-300 transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-white hover:text-gray-300 transition"
            >
              <FaInstagram size={20} />
            </a>
 
        
          </nav>
        </section>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Indicates an external site that may or may not meet accessibility
          guidelines.
          <br />
          &copy;2025 United Airlines, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
