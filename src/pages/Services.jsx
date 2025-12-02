// src/pages/Services.jsx
import { 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Users, 
  Plane, 
  ShieldCheck,
  ChevronRight 
} from "lucide-react";

const services = [
  {
    title: "Advanced Diagnosis",
    img: "/images/diagnosis.jpg",
    description: "State-of-the-art MRI, CT scans, and lab tests with same-day results from top specialists.",
    icon: Stethoscope,
    color: "#2256CF",
  },
  {
    title: "Expert Surgery",
    img: "/images/surgery.jpg",
    description: "Minimally invasive procedures in JCI-accredited hospitals with world-renowned surgeons.",
    icon: HeartPulse,
    color: "#EC4E00",
  },
  {
    title: "Luxury Rehabilitation",
    img: "/images/rehabilitation-spa.jpg",
    description: "Personalized physiotherapy, spa therapy, and wellness in 5-star beachfront resorts.",
    icon: Activity,
    color: "#2256CF",
  },
  {
    title: "Personal Coordinator",
    img: "/images/insurance.jpg",
    description: "Dedicated 24/7 support for visas, scheduling, translation, and your entire journey.",
    icon: Users,
    color: "#EC4E00",
  },
  {
    title: "Hotel & Guided Tours",
    img: "/images/recovery-beach.jpg",
    description: "Luxury accommodation plus curated cultural tours during your recovery period.",
    icon: Plane,
    color: "#2256CF",
  },
  {
    title: "Insurance Support",
    img: "/images/insurance.jpg",
    description: "Hassle-free claims with direct billing to major international insurance providers.",
    icon: ShieldCheck,
    color: "#EC4E00",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A4558] mb-6">
            Comprehensive Medical Tourism<br />
            <span className="text-[#2256CF]">Services</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            From diagnosis to recovery, we handle every detail so you can focus on healing in comfort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl 
                       transition-all duration-700 transform hover:-translate-y-3 
                       overflow-hidden border-2 border-transparent hover:border-[#2256CF]/20 
                       animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 lg:h-72">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg 
                              transition-transform duration-500 group-hover:scale-110">
                  <service.icon size={28} style={{ color: service.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#3A4558] group-hover:text-[#2256CF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Link */}
                <a
                  href="/contacts"
                  className="inline-flex items-center gap-2 text-[#2256CF] font-semibold text-lg 
                           group-hover:text-[#EC4E00] transition-colors duration-300"
                >
                  Learn More
                  <ChevronRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 pointer-events-none 
                            border-4 border-transparent group-hover:border-[#EC4E00]/30 
                            rounded-3xl transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 lg:mt-28 text-center bg-[#2256CF]/5 rounded-3xl p-10 lg:p-16">
          <p className="text-2xl lg:text-4xl font-bold text-[#3A4558] mb-6">
            Ready to Start Your Treatment Journey?
          </p>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact our team to customize your medical tourism package today.
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-4 bg-[#2256CF] hover:bg-[#1a47a8] text-white px-12 py-6 
                     rounded-full text-xl lg:text-2xl font-bold shadow-2xl hover:shadow-[#2256CF]/50 
                     transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Your Free Quote
            <ChevronRight size={32} />
          </a>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}