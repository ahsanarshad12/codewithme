// app/projects/page.jsx
'use client';

import React from 'react';

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: 'Bureau - Architecture Studio Website',
            image: '/projects/bureau.jpg',
            tags: ['React', 'Figma', 'Webflow'],
            size: 'large', // Takes full width
            bgColor: 'bg-gray-800'
        },
        {
            id: 2,
            title: 'Moonex WordPress Theme',
            image: '/projects/moonex.jpg',
            tags: ['WordPress', 'Webflow'],
            size: 'small',
            bgColor: 'bg-gray-700'
        },
        {
            id: 3,
            title: 'Taskly Dashboard',
            image: '/projects/taskly.jpg',
            tags: ['Webflow', 'Laravel/PHP'],
            size: 'small',
            bgColor: 'bg-yellow-300'
        },
        {
            id: 4,
            title: 'Hinterland - Real Estate Site Redesign',
            image: '/projects/hinterland.jpg',
            tags: ['React', 'Figma'],
            size: 'large',
            bgColor: 'bg-gray-700'
        },
        {
            id: 5,
            title: 'Lewis Portfolio Framer Template',
            image: '/projects/lewis.jpg',
            tags: ['Framer'],
            size: 'large',
            bgColor: 'bg-gray-300'
        }
    ];

    return (
        <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
            <div className="2xl:w-250 mx-auto">
                {/* Portfolio Badge */}
                <div className="mb-8">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                        PORTFOLIO
                    </button>
                </div>

                {/* Header */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">
                    <span className="text-white">Featured </span>
                    <span className="text-emerald-400">Projects</span>
                </h1>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Project 1 - Full Width */}
                    <div className=" w-80 lg:w-full lg:col-span-2 group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-video hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                            {/* Placeholder Image - Replace with actual images */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white/20 text-6xl font-bold">BUREAU</div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium">React</span>
                                    <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium">Figma</span>
                                    <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium">Webflow</span>
                                </div>
                                <h3 className="text-white text-xl sm:text-2xl font-semibold">
                                    Bureau - Architecture Studio Website
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 - Half Width */}
                    <div className=" w-80 lg:w-full group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-700 aspect-4/5 hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white/20 text-4xl font-bold">MOONEX</div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium">WordPress</span>
                                    <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium">Webflow</span>
                                </div>
                                <h3 className="text-white text-lg sm:text-xl font-semibold">
                                    Moonex WordPress Theme
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 - Half Width */}
                    <div className=" w-80 lg:w-full group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-yellow-300 aspect-4/5 hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-black/10 text-4xl font-bold">TASKLY</div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-medium">Webflow</span>
                                    <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-medium">Laravel/PHP</span>
                                </div>
                                <h3 className="text-white text-lg sm:text-xl font-semibold">
                                    Taskly Dashboard
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 - Full Width */}
                    <div className=" w-80 lg:w-full lg:col-span-2 group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-700 aspect-video hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white/20 text-6xl font-bold">HINTERLAND</div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium">React</span>
                                    <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium">Figma</span>
                                </div>
                                <h3 className="text-white text-xl sm:text-2xl font-semibold">
                                    Hinterland - Real Estate Site Redesign
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Project 5 - Full Width */}
                    <div className=" w-80 lg:w-full lg:col-span-2 group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-300 aspect-video hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-black/10 text-6xl font-bold">LEWIS</div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-medium">Framer</span>
                                </div>
                                <h3 className="text-white text-xl sm:text-2xl font-semibold">
                                    Lewis Portfolio Framer Template
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}