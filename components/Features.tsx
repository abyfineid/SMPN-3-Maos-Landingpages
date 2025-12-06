import React, { useEffect, useRef } from 'react';
import { BookOpen, Users, Trophy, Monitor, Heart, Globe } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Kurikulum Merdeka",
    description: "Pembelajaran berpusat pada siswa yang mendorong kreativitas dan berpikir kritis.",
    icon: BookOpen
  },
  {
    title: "Fasilitas Modern",
    description: "Lab komputer, perpustakaan digital, dan ruang kelas multimedia.",
    icon: Monitor
  },
  {
    title: "Ekstrakurikuler",
    description: "20+ pilihan ekskul untuk mengembangkan bakat non-akademik siswa.",
    icon: Users
  },
  {
    title: "Prestasi Unggul",
    description: "Juara berbagai kompetisi tingkat kabupaten hingga nasional.",
    icon: Trophy
  },
  {
    title: "Pembinaan Karakter",
    description: "Program religius dan penanaman budi pekerti luhur setiap pagi.",
    icon: Heart
  },
  {
    title: "Wawasan Global",
    description: "Program bahasa asing dan literasi digital untuk kesiapan masa depan.",
    icon: Globe
  }
];

const Features: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset the trigger point
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-school-primary uppercase tracking-wide">
            Program Unggulan
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mengapa Memilih SMP N 3 Maos?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Kami menyediakan lingkungan belajar yang kondusif dengan dukungan fasilitas terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-700 ease-out border border-gray-100 hover:-translate-y-1 opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-school-primary/5 rounded-full blur-2xl group-hover:bg-school-secondary/20 transition-colors duration-500"></div>
              
              <div className="inline-flex items-center justify-center p-3 bg-school-primary/10 text-school-primary rounded-xl mb-5 group-hover:bg-school-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;