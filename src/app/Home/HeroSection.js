import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import NavigationSidebar from '../components/NavigationSidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import FloatingSidebar from '../components/FloatingSidebar';
import AboutMe from '../About/AboutMe';
import CV from '../Resume/CV';
import SpecializationsPage from '../Services/MyServices';
import SkillsPage from '../Skills/MySkills';
import LiquidWaveBackground from '../components/LiquidWaveBackground';
import ProjectsPage from '../Proejcts/MyProjects';
import TestimonialsPage from '../Testimonials/ClientTestimonials';
import PricingContactPage from '../Pricing/Final';

const HeroSection = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-neutral-950 text-white relative overflow-hidden">
            <LiquidWaveBackground />
            {/* Header */}
            <Header onMenuClick={() => setIsSidebarOpen(true)} />

            {/* Navigation Sidebar (Toggle) */}
            <NavigationSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Floating Sidebar (Right Side - Hidden on mobile) */}
            <FloatingSidebar className="hidden lg:flex" />

            <div className="flex flex-col lg:flex-row w-full">
                {/* Left Side - Fixed Profile Card (30% width on desktop, full width on mobile) */}
                <div className="fixed left-0 hidden lg:flex top-0  2xl:h-screen w-[30%] p-8 items-center justify-center">
                    <ProfileCard />
                </div>

                {/* Mobile Profile Card - Shows on mobile only */}
                <div className="lg:hidden w-full p-4 sm:p-6 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                        <ProfileCard />
                    </div>
                </div>

                {/* Right Side - Scrollable Main Content (70% width on desktop, full width on mobile) */}
                <div className="w-full lg:ml-[30%] lg:w-[70%]">
                    {/* Home Section */}
                    <section id="home" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 md:pr-24">
                        <MainContent />
                    </section>

                    {/* About Section */}
                    <section id="about" className="min-h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 md:pr-24">
                        <AboutMe />
                    </section>

                    {/* Resume Section */}
                    <section id="resume" className="min-h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 md:pr-24">
                        <CV />
                    </section>

                    {/* Services Section */}
                    <section id="services" className="min-h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 md:pr-24">
                        <SpecializationsPage />
                    </section>

                    {/* Socials Section */}
                    <section id="socials" className="min-h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 md:pr-24">
                        <SkillsPage />
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="min-h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 md:pr-24">
                        <ProjectsPage />
                    </section>

                    {/* Blog Section */}
                    <section id="testimonials" className="min-h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 md:pr-24">
                        <TestimonialsPage />
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="min-h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 md:pr-24">
                        <PricingContactPage />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;