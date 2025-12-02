import { Check, X, Star, HeartHandshake, Shield, Plane, Send } from "lucide-react";

const packages = [
  {
    name: "Full Medical Check-up",
    image: "/images/diagnosis.jpg",
    price: "$800 – $3,000",
    savings: "Save up to 80%",
    popular: false,
    includes: [
      "Full-body scans (MRI, CT, Ultrasound)",
      "Blood tests & lab work",
      "Specialist consultations",
      "Digital report in English",
      "Airport transfers",
      "4–7 days luxury hotel stay",
    ],
  },
  {
    name: "Surgery + Recovery Package",
    image: "/images/surgery.jpg",
    price: "$5,000 – $20,000",
    savings: "Save up to 70%",
    popular: true,
    includes: [
      "Surgery in JCI-accredited hospital",
      "All medical fees & anesthesia",
      "Private room + companion stay",
      "Medications & post-op care",
      "14–21 days 5-star recovery resort",
      "Physiotherapy & follow-up",
      "Airport transfers + translator",
    ],
  },
  {
    name: "Rehabilitation & Wellness",
    image: "/images/rehabilitation-spa.jpg",
    price: "$2,000 – $10,000",
    savings: "Save up to 65%",
    popular: false,
    includes: [
      "Personalized rehab program",
      "Daily physiotherapy sessions",
      "Spa & wellness treatments",
      "Nutritionist consultation",
      "7–28 days beachfront recovery",
      "Yoga, meditation & massage",
      "24/7 medical coordinator",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A4558] mb-6">
            Transparent Pricing — No Hidden Fees
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            All-inclusive packages with treatment, luxury recovery, transfers, and personal coordinator — 
            exactly what you see is what you pay.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative group bg-white rounded-3xl shadow-xl hover:shadow-3xl 
                       transition-all duration-700 transform hover:-translate-y-6 
                       overflow-hidden border-2 ${pkg.popular ? "border-[#2256CF]" : "border-transparent"}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#EC4E00] text-white px-8 py-2 
                              rounded-full font-bold text-sm uppercase tracking-wider shadow-lg z-10 flex items-center gap-2">
                  <Star size={18} fill="white" />
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-64 lg:h-72">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Savings Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl">
                  <p className="text-sm font-medium text-gray-600">You save</p>
                  <p className="text-2xl font-black text-[#EC4E00]">{pkg.savings}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#3A4558]">{pkg.name}</h3>
                  <p className="text-4xl lg:text-5xl font-extrabold text-[#2256CF] mt-4">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">All-inclusive package</p>
                </div>

                {/* What's Included */}
                <ul className="space-y-4">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <Check size={22} className="text-[#2256CF] flex-shrink-0 mt-0.5" />
                      <span className="text-base lg:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/contacts"
                  className={`w-full py-5 rounded-full text-xl font-bold transition-all duration-300 
                           flex items-center justify-center gap-3 shadow-xl
                           ${pkg.popular 
                             ? "bg-[#2256CF] hover:bg-[#1a47a8] text-white hover:scale-105" 
                             : "bg-[#EC4E00] hover:bg-[#d44400] text-white hover:scale-105"
                           } active:scale-95`}
                >
                  Get This Package
                  {pkg.popular ? <HeartHandshake size={24} /> : <Plane size={24} />}
                </a>
              </div>

              {/* Trust Icons */}
              <div className="bg-[#2256CF]/5 px-8 py-5 border-t border-gray-100">
                <div className="flex justify-around text-[#2256CF]">
                  <div className="flex flex-col items-center">
                    <Shield size={28} />
                    <span className="text-xs mt-1">Insurance OK</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <HeartHandshake size={28} />
                    <span className="text-xs mt-1">VIP Care</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star size={28} fill="#EC4E00" />
                    <span className="text-xs mt-1">5-Star Stay</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 lg:mt-28 text-center bg-[#2256CF]/5 rounded-3xl p-10 lg:p-16">
          <p className="text-2xl lg:text-4xl font-bold text-[#3A4558] mb-6">
            Need a Custom Quote for Your Treatment?
          </p>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Send us your medical reports — get exact pricing from 3 hospitals in 24 hours.
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-4 bg-[#EC4E00] hover:bg-[#d44400] text-white px-12 py-6 
                     rounded-full text-xl lg:text-2xl font-bold shadow-2xl hover:shadow-[#EC4E00]/50 
                     transition-all duration-300 hover:scale-110 active:scale-95"
          >
            Get Personalized Quote Free
            <Send size={32} />
          </a>
        </div>

      </div>
    </section>
  );
}