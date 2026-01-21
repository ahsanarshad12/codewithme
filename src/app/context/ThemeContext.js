'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        primaryColor: '#10b981', // emerald-400
        textColor: '#e5e7eb', // neutral-200
        secondaryTextColor: '#a3a3a3', // neutral-400
        buttonBgColor: '#1f2937', // neutral-800
        accentColor: '#10b981', // emerald-400
        fontFamily: 'system-ui, -apple-system, sans-serif',
        animation: 'liquid-wave', // Default animation
    });

    const [isLoaded, setIsLoaded] = useState(false);

    // Load theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('userTheme');
        if (savedTheme) {
            try {
                setTheme(JSON.parse(savedTheme));
            } catch (error) {
                console.error('Error loading theme:', error);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('userTheme', JSON.stringify(theme));
        }
    }, [theme, isLoaded]);

    const updateTheme = (newTheme) => {
        setTheme(prev => ({ ...prev, ...newTheme }));
    };

    const resetTheme = () => {
        const defaultTheme = {
            primaryColor: '#10b981',
            textColor: '#e5e7eb',
            secondaryTextColor: '#a3a3a3',
            buttonBgColor: '#1f2937',
            accentColor: '#10b981',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            animation: 'liquid-wave',
        };
        setTheme(defaultTheme);
        localStorage.removeItem('userTheme');
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
