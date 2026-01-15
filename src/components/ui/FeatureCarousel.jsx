import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const features = [
  {
    img: "/featureimg_1.png",
    title: { en: "Smart Tracking", id: "Pelacakan Cerdas" },
    desc: { en: "Monitor your expenses effortlessly with our intuitive interface and automated categorization.", id: "Pantau pengeluaran Anda dengan mudah melalui antarmuka intuitif dan kategorisasi otomatis." }
  },
  {
    img: "/featureimg_2.png",
    title: { en: "Financial Insights", id: "Wawasan Keuangan" },
    desc: { en: "Get detailed reports and analytics to understand your spending patterns and save more.", id: "Dapatkan laporan dan analitik terperinci untuk memahami pola pengeluaran Anda dan menabung lebih banyak." }
  },
  {
    img: "/featureimg_3.png",
    title: { en: "Budget Management", id: "Manajemen Anggaran" },
    desc: { en: "Set monthly budgets for different categories and stay on track with real-time notifications.", id: "Tetapkan anggaran bulanan untuk berbagai kategori dan tetap terkendali dengan notifikasi waktu nyata." }
  },
  {
    img: "/featureimg_4.png",
    title: { en: "Cloud Sync", id: "Sinkronisasi Cloud" },
    desc: { en: "Access your financial data across all your devices securely with end-to-end encryption.", id: "Akses data keuangan Anda di semua perangkat secara aman dengan enkripsi ujung-ke-ujung." }
  }
];

const FeatureCarousel = ({ activeIndex, setActiveIndex }) => {
  const { language } = useLanguage();

  const nextSlide = () => {
    if (activeIndex < features.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="relative w-full pt-12 lg:pb-12">
      <div className="flex flex-col md:flex-row items-center gap-12 relative h-full">
        {/* Carousel Side (Left - Aligned) */}
        <div className="relative w-full md:w-[60%] flex flex-col justify-center items-center h-[540px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              const distance = index - activeIndex;

              // Determine position and visibility classes based on distance from activeIndex
              let positionClass = "";
              let zIndex = "z-10";
              let scale = "scale-80";
              let opacity = "opacity-100";

              if (distance === 0) {
                positionClass = "translate-x-0";
                zIndex = "z-20";
                scale = "scale-100";
              } else if (distance === -1) {
                positionClass = "-translate-x-32 md:-translate-x-48";
              } else if (distance === 1) {
                positionClass = "translate-x-32 md:translate-x-48";
              } else if (distance < -1) {
                positionClass = "-translate-x-full";
                opacity = "opacity-0";
                zIndex = "z-0";
              } else if (distance > 1) {
                positionClass = "translate-x-full";
                opacity = "opacity-0";
                zIndex = "z-0";
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out transform flex-shrink-0 overflow-hidden rounded-3xl
                      ${positionClass} ${zIndex} ${scale} ${opacity}
                  `}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative h-[400px] md:h-[480px] w-auto">
                    <img
                      src={feature.img}
                      alt={feature.title[language]}
                      className="h-full w-auto block object-cover"
                    />
                    {/* Dark Overlay for inactive items */}
                    <div className={`absolute inset-0 bg-[#0c0c0c] transition-opacity duration-700 pointer-events-none rounded-3xl
                        ${isActive ? 'opacity-0' : 'opacity-70'}
                    `} />
                  </div>
                </div>

              );
            })}
          </div>


          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex items-center justify-between pointer-events-none z-30">
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              disabled={activeIndex === 0}
              className={`bg-white/10 cursor-pointer backdrop-blur-md p-3 rounded-full transition-all text-white border border-white/10 pointer-events-auto xl:-translate-x-1/2 ${activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/20'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              disabled={activeIndex === features.length - 1}
              className={`bg-white/10 cursor-pointer backdrop-blur-md p-3 rounded-full transition-all text-white border border-white/10 pointer-events-auto xl:translate-x-1/2 ${activeIndex === features.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/20'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;



