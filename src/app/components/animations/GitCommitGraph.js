import React, { useEffect, useRef } from 'react';

const GitCommitGraph = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let scrollOffset = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const branches = ['main', 'feature', 'develop', 'hotfix'];
        const branchColors = ['#10b981', '#3b82f6', '#8b5cf6', '#ef4444'];
        
        const commits = [];
        const messages = [
            'Initial commit',
            'Add authentication',
            'Fix navbar bug',
            'Update dependencies',
            'Refactor components',
            'Add dark mode',
            'Optimize performance',
            'Add unit tests',
            'Update README',
            'Fix typo',
            'Add API integration',
            'Merge feature branch',
        ];

        for (let i = 0; i < 50; i++) {
            const branch = Math.floor(Math.random() * branches.length);
            commits.push({
                x: 150 + branch * 80,
                y: i * 80,
                branch,
                message: messages[i % messages.length],
                hash: Math.random().toString(36).substring(2, 9),
                mergeFrom: Math.random() > 0.8 ? (branch + 1) % branches.length : undefined
            });
        }

        const animate = () => {
            ctx.fillStyle = '#0a0a0f';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            scrollOffset += 0.5;
            if (scrollOffset > 80) scrollOffset = 0;

            branches.forEach((_, i) => {
                ctx.beginPath();
                ctx.moveTo(150 + i * 80, 0);
                ctx.lineTo(150 + i * 80, canvas.height);
                ctx.strokeStyle = branchColors[i] + '30';
                ctx.lineWidth = 3;
                ctx.stroke();
            });

            commits.forEach((commit, idx) => {
                const y = commit.y - scrollOffset + canvas.height;
                const adjustedY = y % (commits.length * 80);
                
                if (adjustedY < -50 || adjustedY > canvas.height + 50) return;

                if (commit.mergeFrom !== undefined) {
                    ctx.beginPath();
                    ctx.moveTo(commit.x, adjustedY);
                    ctx.quadraticCurveTo(
                        150 + commit.mergeFrom * 80,
                        adjustedY - 40,
                        150 + commit.mergeFrom * 80,
                        adjustedY - 80
                    );
                    ctx.strokeStyle = branchColors[commit.mergeFrom] + '60';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.moveTo(commit.x, adjustedY);
                ctx.lineTo(commit.x, adjustedY - 80);
                ctx.strokeStyle = branchColors[commit.branch];
                ctx.lineWidth = 3;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(commit.x, adjustedY, 12, 0, Math.PI * 2);
                ctx.fillStyle = branchColors[commit.branch];
                ctx.fill();
                ctx.beginPath();
                ctx.arc(commit.x, adjustedY, 6, 0, Math.PI * 2);
                ctx.fillStyle = '#0a0a0f';
                ctx.fill();

                ctx.font = '12px monospace';
                ctx.fillStyle = '#888';
                ctx.fillText(commit.hash, commit.x + 25, adjustedY - 5);
                ctx.fillStyle = '#fff';
                ctx.font = '14px sans-serif';
                ctx.fillText(commit.message, commit.x + 25, adjustedY + 12);
            });

            ctx.font = 'bold 14px monospace';
            branches.forEach((branch, i) => {
                ctx.fillStyle = branchColors[i];
                ctx.fillText(branch, 150 + i * 80 - 20, 30);
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
            className="fixed inset-0"
        />
    );
};

export default GitCommitGraph;
