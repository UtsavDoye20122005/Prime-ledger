import React, { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    useEffect(() => {
        // Always dark — clear any stale localStorage preference
        localStorage.removeItem('pl-theme')
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
    }, [])

    return (
        <ThemeContext.Provider value={{ dark: true }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
