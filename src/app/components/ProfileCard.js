import React from 'react';
import { Mail, Instagram, Twitter, Dribbble, Github } from 'lucide-react';

const ProfileCard = () => {
    return (
        <div className="bg-neutral-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-neutral-800 w-full max-w-sm">
            <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        Ahsan Arshad<sup className="text-xs sm:text-sm">®</sup>
                    </h1>
                    <p className="text-neutral-400 text-xs sm:text-sm">Laravel + Next.Js</p>
                    <p className="text-neutral-400 text-xs sm:text-sm"> Developer</p>
                </div>
            </div>

            <div className="mb-4 sm:mb-6">
                <img
                    src="/img/profile.jpeg"
                    alt="Ahsan Arshad"
                    className="w-full h-80 sm:h-96 md:h-100 object-top object-cover rounded-xl sm:rounded-2xl"
                />
            </div>

            <div className="text-center mb-4 sm:mb-6">
                <a href="mailto:ahsanarshad291@gmail.com" className="text-white text-base sm:text-lg mb-2 block hover:text-emerald-400 transition-colors break-all">
                    ahsanarshad291@gmail.com
                </a>
                <p className="text-neutral-400 text-xs sm:text-sm">Based in Rahim-Yar-Khan, Punjab, Pakistan</p>
            </div>

            <div className="text-center text-neutral-500 text-xs mb-4 sm:mb-6">
                © 2026 AhsanArshad. All Rights Reserved
            </div>

            <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all">
                    <Instagram size={18} />
                </button>
                <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all">
                    <Twitter size={18} />
                </button>
                <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all">
                    <Dribbble size={18} />
                </button>
                <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all">
                    <Github size={18} />
                </button>
            </div>

            <button className="w-full bg-emerald-400 text-neutral-900 font-semibold py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors text-sm sm:text-base">
                <Mail size={18} />
                HIRE ME!
            </button>
        </div>
    );
};

export default ProfileCard;
