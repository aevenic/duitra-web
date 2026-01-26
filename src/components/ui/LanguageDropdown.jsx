import { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  ];

  const currentLang = languages.find((lang) => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 text-white/90 hover:text-white cursor-pointer group"
      >
        <Globe size={16} className="text-white/60 group-hover:text-blue-400 transition-colors" />
        <span className="text-[14px] font-medium uppercase tracking-wide">{language}</span>
        <ChevronDown
          size={14}
          className={`text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-44 origin-top-right rounded-xl bg-[#161616]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden transition-all duration-300 z-50 ${isOpen
            ? 'opacity-100 scale-100 translate-y-0 visible'
            : 'opacity-0 scale-95 -translate-y-2 invisible'
          }`}
      >
        <div className="p-1.5 flex flex-col gap-y-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg transition-all duration-200 group cursor-pointer ${language === lang.code
                  ? 'bg-blue-600/10 text-blue-400'
                  : 'hover:bg-white/5 text-white/70 hover:text-white'
                }`}
            >
              <div className="flex items-center gap-x-3">
                <span className="text-lg leading-none">{lang.flag}</span>
                <span className="text-[14px] font-medium">{lang.label}</span>
              </div>
              {language === lang.code && (
                <Check size={14} className="text-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
