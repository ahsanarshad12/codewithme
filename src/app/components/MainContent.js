import React from 'react';
import ScrollIndicator from './ScrollIndicator';
import Stats from './Stats';

const MainContent = () => {
    return (
        <div className="flex-1">
            <div className="mb-8">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    INTRODUCTION
                </button>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8">
                Say Hi from <span className="text-emerald-400">AhsanArshad</span>,<br />
                Graphic Designer<br />
                and FullStack Developer
            </h1>

            <p className="text-neutral-400 text-base sm:text-lg md:text-lg mb-6 md:mb-8">
                I design and code beautifully simple things and I love what I do.<br />
                Just simple like that!
            </p>

            <ScrollIndicator />

            <Stats />
        </div>
    );
};

export default MainContent;