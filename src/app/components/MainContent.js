import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
import Stats from './Stats';

const MainContent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            ref={ref}
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className="mb-8" variants={itemVariants}>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    INTRODUCTION
                </button>
            </motion.div>
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8"
                variants={itemVariants}
            >
                Say Hi from <span className="text-emerald-400">AhsanArshad</span>,<br />
                Graphic Designer<br />
                and FullStack Developer
            </motion.h1>

            <motion.p
                className="text-neutral-400 text-base sm:text-lg md:text-lg mb-6 md:mb-8"
                variants={itemVariants}
            >
                I design and code beautifully simple things and I love what I do.<br />
                Just simple like that!
            </motion.p>

            <motion.div variants={itemVariants}>
                <ScrollIndicator />
            </motion.div>

            <motion.div variants={itemVariants}>
                <Stats />
            </motion.div>
        </motion.div>
    );
};

export default MainContent;