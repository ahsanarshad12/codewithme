import react from 'react';


export default function CV() {
    return (
        <section className=" text-white ">
            <div className="mb-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-white text-xs uppercase tracking-wider hover:border-gray-500 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    RESUME
                </button>
            </div>
            {/* Title */}
            <h2 className="text-3xl md:text-7xl font-semibold mb-14">
                Education & <span className="text-emerald-400">Experience</span>
            </h2>

            {/* Timeline */}
            <div className="relative pl-8">

                {/* Vertical Line */}
                <div className="absolute left-1.5 top-0 h-full w-0.5 bg-[#2a2a2a]" />

                {/* Item 1 */}
                <div className="relative flex gap-8 mb-16">
                    <span className="absolute -left-7.5 top-0 w-3 h-3 rounded-full bg-gray-500" />

                    <div>
                        <p className="text-lg text-gray-400 mb-4">2025 - Present</p>

                        <h3 className="text-3xl font-medium">
                            NextJs Front-End Developer
                        </h3>
                        <p className="text-lg text-gray-400 mb-6">
                            G-Tech Solutions
                        </p>

                        <h3 className="text-xl font-medium">
                            Laravel Back-End Developer
                        </h3>
                        <p className="text-lg text-gray-400">
                            G-Tech Solutions
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex gap-8">
                    <span className="absolute -left-7.5 top-0 w-3 h-3 rounded-full bg-gray-500" />

                    <div>
                        <p className="text-lg text-gray-400 mb-4">2013 – 2019</p>

                        <h3 className="text-3xl font-medium">
                            Webflow Developer & Co-Founder
                        </h3>
                        <p className="text-lg text-gray-400 mb-6">
                            Designflow Studio
                        </p>

                        <h3 className="text-3xl font-medium">
                            Web Designer
                        </h3>
                        <p className="text-lg text-gray-400 mb-6">
                            Freelance
                        </p>

                        <h3 className="text-3xl font-medium">
                            Leader Team of Marketing
                        </h3>
                        <p className="text-lg text-gray-400">
                            AHA Marketing Agency
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
