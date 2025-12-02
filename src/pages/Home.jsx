
import Hero from "../components/Hero";
import { Stethoscope, HeartPulse, Palmtree, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Advanced Diagnosis",
    description: "Latest MRI, CT, PET scans & lab tests with same-day results from world-class specialists.",
    image: "/images/diagnosis.jpg",
    icon: Stethoscope,
    color: "#2256CF",
  },
  {
    title: "Expert Treatment",
    description: "Surgery & procedures by internationally trained doctors in JCI-accredited hospitals.",
    image: "/images/surgery.jpg",
    icon: HeartPulse,
    color: "#EC4E00",
  },
  {
    title: "Luxury Recovery",
    description: "Heal in 5-star beach resorts with physiotherapy, spa therapy, and personal care.",
    image: "/images/recovery-beach.jpg",
    icon: Palmtree,
    color: "#2256CF",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Choose MediTour Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A4558] mb-8 leading-tight">
              Treatment + Recovery =<br />
              <span className="text-[#2256CF]">Complete Healing</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              We combine world-class medical care with paradise recovery — 
              because healing shouldn’t feel like a hospital stay.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-3xl 
                         transition-all duration-700 transform hover:-translate-y-6 
                         overflow-hidden border-2 border-transparent hover:border-[#2256CF]/20 
                         animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image with Zoom */}
                <div className="relative overflow-hidden h-80 lg:h-96">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl 
                                transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon size={36} style={{ color: feature.color }} />
                  </div>

                  {/* Title Overlay on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-12 
                                group-hover:translate-y-0 transition-transform duration-700">
                    <h3 className="text-3xl font-black drop-shadow-2xl">{feature.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 space-y-6">
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="/services"
                    className="inline-flex items-center gap-3 text-[#2256CF] font-bold text-lg 
                             group-hover:text-[#EC4E00] transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight size={24} className="transform group-hover:translate-x-3 transition-transform duration-300" />
                  </a>
                </div>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none 
                              border-4 border-transparent group-hover:border-[#EC4E00]/30 
                              transition-all duration-700 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Patients Helped" },
              { number: "15+", label: "Countries" },
              { number: "24/7", label: "Support" },
              { number: "70%+", label: "Average Savings" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <p className="text-4xl lg:text-5xl font-black text-[#2256CF]">{stat.number}</p>
                <p className="text-lg font-semibold text-gray-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}