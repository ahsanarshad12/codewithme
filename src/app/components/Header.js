'use client';
import React, { useState, useEffect } from 'react';
import { Settings, Home, Menu } from 'lucide-react';
import SettingsSidebar from './SettingsSidebar';

const Header = ({ onMenuClick }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [settingsOpen, setSettingsOpen] = useState(false);

    const sections = [
        { id: 'home', label: 'INTRODUCE' },
        { id: 'about', label: 'ABOUT' },
        { id: 'resume', label: 'RESUME' },
        { id: 'services', label: 'SERVICES' },
        { id: 'socials', label: 'SOCIALS' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'testimonials', label: 'TESTIMONIALS' },
        { id: 'contact', label: 'CONTACT' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(section => ({
                id: section.id,
                element: document.getElementById(section.id)
            }));

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const { id, element } = sectionElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentSection = sections.find(s => s.id === activeSection);

    return (
        <>
            {/* Settings Icon */}
            <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-emerald-400 hover:border-emerald-400 transition-all z-30"
            >
                <Settings size={20} />
            </button>

            <SettingsSidebar isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />

            {/* Dynamic Section Button */}
            {/* <button className="fixed top-8 left-1/3  px-6 py-2 rounded-full border border-neutral-800 text-neutral-400 text-sm flex items-center gap-2 hover:border-emerald-400 hover:text-emerald-400 transition-all z-30">
                <Home size={16} />
                {currentSection?.label || 'INTRODUCE'}
            </button> */}

            {/* Menu Button */}
            <button
                onClick={onMenuClick}
                className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all z-30"
            >
                <Menu size={20} />
            </button>
        </>
    );
};

export default Header;