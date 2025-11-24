import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function Footer() {
  return (
    <footer className="bg-[#E8E6E1] py-12">
      <ContainerLayout>
        {/* Top Navigation */}
        <div className="flex justify-start gap-8 mb-12">
          <a href="#home" className="text-gray-600 hover:text-black transition-colors text-[16px]">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-black transition-colors text-[16px]">
            About Us
          </a>
          <a href="#projects" className="text-gray-600 hover:text-black transition-colors text-[16px]">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-[16px]">
            Contact us
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative h-[80px] w-auto aspect-[4/1]">
            <Image
              src="/Agasti_Logo.png"
              alt="Agasti Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex justify-end gap-12 mb-8">
          <div className="text-right">
            <p className="text-gray-500 text-sm mb-1">Need support?</p>
            <a 
              href="mailto:info@agasti.com" 
              className="text-gray-700 text-sm hover:text-black transition-colors relative inline-block group"
            >
              info@agasti.com
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm mb-1">Customer care</p>
            <a 
              href="tel:+12345678910" 
              className="text-gray-700 text-sm hover:text-black transition-colors relative inline-block group"
            >
              +1 234 567 8910
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 mb-6" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-[18px] text-gray-600">
          <p>© 2025 Atara by Agasti . All Rights Reserved.</p>
          <p>Designed & Developed By TIC Global Services</p>
        </div>
      </ContainerLayout>
    </footer>
  );
}
