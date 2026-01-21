"use client";
import Image from "next/image";
import Link from "next/link";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function AboutCTA() {
  // Letter reveal effect for headings
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);
  return (
    <section className="bg-white py-[80px]">
      <div className="px-6 sm:px-[48px]">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="relative overflow-hidden rounded-lg h-[400px] w-full mx-auto">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="(max-width: 640px) 100vw"
              className="object-cover"
            />
            
            {/* Linear Gradient Overlay */}
            <div 
              className="absolute inset-0 z-5"
              style={{
                background: 'linear-gradient(86.34deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            ></div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start z-10 p-6">
              <div className="text-left text-black max-w-full">
                <h2 
                  ref={titleRef}
                  className="font-gc-palioka text-[20px] mb-4 leading-tight"
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-black text-[14px] leading-relaxed mb-6 max-w-[280px]">
                  Step into a world where craftsmanship, nature, and refined design come together to create a truly elevated way of living. Explore our vision, discover our communities, and see how Agasti is shaping the future of luxury villas.
                </p>

                <Link href="/contact">
                  <button className="text-[10px] font-bold tracking-wider text-white bg-[#FFFFFF4D] px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-[#87CEEB]">
                    SCHEDULE A VISIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="relative overflow-hidden rounded-lg w-full h-[450px]">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="(min-width: 640px) and (max-width: 1024px) 100vw"
              className="object-cover"
            />
            
            {/* Linear Gradient Overlay */}
            <div 
              className="absolute inset-0 z-5"
              style={{
                background: 'linear-gradient(86.34deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            ></div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 p-8">
              <div className="text-center text-black max-w-lg mx-auto">
                <h2 
                  ref={titleRef}
                  className="font-gc-palioka text-[28px] mb-6 leading-tight"
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-black text-[16px] leading-relaxed mb-8">
                  Step into a world where craftsmanship, nature, and refined design come together to create a truly elevated way of living. Explore our vision, discover our communities, and see how Agasti is shaping the future of luxury villas.
                </p>

                <Link href="/contact">
                  <button className="text-[12px] font-bold tracking-wider text-white bg-[#FFFFFF4D] px-6 py-3 rounded transition-colors duration-300 hover:bg-white hover:text-[#87CEEB]">
                    SCHEDULE A VISIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-lg w-full max-w-[1344px] h-[340px] mx-auto">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="(min-width: 1024px) 1344px"
              className="object-cover"
            />
            
            {/* Linear Gradient Overlay */}
            <div 
              className="absolute inset-0 z-5"
              style={{
                background: 'linear-gradient(86.34deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            ></div>
            
            {/* Text Overlay */}
            <div className="absolute top-0 right-0 flex items-start justify-end z-10 p-10">
              <div className="text-right text-black max-w-3xl">
                <h2 
                  ref={titleRef}
                  className="font-gc-palioka text-[34px] mb-3 leading-tight font-regular"
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-white font-plus-jakarta-sans text-[16px] leading-tight mb-6 max-w-3xl">
                  Step into a world where craftsmanship, nature, and refined design come together to <br />
                  create a truly elevated way of living. Explore our vision, discover our communities, and <br />
                  see how Agasti is shaping the future of luxury villas.
                </p>

                <Link href="/contact">
                  <button className="text-[12px] font-bold tracking-wider text-white bg-[#FFFFFF4D] w-[197px] h-[50px] rounded transition-colors duration-300 hover:bg-white hover:text-[#87CEEB]">
                    SCHEDULE A VISIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}