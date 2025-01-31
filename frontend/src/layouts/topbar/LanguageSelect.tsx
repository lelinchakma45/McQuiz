import React, { useState, useRef, useEffect } from 'react';

interface Language {
  id: number;
  code: string;
  lang: string;
  flag: string;
}

const languages: Language[] = [
  {
    id: 1,
    code: 'eng',
    lang: 'English',
    flag: 'twemoji:flag-united-kingdom',
  },
  {
    id: 2,
    code: 'ban',
    lang: 'বাংলা',
    flag: 'twemoji:flag-bangladesh',
  },
  {
    id: 3,
    code: 'zh',
    lang: '中文',
    flag: 'twemoji:flag-china',
  },
  {
    id: 4,
    code: 'tr',
    lang: 'Türkçe',
    flag: 'twemoji:flag-turkey',
  },
  {
    id: 5,
    code: 'nld',
    lang: 'Dutch',
    flag: 'twemoji:flag-netherlands',
  },
];

const LanguageSelect = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        <i className={`fi fi-${language.flag} text-2xl`}></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[230px] bg-white rounded-lg shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => handleLanguageSelect(lang)}
              className={`w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 transition-colors
                ${lang.id === language.id ? 'bg-gray-50' : ''}`}
            >
              {/* Flag Icon */}
              <i className={`fi fi-${lang.flag} text-2xl`}></i>
              
              {/* Language Name */}
              <span className="flex-1 text-left">
                {lang.lang}
              </span>
              
              {/* Language Code */}
              <span className="text-right text-gray-500">
                {lang.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;