'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Free Strategy Call',
    description:
      "We start with a 30-minute discovery call to understand your practice, your goals, and your current challenges. No pitch — just honest clarity about what's possible.",
  },
  {
    number: '02',
    title: 'Custom Strategy & Design',
    description:
      "We craft a tailored website design and SEO plan built around your specialty, location, and ideal patient. You approve every element before we build.",
  },
  {
    number: '03',
    title: 'Build & Launch',
    description:
      "Our team designs, develops, and launches your site in weeks — not months. Fast, focused, and professional from start to live.",
  },
  {
    number: '04',
    title: 'Grow & Optimize',
    description:
      "Post-launch, we monitor, update, and continuously improve your online presence. Your growth is our ongoing mission — not a one-time project.",
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-white overflow-hidden">
      {/* Subtle background geo */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-teal-pale/30 to-transparent pointer-events-none" />

      {/* Diagonal lines decoration */}
      <div className="absolute left-0 bottom-0 h-64 w-64 opacity-[0.04] pointer-events-none">
        <svg width="256" height="256" viewBox="0 0 256 256">
          {[0, 40, 80, 120, 160].map((offset, i) => (
            <line
              key={i}
              x1={0}
              y1={offset}
              x2={256 - offset}
              y2={256}
              stroke="#1A5C54"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-px bg-brand-orange" />
            <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase">How It Works</span>
            <span className="block w-8 h-px bg-brand-orange" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark leading-tight text-balance">
            From Strategy to Results —{' '}
            <span className="text-brand-teal">Simple. Transparent. Fast.</span>
          </h2>
          <p className="text-brand-dark/55 text-lg mt-4 leading-relaxed">
            Our streamlined process gets your practice growing online in weeks, not months.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-9 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px bg-gradient-to-r from-brand-teal/30 via-brand-orange/30 to-brand-teal/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Step badge */}
                <div className="relative mb-6 flex justify-center lg:justify-start">
                  <div className="relative w-[72px] h-[72px]">
                    {/* Pulse ring on first step */}
                    {i === 0 && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-brand-teal/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    )}
                    <div className="absolute inset-0 rounded-full bg-brand-cream border-2 border-brand-teal/20" />
                    <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-brand-teal text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="font-display font-bold text-brand-dark text-lg mb-3">{step.title}</h3>
                  <p className="text-brand-dark/55 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="https://tidycal.com/1yn5jw3/30-minute-meeting-3el8d2w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-mid text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-200"
            style={{ borderRadius: '2px' }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start With a Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Diagonal divider → cream */}
      <div className="pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ height: '80px' }}
        >
          <path d="M0,0 L1440,80 L0,80 Z" fill="#F8F5F0" />
        </svg>
      </div>
    </section>
  )
}
