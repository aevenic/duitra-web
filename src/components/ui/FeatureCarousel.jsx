import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const features = [
  {
    img: "/featureimg_1.png",
    title: { en: "Financial Management", id: "Manajemen Keuangan" },
    desc: { en: "Record balances, income, and expenses with automatic budget control per category, complete with recurring transactions to keep finances organized and under control each month.", id: "Catat saldo, pemasukan, dan pengeluaran dengan kontrol budget otomatis per kategori, lengkap dengan transaksi rutin agar keuangan tetap rapi dan terkontrol setiap bulan." }
  },
  {
    img: "/featureimg_2.png",
    title: { en: "Transaction History", id: "Riwayat Transaksi" },
    desc: { en: "Access transaction history from previous months to monitor financial progress and spending patterns over time.", id: "Akses riwayat transaksi dari bulan-bulan sebelumnya untuk memantau perkembangan dan pola keuangan dari waktu ke waktu." }
  },
  {
    img: "/featureimg_3.png",
    title: { en: "Flexible Categories", id: "Kategori Fleksibel" },
    desc: { en: "Customize income and expense categories based on your needs, making financial tracking more relevant to your lifestyle.", id: "Atur kategori pemasukan dan pengeluaran sesuai kebutuhan, sehingga pencatatan keuangan lebih relevan dengan gaya hidup." }
  },
  {
    img: "/featureimg_4.png",
    title: { en: "Analytics Dashboard", id: "Dashboard Analitik" },
    desc: { en: "Displays overall monthly and yearly spending, as well as per-category insights, to help understand patterns and evaluate financial performance.", id: "Menampilkan pengeluaran bulanan dan tahunan secara keseluruhan maupun per kategori untuk membantu memahami pola dan evaluasi keuangan." }
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



