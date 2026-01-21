'use client';
import React, { useState } from 'react';
import { X, Palette, Type } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SettingsSidebar = ({ isOpen, onClose }) => {
    const { theme, updateTheme, resetTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('colors');

    const fontFamilies = [
        { name: 'System UI', value: 'system-ui, -apple-system, sans-serif' },
        { name: 'Segoe UI', value: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' },
        { name: 'Georgia', value: 'Georgia, serif' },
        { name: 'Courier', value: '"Courier New", Courier, monospace' },
        { name: 'Trebuchet', value: '"Trebuchet MS", sans-serif' },
        { name: 'Verdana', value: 'Verdana, sans-serif' },
        { name: 'Arial', value: 'Arial, sans-serif' },
        { name: 'Times New Roman', value: '"Times New Roman", Times, serif' },
    ];

    const colorPresets = [
        { name: 'Emerald', color: '#10b981' },
        { name: 'Blue', color: '#3b82f6' },
        { name: 'Purple', color: '#a855f7' },
        { name: 'Pink', color: '#ec4899' },
        { name: 'Red', color: '#ef4444' },
        { name: 'Orange', color: '#f97316' },
        { name: 'Yellow', color: '#eab308' },
        { name: 'Cyan', color: '#06b6d4' },
    ];

    const handleColorChange = (colorType, color) => {
        updateTheme({
            [colorType]: color,
        });
    };

    const handleFontChange = (fontFamily) => {
        updateTheme({ fontFamily });
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 bg-opacity-50 z-40 transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 w-80 h-screen bg-neutral-950 border-l border-neutral-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="sticky top-0 bg-neutral-950 border-b border-neutral-800 p-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-neutral-100">Settings</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-neutral-800 rounded-full transition-colors"
                    >
                        <X size={20} className="text-neutral-400" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-neutral-800">
                    <button
                        onClick={() => setActiveTab('colors')}
                        className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors ${activeTab === 'colors'
                            ? 'bg-emerald-400 text-neutral-950 border-b-2 border-emerald-400'
                            : 'text-neutral-400 hover:text-neutral-300'
                            }`}
                    >
                        <Palette size={18} />
                        Colors
                    </button>
                    <button
                        onClick={() => setActiveTab('fonts')}
                        className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors ${activeTab === 'fonts'
                            ? 'bg-emerald-400 text-neutral-950 border-b-2 border-emerald-400'
                            : 'text-neutral-400 hover:text-neutral-300'
                            }`}
                    >
                        <Type size={18} />
                        Fonts
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Colors Tab */}
                    {activeTab === 'colors' && (
                        <div className="space-y-6">
                            {/* Primary Color */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                                    Primary Color
                                </label>
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="color"
                                        value={theme.primaryColor}
                                        onChange={(e) =>
                                            handleColorChange('primaryColor', e.target.value)
                                        }
                                        className="w-16 h-10 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={theme.primaryColor}
                                        onChange={(e) =>
                                            handleColorChange('primaryColor', e.target.value)
                                        }
                                        className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 text-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {colorPresets.map((preset) => (
                                        <button
                                            key={preset.color}
                                            onClick={() =>
                                                handleColorChange('primaryColor', preset.color)
                                            }
                                            className="h-10 rounded border-2 transition-all hover:scale-105"
                                            style={{
                                                backgroundColor: preset.color,
                                                borderColor:
                                                    theme.primaryColor === preset.color
                                                        ? '#fff'
                                                        : 'transparent',
                                            }}
                                            title={preset.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Text Color */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                                    Text Color
                                </label>
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="color"
                                        value={theme.textColor}
                                        onChange={(e) =>
                                            handleColorChange('textColor', e.target.value)
                                        }
                                        className="w-16 h-10 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={theme.textColor}
                                        onChange={(e) =>
                                            handleColorChange('textColor', e.target.value)
                                        }
                                        className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 text-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {colorPresets.map((preset) => (
                                        <button
                                            key={preset.color + 'text'}
                                            onClick={() =>
                                                handleColorChange('textColor', preset.color)
                                            }
                                            className="h-10 rounded border-2 transition-all hover:scale-105"
                                            style={{
                                                backgroundColor: preset.color,
                                                borderColor:
                                                    theme.textColor === preset.color
                                                        ? '#fff'
                                                        : 'transparent',
                                            }}
                                            title={preset.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Secondary Text Color */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                                    Secondary Text Color
                                </label>
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="color"
                                        value={theme.secondaryTextColor}
                                        onChange={(e) =>
                                            handleColorChange('secondaryTextColor', e.target.value)
                                        }
                                        className="w-16 h-10 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={theme.secondaryTextColor}
                                        onChange={(e) =>
                                            handleColorChange('secondaryTextColor', e.target.value)
                                        }
                                        className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Button Background Color */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                                    Button Background Color
                                </label>
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="color"
                                        value={theme.buttonBgColor}
                                        onChange={(e) =>
                                            handleColorChange('buttonBgColor', e.target.value)
                                        }
                                        className="w-16 h-10 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={theme.buttonBgColor}
                                        onChange={(e) =>
                                            handleColorChange('buttonBgColor', e.target.value)
                                        }
                                        className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 text-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {colorPresets.map((preset) => (
                                        <button
                                            key={preset.color + 'btn'}
                                            onClick={() =>
                                                handleColorChange('buttonBgColor', preset.color)
                                            }
                                            className="h-10 rounded border-2 transition-all hover:scale-105"
                                            style={{
                                                backgroundColor: preset.color,
                                                borderColor:
                                                    theme.buttonBgColor === preset.color
                                                        ? '#fff'
                                                        : 'transparent',
                                            }}
                                            title={preset.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Fonts Tab */}
                    {activeTab === 'fonts' && (
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-neutral-300 mb-4">
                                Font Family
                            </label>
                            <div className="space-y-2">
                                {fontFamilies.map((font) => (
                                    <button
                                        key={font.value}
                                        onClick={() => handleFontChange(font.value)}
                                        className={`w-full px-4 py-3 rounded border-2 transition-all text-left ${theme.fontFamily === font.value
                                            ? 'border-emerald-400 bg-emerald-400 bg-opacity-10'
                                            : 'border-neutral-700 hover:border-neutral-600'
                                            }`}
                                        style={{ fontFamily: font.value }}
                                    >
                                        <div className="text-sm font-semibold text-neutral-300">
                                            {font.name}
                                        </div>
                                        <div className="text-xs text-neutral-500">
                                            The quick brown fox jumps over the lazy dog
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Reset Button */}
                <div className="p-6 border-t border-neutral-800">
                    <button
                        onClick={resetTheme}
                        className="w-full py-2 px-4 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded transition-colors text-sm font-medium"
                    >
                        Reset to Default
                    </button>
                </div>
            </div>
        </>
    );
};

export default SettingsSidebar;
