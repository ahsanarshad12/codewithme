import React, { useEffect, useRef } from 'react';

const InteractiveMeshGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = -1000;
        let mouseY = -1000;

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

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };
        window.addEventListener('mouseleave', handleMouseLeave);

        const gridSize = 40;
        const points = [];

        const initPoints = () => {
            points.length = 0;
            for (let x = 0; x <= canvas.width + gridSize; x += gridSize) {
                for (let y = 0; y <= canvas.height + gridSize; y += gridSize) {
                    points.push({ x, y, originX: x, originY: y });
                }
            }
        };
        initPoints();
        window.addEventListener('resize', initPoints);

        const animate = () => {
            ctx.fillStyle = '#0a0a15';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            points.forEach(point => {
                const dx = mouseX - point.originX;
                const dy = mouseY - point.originY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    point.x = point.originX - Math.cos(angle) * force * 40;
                    point.y = point.originY - Math.sin(angle) * force * 40;
                } else {
                    point.x += (point.originX - point.x) * 0.1;
                    point.y += (point.originY - point.y) * 0.1;
                }
            });

            const cols = Math.ceil(canvas.width / gridSize) + 1;

            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                const rightIndex = i + 1;
                const bottomIndex = i + cols;

                if (rightIndex < points.length && rightIndex % cols !== 0) {
                    const rightPoint = points[rightIndex];
                    const midX = (point.x + rightPoint.x) / 2;
                    const midY = (point.y + rightPoint.y) / 2;
                    const distToMouse = Math.sqrt(
                        (mouseX - midX) ** 2 + (mouseY - midY) ** 2
                    );
                    const alpha = Math.max(0.1, Math.min(0.8, 1 - distToMouse / 200));

                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(rightPoint.x, rightPoint.y);
                    ctx.strokeStyle = `rgba(100, 150, 255, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                if (bottomIndex < points.length) {
                    const bottomPoint = points[bottomIndex];
                    const midX = (point.x + bottomPoint.x) / 2;
                    const midY = (point.y + bottomPoint.y) / 2;
                    const distToMouse = Math.sqrt(
                        (mouseX - midX) ** 2 + (mouseY - midY) ** 2
                    );
                    const alpha = Math.max(0.1, Math.min(0.8, 1 - distToMouse / 200));

                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(bottomPoint.x, bottomPoint.y);
                    ctx.strokeStyle = `rgba(100, 150, 255, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            points.forEach(point => {
                const distToMouse = Math.sqrt(
                    (mouseX - point.x) ** 2 + (mouseY - point.y) ** 2
                );
                const size = Math.max(2, 6 - distToMouse / 50);
                const alpha = Math.max(0.3, Math.min(1, 1 - distToMouse / 150));

                ctx.beginPath();
                ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(150, 200, 255, ${alpha})`;
                ctx.fill();
            });

            if (mouseX > 0) {
                const gradient = ctx.createRadialGradient(
                    mouseX, mouseY, 0,
                    mouseX, mouseY, 150
                );
                gradient.addColorStop(0, 'rgba(100, 150, 255, 0.3)');
                gradient.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(mouseX, mouseY, 150, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('resize', initPoints);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0"
        />
    );
};

export default InteractiveMeshGrid;
