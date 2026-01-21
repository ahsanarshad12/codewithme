// app/specializations/page.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SpecializationsPage() {
    const specializations = [
        {
            title: 'Website Design',
            description: 'I created digital products with unique ideas use Figma & Framer',
            projectCount: 24,
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                </svg>
            )
        },
        {
            title: 'Development',
            description: 'I build website go live with Framer, Webflow or WordPress',
            projectCount: 126,
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 18L22 12L16 6" />
                    <path d="M8 6L2 12L8 18" />
                </svg>
            )
        },
        {
            title: 'SEO/Marketing',
            description: 'Increase the traffic for your website with SEO optimized',
            projectCount: 8,
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    SERVICES
                </button>
            </div>
            <div className="max-w-full mx-auto">
                {/* Header */}
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-white">My </span>
                    <span className="text-emerald-400">Specializations</span>
                </motion.h1>

                {/* Specialization Cards */}
                <div className="space-y-6">
                    {specializations.map((spec, index) => (
                        <motion.div
                            key={index}
                            className="w-80 xl:w-[110%] 2xl:w-[140%] group backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <motion.h2
                                        className="text-2xl sm:text-3xl font-semibold text-white mb-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 + 0.3 }}
                                    >
                                        {spec.title}
                                    </motion.h2>
                                    <motion.p
                                        className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 + 0.4 }}
                                    >
                                        {spec.description}
                                    </motion.p>
                                    <motion.div
                                        className="inline-block"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 + 0.5 }}
                                    >
                                        <span className="text-white font-bold text-sm tracking-wide">
                                            {spec.projectCount} PROJECTS
                                        </span>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="ml-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                                    initial={{ opacity: 0, rotate: -180 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    transition={{
                                        delay: index * 0.2 + 0.3,
                                        duration: 0.6
                                    }}
                                >
                                    {spec.icon}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}