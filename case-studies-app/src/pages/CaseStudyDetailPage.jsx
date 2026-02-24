import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CASE_STUDIES } from '../data/caseStudies'
import { useTheme } from '../context/ThemeContext'

const INDUSTRY_COLORS = {
    FinTech: '#7B61FF',
    HealthTech: '#10b981',
    SaaS: '#3b82f6',
    eCommerce: '#f59e0b',
    Logistics: '#ef4444',
    EdTech: '#ec4899',
    RealEstate: '#14b8a6',
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
}

export default function CaseStudyDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { dark } = useTheme()
    const cs = CASE_STUDIES.find((c) => c.id === id)

    useEffect(() => { window.scrollTo(0, 0) }, [id])

    if (!cs) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
                style={{ background: dark ? '#080808' : '#f5f5f5' }}>
                <p className="font-syne font-bold text-4xl" style={{ color: dark ? '#fff' : '#111' }}>404</p>
                <p className="font-dm text-sm" style={{ color: dark ? 'rgba(255,255,255,0.4)' : '#666' }}>Case study not found.</p>
                <button onClick={() => navigate('/#case-studies')}
                    className="px-6 py-3 rounded-full bg-[#7B61FF] text-white font-dm text-sm">
                    ← Back to case studies
                </button>
            </div>
        )
    }

    const color = INDUSTRY_COLORS[cs.industry] || '#7B61FF'
    const bg = dark ? '#080808' : '#f8f8f8'
    const cardBg = dark ? '#111111' : '#ffffff'
    const cardBorder = dark ? '#1e1e1e' : '#e5e5e5'
    const textPrimary = dark ? '#ffffff' : '#0d0d0d'
    const textSecondary = dark ? 'rgba(255,255,255,0.55)' : '#555555'
    const textMuted = dark ? 'rgba(255,255,255,0.25)' : '#aaaaaa'
    const divider = dark ? 'rgba(255,255,255,0.06)' : '#e8e8e8'

    const otherStudies = CASE_STUDIES.filter((c) => c.id !== cs.id).slice(0, 3)

    return (
        <div style={{ background: bg, minHeight: '100vh' }}>
            {/* ── Hero ──────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[160px]"
                        style={{ background: color + '12' }} />
                </div>
                {/* Grid */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: dark ? 0.02 : 0.04, color: dark ? '#fff' : '#000' }} />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
                        <Link to="/#case-studies"
                            className="inline-flex items-center gap-2 font-dm text-xs transition-colors"
                            style={{ color: textMuted }}
                            onMouseEnter={e => e.currentTarget.style.color = color}
                            onMouseLeave={e => e.currentTarget.style.color = textMuted}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            All case studies
                        </Link>
                    </motion.div>

                    {/* Industry badge */}
                    <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible" className="mb-5">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-dm font-semibold tracking-widest uppercase"
                            style={{ background: color + '18', color }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                            {cs.industry}
                        </span>
                    </motion.div>

                    {/* Company + tagline */}
                    <motion.h1 variants={fadeUp} custom={2} initial="hidden" animate="visible"
                        className="font-syne font-extrabold leading-tight mb-4"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: textPrimary }}>
                        {cs.company}
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={3} initial="hidden" animate="visible"
                        className="font-dm text-xl leading-relaxed mb-10"
                        style={{ color: textSecondary }}>
                        {cs.tagline}
                    </motion.p>

                    {/* Meta strip */}
                    <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible"
                        className="flex flex-wrap gap-6 pb-10 border-b"
                        style={{ borderColor: divider }}>
                        {[
                            { label: 'Duration', value: cs.duration },
                            { label: 'Team size', value: cs.teamSize },
                            { label: 'Year', value: cs.year },
                            { label: 'Industry', value: cs.industry },
                        ].map(m => (
                            <div key={m.label}>
                                <p className="font-dm text-[10px] tracking-widest uppercase mb-1" style={{ color: textMuted }}>{m.label}</p>
                                <p className="font-dm font-medium text-sm" style={{ color: textPrimary }}>{m.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Body ──────────────────────────────────────── */}
            <div className="max-w-4xl mx-auto px-6 pb-32">

                {/* Metrics row */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {cs.metrics.map((m, i) => (
                        <motion.div key={m.label} custom={i * 0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="rounded-2xl p-5 text-center"
                            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
                            <p className="font-syne font-extrabold text-2xl mb-1" style={{ color }}>{m.value}</p>
                            <p className="font-dm text-[11px] tracking-wide" style={{ color: textMuted }}>{m.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Challenge */}
                <Section title="The Challenge" color={color} textPrimary={textPrimary} textMuted={textMuted} divider={divider}>
                    {cs.fullChallenge.map((p, i) => (
                        <p key={i} className="font-dm leading-relaxed mb-4 last:mb-0 text-[15px]" style={{ color: textSecondary }}>{p}</p>
                    ))}
                </Section>

                {/* Solution */}
                <Section title="Our Solution" color={color} textPrimary={textPrimary} textMuted={textMuted} divider={divider}>
                    <ol className="flex flex-col gap-5">
                        {cs.fullSolution.map((step, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-syne font-bold mt-0.5"
                                    style={{ background: color + '18', color }}>
                                    {i + 1}
                                </span>
                                <p className="font-dm text-[15px] leading-relaxed" style={{ color: textSecondary }}>{step}</p>
                            </li>
                        ))}
                    </ol>
                </Section>

                {/* Result highlight */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="rounded-2xl p-8 mb-16"
                    style={{ background: color + '10', border: `1px solid ${color}25` }}>
                    <p className="font-dm text-[10px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color }}>
                        Bottom line
                    </p>
                    <p className="font-syne font-bold text-xl leading-snug" style={{ color: textPrimary }}>
                        {cs.result}
                    </p>
                </motion.div>

                {/* Testimonial */}
                {cs.testimonial && (
                    <motion.blockquote variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="rounded-2xl p-8 mb-16 flex flex-col gap-4"
                        style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
                        <p className="font-syne font-bold text-3xl" style={{ color: color + '60' }}>"</p>
                        <p className="font-dm text-[16px] leading-relaxed italic" style={{ color: textSecondary }}>
                            {cs.testimonial.quote}
                        </p>
                        <p className="font-dm text-xs tracking-wider" style={{ color: textMuted }}>
                            — {cs.testimonial.author}
                        </p>
                    </motion.blockquote>
                )}

                {/* CTA */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="text-center mb-28">
                    <p className="font-syne font-bold text-2xl mb-3" style={{ color: textPrimary }}>Want results like these?</p>
                    <p className="font-dm text-sm mb-8" style={{ color: textMuted }}>Tell us about your challenge.</p>
                    <Link to="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-dm font-semibold text-sm text-white transition-all duration-300 shadow-xl"
                        style={{ background: color, boxShadow: `0 20px 60px ${color}30` }}>
                        Start a conversation →
                    </Link>
                </motion.div>

                {/* More case studies */}
                <div>
                    <p className="font-dm text-[11px] tracking-[0.18em] uppercase mb-6" style={{ color: textMuted }}>More case studies</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {otherStudies.map((other) => {
                            const c2 = INDUSTRY_COLORS[other.industry] || '#7B61FF'
                            return (
                                <Link key={other.id} to={`/case-studies/${other.id}`}
                                    className="group rounded-xl p-5 transition-all duration-300 block"
                                    style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = c2 + '50'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = cardBorder}>
                                    <span className="text-[10px] font-semibold tracking-widest uppercase mb-2 block" style={{ color: c2 }}>
                                        {other.industry}
                                    </span>
                                    <p className="font-syne font-bold text-sm mb-2" style={{ color: textPrimary }}>{other.company}</p>
                                    <p className="font-dm text-xs leading-relaxed" style={{ color: textMuted }}>{other.result}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Section({ title, color, textPrimary, textMuted, divider, children }) {
    return (
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-14 pb-14 border-b" style={{ borderColor: divider }}>
            <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-5 rounded-full flex-shrink-0" style={{ background: color }} />
                <p className="font-dm text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: textMuted }}>{title}</p>
            </div>
            {children}
        </motion.div>
    )
}
