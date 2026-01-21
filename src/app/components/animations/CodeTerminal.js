import React, { useEffect, useState } from 'react';

const CodeTerminal = () => {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const codeSnippets = [
        { text: '$ npm install creativity --save', type: 'command' },
        { text: '✓ Installing packages...', type: 'success' },
        { text: '$ git commit -m "Built something amazing"', type: 'command' },
        { text: '[main 4a2f8b1] Built something amazing', type: 'output' },
        { text: '$ deploying to production...', type: 'command' },
        { text: '🚀 Deployment successful!', type: 'success' },
        { text: '$ console.log("Hello, I\'m a Developer!");', type: 'command' },
        { text: '> Hello, I\'m a Developer!', type: 'output' },
        { text: '$ loading skills...', type: 'command' },
        { text: '✓ React, TypeScript, Node.js loaded', type: 'success' },
        { text: '$ coffee.drink() && code.write()', type: 'command' },
        { text: '☕ Productivity increased by 200%', type: 'success' },
    ];

    useEffect(() => {
        if (lineIndex >= codeSnippets.length) {
            setTimeout(() => {
                setLines([]);
                setLineIndex(0);
                setCharIndex(0);
                setCurrentLine('');
            }, 3000);
            return;
        }

        const currentSnippet = codeSnippets[lineIndex];
        
        if (charIndex < currentSnippet.text.length) {
            const timeout = setTimeout(() => {
                setCurrentLine(prev => prev + currentSnippet.text[charIndex]);
                setCharIndex(prev => prev + 1);
            }, 30 + Math.random() * 50);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setLines(prev => [...prev, { text: currentLine, type: currentSnippet.type }]);
                setCurrentLine('');
                setCharIndex(0);
                setLineIndex(prev => prev + 1);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, lineIndex, currentLine]);

    const getLineColor = (type) => {
        switch(type) {
            case 'command': return 'text-green-400';
            case 'success': return 'text-cyan-400';
            case 'output': return 'text-gray-300';
            case 'error': return 'text-red-400';
            default: return 'text-white';
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950 p-4 overflow-hidden">
            <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-gray-400 text-sm font-mono">developer@portfolio ~ </span>
                </div>
                
                <div className="p-4 font-mono text-sm h-80 overflow-hidden">
                    {lines.slice(-10).map((line, idx) => (
                        <div key={idx} className={`${getLineColor(line.type)} mb-1`}>
                            {line.text}
                        </div>
                    ))}
                    <div className="text-green-400">
                        {currentLine}
                        <span className="animate-pulse">▋</span>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default CodeTerminal;
