import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Orang Tua Siswa Kelas VIII",
    content: "Saya sangat bangga menyekolahkan anak saya di sini. Perubahan karakternya sangat positif, menjadi lebih disiplin dan taat beribadah. Program Tahfidz-nya sangat membantu.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Siswa Kelas IX (Juara OSN Matematika)",
    content: "Fasilitas laboratorium dan perpustakaan digitalnya sangat lengkap. Guru-gurunya juga sangat mendukung hobi saya di bidang sains dan robotik hingga bisa juara lomba.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Rizky Pratama",
    role: "Alumni Angkatan 2023",
    content: "Pengalaman organisasi di OSIS SMP N 3 Maos sangat membentuk kepemimpinan saya. Bekal yang sangat berharga saat saya lanjut ke jenjang SMA.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-64 h-64 bg-school-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-school-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-school-primary uppercase tracking-wide">
            Kata Mereka
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Testimonial Orang Tua & Siswa
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Apa kata mereka tentang pengalaman belajar di SMP Negeri 3 Maos?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative group"
            >
              <div className="absolute top-6 right-6 text-school-secondary/20 group-hover:text-school-secondary/40 transition-colors">
                <Quote size={48} className="fill-current" />
              </div>

              <div className="flex items-center space-x-1 text-school-secondary mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                "{item.content}"
              </blockquote>

              <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                <img 
                  className="h-12 w-12 rounded-full object-cover border-2 border-school-primary/20"
                  src={item.image}
                  alt={item.name}
                />
                <div className="ml-4">
                  <div className="text-base font-bold text-gray-900 group-hover:text-school-primary transition-colors">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;