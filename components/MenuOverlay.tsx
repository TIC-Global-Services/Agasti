"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
        isAnimating ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full">
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/menu-image.jpg"
            alt="Interior"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Menu Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-8 py-12 md:px-16 lg:px-24 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <span className="text-sm tracking-wider">CLOSE</span>
          </button>

          {/* Logo */}
          <div className="mb-16">
            <div className="relative h-[60px] w-auto aspect-[4/1]">
              <Image
                src="/Agasti_Logo.png"
                alt="Agasti Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="mb-auto">
            <ul className="space-y-6 text-gray-500 text-center">
              <li>
                <a href="#home" className="hover:text-black transition-colors text-lg">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition-colors text-lg">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black transition-colors text-lg">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors text-lg">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer Content */}
          <div className="absolute bottom-12 left-8 right-8 md:left-16 md:right-16 lg:left-24 lg:right-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-500 mb-8">
              {/* Need Support */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">NEED SUPPORT?</h3>
                <p>INFO@AGASTI.COM</p>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">ADDRESS</h3>
                <p>AGASTIESTATES, GACHIBOWLI,</p>
                <p>HYDERABAD - 500032</p>
              </div>

              {/* Socials */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">SOCIALS</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      FACEBOOK
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      TWITTER
                    </a>
                  </li>
                </ul>
              </div>

              {/* Customer Care */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">CUSTOMER CARE</h3>
                <p>+1 234 567 8910</p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex justify-between text-xs text-gray-400">
              <a href="#" className="hover:text-black transition-colors">
                PRIVACY POLICY
              </a>
              <span>© 2025 AGASTI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
