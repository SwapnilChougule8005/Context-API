import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({
    darkMode: false,
    changeTheme: () => {},
});

const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = () => {
        setDarkMode((prev) => !prev);
    };

    const context = {
        changeTheme : handleClick,
        darkMode,
    };
    return (
        <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context;
}

export default ThemeProvider