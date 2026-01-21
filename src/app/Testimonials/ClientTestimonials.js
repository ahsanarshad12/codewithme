
'use client';

import React, { useState } from 'react';

export default function TestimonialsPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Phil Foden',
            position: 'Director of Envato LLC',
            avatar: '/avatars/phil.jpg',
            text: 'Extremely profressional and fast service!. Drake is a master of code and he also very creative. We done 3 projects with him and certain will continue.',
            project: 'PROJECT'
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            position: 'CEO of TechStart',
            avatar: '/avatars/sarah.jpg',
            text: 'Outstanding work quality and attention to detail. The project was delivered ahead of schedule and exceeded all our expectations. Highly recommended!',
            project: 'PROJECT'
        },
        {
            id: 3,
            name: 'Michael Chen',
            position: 'CTO of Innovation Labs',
            avatar: '/avatars/michael.jpg',
            text: 'A true professional who understands both the technical and creative aspects. Communication was excellent throughout the entire project.',
            project: 'PROJECT'
        }
    ];

    const brands = [
        { name: 'BLB Badische Landes-Bibliothek', logo: 'BLB' },
        { name: 'Christopher Willis', logo: 'CW' },
        { name: 'Serenity Hotel', logo: 'S' },
        { name: 'Artchive Crafts Gallery', logo: 'ARTCHIVE' },

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Testimonial Badge */}
                <div className="mb-8">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        TESTIMONIAL
                    </button>
                </div>

                {/* Header */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16">
                    <span className="text-white">Trusted by </span>
                    <span className="text-emerald-400">Hundered Clients</span>
                </h1>

                {/* Testimonial Card */}
                <div className="relative mb-12">
                    <div className="border-2 border-gray-700 rounded-3xl p-8 sm:p-12 bg-gray-900/50 backdrop-blur-sm">
                        {/* Profile Section */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white text-xl font-bold">
                                    {testimonials[currentSlide].name.charAt(0)}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-semibold">
                                    {testimonials[currentSlide].name}
                                </h3>
                                <p className="text-emerald-400 text-sm">
                                    {testimonials[currentSlide].position}
                                </p>
                            </div>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-white text-xl sm:text-2xl leading-relaxed mb-8">
                            "{testimonials[currentSlide].text}"
                        </blockquote>

                        {/* Project Label */}
                        <div className="text-white text-sm font-semibold tracking-wider">
                            {testimonials[currentSlide].project}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-gray-500 hover:bg-gray-800 transition-all"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <span className="text-white text-sm">
                            <span className="font-bold">{currentSlide + 1}</span>
                            <span className="text-gray-500"> / {testimonials.length}</span>
                        </span>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-gray-500 hover:bg-gray-800 transition-all"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Brands Section */}
                <div className="mt-24">
                    <h2 className="text-white text-sm font-semibold tracking-wider mb-12 uppercase">
                        Work with 60+ brands worldwide
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 group cursor-pointer"
                            >
                                <div className="text-gray-500 hover:text-gray-300 transition-colors text-center">
                                    {index === 0 && (
                                        <div className="space-y-1">
                                            <div className="text-2xl font-bold">BLB</div>
                                            <div className="text-xs uppercase tracking-wider">
                                                Badische<br />Landes-<br />Bibliothek
                                            </div>
                                        </div>
                                    )}
                                    {index === 1 && (
                                        <div className="text-4xl font-light">
                                            christopher willis
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className="space-y-2">
                                            <div className="text-5xl font-serif italic">S</div>
                                            <div className="text-xs uppercase tracking-widest">
                                                Serenity<br />Hotel
                                            </div>
                                        </div>
                                    )}
                                    {index === 3 && (
                                        <div className="space-y-1">
                                            <div className="text-2xl font-bold tracking-wider">ARTCHIVE</div>
                                            <div className="text-xs uppercase tracking-wider">
                                                Crafts Gallery
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}