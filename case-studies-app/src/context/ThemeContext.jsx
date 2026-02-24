import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('pl-theme')
        return saved ? saved === 'dark' : true // default dark
    })

    useEffect(() => {
        localStorage.setItem('pl-theme', dark ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', dark)
        document.documentElement.classList.toggle('light', !dark)
    }, [dark])

    return (
        <ThemeContext.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
