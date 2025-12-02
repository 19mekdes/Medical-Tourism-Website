// src/components/Footer.jsx
import { Facebook, Instagram, Mail, Phone, MapPin, Globe, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3A4558] text-white py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand & Tagline */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <h2 className="text-3xl font-extrabold text-[#2256CF]">
                MediTour<span className="text-[#EC4E00] text-4xl">.</span>
              </h2>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              World-Class Treatment • Luxury Recovery • Personal Care
            </p>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <HeartHandshake size={18} className="text-[#EC4E00]" />
              <span>50,000+ Patients Helped Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#EC4E00]">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Destinations", "Pricing", "FAQ", "Contacts"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#EC4E00] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#EC4E00] transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#EC4E00]">Contact Us</h3>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-3 hover:text-[#EC4E00] transition-colors">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#EC4E00] transition-colors">
                <Mail size={20} />
                <span>info@meditour.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#EC4E00] transition-colors">
                <Globe size={20} />
                <span>www.meditour.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#EC4E00] transition-colors">
                <MapPin size={20} />
                <span>Istanbul • Bangkok • Delhi</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#EC4E00]">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center 
                         hover:bg-[#2256CF] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center 
                         hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center 
                         hover:bg-green-500 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                WhatsApp
              </a>
              <a
                href="https://t.Me/meditour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center 
                         hover:bg-[#229ED9] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                Telegram
              </a>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Available 24/7 in your language
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-70">
            © 2025 MediTour Medical Tourism. All rights reserved. | 
            <span className="text-[#EC4E00] ml-2">Made with love for global health</span>
          </p>
        </div>
      </div>
    </footer>
  );
}