import React from 'react';
import { UserCheck, Book, Award, Smile } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: "Siswa Aktif", value: "850+", icon: Smile },
  { label: "Guru Bersertifikasi", value: "45", icon: UserCheck },
  { label: "Mata Pelajaran", value: "12", icon: Book },
  { label: "Penghargaan", value: "120+", icon: Award },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-school-primary py-16 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 rounded-full bg-school-secondary/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="flex justify-center mb-4 text-school-secondary">
                <stat.icon size={40} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;