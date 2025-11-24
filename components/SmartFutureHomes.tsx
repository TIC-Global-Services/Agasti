"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function SmartFutureHomes() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height + window.innerHeight);
        setOffsetY(scrollProgress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <ContainerLayout>
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#8D957E] text-[24px] mb-6 font-bold">Smart, Future-Ready Engineering</p>
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8 lg:items-end">
            <h2 className="font-gc-palioka md:text-[32px] text-black leading-tight max-w-2xl">
              Crafting Homes Designed for Intelligent Living, <br></br>Lasting Strength, and a Future-Ready Lifestyle
            </h2>
            
            <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
              Agasti homes use advanced structures, planned MEP systems, quality 
              waterproofing, and solar integration to ensure long-term durability, easy 
              upkeep, and a modern living experience built for the future.
            </p>
          </div>
        </div>

        <hr className="border-gray-400 mb-12" />

        {/* Parallax Image */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <div
            style={{
              transform: `translateY(${offsetY * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
            className="relative w-full h-[120%]"
          >
            <Image
              src="/1da7549ce5dc473d705a387be5e5ddff0675605a (1).jpg"
              alt="Smart Future Home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
