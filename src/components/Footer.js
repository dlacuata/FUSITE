"use client"

import Link from "next/link";
import { FaInstagram, FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 80px" }} className="flex w-full max-w-[1440px] mx-auto flex-col items-start bg-slate-950 text-text-white gap-8">
      <div style={{ padding: "48px 0", gap: "var(--spacing-32, 128px)" }} className="flex flex-row flex-wrap w-full justify-center">
        <div style={{ padding: "16px" }} className="flex flex-col gap-1">
          <h3 className="text-text-fg-yellow font-bold text-lg">Contact Us</h3>
          <p className="text-text-fg-yellow text-sm">fusion@uci.edu</p>
        </div>

        <div style={{ padding: "16px" }} className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-2 text-text-white text-sm hover:opacity-80 transition-opacity">
            <FaInstagram size={18} /> Instagram
          </a>
          <a href="#" className="flex items-center gap-2 text-text-white text-sm hover:opacity-80 transition-opacity">
            <FaDiscord size={18} /> Discord
          </a>
          <a href="#" className="flex items-center gap-2 text-text-white text-sm hover:opacity-80 transition-opacity">
            <FaFacebook size={18} /> Facebook
          </a>
          <a href="#" className="flex items-center gap-2 text-text-white text-sm hover:opacity-80 transition-opacity">
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>

        <div style={{ padding: "16px" }} className="flex flex-col gap-2">
          <Link href="/" className="text-text-white text-sm hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/about" className="text-text-white text-sm hover:opacity-80 transition-opacity">About</Link>
          <Link href="/board" className="text-text-white text-sm hover:opacity-80 transition-opacity">Board</Link>
          <Link href="/programs" className="text-text-white text-sm hover:opacity-80 transition-opacity">Programs</Link>
          <Link href="/projects" className="text-text-white text-sm hover:opacity-80 transition-opacity">Projects</Link>
        </div>
      </div>

      <p style={{ paddingBottom: "16px" }} className="text-[#7D7D7D] text-sm text-left w-full">Copyright FUSION 2025</p>
    </footer>
  );
}
