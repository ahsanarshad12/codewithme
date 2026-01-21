import React, { useEffect, useRef } from 'react';

const APIDataFlow = () => {
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

        const endpoints = [
            { x: 0.15, y: 0.3, label: 'Client', icon: '💻' },
            { x: 0.5, y: 0.3, label: 'API Gateway', icon: '🌐' },
            { x: 0.5, y: 0.6, label: 'Auth Service', icon: '🔐' },
            { x: 0.85, y: 0.3, label: 'Database', icon: '🗄️' },
            { x: 0.85, y: 0.6, label: 'Cache', icon: '⚡' },
        ];

        const connections = [
            [0, 1], [1, 2], [1, 3], [1, 4], [3, 4]
        ];

        const packets = [];

        const createPacket = () => {
            const connection = connections[Math.floor(Math.random() * connections.length)];
            const isRequest = Math.random() > 0.5;
            const from = isRequest ? connection[0] : connection[1];
            const to = isRequest ? connection[1] : connection[0];

            const startX = endpoints[from].x * canvas.width;
            const startY = endpoints[from].y * canvas.height;
            const endX = endpoints[to].x * canvas.width;
            const endY = endpoints[to].y * canvas.height;

            const path = [];
            const controlX = (startX + endX) / 2;
            const controlY = (startY + endY) / 2 - 50;

            for (let t = 0; t <= 1; t += 0.05) {
                const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
                const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;
                path.push({ x, y });
            }

            packets.push({
                x: startX,
                y: startY,
                targetX: endX,
                targetY: endY,
                progress: 0,
                speed: 0.02 + Math.random() * 0.02,
                type: isRequest ? 'request' : 'response',
                path
            });
        };

        let time = 0;

        const animate = () => {
            ctx.fillStyle = '#0a0a15';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (Math.random() > 0.97) createPacket();

            connections.forEach(([from, to]) => {
                const startX = endpoints[from].x * canvas.width;
                const startY = endpoints[from].y * canvas.height;
                const endX = endpoints[to].x * canvas.width;
                const endY = endpoints[to].y * canvas.height;

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                const controlX = (startX + endX) / 2;
                const controlY = (startY + endY) / 2 - 50;
                ctx.quadraticCurveTo(controlX, controlY, endX, endY);
                ctx.strokeStyle = '#ffffff15';
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            for (let i = packets.length - 1; i >= 0; i--) {
                const packet = packets[i];
                packet.progress += packet.speed;

                if (packet.progress >= 1) {
                    packets.splice(i, 1);
                    continue;
                }

                const pathIndex = Math.floor(packet.progress * (packet.path.length - 1));
                const currentPoint = packet.path[pathIndex];

                const gradient = ctx.createRadialGradient(
                    currentPoint.x, currentPoint.y, 0,
                    currentPoint.x, currentPoint.y, 15
                );
                const color = packet.type === 'request' ? '59, 130, 246' : '16, 185, 129';
                gradient.addColorStop(0, `rgba(${color}, 1)`);
                gradient.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.arc(currentPoint.x, currentPoint.y, 15, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(currentPoint.x, currentPoint.y, 5, 0, Math.PI * 2);
                ctx.fillStyle = packet.type === 'request' ? '#3b82f6' : '#10b981';
                ctx.fill();

                for (let j = 1; j < 5; j++) {
                    const trailIndex = Math.max(0, pathIndex - j * 2);
                    const trailPoint = packet.path[trailIndex];
                    ctx.beginPath();
                    ctx.arc(trailPoint.x, trailPoint.y, 3 - j * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${color}, ${0.5 - j * 0.1})`;
                    ctx.fill();
                }
            }

            endpoints.forEach(endpoint => {
                const x = endpoint.x * canvas.width;
                const y = endpoint.y * canvas.height;
                const pulse = Math.sin(time * 2) * 5;

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 60 + pulse);
                gradient.addColorStop(0, 'rgba(100, 150, 255, 0.2)');
                gradient.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(x, y, 60 + pulse, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(x, y, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#1a1a2e';
                ctx.fill();
                ctx.strokeStyle = '#3b82f6';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.font = '24px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(endpoint.icon, x, y + 8);
                ctx.font = '12px sans-serif';
                ctx.fillStyle = '#888';
                ctx.fillText(endpoint.label, x, y + 55);
            });

            time += 0.016;
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
            className="fixed inset-0"
        />
    );
};

export default APIDataFlow;
