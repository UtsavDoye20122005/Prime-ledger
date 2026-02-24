import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
    const { dark } = useTheme()
    const textPrimary = dark ? '#ffffff' : '#0d0d0d'
    const textMuted = dark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.45)'
    const textDim = dark ? 'rgba(255,255,255,0.40)' : '#888888'
    const gridColor = dark ? '#ffffff' : '#000000'
    const gridOpacity = dark ? 0.03 : 0.04
    const dividerColor = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'
    const outlineBtnStyle = dark
        ? 'border-white/10 text-white/60 hover:border-white/25 hover:text-white'
        : 'border-black/10 text-black/50 hover:border-black/25 hover:text-black'
    const fromColor = dark ? '#080808' : '#f8f8f8'

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24" id="hero">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#7B61FF]/10 blur-[140px]" />
                <div className="absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#3b82f6]/5 blur-[100px]" />
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`, backgroundSize: '80px 80px', opacity: gridOpacity }} />

            <div className="max-w-7xl mx-auto px-6 w-full py-20">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">
                    {/* Tag pill */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7B61FF]/30 bg-[#7B61FF]/10 text-[#9d87ff] text-xs font-dm font-medium tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse" />
                            Real results. Real companies.
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 variants={itemVariants} className="font-syne font-extrabold leading-[1.0] tracking-tight"
                        style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)', color: textPrimary }}>
                        Proof that
                        <br />
                        <span style={{ background: 'linear-gradient(135deg, #7B61FF 0%, #a78bfa 50%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            strategy scales.
                        </span>
                    </motion.h1>

                    {/* Subline */}
                    <motion.p variants={itemVariants} className="mt-8 max-w-2xl font-dm leading-relaxed"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: textMuted }}>
                        We partner with ambitious businesses to drive measurable growth — from early-stage startups to enterprise. Browse the case studies below and see exactly how we do it.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-4">
                        <a href="#case-studies"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7B61FF] text-white font-dm font-medium text-sm hover:bg-[#9d87ff] transition-all duration-300 shadow-xl shadow-[#7B61FF]/25 hover:shadow-[#7B61FF]/40 hover:-translate-y-0.5">
                            Explore case studies
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-80">
                                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#contact"
                            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full border font-dm font-medium text-sm transition-all duration-300 ${outlineBtnStyle}`}>
                            Work with us
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div variants={itemVariants} className="mt-20 flex flex-wrap gap-10 border-t pt-10"
                        style={{ borderColor: dividerColor }}>
                        {[
                            { value: '140+', label: 'Projects delivered' },
                            { value: '$2.4B', label: 'Revenue influenced' },
                            { value: '94%', label: 'Client retention rate' },
                            { value: '11 yrs', label: 'Industry experience' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="font-syne font-bold text-3xl" style={{ color: textPrimary }}>{stat.value}</p>
                                <p className="font-dm text-sm mt-1" style={{ color: textDim }}>{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${fromColor}, transparent)` }} />
        </section>
    )
}
