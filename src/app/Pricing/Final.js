// app/pricing/page.jsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PricingContactPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Loading and Success States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage({ type: '', text: '' });

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage({ type: 'success', text: 'Message sent successfully! I will contact you soon.' });
                setFormData({ name: '', email: '', subject: '', budget: '', message: '' }); // Clear form
            } else {
                setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            console.error(error);
            setStatusMessage({ type: 'error', text: 'Something went wrong.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // ... (Keep your pricingPlans array exactly as it was) ...
    const pricingPlans = [
        {
            name: 'BASIC',
            description: 'Great design started for teams & professional freelancers',
            price: '$49',
            period: '/hours',
            features: [
                'Need your wireframe',
                'Design with Figma, Framer',
                'Product design',
                'Digital marketing',
                'Custom (custome name / logo)',
                'Market-Ul-dashboard only, no develop',
                'Develop with Webflow, React, WordPress, Laravel/PHP'
            ],
            buttonText: 'PICK THIS PACKAGE',
            popular: false
        },
        {
            name: 'PREMIUM',
            description: 'Effortless design started for teams & professional freelancers for life',
            price: '$99',
            period: '/hours',
            features: [
                "Don't need wireframe or anything",
                'Design with Figma, Framer (Fully-Access)',
                'Product design',
                'Digital marketing, Social Media (Facebook, Instagram, Twitter, TikTok)',
                'Custom (custom name / logo)',
                'Ecommerce',
                'Develop with Webflow, React, WordPress, Laravel/PHP (Full-Access)',
                'Work with team available',
                'Support 24 weeks',
                'Customer care gifts'
            ],
            buttonText: 'PICK THIS PACKAGE',
            popular: true
        }
    ];

    return (
        <motion.div
            ref={ref}
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* ... (Keep your Pricing Section exactly as it was) ... */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* ... Pricing Badge, Header, Cards, Bottom Note code goes here (unchanged) ... */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.6 }}
                    >
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18" />
                                <path d="M9 21V9" />
                            </svg>
                            PRICING
                        </button>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-white">My </span>
                        <span className="text-emerald-400">Pricing</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className="border-2 border-gray-700 rounded-3xl p-8 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600 transition-all relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            >
                                <div className="mb-8">
                                    <h3 className="text-white text-sm font-bold tracking-wider mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline">
                                        <span className="text-emerald-400 text-5xl font-bold">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-400 text-lg ml-2">
                                            {plan.period}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-20">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-300 text-sm leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-[calc(100%-4rem)] absolute bottom-8 left-8 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold py-4 px-6 rounded-full transition-colors text-sm tracking-wider">
                                    {plan.buttonText}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm text-center">
                        Can't find the package? match with your plan? don't worry to make a new offer, check pricing for only you!{' '}
                        <a href="#contact" className="text-emerald-400 hover:underline">
                            Contact Us
                        </a>
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto">
                    {/* ... Contact Badge, Header ... */}
                    <div className="mb-8">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            CONTACT
                        </button>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-white">Let's Work </span>
                        <span className="text-emerald-400">Together!</span>
                    </h2>

                    <p className="text-emerald-400 text-xl mb-12">
                        ahsanarshad291@gmail.com
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6" id="contact">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Full Name"
                                    required
                                    className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    required
                                    className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-600"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                                PHONE (OPTIONAL)
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-600"
                            />
                        </div>

                        {/* Budget */}
                        <div>
                            <label htmlFor="budget" className="block text-gray-400 text-sm mb-2">
                                YOUR BUDGET (OPTIONAL)
                            </label>
                            <input
                                type="text"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="A range budget for your project"
                                className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-600"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                                MESSAGE
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                rows="4"
                                className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-600 resize-none"
                            ></textarea>
                        </div>

                        {/* Agreement Checkbox */}
                        <div className="flex items-start gap-3 py-4">
                            <input
                                type="checkbox"
                                id="agreement"
                                required
                                className="mt-1 w-4 h-4 rounded border-gray-700 bg-transparent text-emerald-400 focus:ring-emerald-400"
                            />
                            <label htmlFor="agreement" className="text-gray-400 text-sm">
                                I AGREE MY INFORMATIONS
                            </label>
                        </div>

                        {/* Status Message */}
                        {statusMessage.text && (
                            <div className={`p-4 rounded-lg mb-4 ${statusMessage.type === 'success' ? 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/50' : 'bg-red-400/20 text-red-400 border border-red-400/50'}`}>
                                {statusMessage.text}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors text-sm tracking-wider inline-flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            {!isSubmitting && (
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}