import React, { useEffect, useState, useRef } from 'react';

const TechStackOrbit = () => {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState(0);

    const techStack = [
        { name: 'React', color: '#61dafb', icon: '⚛️' },
        { name: 'TypeScript', color: '#3178c6', icon: '📘' },
        { name: 'Node.js', color: '#68a063', icon: '🟢' },
        { name: 'Python', color: '#ffd43b', icon: '🐍' },
        { name: 'Docker', color: '#2496ed', icon: '🐳' },
        { name: 'AWS', color: '#ff9900', icon: '☁️' },
        { name: 'MongoDB', color: '#47a248', icon: '🍃' },
        { name: 'GraphQL', color: '#e535ab', icon: '◈' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev + 0.5);
        }, 16);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 bg-gray-950 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(100, 150, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(100, 150, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="relative w-96 h-96">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <span className="text-white font-bold text-lg">{'</>'}</span>
                </div>

                {techStack.map((tech, index) => {
                    const angle = (index / techStack.length) * Math.PI * 2 + (rotation * Math.PI) / 180;
                    const radius = 150;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius * 0.4;
                    const z = Math.sin(angle);
                    const scale = 0.7 + (z + 1) * 0.3;
                    const zIndex = Math.floor((z + 1) * 10);

                    return (
                        <div
                            key={tech.name}
                            className="absolute top-1/2 left-1/2 transition-all duration-100"
                            style={{
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                                zIndex,
                                opacity: 0.5 + (z + 1) * 0.25
                            }}
                        >
                            <div
                                className="w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white shadow-lg backdrop-blur-sm"
                                style={{
                                    backgroundColor: tech.color + '30',
                                    borderColor: tech.color,
                                    borderWidth: 2,
                                    boxShadow: `0 0 20px ${tech.color}40`
                                }}
                            >
                                <span className="text-2xl">{tech.icon}</span>
                                <span className="text-xs mt-1 font-medium">{tech.name}</span>
                            </div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 border border-blue-500/30 rounded-full"
                    style={{ transform: 'translate(-50%, -50%) rotateX(60deg)' }}
                />
            </div>

            <div className="absolute bottom-20 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
                <p className="text-gray-400">Technologies I work with</p>
            </div>
        </div>
    );
};

export default TechStackOrbit;
