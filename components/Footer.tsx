import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function Footer() {
  return (
    <footer className="bg-[#E8E6E1] py-8 sm:py-4">
      <ContainerLayout>
        {/* Logo - Centered on mobile, then navigation on tablet/desktop */}
        <div className="flex justify-center sm:hidden mb-6">
          <div className="relative h-[60px] w-auto aspect-[4/1]">
            <Image
              src="/Agasti_Logo.png"
              alt="Agasti Logo"
              fill
              sizes="240px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start gap-4 sm:gap-3 md:gap-6 mb-8 sm:mb-4 md:mb-6">
          <a href="#home" className="text-gray-600 hover:text-black transition-colors text-base sm:text-sm md:text-[16px] text-center sm:text-left">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-black transition-colors text-base sm:text-sm md:text-[16px] text-center sm:text-left">
            About Us
          </a>
          <a href="#projects" className="text-gray-600 hover:text-black transition-colors text-base sm:text-sm md:text-[16px] text-center sm:text-left">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-base sm:text-sm md:text-[16px] text-center sm:text-left">
            Contact us
          </a>
        </div>

        {/* Logo - Hidden on mobile, centered on tablet/desktop */}
        <div className="hidden sm:flex justify-center mb-4 md:mb-6">
          <div className="relative h-[60px] w-auto aspect-[4/1]">
            <Image
              src="/Agasti_Logo.png"
              alt="Agasti Logo"
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-row justify-center sm:justify-end gap-8 sm:gap-4 md:gap-6 mb-8 sm:mb-2 md:mb-3">
          <div className="text-center sm:text-right">
            <p className="text-gray-500 text-sm sm:text-xs md:text-sm mb-1">Need support?</p>
            <a 
              href="mailto:info@agasti.com" 
              className="text-gray-700 text-sm sm:text-xs md:text-sm hover:text-black transition-colors relative inline-block group"
            >
              info@agasti.com
              <span className="absolute left-0 bottom-0 w-full sm:w-0 h-[1px] bg-black sm:transition-all sm:duration-300 sm:group-hover:w-full"></span>
            </a>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-gray-500 text-sm sm:text-xs md:text-sm mb-1">Customer care</p>
            <a 
              href="tel:+12345678910" 
              className="text-gray-700 text-sm sm:text-xs md:text-sm hover:text-black transition-colors relative inline-block group"
            >
              +1 234 567 8910
              <span className="absolute left-0 bottom-0 w-full sm:w-0 h-[1px] bg-black sm:transition-all sm:duration-300 sm:group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 mb-6 sm:mb-2 md:mb-3" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3 md:gap-4 text-sm sm:text-xs md:text-[18px] text-gray-600">
          <p className="text-center sm:text-left">© 2025 Atara by Agasti . All Rights Reserved.</p>
          <p className="text-center sm:text-right">Designed & Developed By TIC Global Services</p>
        </div>
      </ContainerLayout>
    </footer>
  );
}
