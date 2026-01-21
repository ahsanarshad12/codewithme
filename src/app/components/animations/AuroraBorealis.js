import React, { useEffect, useRef } from 'react';

const AuroraBorealis = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const drawAurora = () => {
            ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const colors = [
                'rgba(0, 255, 150, 0.3)',
                'rgba(0, 200, 255, 0.3)',
                'rgba(138, 43, 226, 0.3)',
                'rgba(0, 255, 200, 0.3)'
            ];

            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);

                for (let x = 0; x <= canvas.width; x += 10) {
                    const y = canvas.height / 3 +
                        Math.sin(x * 0.003 + time + i) * 100 +
                        Math.sin(x * 0.007 + time * 1.5 + i) * 50 +
                        Math.cos(x * 0.005 + time * 0.5 + i) * 75;
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();

                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, colors[i]);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            time += 0.02;
            animationFrameId = requestAnimationFrame(drawAurora);
        };

        drawAurora();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default AuroraBorealis;
