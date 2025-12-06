import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const IMAGES = [
  { url: "https://picsum.photos/seed/school1/800/600", title: "Kegiatan Belajar Mengajar" },
  { url: "https://picsum.photos/seed/school2/800/600", title: "Upacara Bendera Senin" },
  { url: "https://picsum.photos/seed/school3/800/600", title: "Praktikum IPA di Lab" },
  { url: "https://picsum.photos/seed/school4/800/600", title: "Ekstrakurikuler Pramuka" },
  { url: "https://picsum.photos/seed/school5/800/600", title: "Perpustakaan Digital" },
  { url: "https://picsum.photos/seed/school6/800/600", title: "Pentas Seni Siswa" },
  { url: "https://picsum.photos/seed/school7/800/600", title: "Tim Robotik Sekolah" },
  { url: "https://picsum.photos/seed/school8/800/600", title: "Olahraga Bersama" },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);

  // Responsive settings
  useEffect(() => {
    const handleResize = () => {
      let newItemsPerScreen = 3;
      if (window.innerWidth < 640) {
        newItemsPerScreen = 1;
      } else if (window.innerWidth < 1024) {
        newItemsPerScreen = 2;
      } else {
        newItemsPerScreen = 3;
      }

      setItemsPerScreen(newItemsPerScreen);

      // Safety check: Clamp currentIndex when screen size changes to prevent empty spaces
      // If we switch from 1 item (maxIndex=7) to 3 items (maxIndex=5), and current is 7, we must shift back.
      setCurrentIndex((prevIndex) => {
        const maxIndex = IMAGES.length - newItemsPerScreen;
        return prevIndex > maxIndex ? maxIndex : prevIndex;
      });
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 > IMAGES.length - itemsPerScreen ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? IMAGES.length - itemsPerScreen : prev - 1
    );
  };

  const openLightbox = (img: {url: string, title: string}) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galeri Sekolah
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Momen-momen berharga dan aktivitas siswa-siswi SMP N 3 Maos.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Main Viewport */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerScreen)}%)` }}
            >
              {IMAGES.map((img, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 px-2 transition-all duration-300"
                  style={{ width: `${100 / itemsPerScreen}%` }}
                >
                  <div 
                    className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group/item shadow-lg"
                    onClick={() => openLightbox(img)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-white font-bold text-lg translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                        {img.title}
                      </span>
                      <div className="mt-2 text-school-secondary text-sm font-medium flex items-center gap-1 translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 delay-75">
                        <Maximize2 size={16} />
                        Lihat Detail
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 z-10 bg-white text-school-primary p-3 rounded-full shadow-lg hover:bg-school-primary hover:text-white transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100 disabled:opacity-30 translate-x-4 group-hover:translate-x-0"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 z-10 bg-white text-school-primary p-3 rounded-full shadow-lg hover:bg-school-primary hover:text-white transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.max(1, IMAGES.length - itemsPerScreen + 1) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-school-primary' : 'w-2 bg-gray-300 hover:bg-school-primary/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
          >
            <X size={32} />
          </button>
          
          <div 
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="w-auto h-auto max-h-[80vh] max-w-full rounded-lg shadow-2xl object-contain bg-gray-900"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold tracking-wide">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;