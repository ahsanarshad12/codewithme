import React, { useEffect, useRef } from 'react';

const MorphingBlob = () => {
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

        const drawBlob = (centerX, centerY, radius, hue, offset) => {
            ctx.beginPath();

            const points = 100;
            for (let i = 0; i <= points; i++) {
                const angle = (i / points) * Math.PI * 2;
                const noise =
                    Math.sin(angle * 3 + time + offset) * 30 +
                    Math.sin(angle * 5 + time * 1.5 + offset) * 20 +
                    Math.cos(angle * 2 + time * 0.7 + offset) * 25;

                const r = radius + noise;
                const x = centerX + Math.cos(angle) * r;
                const y = centerY + Math.sin(angle) * r;

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            ctx.closePath();

            const gradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, radius + 50
            );
            gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.8)`);
            gradient.addColorStop(0.5, `hsla(${hue + 30}, 80%, 50%, 0.5)`);
            gradient.addColorStop(1, `hsla(${hue + 60}, 80%, 40%, 0.1)`);

            ctx.fillStyle = gradient;
            ctx.fill();
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawBlob(canvas.width * 0.3, canvas.height * 0.4, 150, 280, 0);
            drawBlob(canvas.width * 0.7, canvas.height * 0.6, 120, 180, 2);
            drawBlob(canvas.width * 0.5, canvas.height * 0.3, 100, 340, 4);

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
        />
    );
};

export default MorphingBlob;
