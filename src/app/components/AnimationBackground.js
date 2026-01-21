import React from 'react';
import { useTheme } from '../context/ThemeContext';
import AuroraBorealis from './animations/AuroraBorealis';
import FloatingBubbles from './animations/FloatingBubbles';
import GalaxySpiral from './animations/GalaxySpiral';
import Fireflies from './animations/Fireflies';
import MatrixRain from './animations/MatrixRain';
import GeometricShapes from './animations/GeometricShapes';
import MorphingBlob from './animations/MorphingBlob';
import WaveGradient from './animations/WaveGradient';
import Constellation from './animations/Constellation';
import RainDrops from './animations/RainDrops';
import APIDataFlow from './animations/APIDataFlow';
import CircuitBoard from './animations/CircuitBoard';
import CodeRain3D from './animations/CodeRain3D';
import CodeSyntaxParticles from './animations/CodeSyntaxParticles';
import CodeTerminal from './animations/CodeTerminal';
import GitCommitGraph from './animations/GitCommitGraph';
import InteractiveMeshGrid from './animations/InteractiveMeshGrid';
import KeyboardHeatmap from './animations/KeyboardHeatmap';
import NeuralNetwork from './animations/NeuralNetwork';
import TechStackOrbit from './animations/TechStackOrbit';
import LiquidWaveBackground from './LiquidWaveBackground';

const AnimationBackground = () => {
    const { theme } = useTheme();

    const renderAnimation = () => {
        switch (theme.animation) {
            case 'aurora-borealis':
                return <AuroraBorealis />;
            case 'floating-bubbles':
                return <FloatingBubbles />;
            case 'galaxy-spiral':
                return <GalaxySpiral />;
            case 'fireflies':
                return <Fireflies />;
            case 'matrix-rain':
                return <MatrixRain />;
            case 'geometric-shapes':
                return <GeometricShapes />;
            case 'morphing-blob':
                return <MorphingBlob />;
            case 'wave-gradient':
                return <WaveGradient />;
            case 'constellation':
                return <Constellation />;
            case 'rain-drops':
                return <RainDrops />;
            case 'api-data-flow':
                return <APIDataFlow />;
            case 'circuit-board':
                return <CircuitBoard />;
            case 'code-rain-3d':
                return <CodeRain3D />;
            case 'code-syntax-particles':
                return <CodeSyntaxParticles />;
            case 'code-terminal':
                return <CodeTerminal />;
            case 'git-commit-graph':
                return <GitCommitGraph />;
            case 'interactive-mesh-grid':
                return <InteractiveMeshGrid />;
            case 'keyboard-heatmap':
                return <KeyboardHeatmap />;
            case 'neural-network':
                return <NeuralNetwork />;
            case 'tech-stack-orbit':
                return <TechStackOrbit />;
            case 'liquid-wave':
            default:
                return <LiquidWaveBackground />;
        }
    };

    return renderAnimation();
};

export default AnimationBackground;
