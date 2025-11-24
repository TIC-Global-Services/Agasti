import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function LifestyleGallery() {
  const features = [
    {
      title: "Sleek, Sculpted Rooflines",
      description:
        "Sleek, sculpted rooflines bring refined architectural elegance while enhancing natural light and ventilation.",
      image: "/roofline.jpg",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "Organic Kitchen Garden",
      description:
        "Organic Kitchen Garden offers a personal space to grow fresh, natural produce right at home.",
      image: "/organic-kitchen.jpg",
      aspectRatio: "aspect-[3/5]",
    },
    {
      title: "Outdoor Culinary Space",
      description:
        "Outdoor Culinary Space provides a stylish open-air setting for cooking, entertaining, and enjoying relaxed gatherings.",
      image: "/outdoor-culinary.jpg",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "Wider Structural Beams",
      description:
        "Wider Structural Beams create open, seamless interiors with stronger support and cleaner ceiling lines.",
      image: "/menu-image.jpg",
      aspectRatio: "aspect-[3/5]",
    },
  ];

  return (
    <section className="bg-white py-20">
      <ContainerLayout>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-gc-palioka text-[44px] md:text-5xl text-black leading-tight">
            Experience a Life of Convenience
            <br />
            and Indulgence
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className={`relative ${feature.aspectRatio} overflow-hidden mb-4`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-[#8D957E] text-base font-gc-palioka text-[22px] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}
