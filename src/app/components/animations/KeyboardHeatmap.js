import React, { useEffect, useState } from 'react';

const KeyboardHeatmap = () => {
    const [keyPresses, setKeyPresses] = useState({});
    const [lastKey, setLastKey] = useState('');
    const [totalPresses, setTotalPresses] = useState(0);

    const keyboardLayout = [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
        ['SPACE']
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toUpperCase();
            setKeyPresses(prev => ({
                ...prev,
                [key]: (prev[key] || 0) + 1
            }));
            setLastKey(key);
            setTotalPresses(prev => prev + 1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const getHeatColor = (count) => {
        const maxCount = Math.max(...Object.values(keyPresses), 1);
        const intensity = count / maxCount;
        
        if (intensity === 0) return 'bg-gray-800';
        if (intensity < 0.25) return 'bg-blue-900';
        if (intensity < 0.5) return 'bg-blue-600';
        if (intensity < 0.75) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center p-8">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Keyboard Heatmap</h2>
                <p className="text-gray-400">Start typing to see the visualization</p>
                <div className="flex gap-8 mt-4 justify-center">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400">{totalPresses}</div>
                        <div className="text-gray-500 text-sm">Total Presses</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-400">
                            {lastKey === ' ' ? 'SPACE' : lastKey || '-'}
                        </div>
                        <div className="text-gray-500 text-sm">Last Key</div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-1 mb-1">
                        {row.map(key => {
                            const count = keyPresses[key] || keyPresses[key.toLowerCase()] || 0;
                            const isSpace = key === 'SPACE';
                            const isActive = lastKey === key || lastKey === key.toLowerCase();
                            
                            return (
                                <div
                                    key={key}
                                    className={`
                                        ${isSpace ? 'w-64' : 'w-12'} h-12
                                        ${getHeatColor(count)}
                                        rounded-lg flex items-center justify-center
                                        text-white font-mono text-sm
                                        transition-all duration-150
                                        ${isActive ? 'scale-95 ring-2 ring-white' : ''}
                                        relative overflow-hidden
                                    `}
                                >
                                    <span className="relative z-10">{isSpace ? '␣' : key}</span>
                                    {count > 0 && (
                                        <span className="absolute top-1 right-1 text-xs text-white/60">
                                            {count}
                                        </span>
                                    )}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-white/20 animate-ping" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-400 text-sm">Less</span>
                <div className="flex gap-1">
                    <div className="w-8 h-4 bg-gray-800 rounded" />
                    <div className="w-8 h-4 bg-blue-900 rounded" />
                    <div className="w-8 h-4 bg-blue-600 rounded" />
                    <div className="w-8 h-4 bg-yellow-500 rounded" />
                    <div className="w-8 h-4 bg-red-500 rounded" />
                </div>
                <span className="text-gray-400 text-sm">More</span>
            </div>
        </div>
    );
};

export default KeyboardHeatmap;
