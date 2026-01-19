import React, { useState } from 'react'
import Navigation from '../components/ui/Navigation'
import Footer from '../components/ui/Footer'
import { textHeading1, textHeading2, textRegular, textSemi } from '../data/uiStyles'
import TypingText from '../components/motion/TypingText'
import { DataHome } from '../data/dataHome'
import { useLanguage } from '../components/ui/LanguageContext'
import Button from '../components/ui/Button'
import CardTestimonial from '../components/ui/CardTestimonial'
import FeatureCarousel from '../components/ui/FeatureCarousel'
import CardBenefits from '../components/ui/CardBenefits'
import Accordion from '../components/ui/Accordion'
import CardFeature from '../components/ui/CardFeature'
import CardProblem from '../components/ui/CardProblem'


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
      <section className="flex flex-col md:flex-row justify-between mx-auto items-center w-full lg:max-w-[1080px] px-4 xl:px-0 pt-16 pb-8">
        <img src="/heroimg_mobile.png" alt="heroimg" className="w-[440px] md:hidden" />
        <div className="flex flex-col gap-y-12 w-full">

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
        <img src="/heroimg_desktop.png" alt="heroimg" className="h-[480px] hidden md:block" />
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-red-500/8 blur-3xl rounded-full pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section id="features" className='flex flex-col mx-auto items-start w-full lg:max-w-[1080px] px-4 xl:px-0 pt-4 pb-16 relative'>
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
      <section id="benefits" className="flex flex-col mx-auto gap-y-12 w-full lg:max-w-[1080px] px-4 xl:px-0 pt-4 pb-16 relative">
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
      <section id="faq" className="flex flex-col mx-auto items-center w-full lg:max-w-[1080px] px-4 xl:px-0 pt-4 pb-24 relative">
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
