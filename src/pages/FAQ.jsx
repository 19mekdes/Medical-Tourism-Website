// src/pages/FAQ.jsx
import { useState } from "react";
import { ChevronDown, HeartHandshake, Shield, Clock, Globe, Plane, Users, CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "Do you accept international insurance?",
    answer: "Yes! We have direct billing agreements with major international insurers (Cigna, Allianz, Bupa, etc.). You pay nothing upfront — we handle all paperwork.",
    icon: Shield,
  },
  {
    question: "How long will I need to stay abroad?",
    answer: "Most patients stay 10–21 days total: 3–7 days for treatment + 7–14 days luxury recovery. We customize based on your procedure and doctor’s recommendation.",
    icon: Clock,
  },
  {
    question: "Is it safe to have surgery abroad?",
    answer: "Absolutely. We only partner with JCI-accredited hospitals — the same gold standard as top U.S. and European clinics. Many of our doctors trained in the USA, UK, or Germany.",
    icon: CheckCircle2,
  },
  {
    question: "Will someone help me with language and logistics?",
    answer: "Yes! You get a personal medical coordinator who speaks your language 24/7. They handle visas, airport pickup, translation during appointments, hotel check-in, and daily check-ins.",
    icon: Users,
  },
  {
    question: "Can my family or companion travel with me?",
    answer: "Of course! Your companion stays free in the same hospital room and hotel. We also arrange their flights, meals, and sightseeing tours during your recovery.",
    icon: HeartHandshake,
  },
  {
    question: "What if I need follow-up care back home?",
    answer: "You receive a full digital medical report in English + direct contact with your surgeon. We coordinate virtual follow-ups and send any needed medication to your country.",
    icon: Globe,
  },
  {
    question: "Are there any hidden fees?",
    answer: "Never. Your quote includes everything: treatment, hospital fees, anesthesia, accommodation, transfers, coordinator, and translation. No surprises.",
    icon: Shield,
  },
  {
    question: "How quickly can I get a treatment plan and price?",
    answer: "Within 24–48 hours! Send us your medical reports or describe your condition — we’ll get you exact pricing from 3 top hospitals.",
    icon: Plane,
  },
  {
    question: "What treatments do you specialize in?",
    answer: "Everything from hair transplant, dental implants, IVF, orthopedic surgery, cancer treatment, to full health check-ups and cosmetic procedures.",
    icon: HeartHandshake,
  },
  {
    question: "What happens if I need to cancel or reschedule?",
    answer: "Flexible policy: full refund if canceled 30+ days before arrival. We also help reschedule at no extra cost.",
    icon: CheckCircle2,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A4558] mb-6">
            Frequently Asked<br />
            <span className="text-[#2256CF]">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about medical tourism with MediTour. 
            Still have questions? We’re here 24/7.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden
                  border-2 ${isOpen ? "border-[#2256CF]" : "border-transparent"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p:4 md:p-8 flex items-center justify-between text-left group 
                           hover:bg-[#2256CF]/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-xl transition-all duration-500
                      ${isOpen ? "bg-[#2256CF] text-white scale-110" : "bg-gray-100 text-[#2256CF] group-hover:bg-[#2256CF]/10"}`}>
                      <Icon size={28} />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300
                      ${isOpen ? "text-[#2256CF]" : "text-[#3A4558] group-hover:text-[#2256CF]"}`}>
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    size={32}
                    className={`text-[#2256CF] transition-transform duration-500 
                      ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-8 pb-8 md:px-14 md:pb-10 pt-4">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-[#2256CF]/5 rounded-3xl p-10 lg:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A4558] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our medical coordinators are available 24/7 in English, Spanish, Arabic, Russian & more.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contacts"
              className="inline-flex items-center gap-3 bg-[#2256CF] hover:bg-[#1a47a8] text-white px-10 py-5 
                       rounded-full text-xl font-bold shadow-xl hover:shadow-[#2256CF]/50 
                       transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
              <HeartHandshake size={28} />
            </a>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 
                       rounded-full text-xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}