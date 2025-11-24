import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function Services() {
  const services = [
    {
      title: "Lush Surroundings",
      description: "Fully grown trees, water bodies, and bridges that immerse you in a tropical oasis.",
      image: "/lushsurrounding.jpg",
    },
    {
      title: "Limited-Edition Villas",
      description: "Just 18 exclusive homes — ensuring privacy and a close-knit community.",
      image: "/limitededitionvilla.jpg",
    },
    {
      title: "Resort-Inspired Comforts",
      description: "Clubhouse, pool, yoga deck, and recreation spaces for holistic living.",
      image: "/resort.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <ContainerLayout>
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#8D957E] text-sm mb-4 text-[24px] font-bold">Where Luxury Meets Nature</p>
          <h2 className="font-gc-palioka text-5xl md:text-6xl text-black leading-tight whitespace-nowrap">
            Elegance curated with care, <br></br>serenity framed in every vista.
          </h2>
        </div>

        <hr className="border-gray-500 mb-16" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              {/* Text Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden  group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-120"
                />
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}
