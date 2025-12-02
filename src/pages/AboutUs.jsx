import { Award, Users, Globe, Clock, PhoneCall } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A4558] leading-tight">
            Healing Begins with Trust
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            15+ years helping patients from{" "}
            <span className="text-[#EC4E00] font-bold">80+ countries</span> get
            world-class treatment + luxury recovery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/about-team.jpg"
                alt="MediTour Medical Team"
                className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-6 right-6 bg-[#2256CF] text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4">
              <Award size={44} />
              <div>
                <div className="text-4xl font-black">15+</div>
                <div className="text-sm font-bold">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3A4558]">
              We Don’t Just Arrange Treatment —<br />
              <span className="text-[#EC4E00]">We Take Care of You</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              From your first message until you’re back home healthy, your
              personal coordinator is with you 24/7 — handling visas, flights,
              luxury hotels, translation, insurance, and daily check-ins.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black text-[#2256CF]">
                  50,000+
                </div>
                <div className="text-lg font-semibold text-gray-600 mt-2">
                  Happy Patients
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#EC4E00]">15+</div>
                <div className="text-lg font-semibold text-gray-600 mt-2">
                  Partner Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#2256CF]">24/7</div>
                <div className="text-lg font-semibold text-gray-600 mt-2">
                  Personal Support
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#EC4E00]">100%</div>
                <div className="text-lg font-semibold text-gray-600 mt-2">
                  Transparent Pricing
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a
                href="/contacts"
                className="flex items-center justify-center gap-3 bg-[#2256CF] hover:bg-[#1e4bb8] text-white px-10 py-5 rounded-full text-xl md:text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <PhoneCall size={28} />
                Get Free Consultation
              </a>

              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center bg-[#2256CF]/5 rounded-3xl py-12 px-8">
          <p className="text-2xl md:text-3xl font-bold text-[#3A4558]">
            JCI-Accredited Hospitals • Direct Insurance Billing • No Hidden Fees
          </p>
        </div>
      </div>
    </section>
  );
}
