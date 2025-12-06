import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop")',
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-school-primary/95 to-school-accent/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-school-secondary/20 border border-school-secondary/40 backdrop-blur-sm">
          <span className="text-school-secondary font-semibold text-sm uppercase tracking-wider">
            Penerimaan Siswa Baru 2025 Dibuka
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Membangun Generasi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-secondary to-yellow-200">
            Cerdas & Berkarakter
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          SMP Negeri 3 Maos berkomitmen mencetak lulusan unggul dalam prestasi akademik, 
          cakap teknologi, dan berakhlak mulia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-school-secondary hover:bg-amber-500 text-blue-900 font-bold rounded-full transition-all shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2"
          >
            Daftar Sekarang
            <ArrowRight size={20} />
          </a>
          <a 
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold rounded-full transition-all"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/70" size={32} />
      </div>
    </section>
  );
};

export default Hero;