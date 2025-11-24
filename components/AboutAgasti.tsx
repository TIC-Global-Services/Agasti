import Image from "next/image";

export default function AboutAgasti() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-[50vh] lg:h-auto">
          <Image
            src="/aboutus.png"
            alt="Agasti Interior"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-[#F5F3EE] flex items-center justify-center px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <p className="font-gc-palioka text-[#8D957E] text-[25px] mb-4 tracking-wider font-bold">About AGASTI</p>
            
            <h2 className="font-gc-palioka text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight whitespace-nowrap">
              An Urban Sanctuary <br></br>for the Elite
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Atara is more than a home — it's a living experience that celebrates 
                tranquility, space, and sophistication.
              <br></br>
                Every villa is enveloped in lush greenery, crafted with premium 
                finishes, and designed for modern, mindful living.
              </p>
            </div>

            <button className="text-black font-medium hover:opacity-70 transition-opacity group">
              <span className="relative inline-block">
                Know More
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
