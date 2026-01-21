import { useTheme } from './ThemeContext';

export const useThemeStyles = () => {
    const { theme } = useTheme();

    return {
        primaryText: {
            color: theme.textColor,
        },
        secondaryText: {
            color: theme.secondaryTextColor,
        },
        buttonStyle: {
            backgroundColor: theme.buttonBgColor,
            color: theme.textColor,
        },
        accentText: {
            color: theme.primaryColor,
        },
        borderAccent: {
            borderColor: theme.primaryColor,
        },
        hoverAccent: {
            color: theme.primaryColor,
            borderColor: theme.primaryColor,
        },
        theme,
    };
};
