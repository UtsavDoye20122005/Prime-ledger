// Single source of truth for all case study data
// Used by both CaseStudiesPage (grid) and CaseStudyDetailPage (full view)

export const CASE_STUDIES = [
    {
        id: 'nexus-capital',
        industry: 'FinTech',
        company: 'Nexus Capital',
        tagline: 'From data chaos to real-time clarity.',
        challenge:
            'A mid-market investment firm with fragmented data pipelines leading to delayed reporting and missed trade windows.',
        solution:
            'Architected a real-time data consolidation layer with automated reconciliation dashboards and alert triggers.',
        result: '63% reduction in reporting lag — from 4 days to 18 hours, saving ~$1.2M annually.',
        link: '#',
        // Extra detail-page fields
        duration: '14 weeks',
        teamSize: '4 consultants',
        year: '2024',
        fullChallenge: [
            'Nexus Capital was operating with seven separate data sources — Bloomberg feeds, internal trade logs, custodian reports, and risk systems — none of which spoke to each other in real time.',
            'End-of-day reconciliation was a manual, error-prone process handled by a team of three analysts. Reports were consistently 3–4 days late, causing senior portfolio managers to make allocation decisions on stale data.',
            'Two missed trade windows in Q1 2024 cost the firm an estimated $340K in opportunity loss, triggering an urgent mandate to fix the data infrastructure.',
        ],
        fullSolution: [
            'We began with a two-week audit of all data ingestion points, mapping latency, failure rates, and transformation logic across each source.',
            'We then designed a centralised event-driven data pipeline using a pub/sub architecture — raw feeds were normalised, validated, and written to a single real-time datastore within seconds of arrival.',
            'Custom reconciliation rules were encoded into an automated checker that flagged anomalies instantly via Slack and email, replacing the manual analyst workflow.',
            'A new executive dashboard was built giving portfolio managers live P&L, position, and risk view — accessible from any device.',
        ],
        metrics: [
            { label: 'Reporting lag reduced', value: '63%' },
            { label: 'From 4 days to', value: '18 hrs' },
            { label: 'Annual saving', value: '$1.2M' },
            { label: 'Manual analyst hours saved/week', value: '47 hrs' },
        ],
        testimonial: {
            quote:
                'We went from dreading end-of-day reconciliation to not even thinking about it. The data just works now.',
            author: 'CTO, Nexus Capital',
        },
    },
    {
        id: 'medroute-ai',
        industry: 'HealthTech',
        company: 'MedRoute AI',
        tagline: 'Turning empty appointment slots into outcomes.',
        challenge:
            'Patient routing inefficiencies causing 40% no-show rates and underutilised specialist capacity across 12 clinics.',
        solution:
            'Built a predictive scheduling engine using historical appointment data and real-time cancellation signals.',
        result: 'No-show rate cut to 11%. Clinic utilisation rose from 58% to 86% in 3 months.',
        link: '#',
        duration: '10 weeks',
        teamSize: '3 consultants',
        year: '2024',
        fullChallenge: [
            'MedRoute AI operated a network of 12 specialist clinics across three cities. Despite strong referral volume, 40% of booked appointments resulted in no-shows — a rate far above the industry average of 18%.',
            'Clinics were scheduling appointments on a first-come-first-served basis with no intelligence applied to patient likelihood of attendance, geographic proximity, or appointment type urgency.',
            'Specialist underutilisation averaged 42% across the network, with some clinics running below 50% capacity while maintaining full clinical staffing costs.',
        ],
        fullSolution: [
            'We extracted 26 months of historical appointment data and built a no-show probability model trained on 18 patient and appointment-level signals including lead time, day of week, appointment type, and previous attendance history.',
            'Clinics were given a risk score for each upcoming appointment, with high-risk slots automatically triggering SMS reminders and optional rescheduling flows 48 and 24 hours in advance.',
            'A smart overbooking algorithm was introduced for low-risk slot clusters, calibrated per clinic to match actual show rates without creating overflow.',
            'A live capacity dashboard gave clinic managers visibility into predicted utilisation for the next 14 days.',
        ],
        metrics: [
            { label: 'No-show rate', value: '40%→11%' },
            { label: 'Utilisation increase', value: '+28pts' },
            { label: 'Revenue uplift (monthly)', value: '+$180K' },
            { label: 'Time to results', value: '3 months' },
        ],
        testimonial: {
            quote:
                'The model was scarily accurate from week two. Our ops team finally feels like they have control over the schedule.',
            author: 'Head of Operations, MedRoute AI',
        },
    },
    {
        id: 'orbit-analytics',
        industry: 'SaaS',
        company: 'Orbit Analytics',
        tagline: 'Keeping customers past the critical first 90 days.',
        challenge:
            'High churn (28% annually) among SMB customers within the first 90 days, primarily due to activation failure.',
        solution:
            'Redesigned onboarding flows with contextual tooltips, milestone-based progress rings, and in-app success calls.',
        result: '90-day churn dropped to 9%. ARR expanded by $3.8M within two quarters post-launch.',
        link: '#',
        duration: '12 weeks',
        teamSize: '5 consultants',
        year: '2023',
        fullChallenge: [
            'Orbit Analytics had strong acquisition numbers but a dangerous churn problem buried in the first 90 days. 28% of SMB customers were cancelling annually, and internal analysis pointed to activation failure — customers signing up but never reaching their first "aha moment".',
            'The existing onboarding was a 12-step wizard built three years prior that had never been updated. Completion rates sat at 31%, and the support team was fielding the same basic setup questions daily.',
            'Customer success was overwhelmed — one CSM per 120 accounts — and proactive outreach was inconsistent at best.',
        ],
        fullSolution: [
            'We ran a three-week discovery phase including session recordings review, 22 customer interviews, and a full funnel analysis by cohort, plan type, and acquisition channel.',
            'The 12-step wizard was replaced with an adaptive onboarding flow that surfaced only the steps relevant to each customer\'s stated use case — reducing average setup time from 47 minutes to 11 minutes.',
            'Contextual in-app tooltips were introduced at five key activation milestones, each linked to a pre-recorded 90-second explainer video.',
            'An automated success trigger fired when customers hit their first milestone, surfacing a calendar link for a 20-minute onboarding call with CS — resulting in 61% booking rate.',
        ],
        metrics: [
            { label: '90-day churn', value: '28%→9%' },
            { label: 'ARR expansion', value: '+$3.8M' },
            { label: 'Onboarding completion', value: '31%→79%' },
            { label: 'Avg. setup time', value: '47min→11min' },
        ],
        testimonial: {
            quote:
                'We\'d tried redesigning onboarding twice before and seen minimal change. This time the data-led approach made all the difference.',
            author: 'VP Product, Orbit Analytics',
        },
    },
    {
        id: 'volta-retail',
        industry: 'eCommerce',
        company: 'Volta Retail',
        tagline: 'Removing the friction between intent and purchase.',
        challenge:
            'Cart abandonment spiked to 79% after a redesign with checkout friction and unclear delivery timelines.',
        solution:
            'Streamlined to a single-page checkout, integrated address autofill, and added real-time delivery estimates.',
        result: 'Conversion rate up 34%. Monthly GMV increased from $820K to $1.6M within 60 days.',
        link: '#',
        duration: '8 weeks',
        teamSize: '3 consultants',
        year: '2024',
        fullChallenge: [
            'After a full-site redesign in Q3 2023, Volta Retail\'s cart abandonment rate jumped from 61% to 79% — a significant deterioration that cost the business an estimated $240K in monthly revenue.',
            'The root cause was a new 4-step checkout flow that introduced account-creation gates, unclear delivery estimates, and a payment page that loaded slowly on mobile devices.',
            'Heatmap analysis showed 58% of abandonment happening at the delivery information step, with mobile users dropping at twice the rate of desktop.',
        ],
        fullSolution: [
            'We collapsed the 4-step checkout into a single scrollable page with persistent order summary, removing the step-by-step navigation that was causing users to lose progress awareness.',
            'Guest checkout was made the default path, with account creation offered post-purchase.',
            'Google Maps address autofill was integrated, reducing address entry time by 65% on mobile.',
            'A real-time delivery estimate API was connected, showing exact delivery dates (not ranges) at the cart stage — before checkout was even initiated.',
        ],
        metrics: [
            { label: 'Cart abandonment', value: '79%→51%' },
            { label: 'Conversion rate lift', value: '+34%' },
            { label: 'Monthly GMV', value: '$820K→$1.6M' },
            { label: 'Time to results', value: '60 days' },
        ],
        testimonial: {
            quote:
                'We lost weeks agonising over whether this was a design or a conversion problem. Prime Ledger diagnosed and fixed it in two months.',
            author: 'CEO, Volta Retail',
        },
    },
    {
        id: 'freightline',
        industry: 'Logistics',
        company: 'Freightline Co.',
        tagline: 'AI dispatch that actually works in the real world.',
        challenge:
            'Manual dispatch scheduling was causing route overlaps, driver overtime violations, and a 22% on-time delivery miss.',
        solution:
            'Deployed an AI-assisted dispatch optimizer integrating GPS feeds, traffic APIs, and driver shift constraints.',
        result: 'On-time deliveries hit 97%. Driver overtime costs cut by $480K per year.',
        link: '#',
        duration: '16 weeks',
        teamSize: '6 consultants',
        year: '2023',
        fullChallenge: [
            'Freightline Co. was running dispatch operations for 340 drivers across two regions using a legacy scheduling tool and manual overrides by a team of 8 dispatchers.',
            'Route overlaps were occurring daily, with drivers sometimes arriving at the same stop within minutes of each other. Overtime violations were frequent — a compliance risk in addition to a cost issue.',
            'On-time delivery performance had dropped to 78%, triggering SLA penalties from three major enterprise clients and threatening contract renewals worth $4.2M annually.',
        ],
        fullSolution: [
            'We integrated real-time GPS telemetry, historical traffic data, and driver shift/break constraints into a unified data model.',
            'An AI-assisted scheduling engine was built that generated optimal route assignments each morning, with dynamic re-routing triggered by delays or cancellations throughout the day.',
            'Dispatcher workflows were redesigned — instead of building schedules from scratch, dispatchers reviewed and approved AI-generated plans, spending time on exceptions rather than routine scheduling.',
            'A driver mobile app was introduced for real-time stop updates, proof of delivery capture, and break tracking.',
        ],
        metrics: [
            { label: 'On-time delivery', value: '78%→97%' },
            { label: 'Overtime cost saving', value: '$480K/yr' },
            { label: 'Dispatcher productivity', value: '+3.2×' },
            { label: 'SLA penalties avoided', value: '$1.1M' },
        ],
        testimonial: {
            quote:
                'The dispatchers were sceptical at first. Within three weeks, none of them wanted to go back to the old system.',
            author: 'VP Operations, Freightline Co.',
        },
    },
    {
        id: 'leafboard',
        industry: 'EdTech',
        company: 'Leafboard',
        tagline: 'Re-engaging learners who had already moved on.',
        challenge:
            'Student engagement on the platform plateaued — average session length fell to 4 minutes and completion rates were 12%.',
        solution:
            'Introduced adaptive learning paths, micro-content modules, and a spaced-repetition review loop with streak rewards.',
        result: 'Average session length 4× (to 17 min). Course completion improved from 12% to 61%.',
        link: '#',
        duration: '12 weeks',
        teamSize: '4 consultants',
        year: '2024',
        fullChallenge: [
            'Leafboard had 180,000 registered users but an active monthly user base of just 22,000 — a 12% activation rate that was declining quarter over quarter.',
            'Session length had dropped from a peak of 11 minutes (2022) to just 4 minutes by early 2024. Course completion rates were 12%, far below the EdTech benchmark of 30-40% for structured courses.',
            'User interviews revealed that content felt overwhelming — long video lectures with no clear sense of progress — and that there was no mechanism to review and reinforce previous material.',
        ],
        fullSolution: [
            'Existing long-form video content was restructured into micro-modules of 3-7 minutes each, with clear learning objectives displayed before each module.',
            'An adaptive path engine was introduced that assessed prior knowledge via a 5-question diagnostic and customised the starting point and sequence for each learner.',
            'A spaced-repetition review system sent daily 3-minute review sessions drawing from previously completed material, reducing knowledge decay.',
            'A streak and milestone reward system — with shareable certificates at module completion — drove re-engagement through identity and progress signalling.',
        ],
        metrics: [
            { label: 'Session length', value: '4min→17min' },
            { label: 'Course completion', value: '12%→61%' },
            { label: 'Monthly active users', value: '+94%' },
            { label: 'Review session open rate', value: '68%' },
        ],
        testimonial: {
            quote:
                'We\'d thrown every engagement trick in the book at this problem. The adaptive paths were the unlock we\'d been missing.',
            author: 'Chief Product Officer, Leafboard',
        },
    },
    {
        id: 'meridian-homes',
        industry: 'RealEstate',
        company: 'Meridian Homes',
        tagline: 'Qualifying leads so your agents can close.',
        challenge:
            'Lead-to-viewing conversion was 6% due to unqualified inquiries flooding sales agents with low-intent traffic.',
        solution:
            'Implemented an AI qualification chatbot that pre-screened leads by budget, timeline, and preferences before routing.',
        result: 'Lead-to-viewing conversion reached 31%. Agent capacity freed by 40%, boosting closings by 22%.',
        link: '#',
        duration: '10 weeks',
        teamSize: '3 consultants',
        year: '2023',
        fullChallenge: [
            'Meridian Homes was generating 1,200 inbound inquiries per month across their property portal listings, but converting only 6% to actual viewings — with sales agents spending 60% of their time on qualifying conversations that rarely converted.',
            'Agents reported high frustration with leads who had mismatched budgets, were 12+ months away from buying, or were inquiring about properties far outside their actual criteria.',
            'The lack of qualification was causing agents to burn out and miss opportunities with genuinely high-intent buyers buried in the noise.',
        ],
        fullSolution: [
            'We designed and deployed a conversational qualification chatbot embedded across all property listing pages, engaging inquiring visitors with a structured 8-question flow covering budget, preferred location, timeline, property type, and current ownership status.',
            'Leads were scored across four tiers — Hot, Warm, Cool, and Unqualified — with routing logic that auto-assigned Hot leads to senior agents within 5 minutes and Warm leads to a nurture email sequence.',
            'A CRM integration ensured every chatbot interaction was logged with full context, so agents entered first conversations already briefed on the lead\'s needs.',
        ],
        metrics: [
            { label: 'Lead-to-viewing conversion', value: '6%→31%' },
            { label: 'Agent capacity freed', value: '40%' },
            { label: 'Closings increase', value: '+22%' },
            { label: 'Avg. agent satisfaction score', value: '+41pts' },
        ],
        testimonial: {
            quote:
                'My agents went from dreading the inquiry queue to actually looking forward to it. The leads they get now are real.',
            author: 'Sales Director, Meridian Homes',
        },
    },
    {
        id: 'clearpath-payments',
        industry: 'FinTech',
        company: 'Clearpath Payments',
        tagline: 'From 7-day onboarding to 4 hours — at scale.',
        challenge:
            'Merchant onboarding required 7–10 days due to manual KYC document verification and compliance checks.',
        solution:
            'Automated document ingestion, OCR extraction, and risk scoring pipeline with human exception handling only.',
        result: 'Onboarding reduced to under 4 hours. Fraud false-positives dropped 68%. Volume scaled 3×.',
        link: '#',
        duration: '18 weeks',
        teamSize: '7 consultants',
        year: '2023',
        fullChallenge: [
            'Clearpath Payments was losing prospective merchants at the onboarding stage — a process that required 7–10 business days for KYC verification, compliance screening, and account setup.',
            'Competitors were onboarding merchants in under 24 hours. Clearpath was losing an estimated 35% of applicants to faster alternatives during the waiting period.',
            'The manual verification team was a bottleneck at 180 applications per week capacity, against an inbound volume of 400+ per week and growing.',
        ],
        fullSolution: [
            'We designed an automated document ingestion pipeline where merchants uploaded ID, business registration, and bank documents directly to a secure portal.',
            'An OCR extraction layer parsed and structured document data, cross-referencing against sanctions lists, company registries, and fraud databases in real time.',
            'A risk scoring model classified each application into auto-approve, review, or reject tiers — with human review reserved only for edge cases (approximately 8% of volume).',
            'The verification team was retrained as exception handlers, focusing on the complexity cases where human judgement genuinely added value.',
        ],
        metrics: [
            { label: 'Onboarding time', value: '7 days→4 hrs' },
            { label: 'Fraud false-positives', value: '-68%' },
            { label: 'Volume capacity', value: '3× increase' },
            { label: 'Drop-off during onboarding', value: '-61%' },
        ],
        testimonial: {
            quote:
                'We went from turning away volume because we couldn\'t process it, to actively marketing our onboarding speed as a differentiator.',
            author: 'COO, Clearpath Payments',
        },
    },
    {
        id: 'stackform',
        industry: 'SaaS',
        company: 'Stackform',
        tagline: 'Compressing the enterprise sales cycle with data.',
        challenge:
            'Sales cycle stretched to 120+ days due to unclear ROI demonstrations during prospect evaluation stages.',
        solution:
            "Created a live ROI calculator embedded in the sales flow with integration with prospect's own CRM data.",
        result: 'Average sales cycle down to 41 days. Win rate improved from 18% to 37% for enterprise deals.',
        link: '#',
        duration: '11 weeks',
        teamSize: '4 consultants',
        year: '2024',
        fullChallenge: [
            "Stackform's enterprise sales cycle averaged 120+ days — significantly above the 60-70 day benchmark for comparable B2B SaaS platforms.",
            'Win/loss analysis revealed the primary stall point was the internal ROI justification stage: champions inside prospect organisations struggled to build compelling business cases for their CFOs without concrete, customised data.',
            'Sales reps were presenting generic ROI slides with industry benchmarks that procurement teams routinely challenged, lengthening evaluation cycles and reducing confidence.',
        ],
        fullSolution: [
            "We built an interactive ROI calculator that could ingest a prospect's own data — current process costs, team size, error rates, time spent on manual tasks — via a guided intake form or direct CRM API integration.",
            'The calculator generated a branded, personalised business case PDF that the champion could share internally, with projections modelled on the prospect\'s own numbers rather than generic benchmarks.',
            'The tool was embedded directly into the sales sequence, triggered at the stage where internal buy-in was typically sought, and tracked by reps in the CRM.',
            'Sales enablement training was run to help reps facilitate the calculator session as a consultative conversation rather than a product demo.',
        ],
        metrics: [
            { label: 'Sales cycle', value: '120→41 days' },
            { label: 'Enterprise win rate', value: '18%→37%' },
            { label: 'Pipeline velocity', value: '+2.9×' },
            { label: 'Avg deal size increase', value: '+22%' },
        ],
        testimonial: {
            quote:
                'Champions stopped coming back to us asking for more slides. They had everything they needed to make the case themselves.',
            author: 'VP Sales, Stackform',
        },
    },
]
