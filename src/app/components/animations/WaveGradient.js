import React, { useEffect, useRef } from 'react';

const WaveGradient = () => {
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

        const animate = () => {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

            const hue1 = (time * 20) % 360;
            const hue2 = (hue1 + 60) % 360;
            const hue3 = (hue1 + 120) % 360;

            gradient.addColorStop(0, `hsl(${hue1}, 70%, 50%)`);
            gradient.addColorStop(0.5, `hsl(${hue2}, 70%, 50%)`);
            gradient.addColorStop(1, `hsl(${hue3}, 70%, 50%)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = 'overlay';

            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);

                for (let x = 0; x <= canvas.width; x += 10) {
                    const y = canvas.height - 200 - i * 40 +
                        Math.sin(x * 0.005 + time + i) * 50 +
                        Math.cos(x * 0.003 + time * 0.5 + i) * 30;
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(canvas.width, canvas.height);
                ctx.closePath();

                ctx.fillStyle = `rgba(255, 255, 255, ${0.1 - i * 0.015})`;
                ctx.fill();
            }

            ctx.globalCompositeOperation = 'source-over';
            time += 0.02;
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
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.5 }}
        />
    );
};

export default WaveGradient;
