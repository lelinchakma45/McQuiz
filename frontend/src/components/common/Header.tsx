import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' }
];

const Header = () => {
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('EN');
    const location = useLocation();

    const handleLanguageSelect = (code: string) => {
        setSelectedLang(code);
        setIsLangMenuOpen(false);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <div>
            <div className="container container-xl mx-auto px-4">
                <div className="flex justify-between items-center min-h-[90px]">
                    {/* Logo */}
                    <div>
                        <h1 className="text-2xl font-bold">
                            <span className="text-green-600">L</span>OGO
                        </h1>
                    </div>

                    {/* Navigation and Actions */}
                    <div className="flex items-center gap-8">
                    <nav className="flex items-center gap-10 mr-4">
    {[
        { path: '/', label: 'Home' },
        { path: '/why-mcquiz', label: 'Why McQuiz' },
        { path: '/about', label: 'About us' },
        { path: '/contact', label: 'Contact us' }
    ].map((item) => (
        <div key={item.path}>
            <Link
                to={item.path}
                className={`relative text-gray-800 no-underline transition-colors duration-300 hover:text-blue-600 
                    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 
                    after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full
                    ${isActive(item.path) ? 'text-blue-600 font-bold after:w-full' : 'font-normal'}`}
            >
                {item.label}
            </Link>
        </div>
    ))}
</nav>

                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center gap-2 text-gray-600 px-4 py-2 focus:outline-none"
                            >
                                {selectedLang}
                                <i className="bi bi-chevron-down"></i>
                            </button>
                            {isLangMenuOpen && (
                                <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md py-1 min-w-[120px]">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageSelect(lang.code)}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                            {lang.name} ({lang.code})
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-8">
                            <Link
                                to=""
                                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 no-underline"
                            >
                                Login
                            </Link>
                            <Link
                                to=""
                                className="py-2 px-8 border border-gray-800 rounded-full text-gray-800 hover:text-blue-600 
                                    hover:border-blue-600 transition-all duration-300 no-underline"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;