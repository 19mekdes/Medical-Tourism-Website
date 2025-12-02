import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/images/hero-doctor.jpg')" }}>
      
      
      <div 
        className="absolute inset-0 bg-[#3A4558] transition-opacity duration-700"
        style={{ opacity: isHovered ? 0.5 : 0.75 }}
      />

      
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ 
          backgroundImage: "url('/images/hero-doctor.jpg')",
          transform: isHovered ? "scale(1.05)" : "scale(1)"
        }}
      />

      
      <div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight
                       drop-shadow-2xl animate-fade-in-down">
          Medical Care<br />
          <span className="text-[#EC4E00]">Without Borders</span>
        </h1>

        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 max-w-4xl mx-auto
                      font-light tracking-wide animate-fade-in-up animation-delay-300">
          World-class treatment combined with luxury recovery in top destinations — 
          fully supported from airport to airport
        </p>

        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-in-up animation-delay-600">
          <button 
            className="btn-primary text-xl lg:text-2xl px-10 lg:px-14 py-5 lg:py-6 
                       rounded-xl font-bold shadow-2xl transform transition-all duration-300
                       hover:scale-105 hover:shadow-[#2256CF]/50 hover:bg-[#1e4bb8] 
                       active:scale-95"
          >
            Get Free Consultation
          </button>

          <button 
            className="btn-accent text-xl lg:text-2xl px-10 lg:px-14 py-5 lg:py-6 
                       rounded-xl font-bold shadow-2xl border-2 border-[#EC4E00] bg-transparent text-[#EC4E00]
                       transform transition-all duration-300 backdrop-blur-sm
                       hover:bg-[#EC4E00] hover:text-white hover:scale-105 hover:shadow-[#EC4E00]/50
                       active:scale-95"
          >
            View Destinations
          </button>
        </div>

        
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm md:text-base animate-fade-in animation-delay-900">
          <div className="flex items-center gap-2">
            50,000+ Patients Treated
          </div>
          <div className="flex items-center gap-2">
            15 Countries
          </div>
          <div className="flex items-center gap-2">
            24/7 Support
          </div>
        </div>
      </div>

      
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-900 { animation-delay: 900ms; }
      `}</style>
    </section>
  );
}