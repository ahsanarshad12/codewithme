import React, { useEffect, useRef } from 'react';

const FloatingBubbles = () => {
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

        class Bubble {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.radius = Math.random() * 30 + 10;
                this.speed = Math.random() * 2 + 0.5;
                this.wobble = 0;
                this.wobbleSpeed = Math.random() * 0.03 + 0.01;
                this.hue = Math.random() * 60 + 180;
            }

            update() {
                this.y -= this.speed;
                this.wobble += this.wobbleSpeed;
                this.x += Math.sin(this.wobble) * 2;

                if (this.y + this.radius < 0) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

                const gradient = ctx.createRadialGradient(
                    this.x - this.radius * 0.3,
                    this.y - this.radius * 0.3,
                    0,
                    this.x,
                    this.y,
                    this.radius
                );
                gradient.addColorStop(0, `hsla(${this.hue}, 100%, 80%, 0.8)`);
                gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 60%, 0.4)`);
                gradient.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 0.1)`);

                ctx.fillStyle = gradient;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(
                    this.x - this.radius * 0.3,
                    this.y - this.radius * 0.3,
                    this.radius * 0.2,
                    0,
                    Math.PI * 2
                );
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
            }
        }

        const bubbles = [];
        for (let i = 0; i < 50; i++) {
            const bubble = new Bubble();
            bubble.y = Math.random() * canvas.height;
            bubbles.push(bubble);
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 20, 40, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            bubbles.forEach(bubble => {
                bubble.update();
                bubble.draw();
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

export default FloatingBubbles;
