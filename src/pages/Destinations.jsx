// src/pages/Destinations.jsx
import { MapPin, Heart, Stethoscope, Plane, DollarSign } from "lucide-react";

const destinations = [
  {
    name: "Turkey",
    cities: "Istanbul • Antalya • Izmir",
    image: "/images/turkey-istanbul.jpg",
    popular: "Hair Transplant • Dental • Cosmetic",
    savings: "Up to 70% savings",
    flag: "https://flagcdn.com/tr.svg",
  },
  {
    name: "Thailand",
    cities: "Bangkok • Phuket • Chiang Mai",
    image: "/images/thailand-bangkok.jpg",
    popular: "Orthopedics • IVF • Full Check-up",
    savings: "Up to 65% savings",
    flag: "https://flagcdn.com/th.svg",
  },
  {
    name: "India",
    cities: "Delhi • Mumbai • Chennai",
    image: "/images/india-hospital.jpg",
    popular: "Cardiac • Oncology • Neurosurgery",
    savings: "Up to 80% savings",
    flag: "https://flagcdn.com/in.svg",
  },
];

export default function Destinations() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F4FF]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A4558] mb-6">
            World-Class Treatment in<br />
            <span className="text-[#2256CF]">Paradise Destinations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Choose from JCI-accredited hospitals in top medical tourism countries — 
            combine life-changing treatment with luxury recovery.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl 
                       transition-all duration-700 transform hover:-translate-y-4 bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image with Zoom + Overlay */}
              <div className="relative overflow-hidden h-80 lg:h-96">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Flag */}
                <img
                  src={dest.flag}
                  alt={`${dest.name} flag`}
                  className="absolute top-4 left-4 w-12 h-12 rounded-full shadow-lg border-4 border-white z-10"
                />

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-4xl font-black mb-2 drop-shadow-2xl">{dest.name}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <MapPin size={18} />
                    <span>{dest.cities}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-6 bg-white">
                {/* Popular Treatments */}
                <div>
                  <div className="flex items-center gap-3 text-[#2256CF] font-bold mb-3">
                    <Stethoscope size={22} />
                    <span className="text-sm uppercase tracking-wider">Popular Treatments</span>
                  </div>
                  <p className="text-gray-700 font-medium">{dest.popular}</p>
                </div>

                {/* Savings Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#EC4E00]/10 rounded-xl">
                      <DollarSign size={24} className="text-[#EC4E00]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average Savings</p>
                      <p className="text-2xl font-black text-[#EC4E00]">{dest.savings}</p>
                    </div>
                  </div>

                  {/* CTA Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-14 h-14 bg-[#2256CF] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a47a8] transition-colors">
                      <Plane size={24} className="text-white rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Not sure which destination is best for your treatment?
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-4 bg-[#2256CF] hover:bg-[#1a47a8] text-white px-12 py-6 rounded-full 
                     text-xl md:text-2xl font-bold shadow-2xl hover:shadow-[#2256CF]/50 
                     transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Free Destination Recommendation
            <Heart size={32} className="text-[#EC4E00]" />
          </a>
        </div>

      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}