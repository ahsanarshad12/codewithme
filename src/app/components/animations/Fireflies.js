import React, { useEffect, useRef } from 'react';

const Fireflies = () => {
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

        class Firefly {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = 0;
                this.vy = 0;
                this.targetX = 0;
                this.targetY = 0;
                this.setNewTarget();
                this.glowSize = Math.random() * 20 + 10;
                this.glowPhase = Math.random() * Math.PI * 2;
                this.glowSpeed = Math.random() * 0.05 + 0.02;
                this.color = Math.random() > 0.5 ? '255, 255, 100' : '100, 255, 150';
            }

            setNewTarget() {
                this.targetX = Math.random() * canvas.width;
                this.targetY = Math.random() * canvas.height;
            }

            update() {
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 50) {
                    this.setNewTarget();
                }

                this.vx += dx * 0.0003;
                this.vy += dy * 0.0003;
                this.vx *= 0.99;
                this.vy *= 0.99;

                this.x += this.vx;
                this.y += this.vy;

                this.glowPhase += this.glowSpeed;
            }

            draw() {
                const glow = (Math.sin(this.glowPhase) + 1) * 0.5;
                const currentGlowSize = this.glowSize * (0.5 + glow * 0.5);

                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, currentGlowSize
                );
                gradient.addColorStop(0, `rgba(${this.color}, ${glow})`);
                gradient.addColorStop(0.4, `rgba(${this.color}, ${glow * 0.5})`);
                gradient.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.arc(this.x, this.y, currentGlowSize, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${glow})`;
                ctx.fill();
            }
        }

        const fireflies = [];
        for (let i = 0; i < 40; i++) {
            fireflies.push(new Firefly());
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 20, 30, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            fireflies.forEach(firefly => {
                firefly.update();
                firefly.draw();
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
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default Fireflies;
