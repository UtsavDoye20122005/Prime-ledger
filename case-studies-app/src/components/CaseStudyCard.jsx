import React from 'react'
import { motion } from 'framer-motion'

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
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
}

export default function CaseStudyCard({
    industry,
    company,
    challenge,
    solution,
    result,
    link,
}) {
    const color = getColor(industry)

    return (
        <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden"
            style={{
                background: '#111111',
                border: '1px solid #1e1e1e',
            }}
        >
            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, ${color.bg}, transparent)` }}
            />

            {/* Hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                    background: `radial-gradient(circle at 30% 20%, ${color.bg}08 0%, transparent 60%)`,
                }}
            />

            <div className="relative z-10 p-8 flex flex-col gap-7 h-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        {/* Industry badge */}
                        <span
                            className="inline-block px-3 py-1 rounded-full text-[10px] font-dm font-semibold tracking-[0.12em] uppercase mb-3"
                            style={{ background: color.light, color: color.bg }}
                        >
                            {industry}
                        </span>
                        {/* Company name */}
                        <h3 className="font-syne font-bold text-white text-xl leading-tight">
                            {company}
                        </h3>
                    </div>

                    {/* Arrow link icon */}
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read ${company} case study`}
                        className="flex-shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-white/30 hover:text-white transition-all duration-300 group-hover:border-white/20 group-hover:text-white/60"
                    >
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M3 10L10 3M10 3H5M10 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06]" />

                {/* Content sections */}
                <div className="flex flex-col gap-5 flex-1">
                    {/* Challenge */}
                    <div>
                        <p className="font-dm text-[10px] font-semibold tracking-[0.16em] uppercase text-white/30 mb-2">
                            Challenge
                        </p>
                        <p className="font-dm text-white/65 text-[14px] leading-relaxed">
                            {challenge}
                        </p>
                    </div>

                    {/* Solution */}
                    <div>
                        <p className="font-dm text-[10px] font-semibold tracking-[0.16em] uppercase text-white/30 mb-2">
                            Solution
                        </p>
                        <p className="font-dm text-white/65 text-[14px] leading-relaxed">
                            {solution}
                        </p>
                    </div>
                </div>

                {/* Result metric — visually distinct */}
                <div
                    className="rounded-xl p-5 mt-auto"
                    style={{ background: color.light, border: `1px solid ${color.bg}25` }}
                >
                    <p className="font-dm text-[10px] font-semibold tracking-[0.16em] uppercase mb-2" style={{ color: color.bg }}>
                        Results
                    </p>
                    <p className="font-syne font-bold text-white text-[18px] leading-snug">
                        {result}
                    </p>
                </div>
            </div>
        </motion.article>
    )
}
