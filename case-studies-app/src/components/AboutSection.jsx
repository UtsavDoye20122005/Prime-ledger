import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const VALUES = [
    { icon: '◈', title: 'Outcomes over output', desc: 'We measure every engagement by business results, not deliverables delivered.' },
    { icon: '◎', title: 'Direct, not diplomatic', desc: 'We tell clients what they need to hear, not what they want to hear. Clarity is a form of respect.' },
    { icon: '⬡', title: 'Evidence over intuition', desc: 'Every recommendation is grounded in data. We diagnose before we prescribe.' },
    { icon: '⊕', title: 'Speed with rigour', desc: "We move fast because we're efficient — not because we're cutting corners." },
]

const TEAM = [
    { name: 'Arjun Mehta', role: 'Founder & Managing Partner', bg: 'from-[#7B61FF] to-[#4f46e5]', init: 'AM' },
    { name: 'Priya Sharma', role: 'Head of Analytics', bg: 'from-[#10b981] to-[#059669]', init: 'PS' },
    { name: 'Rahul Nair', role: 'GTM Practice Lead', bg: 'from-[#3b82f6] to-[#2563eb]', init: 'RN' },
    { name: 'Sana Khan', role: 'Operations Lead', bg: 'from-[#f59e0b] to-[#d97706]', init: 'SK' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function AboutSection() {
    const { dark } = useTheme()
    const textPrimary = dark ? '#ffffff' : '#0d0d0d'
    const textMuted = dark ? 'rgba(255,255,255,0.40)' : '#888888'
    const textBody = dark ? 'rgba(255,255,255,0.60)' : '#555555'
    const cardBg = dark ? '#111111' : '#ffffff'
    const cardBorder = dark ? '#1e1e1e' : '#e5e5e5'
    const divider = dark ? 'rgba(255,255,255,0.06)' : '#eeeeee'

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
                style={{ background: dark ? '#7B61FF06' : '#7B61FF04' }} />

            <div className="max-w-7xl mx-auto px-6">

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
                    <p className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7B61FF] mb-4">About</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <h2 className="font-syne font-extrabold leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: textPrimary }}>
                            We're Prime<br />Ledger.
                        </h2>
                        <div className="flex flex-col gap-5 justify-center">
                            <p className="font-dm text-[15px] leading-relaxed" style={{ color: textBody }}>
                                Prime Ledger is a strategy and operations consultancy founded in Mumbai in 2021. We work with ambitious companies across FinTech, SaaS, eCommerce, HealthTech, and Logistics — at the intersection of business strategy and technical execution.
                            </p>
                            <p className="font-dm text-[15px] leading-relaxed" style={{ color: textBody }}>
                                We're not a traditional consultancy. We don't produce decks and disengage. We embed with our clients, get our hands dirty in the data, and stay until the numbers move.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20 rounded-2xl overflow-hidden"
                    style={{ border: `1px solid ${cardBorder}`, background: cardBorder }}>
                    {[
                        { value: '4+', label: 'Years operating' },
                        { value: '60+', label: 'Engagements completed' },
                        { value: '$180M+', label: 'Client revenue influenced' },
                        { value: '9', label: 'Industries served' },
                    ].map(s => (
                        <div key={s.label} className="p-8 flex flex-col gap-1" style={{ background: cardBg }}>
                            <p className="font-syne font-extrabold text-3xl text-[#7B61FF]">{s.value}</p>
                            <p className="font-dm text-[12px]" style={{ color: textMuted }}>{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-1 h-5 rounded-full bg-[#7B61FF]" />
                        <p className="font-dm text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: textMuted }}>How we work</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {VALUES.map((v) => (
                            <div key={v.title} className="flex gap-4 p-6 rounded-2xl"
                                style={{ background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', border: `1px solid ${cardBorder}` }}>
                                <span className="text-2xl text-[#7B61FF] flex-shrink-0 mt-0.5">{v.icon}</span>
                                <div>
                                    <p className="font-syne font-bold text-[15px] mb-1.5" style={{ color: textPrimary }}>{v.title}</p>
                                    <p className="font-dm text-sm leading-relaxed" style={{ color: textMuted }}>{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-1 h-5 rounded-full bg-[#7B61FF]" />
                        <p className="font-dm text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: textMuted }}>Core team</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {TEAM.map((m) => (
                            <div key={m.name} className="rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-default"
                                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(123,97,255,0.25)'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = cardBorder}>
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.bg} flex items-center justify-center font-syne font-bold text-white text-sm`}>
                                    {m.init}
                                </div>
                                <div>
                                    <p className="font-syne font-bold text-sm mb-1" style={{ color: textPrimary }}>{m.name}</p>
                                    <p className="font-dm text-[11px]" style={{ color: textMuted }}>{m.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="mt-20 pt-20 border-t text-center" style={{ borderColor: divider }}>
                    <p className="font-syne font-bold italic leading-snug max-w-2xl mx-auto"
                        style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: dark ? 'rgba(255,255,255,0.15)' : '#cccccc' }}>
                        "The best consultants don't bring answers. They bring better questions — and the rigour to find the right answers together."
                    </p>
                    <p className="font-dm text-xs mt-4" style={{ color: textMuted }}>— Arjun Mehta, Founder</p>
                </motion.div>
            </div>
        </section>
    )
}
