import React, { useEffect, useRef } from 'react';

const RainDrops = () => {
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

        class Raindrop {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height;
                this.length = Math.random() * 20 + 10;
                this.speed = Math.random() * 15 + 10;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.y += this.speed;
                this.x += 2;

                if (this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + 2, this.y + this.length);
                ctx.strokeStyle = `rgba(180, 200, 255, ${this.opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        class Splash {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 0;
                this.maxRadius = Math.random() * 20 + 10;
                this.opacity = 1;
            }

            update() {
                this.radius += 1;
                this.opacity = 1 - this.radius / this.maxRadius;
            }

            draw() {
                if (this.opacity <= 0) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(180, 200, 255, ${this.opacity * 0.5})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            isDead() {
                return this.radius >= this.maxRadius;
            }
        }

        const raindrops = [];
        const splashes = [];

        for (let i = 0; i < 200; i++) {
            const drop = new Raindrop();
            drop.y = Math.random() * canvas.height;
            raindrops.push(drop);
        }

        let splashTimer = 0;

        const animate = () => {
            ctx.fillStyle = 'rgba(20, 30, 50, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            raindrops.forEach(drop => {
                drop.update();
                drop.draw();
            });

            splashTimer++;
            if (splashTimer > 3) {
                splashes.push(new Splash(
                    Math.random() * canvas.width,
                    canvas.height - Math.random() * 50
                ));
                splashTimer = 0;
            }

            for (let i = splashes.length - 1; i >= 0; i--) {
                splashes[i].update();
                splashes[i].draw();
                if (splashes[i].isDead()) {
                    splashes.splice(i, 1);
                }
            }

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

export default RainDrops;
