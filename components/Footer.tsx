import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-school-accent text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <GraduationCap size={32} />
              <span className="text-2xl font-bold">SMP N 3 MAOS</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Membentuk karakter, mengukir prestasi. Sekolah menengah pertama unggulan di Kabupaten Cilacap.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Kunjungi Facebook Kami" className="hover:text-school-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" aria-label="Kunjungi Instagram Kami" className="hover:text-school-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="Kunjungi Youtube Kami" className="hover:text-school-secondary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-school-secondary shrink-0" />
                <span className="text-sm">Jl. Raya Maos No. 123, Kecamatan Maos, Kabupaten Cilacap, Jawa Tengah</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-school-secondary shrink-0" />
                <span className="text-sm">(0282) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-school-secondary shrink-0" />
                <span className="text-sm">info@smpn3maos.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Tautan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://smpn3maos.sch.id" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:pl-1 transition-all">Profil Sekolah</a></li>
              <li><a href="https://ppdb.smpn3maos.sch.id" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:pl-1 transition-all">PPDB Online</a></li>
              <li><a href="https://lms.smpn3maos.sch.id" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:pl-1 transition-all">E-Learning</a></li>
              <li><a href="https://erapor.spentimas.my.id" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:pl-1 transition-all">Erapor</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Tenaga Pendidik</a></li>
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Jam Operasional</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Senin - Kamis</span>
                <span className="text-white">07.00 - 15.30</span>
              </li>
              <li className="flex justify-between">
                <span>Jumat</span>
                <span className="text-white">07.00 - 11.30</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span className="text-school-secondary">Tutup</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SMP Negeri 3 Maos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;