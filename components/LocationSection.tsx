import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function LocationSection() {
  return (
    <section className="bg-white py-20">
      <ContainerLayout>
        <div className="bg-[#E8E6E1] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="flex items-center px-8 py-16 md:px-16 lg:px-20">
              <div className="max-w-lg">
                <h2 className="font-gc-palioka text-4xl md:text-5xl text-black mb-6 leading-tight">
                  Your Gateway
                  <br />
                  to Comfort, Connection,
                  <br />
                  and Ease
                </h2>
                
                <p className="text-gray-600 text-base leading-relaxed">
                  Atara by Agasti is strategically placed to offer peaceful living without 
                  compromising accessibility. From top schools and hospitals to 
                  business hubs, entertainment, and the airport—everything you need is 
                  just minutes away.
                </p>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="relative h-[400px] lg:h-auto min-h-[400px]">
              <Image
                src="/map.png"
                alt="Location Map"
                fill
                className="object-cover"
              />
              {/* Expand Icon */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M15 3H21V9M9 21H3V15M21 3L14 10M3 21L10 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
