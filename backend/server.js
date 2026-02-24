import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 4000

// ─── Middleware ─────────────────────────────────────────────────────────────

app.use(express.json())

// CORS — only allow your frontend origin
app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        methods: ['POST', 'GET'],
        allowedHeaders: ['Content-Type'],
    })
)

// Rate limit — max 5 contact form submissions per IP per 15 minutes
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: 'Too many submissions from this IP. Please try again in 15 minutes.',
    },
})

// ─── Nodemailer transporter ──────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
})

// Verify transporter on startup
transporter.verify((err) => {
    if (err) {
        console.error('❌  Nodemailer config error:', err.message)
        console.error('    Check GMAIL_USER and GMAIL_APP_PASSWORD in .env')
    } else {
        console.log('✅  Nodemailer ready — emails will be sent from:', process.env.GMAIL_USER)
    }
})

// ─── Email builders ──────────────────────────────────────────────────────────

function buildAdminEmail({ name, email, company, reason, message }) {
    const company_display = company || 'Not provided'
    const reason_display = reason || 'Not selected'
    const submitted_at = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short',
    })

    return {
        from: `"Prime Ledger Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `📬 New Contact: ${name} — ${reason_display}`,
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { margin: 0; padding: 0; background: #080808; font-family: 'DM Sans', Arial, sans-serif; }
          .wrapper { max-width: 600px; margin: 0 auto; background: #111111; border-radius: 12px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #7B61FF 0%, #4f46e5 100%); padding: 32px 36px; }
          .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.3px; }
          .header p { margin: 6px 0 0; color: rgba(255,255,255,0.65); font-size: 13px; }
          .body { padding: 36px; }
          .field { margin-bottom: 22px; }
          .label { font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #555; margin-bottom: 6px; }
          .value { font-size: 15px; color: #ffffff; line-height: 1.6; }
          .value a { color: #9d87ff; text-decoration: none; }
          .message-box { background: #1a1a1a; border-left: 3px solid #7B61FF; border-radius: 8px; padding: 18px 20px; margin-top: 24px; }
          .message-box .label { color: #7B61FF; }
          .message-box .value { color: #cccccc; font-size: 14px; }
          .footer { padding: 20px 36px; border-top: 1px solid #1e1e1e; }
          .footer p { margin: 0; font-size: 11px; color: #444; }
          .badge { display: inline-block; background: #7B61FF22; color: #9d87ff; border: 1px solid #7B61FF44; border-radius: 99px; padding: 3px 12px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
        </style>
      </head>
      <body>
        <div style="padding: 24px 0; background: #080808;">
          <div class="wrapper">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Received ${submitted_at} IST</p>
            </div>

            <div class="body">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company_display}</div>
              </div>

              <div class="field">
                <div class="label">Service Interest</div>
                <div class="value"><span class="badge">${reason_display}</span></div>
              </div>

              <div class="message-box">
                <div class="label">Their Message</div>
                <div class="value">${message.replace(/\n/g, '<br/>')}</div>
              </div>
            </div>

            <div class="footer">
              <p>Sent from primeledger.io contact form &middot; Reply directly to <a href="mailto:${email}" style="color:#7B61FF;">${email}</a></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
        replyTo: email,
    }
}

function buildAutoReplyEmail({ name, email }) {
    return {
        from: `"Prime Ledger" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `We received your message, ${name.split(' ')[0]}.`,
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { margin:0; padding:0; background:#f4f4f4; font-family: Arial, sans-serif; }
          .wrapper { max-width:560px; margin:32px auto; background:#111111; border-radius:12px; overflow:hidden; }
          .header { background: linear-gradient(135deg, #7B61FF 0%, #4f46e5 100%); padding:32px 36px; }
          .header h1 { margin:0; color:#fff; font-size:22px; font-weight:700; }
          .body { padding:36px; color:#cccccc; font-size:15px; line-height:1.8; }
          .body strong { color:#ffffff; }
          .cta { display:inline-block; margin-top:24px; padding:13px 28px; background:#7B61FF; color:#fff; border-radius:99px; font-size:14px; font-weight:600; text-decoration:none; }
          .footer { padding:20px 36px; border-top:1px solid #1e1e1e; font-size:11px; color:#444; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>Got it, ${name.split(' ')[0]}.</h1>
          </div>
          <div class="body">
            <p>Thanks for reaching out to <strong>Prime Ledger</strong>. We've received your message and someone from our team will be in touch within <strong>one business day</strong>.</p>
            <p>In the meantime, feel free to browse our work:</p>
            <a class="cta" href="${process.env.FRONTEND_URL || 'http://localhost:5173'}#case-studies">View Case Studies →</a>
          </div>
          <div class="footer">
            <p>You're receiving this because you submitted a form at primeledger.io. This is an automated confirmation — please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    }
}

// ─── Routes ─────────────────────────────────────────────────────────────────

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Contact form submission
app.post(
    '/api/contact',
    contactLimiter,
    [
        body('name')
            .trim()
            .notEmpty().withMessage('Name is required.')
            .isLength({ max: 100 }).withMessage('Name too long.'),
        body('email')
            .trim()
            .notEmpty().withMessage('Email is required.')
            .isEmail().withMessage('Please enter a valid email address.')
            .normalizeEmail(),
        body('company')
            .trim()
            .optional()
            .isLength({ max: 100 }).withMessage('Company name too long.'),
        body('reason')
            .trim()
            .optional()
            .isLength({ max: 100 }),
        body('message')
            .trim()
            .notEmpty().withMessage('Message is required.')
            .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters.'),
    ],
    async (req, res) => {
        // Validation check
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg,
                errors: errors.array(),
            })
        }

        const { name, email, company, reason, message } = req.body

        try {
            // Send both emails concurrently
            await Promise.all([
                transporter.sendMail(buildAdminEmail({ name, email, company, reason, message })),
                transporter.sendMail(buildAutoReplyEmail({ name, email })),
            ])

            console.log(`📧  Contact from ${name} <${email}> — forwarded to ${process.env.RECEIVER_EMAIL}`)

            return res.status(200).json({
                success: true,
                message: 'Message sent successfully.',
            })
        } catch (err) {
            console.error('❌  Email send failed:', err.message)
            return res.status(500).json({
                success: false,
                message: 'Failed to send message. Please try again shortly.',
            })
        }
    }
)

// 404 fallback
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found.' })
})

// ─── Start ───────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
    console.log(`\n🚀  Prime Ledger backend running at http://localhost:${PORT}`)
    console.log(`    Health check → http://localhost:${PORT}/health`)
    console.log(`    Contact API  → POST http://localhost:${PORT}/api/contact\n`)
})
