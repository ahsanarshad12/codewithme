# Theme Customization System

## How It Works

The theme system is built with React Context and CSS variables to make it easy to customize colors and fonts across the entire website.

## Features

1. **Color Customization**
   - Primary Color (used for accents and hover states)
   - Text Color (main text)
   - Secondary Text Color (dimmed text)
   - Button Background Color
   - Accent Color

2. **Font Family Selection**
   - Multiple built-in font options
   - Preview before applying
   - Instantly applies to entire site

3. **Persistent Storage**
   - Settings are saved to localStorage
   - Theme persists across page reloads
   - Reset to default option available

## Component Usage

### For functional components that need theme colors:

```javascript
'use client';
import { useTheme } from '@/app/context/ThemeContext';

export function MyComponent() {
  const { theme, updateTheme } = useTheme();
  
  return (
    <div style={{ color: theme.textColor }}>
      Hello World
    </div>
  );
}
```

### For styled elements using CSS classes:

The theme automatically overrides Tailwind colors. For example:
- `.text-neutral-300` → uses theme text color
- `.bg-neutral-800` → uses theme button background color
- `.text-emerald-400` → uses theme primary color
- `.hover:text-emerald-400` → uses theme primary color on hover

### How CSS Variables Work:

```css
/* These CSS variables are automatically updated */
--primary-color: theme.primaryColor
--text-color: theme.textColor
--secondary-text-color: theme.secondaryTextColor
--button-bg-color: theme.buttonBgColor
--accent-color: theme.accentColor
```

## File Structure

```
src/app/
├── context/
│   ├── ThemeContext.js          # Theme provider and context
│   └── useThemeStyles.js        # Custom hook for theme styles
├── components/
│   ├── Header.js                # Settings button trigger
│   ├── SettingsSidebar.js       # Theme customization UI
│   └── ...other components
├── globals.css                  # Imports theme overrides
├── theme-overrides.css          # CSS variable overrides
└── layout.js                    # App wrapper with ThemeProvider
```

## Settings Sidebar

Click the Settings button in the top-left corner to open the settings sidebar with:
- **Colors Tab**: Customize all color values with color picker or hex input
- **Fonts Tab**: Select from 8 different font families
- **Presets**: Quick color selection buttons
- **Reset**: Restore default theme

## Automatic Theme Application

All elements throughout the site automatically get the theme colors applied through:
1. CSS variables and `style={{}}` props
2. Tailwind CSS class overrides
3. Inline styles in components
4. The theme-overrides.css file

## To Reset Theme Programmatically

```javascript
const { resetTheme } = useTheme();
resetTheme(); // Resets to default and clears localStorage
```

## Supported Colors in Color Picker

- Emerald (default)
- Blue
- Purple
- Pink
- Red
- Orange
- Yellow
- Cyan

You can also enter any hex color code manually!
