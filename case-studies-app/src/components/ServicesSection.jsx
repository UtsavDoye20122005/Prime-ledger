import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const SERVICES = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Revenue & GTM Strategy',
        desc: 'We map and rebuild your go-to-market motion — pricing, segmentation, channel mix, and sales cycle — against one goal: predictable, compounding revenue growth.',
        tags: ['Market segmentation', 'Pricing strategy', 'Sales playbook', 'ICP definition'],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Operational Efficiency',
        desc: 'We audit how your business actually runs, find the bottlenecks costing you money and speed, and redesign processes and systems for scale — without headcount bloat.',
        tags: ['Process redesign', 'Automation', 'Workflow optimisation', 'Cost reduction'],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 21H4a1 1 0 0 1-1-1V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 14l4-4 4 4 4-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Data & Analytics',
        desc: 'From fragmented data pipelines to real-time dashboards — we build the infrastructure and intelligence layer that lets your team see clearly and act fast.',
        tags: ['Data strategy', 'BI & dashboards', 'Pipeline architecture', 'Predictive models'],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 12A10 10 0 1 1 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M22 2L12 12M22 2h-6M22 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Growth Marketing',
        desc: 'We build the machinery behind sustainable growth — acquisition, retention, lifecycle, and conversion — grounded in data, not tactics.',
        tags: ['Acquisition strategy', 'Retention systems', 'Lifecycle marketing', 'CRO'],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Product Strategy',
        desc: 'We help you define what to build, in what order, and why — aligned to business outcomes and grounded in user behaviour, not opinion.',
        tags: ['Roadmap design', 'User research', 'Activation & retention', 'OKR frameworks'],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Organisational Design',
        desc: 'We help leadership teams build structures, incentives, and operating rhythms that scale — from Series A to enterprise.',
        tags: ['Org structure', 'Leadership alignment', 'OKRs & KPIs', 'Change management'],
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
}

export default function ServicesSection() {
    const { dark } = useTheme()
    const textPrimary = dark ? '#ffffff' : '#0d0d0d'
    const textMuted = dark ? 'rgba(255,255,255,0.40)' : '#888888'
    const cardBg = dark ? '#111111' : '#ffffff'
    const cardBorder = dark ? '#1e1e1e' : '#e5e5e5'
    const tagBg = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'
    const tagColor = dark ? 'rgba(255,255,255,0.3)' : '#999999'
    const iconColor = dark ? 'rgba(255,255,255,0.55)' : '#555555'

    return (
        <section id="services" className="relative py-32 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
                style={{ background: dark ? '#7B61FF08' : '#7B61FF05' }} />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
                    <p className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7B61FF] mb-4">Services</p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="font-syne font-extrabold leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: textPrimary }}>
                            How we<br />add value.
                        </h2>
                        <p className="font-dm text-sm max-w-sm md:text-right leading-relaxed" style={{ color: textMuted }}>
                            Six practice areas. One integrated approach. Every engagement draws on multiple disciplines working in concert.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {SERVICES.map((s, i) => (
                        <motion.div key={s.title}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                            transition={{ delay: i * 0.06 }}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            className="group rounded-2xl p-7 flex flex-col gap-6 cursor-default transition-border duration-300"
                            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(123,97,255,0.25)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = cardBorder}>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ background: dark ? 'rgba(255,255,255,0.05)' : '#f0f0f0', color: iconColor }}>
                                {s.icon}
                            </div>
                            <div>
                                <h3 className="font-syne font-bold text-lg mb-3 leading-snug" style={{ color: textPrimary }}>{s.title}</h3>
                                <p className="font-dm text-sm leading-relaxed" style={{ color: textMuted }}>{s.desc}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {s.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-dm tracking-wide"
                                        style={{ background: tagBg, color: tagColor }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-20 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
                    style={{ background: dark ? 'linear-gradient(135deg, #7B61FF12 0%, #3b82f608 100%)' : 'linear-gradient(135deg, #7B61FF08 0%, #3b82f604 100%)', border: `1px solid ${dark ? 'rgba(123,97,255,0.15)' : 'rgba(123,97,255,0.10)'}` }}>
                    <div>
                        <p className="font-syne font-bold text-2xl mb-2" style={{ color: textPrimary }}>Not sure where to start?</p>
                        <p className="font-dm text-sm" style={{ color: textMuted }}>We'll help you identify the highest-impact area to address first.</p>
                    </div>
                    <a href="#contact"
                        className="flex-shrink-0 px-8 py-4 rounded-full font-dm font-semibold text-sm text-white bg-[#7B61FF] hover:bg-[#9d87ff] transition-all duration-300 shadow-xl shadow-[#7B61FF]/20">
                        Book a discovery call →
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
