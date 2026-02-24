import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CASE_STUDIES } from '../data/caseStudies'
import { useTheme } from '../context/ThemeContext'

const INDUSTRY_COLORS = {
    FinTech: { bg: '#7B61FF', light: '#7B61FF18' },
    HealthTech: { bg: '#10b981', light: '#10b98118' },
    SaaS: { bg: '#3b82f6', light: '#3b82f618' },
    eCommerce: { bg: '#f59e0b', light: '#f59e0b18' },
    Logistics: { bg: '#ef4444', light: '#ef444418' },
    EdTech: { bg: '#ec4899', light: '#ec489918' },
    RealEstate: { bg: '#14b8a6', light: '#14b8a618' },
}

function getColor(industry) {
    return INDUSTRY_COLORS[industry] || { bg: '#7B61FF', light: '#7B61FF18' }
}

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
}

const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const INDUSTRIES = ['All', ...Array.from(new Set(CASE_STUDIES.map((c) => c.industry)))]

// ── Card ──────────────────────────────────────────────────────────
function CaseStudyCard({ id, industry, company, challenge, solution, result }) {
    const { dark } = useTheme()
    const color = getColor(industry)
    const cardBg = dark ? '#111111' : '#ffffff'
    const cardBorder = dark ? '#1e1e1e' : '#e5e5e5'
    const textPrimary = dark ? '#ffffff' : '#0d0d0d'
    const textBody = dark ? 'rgba(255,255,255,0.55)' : '#555555'
    const labelColor = dark ? 'rgba(255,255,255,0.28)' : '#aaaaaa'

    return (
        <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden"
            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, ${color.bg}, transparent)` }} />

            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 20%, ${color.bg}08 0%, transparent 60%)` }} />

            <div className="relative z-10 p-8 flex flex-col gap-7 h-full">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-dm font-semibold tracking-[0.12em] uppercase mb-3"
                            style={{ background: color.light, color: color.bg }}>
                            {industry}
                        </span>
                        <h3 className="font-syne font-bold text-xl leading-tight" style={{ color: textPrimary }}>
                            {company}
                        </h3>
                    </div>
                    {/* Arrow → detail page */}
                    <Link to={`/case-studies/${id}`}
                        aria-label={`Read ${company} case study`}
                        className="flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-white/20"
                        style={{ borderColor: cardBorder, color: labelColor }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M3 10L10 3M10 3H5M10 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="h-px" style={{ background: dark ? 'rgba(255,255,255,0.06)' : '#ebebeb' }} />

                <div className="flex flex-col gap-5 flex-1">
                    <div>
                        <p className="font-dm text-[10px] font-semibold tracking-[0.16em] uppercase mb-2" style={{ color: labelColor }}>Challenge</p>
                        <p className="font-dm text-[14px] leading-relaxed" style={{ color: textBody }}>{challenge}</p>
                    </div>
                    <div>
                        <p className="font-dm text-[10px] font-semibold tracking-[0.16em] uppercase mb-2" style={{ color: labelColor }}>Solution</p>
                        <p className="font-dm text-[14px] leading-relaxed" style={{ color: textBody }}>{solution}</p>
                    </div>
                </div>

                <div className="rounded-xl p-5 mt-auto" style={{ background: color.light, border: `1px solid ${color.bg}25` }}>
                    <p className="font-dm text-[10px] font-semibold tracking-[0.16em] uppercase mb-2" style={{ color: color.bg }}>Results</p>
                    <p className="font-syne font-bold text-[18px] leading-snug" style={{ color: textPrimary }}>{result}</p>
                </div>
            </div>
        </motion.article>
    )
}

// ── Page ──────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
    const [active, setActive] = useState('All')
    const { dark } = useTheme()
    const textMuted = dark ? 'rgba(255,255,255,0.4)' : '#888888'
    const filtered = active === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.industry === active)

    return (
        <section id="case-studies" className="relative py-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#7B61FF]/5 blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={headingVariants} className="mb-16">
                    <p className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7B61FF] mb-4">Case Studies</p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="font-syne font-extrabold leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: dark ? '#fff' : '#0d0d0d' }}>
                            Work that<br />speaks for itself.
                        </h2>
                        <p className="font-dm text-sm max-w-sm md:text-right leading-relaxed" style={{ color: textMuted }}>
                            Each engagement is built around measurable outcomes. Browse by industry or explore them all.
                        </p>
                    </div>
                </motion.div>

                {/* Filter chips */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-wrap gap-2 mb-12">
                    {INDUSTRIES.map((ind) => (
                        <button key={ind} onClick={() => setActive(ind)}
                            className={`px-4 py-1.5 rounded-full text-xs font-dm font-medium tracking-wide transition-all duration-300 ${active === ind ? 'bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/25' : ''}`}
                            style={active !== ind ? { border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : '#d5d5d5'}`, color: dark ? 'rgba(255,255,255,0.5)' : '#777' } : {}}>
                            {ind}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filtered.map((c, i) => <CaseStudyCard key={`${c.id}-${i}`} {...c} />)}
                </div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                    className="mt-24 flex flex-col items-center text-center">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/10 mb-12" />
                    <p className="font-syne font-bold text-3xl md:text-4xl mb-4" style={{ color: dark ? '#fff' : '#0d0d0d' }}>Ready to be next?</p>
                    <p className="font-dm text-sm mb-8 max-w-md" style={{ color: textMuted }}>Let's talk about your challenge and map a path to results.</p>
                    <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-dm font-semibold text-sm transition-all duration-300 shadow-xl"
                        style={{ background: dark ? '#fff' : '#0d0d0d', color: dark ? '#000' : '#fff' }}>
                        Start a conversation →
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
