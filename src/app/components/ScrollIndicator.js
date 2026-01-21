// components/ScrollIndicator.jsx
import React from 'react';

const ScrollIndicator = () => {
    return (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mt-6 sm:mt-8 md:mt-12">
            <div className="absolute inset-0 rounded-full border border-neutral-700 flex items-center justify-center">
                {/* Rotating SVG Circle with Text */}
                <svg
                    className="absolute w-full h-full animate-spin-slow"
                    viewBox="0 0 100 100"
                    style={{ animationDuration: '10s' }}
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 50,50 m 0,-40 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80"
                        />
                    </defs>
                    <text className="text-[8px] fill-neutral-400 uppercase tracking-[0.2em] font-medium">
                        <textPath href="#circlePath" startOffset="0%">
                            MY PROJECTS • MY PROJECTS • MY PROJECTS •
                        </textPath>
                    </text>
                </svg>

                {/* Center Icon - Bouncing Arrow */}
                <div className="relative z-10 text-emerald-400 animate-bounce">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="7 13 12 18 17 13"></polyline>
                        <polyline points="7 7 12 12 17 7"></polyline>
                    </svg>
                </div>
            </div>

            {/* Custom CSS for slow rotation */}
            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default ScrollIndicator;