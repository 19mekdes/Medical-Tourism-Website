// src/pages/Contacts.jsx
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add API call to send form data (e.g., to EmailJS or your backend)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A4558] mb-6 leading-tight">
            Get in Touch with <span className="text-[#2256CF]">MediTour</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your medical journey? Contact us for a free consultation, available 24/7 in your language.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* Left: Image & Contact Info */}
          <div className="space-y-8">
            {/* Large Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/contact-clinic.jpg"
                alt="MediTour Clinic"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A4558]/50 to-transparent" />
              <p className="absolute bottom-6 left-6 text-white text-lg md:text-xl font-semibold">
                Our global offices welcome you
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-[#2256CF] mb-4">Contact Details</h3>
              <div className="flex items-center gap-4 text-gray-700 hover:text-[#2256CF] transition-colors">
                <Phone size={24} className="text-[#EC4E00]" />
                <span>+1 (555) 123-4567 (US) | +90 212 555 1234 (Turkey)</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 hover:text-[#2256CF] transition-colors">
                <Mail size={24} className="text-[#EC4E00]" />
                <span>info@meditour.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 hover:text-[#2256CF] transition-colors">
                <MapPin size={24} className="text-[#EC4E00]" />
                <span>Istanbul, Bangkok, Delhi, Dubai</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 hover:text-[#2256CF] transition-colors">
                <Clock size={24} className="text-[#EC4E00]" />
                <span>24/7 Multilingual Support</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 hover:text-[#2256CF] transition-colors">
                <Globe size={24} className="text-[#EC4E00]" />
                <span>www.meditour.com</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2256CF] mb-8">
              Request Your Free Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2256CF] focus:ring-2 focus:ring-[#2256CF]/20 outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2256CF] focus:ring-2 focus:ring-[#2256CF]/20 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2256CF] focus:ring-2 focus:ring-[#2256CF]/20 outline-none transition-all duration-300"
                  placeholder="+1 555 123 4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2256CF] focus:ring-2 focus:ring-[#2256CF]/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your medical needs or questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#EC4E00] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-[#EC4E00]/50 hover:bg-[#d44400] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#3A4558]">
            Trusted by patients from <span className="text-[#EC4E00]">80+ countries</span>
          </p>
          <p className="mt-4 text-lg text-gray-600">
            JCI-accredited hospitals • Full insurance support • Transparent pricing
          </p>
        </div>
      </div>
    </section>
  );
}