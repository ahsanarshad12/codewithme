import React, { useEffect, useRef } from 'react';

const Constellation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.twinkle = Math.random() * Math.PI * 2;
                this.twinkleSpeed = Math.random() * 0.05 + 0.02;
            }

            update() {
                this.twinkle += this.twinkleSpeed;
            }

            draw() {
                const brightness = (Math.sin(this.twinkle) + 1) * 0.5;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + brightness * 0.5})`;
                ctx.fill();
            }
        }

        const stars = [];
        for (let i = 0; i < 150; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 30, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                const dx = mouseX - star.x;
                const dy = mouseY - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const opacity = (1 - distance / 200) * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });

            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const opacity = (1 - distance / 100) * 0.2;
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 50);
            gradient.addColorStop(0, 'rgba(100, 200, 255, 0.5)');
            gradient.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 50, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
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

export default Constellation;
