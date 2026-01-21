import React, { useEffect, useRef } from 'react';

const CodeSyntaxParticles = () => {
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

        const codeSymbols = [
            '{ }', '( )', '[ ]', '< />', '=>', '===', '!==',
            'const', 'let', 'function', 'return', 'import',
            'async', 'await', 'class', 'export', 'interface',
            '&&', '||', '?.', '...', '++', '--', '/**/'
        ];

        const colors = [
            '#c792ea',
            '#82aaff',
            '#c3e88d',
            '#f78c6c',
            '#89ddff',
            '#ffcb6b',
        ];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.size = Math.random() * 14 + 10;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    this.vx += (dx / distance) * force * 0.02;
                    this.vy += (dy / distance) * force * 0.02;
                }

                this.vx *= 0.99;
                this.vy *= 0.99;
                this.x += this.vx;
                this.y += this.vy;
                this.rotation += this.rotationSpeed;

                if (this.x < -50) this.x = canvas.width + 50;
                if (this.x > canvas.width + 50) this.x = -50;
                if (this.y < -50) this.y = canvas.height + 50;
                if (this.y > canvas.height + 50) this.y = -50;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.font = `${this.size}px 'Fira Code', monospace`;
                ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.symbol, 0, 0);
                ctx.restore();
            }
        }

        const particles = [];
        for (let i = 0; i < 60; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(15, 15, 25, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(100, 150, 255, ${(1 - distance / 150) * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100);
            gradient.addColorStop(0, 'rgba(100, 150, 255, 0.1)');
            gradient.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 100, 0, Math.PI * 2);
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
            className="fixed inset-0 bg-[#0f0f19]"
        />
    );
};

export default CodeSyntaxParticles;
