import React, { useEffect, useRef } from 'react';

const NeuralNetwork = () => {
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

        const layers = [4, 6, 8, 6, 4];
        const nodes = [];

        const initNodes = () => {
            nodes.length = 0;
            const layerGap = canvas.width / (layers.length + 1);
            
            layers.forEach((nodeCount, layerIndex) => {
                const nodeGap = canvas.height / (nodeCount + 1);
                for (let i = 0; i < nodeCount; i++) {
                    nodes.push({
                        x: layerGap * (layerIndex + 1),
                        y: nodeGap * (i + 1),
                        layer: layerIndex,
                        activation: Math.random()
                    });
                }
            });
        };
        initNodes();
        window.addEventListener('resize', initNodes);

        let time = 0;

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nodes.forEach(node => {
                const dx = mouseX - node.x;
                const dy = mouseY - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const influence = Math.max(0, 1 - distance / 300);
                node.activation = 0.3 + influence * 0.7 + Math.sin(time + node.x * 0.01) * 0.2;
            });

            for (let i = 0; i < nodes.length; i++) {
                for (let j = 0; j < nodes.length; j++) {
                    if (nodes[j].layer === nodes[i].layer + 1) {
                        const gradient = ctx.createLinearGradient(
                            nodes[i].x, nodes[i].y,
                            nodes[j].x, nodes[j].y
                        );
                        const alpha = (nodes[i].activation + nodes[j].activation) / 4;
                        gradient.addColorStop(0, `rgba(0, 255, 200, ${alpha})`);
                        gradient.addColorStop(1, `rgba(100, 150, 255, ${alpha})`);
                        
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = alpha * 3;
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                const radius = 8 + node.activation * 8;
                
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, radius * 3
                );
                gradient.addColorStop(0, `rgba(0, 255, 200, ${node.activation})`);
                gradient.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + node.activation * 0.5})`;
                ctx.fill();
            });

            const particleCount = 20;
            for (let i = 0; i < particleCount; i++) {
                const progress = ((time * 0.5 + i / particleCount) % 1);
                const startLayer = Math.floor(progress * (layers.length - 1));
                const localProgress = (progress * (layers.length - 1)) % 1;
                
                const startNodes = nodes.filter(n => n.layer === startLayer);
                const endNodes = nodes.filter(n => n.layer === startLayer + 1);
                
                if (startNodes.length && endNodes.length) {
                    const startNode = startNodes[i % startNodes.length];
                    const endNode = endNodes[i % endNodes.length];
                    
                    const x = startNode.x + (endNode.x - startNode.x) * localProgress;
                    const y = startNode.y + (endNode.y - startNode.y) * localProgress;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(0, 255, 200, 0.8)';
                    ctx.fill();
                }
            }

            time += 0.02;
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
            className="fixed inset-0 bg-gray-950"
        />
    );
};

export default NeuralNetwork;
