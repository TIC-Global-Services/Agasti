"use client";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function WhyLiveWithAgasti() {
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

  return (
    <section className="bg-white py-20">
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
        `
      }} />
      <ContainerLayout>
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#8D957E] text-sm mb-6 text-[26px] font-bold">Why Live With Agasti</p>
          
          <h2 className="font-gc-palioka text-[32px] text-black mb-8 leading-tight max-w-4xl">
            Agasti brings together luxury, nature, and thoughtful design.
            <br />
            With premium materials, open layouts, and serene green
            <br />
            spaces, every villa is crafted with precision to elevate your
            <br />
            everyday living.
          </h2>
          
          <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
            Designed for those who value privacy, quality, and timeless elegance, Agasti offers a peaceful retreat 
            that stays connected to the city's best schools, hospitals, and business hubs—giving you the ideal 
            blend of exclusivity and convenience.
          </p>
        </div>

        {/* Features Infinite Scroll */}
        <div className="mt-16 overflow-hidden">
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
                    className="object-contain"
                  />
                </div>
                
                {/* Label */}
                <p className="text-black text-sm font-semibold tracking-wide">
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
