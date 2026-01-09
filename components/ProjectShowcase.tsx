"use client";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function ProjectShowcase() {
  // Blur effects for headings
  const { elementRef: titleRef1, blurClass: titleBlur1 } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  const { elementRef: titleRef2, blurClass: titleBlur2 } = useBlurOnScroll<HTMLHeadingElement>(0.1);

  return (
    <section className="bg-white">
      <ContainerLayout paddingX="px-5 xl:px-[48px] lg:px-[40px]" paddingY="py-0">
        {/* First Villa - Agasti Verve */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 md:mb-24">
          {/* Left Side - Title and Location */}
          <div className="lg:col-span-1">
            <h2 
              ref={titleRef1}
              className={`font-gc-palioka text-3xl sm:text-4xl md:text-[45px] text-black mb-4 leading-none transition-all duration-700 ease-out ${titleBlur1}`}
            >
              Agasti Verve
            </h2>
            <div className="flex items-center">
              <div className="relative mr-2" style={{ width: '23.5px', height: '24px' }}>
                <Image
                  src="/projects-imgs/locationicon.png"
                  alt="Location"
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm sm:text-[20px]">
                Kokapet, Hyderabad
              </p>
            </div>
          </div>

          {/* Middle - Image */}
          <div className="lg:col-span-1 -ml-22 -mr-4">
            <div className="relative overflow-hidden" style={{ width: '548px', height: '140px' }}>
              <Image
                src="/projects-imgs/agastiverve.png"
                alt="Agasti Verve Villa"
                fill
                sizes="700px"
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right Side - Description and Button */}
          <div className="lg:col-span-1 ml-8">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8D957E]"></div>
              <p className="text-[#717580] text-[16px] sm:text-base leading-tight mb-6 pl-4">
                Luxury residences inspired by contemporary minimalism, combining open spaces, modern design, and community living.
              </p>
            </div>
            <button className="bg-[#8D957E] text-white text-sm font-medium tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px]" style={{ width: '197px', height: '50px' }}>
              STAY UPDATED
            </button>
          </div>
        </div>

        {/* Second Villa - Agasti Arbor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Side - Title and Location */}
          <div className="lg:col-span-1">
            <h2 
              ref={titleRef2}
              className={`font-gc-palioka text-3xl sm:text-4xl md:text-[44px] text-black mb-4 leading-none transition-all duration-700 ease-out ${titleBlur2}`}
            >
              Agasti Arbor
            </h2>
            <div className="flex items-center">
              <div className="relative mr-2" style={{ width: '23.5px', height: '24px' }}>
                <Image
                  src="/projects-imgs/locationicon.png"
                  alt="Location"
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm sm:text-[18px]">
                Nanakramguda, Hyderabad
              </p>
            </div>
          </div>

          {/* Middle - Image */}
          <div className="lg:col-span-1 -ml-22 -mr-4">
            <div className="relative overflow-hidden" style={{ width: '548px', height: '140px' }}>
              <Image
                src="/projects-imgs/agastiarbor.png"
                alt="Agasti Arbor Villa"
                fill
                sizes="700px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Description and Button */}
          <div className="lg:col-span-1 ml-8">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8D957E]"></div>
              <p className="text-[#717580] text-[16px] text-left sm:text-base leading-tight mb-6 pl-4">
                A boutique villa enclave surrounded by lush landscapes, designed for serene, sustainable living.
              </p>
            </div>
            <button className="bg-[#8D957E] text-white text-sm font-medium tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px]" style={{ width: '197px', height: '50px' }}>
              STAY UPDATED
            </button>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}