'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLightbulb, FaRocket, FaPalette, FaCode } from "react-icons/fa";

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const features = [
        {
            icon: <FaLightbulb className="w-10 h-10" />,
            title: "Creative Thinking",
            description: "Innovative solutions for complex problems",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            icon: <FaRocket className="w-10 h-10" />,
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality",
            gradient: "from-blue-400 to-purple-500"
        },
        {
            icon: <FaPalette className="w-10 h-10" />,
            title: "Modern Design",
            description: "Clean and contemporary design approach",
            gradient: "from-pink-400 to-rose-500"
        },
        {
            icon: <FaCode className="w-10 h-10" />,
            title: "Clean Code",
            description: "Well-structured and maintainable codebase",
            gradient: "from-emerald-400 to-teal-500"
        }
    ];

    return (
        <div ref={ref} className="flex flex-col items-start justify-center w-full">
            <div className="mb-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    ABOUT ME
                </button>
            </div>
            <div className="flex relative z-10 flex-col gap-3 sm:gap-4 md:gap-4 mt-8 sm:mt-12 md:mt-0">
                <motion.h2
                    className="font-normal text-2xl sm:text-4xl md:text-5xl lg:text-[55px] text-white w-full lg:max-w-[70%] leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    Every great design begin with an even <span className="text-emerald-400">better story</span>
                </motion.h2>

                <motion.p
                    className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-[24px] w-full lg:max-w-[70%] font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
                </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 mt-12 sm:mt-16 w-full max-w-[80%] items-center justify-center lg:items-start lg:justify-start">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="relative group"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.4,
                            ease: "easeOut"
                        }}
                        whileHover={{ y: -10 }}
                    >
                        {/* Gradient Border Effect */}
                        <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                        {/* Card */}
                        <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                            {/* Icon with Gradient Background */}
                            <motion.div
                                className={`w-16 h-16 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1 + 0.5,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ rotate: 360 }}
                            >
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="text-white text-xl font-semibold mb-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.1 + 0.7 }}
                            >
                                {feature.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-gray-400 text-sm leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: index * 0.1 + 0.8 }}
                            >
                                {feature.description}
                            </motion.p>

                            {/* Hover Line Effect */}
                            <motion.div
                                className={`h-1 bg-linear-to-r ${feature.gradient} rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                initial={{ scaleX: 0 }}
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;