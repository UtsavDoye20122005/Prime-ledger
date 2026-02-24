import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { dark } = useTheme()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navBg = scrolled
        ? dark ? 'rgba(8,8,8,0.85)' : 'rgba(248,248,248,0.85)'
        : 'transparent'
    const borderColor = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'
    const textColor = dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'
    const textHover = dark ? '#fff' : '#000'

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl py-4' : 'py-6'}`}
            style={{ background: navBg, borderBottom: scrolled ? `1px solid ${borderColor}` : 'none' }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Brand name only — no logo icon */}
                <Link to="/" className="group">
                    <span className="font-syne font-bold text-[15px] tracking-tight" style={{ color: dark ? '#fff' : '#0d0d0d' }}>
                        Prime<span className="text-[#7B61FF]">Ledger</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href}
                            className="font-dm text-sm transition-colors duration-300"
                            style={{ color: textColor }}
                            onMouseEnter={e => e.currentTarget.style.color = textHover}
                            onMouseLeave={e => e.currentTarget.style.color = textColor}>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right controls — no theme toggle */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="/#contact"
                        className="font-dm text-sm px-5 py-2.5 rounded-full border transition-all duration-300"
                        style={{ borderColor, color: textColor }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = textHover }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = textColor }}>
                        Get in touch
                    </a>
                    <a href="/#case-studies"
                        className="font-dm text-sm px-5 py-2.5 rounded-full bg-[#7B61FF] text-white hover:bg-[#9d87ff] transition-all duration-300 shadow-lg shadow-[#7B61FF]/20">
                        View work →
                    </a>
                </div>

                {/* Mobile controls — no theme toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <button className="flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        <span className={`block w-5 h-[1.5px] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} style={{ background: dark ? '#fff' : '#000' }} />
                        <span className={`block w-5 h-[1.5px] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: dark ? '#fff' : '#000' }} />
                        <span className={`block w-5 h-[1.5px] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} style={{ background: dark ? '#fff' : '#000' }} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                        className="md:hidden backdrop-blur-xl border-t overflow-hidden"
                        style={{ background: dark ? 'rgba(13,13,13,0.95)' : 'rgba(248,248,248,0.97)', borderColor }}>
                        <div className="px-6 py-6 flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                                    className="font-dm text-sm transition-colors" style={{ color: textColor }}>
                                    {link.label}
                                </a>
                            ))}
                            <a href="/#contact" className="font-dm text-sm px-5 py-2.5 rounded-full bg-[#7B61FF] text-white text-center mt-2">
                                Get in touch →
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
