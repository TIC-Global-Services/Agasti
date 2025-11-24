"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function WhyLiveWithAgasti() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: "/innovation.png",
      label: "INNOVATION",
    },
    {
      icon: "/sustainable.png",
      label: "SUSTAINABLE",
    },
    {
      icon: "/highstrength.png",
      label: "HIGH-STRENGTH",
    },
    {
      icon: "/luxury.png",
      label: "LUXURY",
    },
    {
        icon:"/serenity.png",
        label: "SERENITY"
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Auto-advance carousel
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % features.length;
      setActiveIndex(nextIndex);
      
      // Scroll to next card
      const cardWidth = carousel.offsetWidth;
      carousel.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex, features.length]);

  useEffect(() => {
    // Update progress bars
    const progressBars = document.querySelectorAll('[id^="progress-"]');
    progressBars.forEach((bar, index) => {
      if (index === activeIndex) {
        (bar as HTMLElement).style.backgroundColor = '#000000';
      } else {
        (bar as HTMLElement).style.backgroundColor = '#d1d5db';
      }
    });
  }, [activeIndex]);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-infinite-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
      <ContainerLayout>
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[#8D957E] text-base sm:text-lg md:text-xl lg:text-[26px] mb-4 sm:mb-6 font-bold">Why Live With Agasti</p>
          
          <h2 className="font-gc-palioka text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-black mb-6 sm:mb-8 leading-tight max-w-4xl">
            Agasti brings together luxury, nature, and thoughtful design.
            <br />
            With premium materials, open layouts, and serene green
            <br />
            spaces, every villa is crafted with precision to elevate your
            <br />
            everyday living.
          </h2>
          
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Designed for those who value privacy, quality, and timeless elegance, Agasti offers a peaceful retreat 
            that stays connected to the city's best schools, hospitals, and business hubs—giving you the ideal 
            blend of exclusivity and convenience.
          </p>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="block md:hidden mt-12 -mx-6 sm:-mx-8 md:mx-0">
          <div 
            ref={carouselRef}
            className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar" 
            id="features-carousel"
          >
            <div className="flex">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center justify-center py-12 w-screen flex-shrink-0 snap-center">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Label */}
                  <p className="text-black text-sm font-semibold tracking-wide text-center">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex justify-center gap-2 mt-6 px-6 sm:px-8">
            {features.map((_, index) => (
              <div 
                key={index} 
                className="h-1 bg-gray-300 rounded-full transition-all duration-500"
                style={{ width: '40px' }}
                id={`progress-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Infinite Scroll - Hidden on mobile */}
        <div className="hidden md:block mt-16 overflow-hidden">
          <div className="flex gap-0 animate-infinite-scroll">
            {/* Duplicate features 4 times for seamless loop */}
            {[...features, ...features, ...features, ...features].map((feature, index) => (
              <div key={index} className="relative flex flex-col items-center justify-center px-12 py-16 min-w-[250px] flex-shrink-0">
                {/* Icon */}
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.label}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                
                {/* Label */}
                <p className="text-black text-sm font-semibold tracking-wide text-center">
                  {feature.label}
                </p>
                
                {/* Vertical Line */}
                <div className="absolute right-0 top-0 h-full w-px bg-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
