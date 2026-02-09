import React from 'react'
import Navigation from '../components/ui/Navigation'
import { DataPrivacy } from '../data/dataPrivacy'
import { useLanguage } from '../components/ui/LanguageContext'
import { textHeading1, textHeading2, textHeading3, textSemi } from '../data/uiStyles'

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      // Handle bold text: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={i} className={`block last:mb-0 ${!line ? 'min-h-[1.5em]' : ''}`}>
          {parts.map((part, j) => {
            if (part && part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <div className='flex flex-col min-h-screen bg-[#0c0c0c]'>
      <Navigation />

      <main className="flex-grow mx-auto w-full lg:max-w-[800px] px-6 pt-24 pb-16">
        <div className="flex flex-col gap-y-10">
          <div className="space-y-4">
            <h1 className={`${textHeading1} text-white uppercase tracking-tight`}>
              {DataPrivacy.title[language]}
            </h1>
            <div className={`text-neutral-300 text-[15px] text-justify leading-relaxed`}>
              {renderContent(DataPrivacy.introduction[language])}
            </div>
          </div>

          <div className="space-y-12">
            {DataPrivacy.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`${textHeading3} text-white uppercase tracking-wide`}>
                  {section.heading[language]}
                </h3>

                {section.items ? (
                  <div className="space-y-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="space-y-2">
                        <strong className="text-white font-semibold block">
                          {item.title[language]}
                        </strong>
                        <div className="text-neutral-300 text-[15px] text-justify leading-relaxed">
                          {renderContent(item.desc[language])}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-neutral-300 text-[15px] text-justify leading-relaxed space-y-1">
                    {renderContent(section.content[language])}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-12 mt-12 border-t border-white/10 text-neutral-500 text-sm space-y-2">
            <p>{DataPrivacy.footer.effectiveDate[language]}</p>
            <p>{DataPrivacy.footer.contact[language]}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy