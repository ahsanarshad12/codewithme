import React from 'react';

const Stats = () => {
    return (
        <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 mt-6 sm:mt-8 md:mt-12">
            <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-400 mb-1 sm:mb-2">1+</div>
                <div className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider">Years of</div>
                <div className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider">Experience</div>
            </div>
            <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-400 mb-1 sm:mb-2">10+</div>
                <div className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider">Projects completed on</div>
                <div className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider">3 Countries</div>
            </div>
        </div>
    );
};

export default Stats;
