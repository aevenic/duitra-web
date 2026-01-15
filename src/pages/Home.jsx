import React, { useState } from 'react'
import Navigation from '../components/ui/Navigation'
import Footer from '../components/ui/Footer'
import { textHeading1, textHeading2, textRegular, textSemi } from '../data/uiStyles'
import TypingText from '../components/motion/TypingText'
import { DataHome } from '../data/dataHome'
import { useLanguage } from '../components/ui/LanguageContext'
import Button from '../components/ui/Button'
import CardTestimonial from '../components/ui/CardTestimonial'
import FeatureCarousel, { features } from '../components/ui/FeatureCarousel'
import CardBenefits from '../components/ui/CardBenefits'
import Accordion from '../components/ui/Accordion'
import CardFeature from '../components/ui/CardFeature'


const Home = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = DataHome.testimonialSection.testimonials;
  const column1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const column2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
  const column3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

  const words = {
    en: ["Scale Up", "Digitalize"],
    id: ["Kembangkan", "Digitalisasi"]
  };

  const benefits = DataHome.benefitsSection;

  return (
    <div className='flex flex-col w-full overflow-x-hidden'>
      <Navigation />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between mx-auto items-center w-full lg:max-w-[1080px] px-4 xl:px-0 pt-16">
        <img src="/heroimg_mobile.png" alt="heroimg" className="w-[440px] md:hidden" />
        <div className="flex flex-col gap-y-12 w-full">

          <div className="flex flex-col gap-y-4">
            <div className={`${textHeading1} max-w-[360px] md:max-w-full leading-11`}>
              {language === "en" ? (
                <>Want to <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  <TypingText words={words[language] || words.en} />
                </span>
                  <span className="block">your business?</span></>
              ) : (
                <>Ingin <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  <TypingText words={words[language] || words.id} />
                </span>
                  <span className="block">bisnis kamu?</span></>
              )}
            </div>
            <div className={`text-justify max-w-[560px] ${textSemi} pr-4`}>
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
        <div className="relative h-[540px] overflow-hidden">
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
      {/* Features Section */}
      <section id="features" className='flex flex-col mx-auto items-start w-full lg:max-w-[1080px] px-4 xl:px-0 pt-4 pb-16 relative'>
        <FeatureCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <CardFeature features={features} activeIndex={activeIndex} language={language} />
      </section>


      {/* Benefits Section */}
      <section id="benefits" className="flex flex-col mx-auto gap-y-12 w-full lg:max-w-[1080px] px-4 xl:px-0 pt-4 pb-16 relative">
        <div className={`${textHeading1} text-white text-center`}>
          {DataHome.benefitsSection.title[language]}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
