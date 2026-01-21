import React, { useEffect, useRef } from 'react';

const CircuitBoard = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = 0;
        let mouseY = 0;

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

        const gridSize = 60;
        const nodes = [];
        
        const initNodes = () => {
            nodes.length = 0;
            for (let x = gridSize; x < canvas.width; x += gridSize) {
                for (let y = gridSize; y < canvas.height; y += gridSize) {
                    if (Math.random() > 0.3) {
                        nodes.push({
                            x: x + (Math.random() - 0.5) * 20,
                            y: y + (Math.random() - 0.5) * 20,
                            connections: [],
                            active: false,
                            pulsePhase: Math.random() * Math.PI * 2
                        });
                    }
                }
            }

            nodes.forEach((node, i) => {
                nodes.forEach((other, j) => {
                    if (i !== j) {
                        const dx = other.x - node.x;
                        const dy = other.y - node.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < gridSize * 1.5 && Math.random() > 0.5) {
                            node.connections.push(j);
                        }
                    }
                });
            });
        };
        initNodes();
        window.addEventListener('resize', initNodes);

        let time = 0;
        const pulses = [];

        const animate = () => {
            ctx.fillStyle = '#0a0f0a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nodes.forEach(node => {
                const dx = mouseX - node.x;
                const dy = mouseY - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                node.active = distance < 150;
                node.pulsePhase += 0.05;
            });

            if (Math.random() > 0.95) {
                const startNode = Math.floor(Math.random() * nodes.length);
                if (nodes[startNode].connections.length > 0) {
                    const endNode = nodes[startNode].connections[
                        Math.floor(Math.random() * nodes[startNode].connections.length)
                    ];
                    pulses.push({ from: startNode, to: endNode, progress: 0 });
                }
            }

            ctx.lineWidth = 1;
            nodes.forEach((node, i) => {
                node.connections.forEach(j => {
                    const other = nodes[j];
                    const active = node.active || other.active;
                    
                    ctx.beginPath();
                    
                    const midX = node.x + (other.x - node.x) * 0.5;
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(midX, node.y);
                    ctx.lineTo(midX, other.y);
                    ctx.lineTo(other.x, other.y);
                    
                    ctx.strokeStyle = active ? '#10b98150' : '#10b98120';
                    ctx.stroke();
                });
            });

            for (let i = pulses.length - 1; i >= 0; i--) {
                const pulse = pulses[i];
                pulse.progress += 0.03;
                
                if (pulse.progress >= 1) {
                    pulses.splice(i, 1);
                    continue;
                }

                const from = nodes[pulse.from];
                const to = nodes[pulse.to];
                const midX = from.x + (to.x - from.x) * 0.5;
                
                let x, y;
                if (pulse.progress < 0.33) {
                    const p = pulse.progress / 0.33;
                    x = from.x + (midX - from.x) * p;
                    y = from.y;
                } else if (pulse.progress < 0.66) {
                    const p = (pulse.progress - 0.33) / 0.33;
                    x = midX;
                    y = from.y + (to.y - from.y) * p;
                } else {
                    const p = (pulse.progress - 0.66) / 0.34;
                    x = midX + (to.x - midX) * p;
                    y = to.y;
                }

                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#10b981';
                ctx.fill();
                
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
                gradient.addColorStop(0, '#10b98150');
                gradient.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(x, y, 20, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            nodes.forEach(node => {
                const pulse = (Math.sin(node.pulsePhase) + 1) * 0.5;
                const size = node.active ? 6 + pulse * 3 : 4;
                
                if (node.active) {
                    const gradient = ctx.createRadialGradient(
                        node.x, node.y, 0,
                        node.x, node.y, 30
                    );
                    gradient.addColorStop(0, '#10b98140');
                    gradient.addColorStop(1, 'transparent');
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 30, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }

                ctx.beginPath();
                ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
                ctx.fillStyle = node.active ? '#10b981' : '#10b98160';
                ctx.fill();
            });

            time += 0.016;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('resize', initNodes);
            window.removeEventListener('mousemove', handleMouseMove);
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

export default CircuitBoard;
