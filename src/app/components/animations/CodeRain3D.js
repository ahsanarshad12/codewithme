import React, { useEffect, useRef } from 'react';

const CodeRain3D = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const chars = '01アイウエオカキクケコ<>{}[]();:=+-*/&|!?#$@%^~';
        
        const streams = [];
        const streamCount = Math.floor(canvas.width / 20);

        for (let i = 0; i < streamCount; i++) {
            const depth = Math.random();
            const length = Math.floor(Math.random() * 20 + 10);
            streams.push({
                x: (i / streamCount) * canvas.width + Math.random() * 20,
                y: Math.random() * canvas.height * 2 - canvas.height,
                speed: (1 + depth * 2) * 3,
                depth,
                chars: Array(length).fill('').map(() => 
                    chars[Math.floor(Math.random() * chars.length)]
                ),
                length
            });
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            streams.sort((a, b) => a.depth - b.depth);

            streams.forEach(stream => {
                const fontSize = 10 + stream.depth * 10;
                ctx.font = `${fontSize}px monospace`;
                
                stream.chars.forEach((char, i) => {
                    const y = stream.y - i * fontSize;
                    if (y < -fontSize || y > canvas.height + fontSize) return;

                    const alpha = 1 - (i / stream.length);
                    const brightness = stream.depth * 0.5 + 0.5;
                    
                    if (i === 0) {
                        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    } else {
                        const g = Math.floor(150 + brightness * 105);
                        ctx.fillStyle = `rgba(0, ${g}, ${Math.floor(g * 0.6)}, ${alpha * brightness})`;
                    }
                    
                    ctx.fillText(char, stream.x, y);

                    if (Math.random() > 0.98) {
                        stream.chars[i] = chars[Math.floor(Math.random() * chars.length)];
                    }
                });

                stream.y += stream.speed;

                if (stream.y - stream.length * 20 > canvas.height) {
                    stream.y = -stream.length * 20;
                    stream.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 bg-black"
        />
    );
};

export default CodeRain3D;
