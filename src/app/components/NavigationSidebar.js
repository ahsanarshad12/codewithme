import React from 'react';
import { Home, User, Briefcase, Layers, Share2, Grid, MessageSquare, Send, X, Instagram, Twitter, Dribbble, Github } from 'lucide-react';

const NavigationSidebar = ({ isOpen, onClose }) => {
    const navItems = [
        { icon: Home, label: 'Home' },
        { icon: User, label: 'About' },
        { icon: Briefcase, label: 'Resume' },
        { icon: Layers, label: 'Services' },
        { icon: Share2, label: 'Socials' },
        { icon: Grid, label: 'Projects' },
        { icon: MessageSquare, label: 'Testimonials' },
        { icon: Send, label: 'Contact' },
    ];

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed right-0 top-0 h-full w-64 sm:w-72 md:w-80 bg-neutral-900 border-l border-neutral-800 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4 sm:p-6 md:p-8">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                    >
                        <X size={20} />
                    </button>

                    {/* Navigation Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 mt-2 sm:mt-4">Navigation</h2>

                    {/* Navigation Items */}
                    <nav className="space-y-2">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={index}
                                    className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-neutral-400 hover:text-emerald-400 hover:bg-neutral-800 transition-all group text-sm sm:text-base"
                                >
                                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-emerald-400 transition-all flex-shrink-0">
                                        <Icon size={18} />
                                    </div>
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Social Links */}
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-800">
                        <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-3 sm:mb-4">Follow Me</h3>
                        <div className="flex gap-2 sm:gap-3">
                            <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all flex-shrink-0">
                                <Instagram size={18} />
                            </button>
                            <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all flex-shrink-0">
                                <Twitter size={18} />
                            </button>
                            <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all flex-shrink-0">
                                <Dribbble size={18} />
                            </button>
                            <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all flex-shrink-0">
                                <Github size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationSidebar;