import React, { useEffect, useRef } from 'react';

const GalaxySpiral = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let rotation = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Star {
            constructor() {
                this.angle = Math.random() * Math.PI * 2;
                this.distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.4 + 50;
                this.size = Math.random() * 2 + 0.5;
                this.brightness = Math.random();
                this.speed = (1 / this.distance) * 0.5;
                this.armOffset = Math.floor(Math.random() * 4) * (Math.PI / 2);
            }

            update() {
                this.angle += this.speed;
                this.brightness = 0.5 + Math.sin(Date.now() * 0.003 + this.angle) * 0.5;
            }

            draw() {
                const spiralAngle = this.angle + this.armOffset + (this.distance * 0.01);
                const x = canvas.width / 2 + Math.cos(spiralAngle + rotation) * this.distance;
                const y = canvas.height / 2 + Math.sin(spiralAngle + rotation) * this.distance;

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 3);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.brightness})`);
                gradient.addColorStop(0.5, `rgba(200, 220, 255, ${this.brightness * 0.5})`);
                gradient.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.arc(x, y, this.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        const stars = [];
        for (let i = 0; i < 500; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(5, 5, 20, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const centerGradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, 100
            );
            centerGradient.addColorStop(0, 'rgba(255, 200, 100, 0.3)');
            centerGradient.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
            ctx.fillStyle = centerGradient;
            ctx.fill();

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            rotation += 0.001;
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

export default GalaxySpiral;
