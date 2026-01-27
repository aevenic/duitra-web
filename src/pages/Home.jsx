import React, { useState } from 'react'
import Navigation from '../components/ui/Navigation'
import Footer from '../components/ui/Footer'
import { textHeading1, textHeading2, textRegular, textSemi } from '../data/uiStyles'
import TypingText from '../components/motion/TypingText'
import HalftoneGlow from '../components/motion/HalftoneGlow'
import { DataHome } from '../data/dataHome'
import { useLanguage } from '../components/ui/LanguageContext'
import Button from '../components/ui/Button'
import CardTestimonial from '../components/ui/CardTestimonial'
import FeatureCarousel from '../components/ui/FeatureCarousel'
import CardBenefits from '../components/ui/CardBenefits'
import Accordion from '../components/ui/Accordion'
import CardFeature from '../components/ui/CardFeature'
import CardProblem from '../components/ui/CardProblem'
import Savings from '../components/ui/ornaments/Savings'
import Budget from '../components/ui/ornaments/Budget'
import Spending from '../components/ui/ornaments/Spending'
import Transactions from '../components/ui/ornaments/Transactions'


const Home = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = DataHome.testimonialSection.testimonials;
  const column1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const column2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
  const column3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

  const words = {
    en: ["Without Stress.", "Without Guessing."],
    id: ["Tanpa Stres.", "Tanpa Menghitung."]
  };

  const benefits = DataHome.benefitsSection;

  return (
    <div className='flex flex-col w-full overflow-x-hidden'>
      <Navigation />
      {/* Hero Section */}

      <section className="flex flex-col md:flex-row justify-between mx-auto items-center w-full lg:max-w-[1080px] pt-16 pb-8 relative overflow-x-none">
        <style>
          {`
            @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
            @keyframes float-medium { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } }
            @keyframes pulse-glow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
            @keyframes pulse-radial { 0%, 100% { mask-size: 80%; -webkit-mask-size: 80%; opacity: 0.5; } 50% { mask-size: 110%; -webkit-mask-size: 110%; opacity: 0.7; } }
            `}
        </style>

        <div className="relative md:hidden shrink-0 w-full flex justify-center z-10 overflow-hidden">
          {/* Main Image - z-10 */}
          <img src="/heroimg_mobile.webp" alt="heroimg" className="w-[440px] relative z-10 mx-auto" />
          <div className="absolute bottom-0 -left-32 -right-32 h-full bg-gradient-to-t from-[3%] from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent z-15 pointer-events-none"></div>
          <HalftoneGlow color="rgba(168, 85, 247, 0.5)" className="bottom-1/4 -right-28 w-[440px] h-[360px]" animation="pulse-radial 4s infinite" />
          <HalftoneGlow color="rgba(59, 130, 246, 0.5)" className="top-16 -left-40 w-[440px] h-[360px]" animation="pulse-radial 4s infinite" />

          {/* Mobile Ornaments - Front (z-30) */}
          <div className="absolute top-12 left-8 z-30" style={{ animation: 'float-slow 6s ease-in-out infinite' }}>
            <Savings />
          </div>
          <div className="absolute bottom-8 right-8 z-30" style={{ animation: 'float-medium 5s ease-in-out infinite 0.5s' }}>
            <Budget />
          </div>
          <div className="absolute top-36 right-8 z-30" style={{ animation: 'float-medium 5s ease-in-out infinite 1s' }}>
            <Spending />
          </div>
          <div className="absolute bottom-24 left-12 z-30" style={{ animation: 'float-slow 8s ease-in-out infinite 2s' }}>
            <Transactions />
          </div>
        </div>

        <div className="flex flex-col gap-y-12 w-full relative z-20 px-4 xl:px-0">
          <div className="flex flex-col gap-y-4">
            <div className={`${textHeading1} max-w-[360px] md:max-w-full leading-11`}>
              {language === "en" ? (
                <div>Control your money
                  <div className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent h-[42px]">
                    <TypingText words={words[language] || words.en} />
                  </div>
                </div>
              ) : (
                <div>Control uangmu
                  <div className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent h-[42px]">
                    <TypingText words={words[language] || words.id} />
                  </div>
                </div>
              )}
            </div>
            <div className={`max-w-[560px] ${textSemi} pr-4`}>
              {DataHome.heroSection.desc[language]}
            </div>
            <div className="flex gap-x-2 pt-2">
              {DataHome.heroSection.cta.map((c, index) => (
                <Button key={index} label={c[language]} width="w-fit" />
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-x-8 lg:gap-x-16 pt-1 pb-8">
            {DataHome.indicatorSection.map((item, index) => (
              <div key={index}>
                <div className={textHeading2}>{item.indicator}</div>
                <div className={`${textSemi} text-[13px] lg:text-[14px] font-medium`}>
                  {item.desc[language]}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="relative hidden md:block shrink-0 z-20">
          {/* Main Image - z-10 */}
          <img src="/heroimg_desktop.webp" alt="heroimg" className="h-[480px] relative z-10" />
          <div className="absolute bottom-0 -left-32 -right-32 h-full bg-gradient-to-t from-[3%] from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent z-15 pointer-events-none"></div>
          <HalftoneGlow color="rgba(59, 130, 246, 0.5)" className="top-24 -left-40 w-[440px] h-[360px]" animation="pulse-radial 4s infinite" />
          <HalftoneGlow color="rgba(168, 85, 247, 0.5)" className="bottom-1/4 -right-28 w-[440px] h-[360px]" animation="pulse-radial 5s infinite" />

          {/* Desktop Ornaments - Front (z-30) */}
          <div className="absolute top-12 -left-4 z-30" style={{ animation: 'float-slow 6s ease-in-out infinite' }}>
            <Savings />
          </div>
          <div className="absolute bottom-24 right-2 z-30" style={{ animation: 'float-medium 5s ease-in-out infinite 0.5s' }}>
            <Budget />
          </div>
          <div className="absolute top-36 -right-2 z-30" style={{ animation: 'float-medium 5s ease-in-out infinite 1s' }}>
            <Spending />
          </div>
          <div className="absolute bottom-40 -left-8 z-30" style={{ animation: 'float-slow 8s ease-in-out infinite 2s' }}>
            <Transactions />
          </div>
        </div>

      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="w-full bg-neutral-900">
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
          <div className="mx-auto lg:max-w-[1080px] px-4 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">

              {/* Column 1 - Moving down */}
              <div className="animate-scroll-down">
                {column1.map((testimonial, idx) => (
                  <CardTestimonial key={idx} testimonial={testimonial} />
                ))}
              </div>

              {/* Column 2 - Moving up */}
              <div className="animate-scroll-up">
                {column2.map((testimonial, idx) => (
                  <CardTestimonial key={idx} testimonial={testimonial} />
                ))}
              </div>

              {/* Column 3 - Moving down */}
              <div className="animate-scroll-down hidden md:block">
                {column3.map((testimonial, idx) => (
                  <CardTestimonial key={idx} testimonial={testimonial} />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="flex flex-col mx-auto items-center w-full lg:max-w-[1080px] px-4 xl:px-0 pt-24 pb-24 relative">
        <div className="flex flex-col items-center text-center gap-y-3 mb-16 relative z-10">
          <h2 className={`${textHeading1} text-white leading-tight`}>
            {DataHome.problemSection.title[language]}
          </h2>
          <p className={`${textSemi}`}>
            {DataHome.problemSection.hook[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-16 relative z-10">
          {DataHome.problemSection.painPoints.map((point, index) => (
            <CardProblem key={index} text={point[language]} index={index} />
          ))}
        </div>

        <HalftoneGlow color="rgba(239, 68, 68, 0.2)" className="top-40 -right-28 w-[440px] h-[360px]" animation="pulse-radial 4s infinite" />
        <HalftoneGlow color="rgba(239, 68, 68, 0.2)" className="bottom-20 -left-28 w-[440px] h-[360px]" animation="pulse-radial 4s infinite" />
      </section>

      {/* Features Section */}
      <section id="features" className='flex flex-col mx-auto items-start w-full lg:max-w-[1080px] px-4 xl:px-0 pt-4 pb-24 relative'>
        <div className="flex w-full flex-col items-center text-center gap-y-3 mb-4 relative z-10">
          <h2 className={`${textHeading1} text-white leading-tight`}>
            {DataHome.featuresSection.title[language]}
          </h2>
          <p className={`${textSemi}`}>
            {DataHome.featuresSection.desc[language]}
          </p>
        </div>
        <FeatureCarousel
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          features={DataHome.featuresSection.features}
        />
        <CardFeature
          features={DataHome.featuresSection.features}
          activeIndex={activeIndex}
          language={language}
        />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="flex flex-col mx-auto gap-y-12 w-full lg:max-w-[1080px] px-4 xl:px-0 py-16 relative">
        <div className={`${textHeading1} text-white text-center`}>
          {DataHome.benefitsSection.title[language]}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DataHome.benefitsSection.benefits.map((benefit, index) => (
            <CardBenefits key={index} title={benefit.title[language]} description={benefit.desc[language]} index={index} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="flex flex-col mx-auto items-center w-full lg:max-w-[1080px] px-4 xl:px-0 pt-16 pb-24 relative">
        <div className="flex flex-col gap-y-12 w-full">
          <div className={`${textHeading1} text-white text-center`}>
            {DataHome.faqSection.title[language]}
          </div>
          <Accordion
            items={DataHome.faqSection.faqs.map(faq => ({
              question: faq.question[language],
              answer: faq.answer[language]
            }))}
          />
        </div>
      </section>

      {/* Download Section */}
      <Footer />
    </div>
  )
}

export default Home
