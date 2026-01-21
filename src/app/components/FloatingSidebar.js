import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Layers, Share2, Grid, MessageSquare, Send } from 'lucide-react';

const FloatingSidebar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { icon: Home, label: 'Home', id: 'home' },
        { icon: User, label: 'About', id: 'about' },
        { icon: Briefcase, label: 'Resume', id: 'resume' },
        { icon: Layers, label: 'Services', id: 'services' },
        { icon: Share2, label: 'Socials', id: 'socials' },
        { icon: Grid, label: 'Projects', id: 'projects' },
        { icon: MessageSquare, label: 'Testimonials', id: 'testimonials' },
        { icon: Send, label: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex">
            <div className="bg-neutral-900/30 backdrop-blur-md border border-neutral-700/50 rounded-full p-2 sm:p-3 flex flex-col gap-1 sm:gap-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center transition-all relative group ${isActive
                                ? 'bg-emerald-400 text-neutral-900'
                                : 'text-neutral-400 hover:text-emerald-400 hover:bg-neutral-800/50'
                                }`}
                            title={item.label}
                        >
                            <Icon size={18} />

                            {/* Tooltip */}
                            <span className="absolute right-full mr-3 sm:mr-4 px-3 sm:px-4 py-2 bg-neutral-900 text-white text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-neutral-700">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default FloatingSidebar;