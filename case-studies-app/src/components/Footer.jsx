import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const NAV_COLS = [
    {
        heading: 'Services',
        links: [
            { label: 'Revenue & GTM', href: '/#services' },
            { label: 'Operational Efficiency', href: '/#services' },
            { label: 'Data & Analytics', href: '/#services' },
            { label: 'Growth Marketing', href: '/#services' },
            { label: 'Product Strategy', href: '/#services' },
            { label: 'Organisational Design', href: '/#services' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'About', href: '/#about' },
            { label: 'Case Studies', href: '/#case-studies' },
            { label: 'Contact', href: '/#contact' },
        ],
    },
    {
        heading: 'Contact',
        links: [
            { label: 'hello@primeledger.io', href: 'mailto:hello@primeledger.io' },
            { label: 'growth@primeledger.io', href: 'mailto:growth@primeledger.io' },
            { label: 'Mumbai, India', href: '#' },
        ],
    },
]

export default function Footer() {
    const { dark } = useTheme()
    const bg = dark ? '#070707' : '#f2f2f2'
    const border = dark ? 'rgba(255,255,255,0.06)' : '#e0e0e0'
    const textPrimary = dark ? '#ffffff' : '#0d0d0d'
    const textMuted = dark ? 'rgba(255,255,255,0.30)' : '#aaaaaa'
    const linkHover = dark ? '#ffffff' : '#0d0d0d'

    return (
        <footer style={{ background: bg, borderTop: `1px solid ${border}` }}>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 mb-16">
                    {/* Brand blurb */}
                    <div className="max-w-xs">
                        <Link to="/" className="inline-block mb-5">
                            <span className="font-syne font-bold text-[15px] tracking-tight" style={{ color: textPrimary }}>
                                Prime<span className="text-[#7B61FF]">Ledger</span>
                            </span>
                        </Link>
                        <p className="font-dm text-sm leading-relaxed" style={{ color: textMuted }}>
                            Strategy and operations consultancy helping ambitious companies turn complexity into compounding growth.
                        </p>
                    </div>

                    {/* Nav cols */}
                    {NAV_COLS.map(col => (
                        <div key={col.heading}>
                            <p className="font-dm text-[10px] font-semibold tracking-[0.16em] uppercase mb-4" style={{ color: textMuted }}>
                                {col.heading}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map(link => (
                                    <li key={link.label}>
                                        <a href={link.href}
                                            className="font-dm text-sm transition-colors duration-200"
                                            style={{ color: textMuted }}
                                            onMouseEnter={e => e.currentTarget.style.color = linkHover}
                                            onMouseLeave={e => e.currentTarget.style.color = textMuted}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: border }}>
                    <p className="font-dm text-xs" style={{ color: textMuted }}>
                        © {new Date().getFullYear()} Prime Ledger Consulting Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {['Privacy Policy', 'Terms of Service'].map(t => (
                            <a key={t} href="#" className="font-dm text-xs transition-colors duration-200" style={{ color: textMuted }}
                                onMouseEnter={e => e.currentTarget.style.color = linkHover}
                                onMouseLeave={e => e.currentTarget.style.color = textMuted}>
                                {t}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
