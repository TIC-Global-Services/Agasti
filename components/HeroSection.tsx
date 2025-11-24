"use client";
import { useState } from "react";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/herosection.jpg"
            alt="Agasti Villa"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Header with Text and Menu */}
          <div className="relative px-6 py-8 xl:px-[145px] lg:px-[50px]">
            {/* Centered AGASTI Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8">
              <div className="relative h-[44px] w-auto aspect-[4/1]">
                <Image
                  src="/Agasti_Logo.png"
                  alt="Agasti Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Hamburger Menu - Top Right */}
            <div className="absolute right-6 top-8 xl:right-[145px] lg:right-[50px]">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="hover:opacity-80 transition-opacity flex flex-col gap-2"
                aria-label="Open menu"
              >
                <span className="w-8 h-[2px] bg-black rounded-full" />
                <span className="w-8 h-[2px] bg-black rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
