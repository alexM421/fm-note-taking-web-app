import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider ({ children }) {

    const [theme, setTheme] = React.useState("lightMode")

    React.useEffect(() => {
        document.body.classList.remove("lightMode","darkMode")
        document.body.classList.add(theme)
    })

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}