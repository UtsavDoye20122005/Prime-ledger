import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const CONTACT_REASONS = [
    'Revenue & GTM Strategy',
    'Operational Efficiency',
    'Data & Analytics',
    'Growth Marketing',
    'Product Strategy',
    'Organisational Design',
    'Something else',
]

const FAQ = [
    {
        q: 'How long does a typical engagement last?',
        a: 'Most initial engagements run 8–16 weeks, depending on scope. Many clients extend into ongoing retained partnerships after the first project.',
    },
    {
        q: 'Do you work with early-stage startups?',
        a: 'Yes. We work with companies from Series A through enterprise. Context changes; the rigour doesn\'t.',
    },
    {
        q: 'How do you charge?',
        a: 'Primarily project-based or retainer, with some engagements including performance-linked fees tied to outcomes. We\'ll scope transparently.',
    },
    {
        q: 'How quickly can you start?',
        a: 'Typically within 2–3 weeks of signed agreement. We run a focused kickoff process to ensure no ramp-up time is wasted.',
    },
]

function FAQItem({ q, a, dark, faqBorder, textSecondary, textMuted }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border-b last:border-0" style={{ borderColor: faqBorder }}>
            <button onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group" aria-expanded={open}>
                <span className="font-dm text-sm transition-colors duration-200" style={{ color: textSecondary }}>{q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200"
                    style={{ borderColor: dark ? 'rgba(255,255,255,0.10)' : '#ddd', color: textMuted, transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease, border-color 0.2s' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10">
                        <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                </span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                        <p className="font-dm text-sm leading-relaxed pb-5 pr-8" style={{ color: textMuted }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function ContactSection() {
    const { dark } = useTheme()
    const [form, setForm] = useState({ name: '', email: '', company: '', reason: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const cardBg = dark ? '#111111' : '#ffffff'
    const cardBorder = dark ? '#1e1e1e' : '#e5e5e5'
    const textPrimary = dark ? '#ffffff' : '#0d0d0d'
    const textMuted = dark ? 'rgba(255,255,255,0.30)' : '#aaaaaa'
    const textBody = dark ? 'rgba(255,255,255,0.45)' : '#666666'
    const inputBg = dark ? '#111111' : '#f9f9f9'
    const inputBorder = dark ? 'rgba(255,255,255,0.10)' : '#e0e0e0'
    const labelColor = dark ? 'rgba(255,255,255,0.30)' : '#999999'
    const iconColor = dark ? 'rgba(255,255,255,0.70)' : '#444444'
    const faqBorder = dark ? 'rgba(255,255,255,0.06)' : '#eeeeee'

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (error) setError('')
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            if (res.ok && data.success) {
                setSubmitted(true)
            } else {
                setError(data.message || 'Something went wrong. Please try again.')
            }
        } catch (err) {
            setError('Could not reach the server. Please check your connection and try again.')
        } finally {
            setLoading(false)
        }
    }

    const inputClass = `w-full border rounded-xl px-4 py-3.5 font-dm text-sm focus:outline-none focus:border-[#7B61FF]/60 focus:ring-1 focus:ring-[#7B61FF]/30 transition-all duration-200`

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7B61FF]/6 rounded-full blur-[150px] pointer-events-none" />
            {/* Light mode background softener */}
            {!dark && <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(245,245,245,0.5))' }} />}

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <p className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7B61FF] mb-4">
                        Get in touch
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2
                            className="font-syne font-extrabold leading-tight"
                            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: textPrimary }}
                        >
                            Let's build
                            <br />
                            something real.
                        </h2>
                        <p className="font-dm text-sm max-w-xs lg:text-right leading-relaxed" style={{ color: textMuted }}>
                            Tell us about your challenge. We respond within one business day.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">

                    {/* ── Contact Form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                    >
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-4"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-dm text-[11px] tracking-wider uppercase block mb-2" style={{ color: labelColor }}>Your name</label>
                                            <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith"
                                                className={inputClass} style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: textPrimary }} />
                                        </div>
                                        <div>
                                            <label className="font-dm text-[11px] tracking-wider uppercase block mb-2" style={{ color: labelColor }}>Work email</label>
                                            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@company.com"
                                                className={inputClass} style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: textPrimary }} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-dm text-[11px] tracking-wider uppercase block mb-2" style={{ color: labelColor }}>Company</label>
                                        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                                            className={inputClass} style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: textPrimary }} />
                                    </div>

                                    <div>
                                        <label className="font-dm text-[11px] tracking-wider uppercase block mb-2" style={{ color: labelColor }}>I'm interested in</label>
                                        <select name="reason" value={form.reason} onChange={handleChange}
                                            className={inputClass + ' appearance-none'}
                                            style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: form.reason ? textPrimary : 'rgba(128,128,128,0.6)', backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
                                            <option value="" disabled>Select a service area…</option>
                                            {CONTACT_REASONS.map((r) => (
                                                <option key={r} value={r} style={{ background: inputBg, color: textPrimary }}>{r}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="font-dm text-[11px] tracking-wider uppercase block mb-2" style={{ color: labelColor }}>Tell us about your challenge</label>
                                        <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                                            placeholder="What's the core problem you're trying to solve? Give us context — the more specific, the better our response."
                                            className={inputClass + ' resize-none'}
                                            style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: textPrimary }} />
                                    </div>

                                    {/* Error message */}
                                    {error && (
                                        <div className="flex items-start gap-3 px-4 py-3 rounded-xl" style={{ background: '#ef444415', border: '1px solid #ef444430' }}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                                                <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.4" />
                                                <path d="M8 5v3.5M8 11h.01" stroke="#ef4444" strokeWidth="1.4" strokeLinecap="round" />
                                            </svg>
                                            <p className="font-dm text-[13px]" style={{ color: '#ef4444' }}>{error}</p>
                                        </div>
                                    )}

                                    <button type="submit" disabled={loading}
                                        className="mt-2 w-full md:w-auto px-8 py-4 rounded-full bg-[#7B61FF] text-white font-dm font-semibold text-sm hover:bg-[#9d87ff] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#7B61FF]/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                                                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                                </svg>
                                                Sending…
                                            </>
                                        ) : ('Send message →')}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col items-start gap-5 py-10">
                                    <div className="w-14 h-14 rounded-2xl bg-[#10b981]/15 border border-[#10b981]/25 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12l5 5L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-syne font-bold text-xl mb-2" style={{ color: textPrimary }}>Message received.</h3>
                                        <p className="font-dm text-sm leading-relaxed max-w-sm" style={{ color: textBody }}>
                                            Thanks for reaching out. Someone from our team will be in touch within one business day.
                                        </p>
                                    </div>
                                    <button onClick={() => { setSubmitted(false); setError(''); setForm({ name: '', email: '', company: '', reason: '', message: '' }) }}
                                        className="font-dm text-sm transition-colors underline underline-offset-4" style={{ color: textMuted }}>
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Right column: info + FAQ ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, delay: 0.1 }}
                        className="flex flex-col gap-8"
                    >
                        {/* Contact info card */}
                        <div className="rounded-2xl p-7 flex flex-col gap-5" style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
                            <p className="font-dm text-[11px] tracking-[0.15em] uppercase" style={{ color: textMuted }}>Direct contact</p>
                            <div className="flex flex-col gap-4">
                                {[
                                    { label: 'General enquiries', value: 'hello@primeledger.io', icon: '✉' },
                                    { label: 'New business', value: 'growth@primeledger.io', icon: '◈' },
                                    { label: 'Head office', value: 'Mumbai, India — GMT+5:30', icon: '◎' },
                                    { label: 'Response time', value: 'Within 1 business day', icon: '◷' },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-3">
                                        <span className="text-[#7B61FF] text-sm mt-0.5 w-4">{item.icon}</span>
                                        <div>
                                            <p className="font-dm text-[11px] mb-0.5" style={{ color: textMuted }}>{item.label}</p>
                                            <p className="font-dm text-sm" style={{ color: iconColor }}>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="rounded-2xl px-7 pt-7 pb-3" style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
                            <p className="font-dm text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: textMuted }}>FAQ</p>
                            {FAQ.map((item) => (
                                <FAQItem key={item.q} dark={dark} faqBorder={faqBorder} textSecondary={iconColor} textMuted={textMuted} {...item} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
