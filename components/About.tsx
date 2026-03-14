'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const credentials = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    label: 'B.S. Psychology',
    sub: 'Academic foundation in human behavior & mental health',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: '15+ Years Behavioral Health',
    sub: 'Complex youth & families in high-acuity settings',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: 'NASM Certified Personal Trainer',
    sub: 'National Academy of Sports Medicine',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: 'NASM Nutrition Coach Certified',
    sub: 'National Academy of Sports Medicine',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,#1A5C5418,transparent)]" />
      <div className="absolute inset-0 bg-grid-dark bg-grid" />

      {/* Rotating triangle */}
      <motion.div
        className="absolute -left-20 top-1/3 w-72 h-72 opacity-[0.04] pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 300 300" fill="none">
          <polygon points="150,15 285,280 15,280" stroke="#42C2BA" strokeWidth="2" fill="none" />
          <polygon points="150,60 250,250 50,250" stroke="#42C2BA" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Joe's photo with CSS cutout treatment ── */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative background shapes */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-brand-teal/15 blur-3xl pointer-events-none" />
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full border border-brand-teal-light/15"
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border border-brand-orange/15"
              animate={{ scale: [1.05, 0.95, 1.05] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            {/* Credential badge — floating top right */}
            <motion.div
              className="absolute top-4 right-4 lg:right-0 bg-brand-orange text-white text-[10px] font-bold px-3 py-2 rounded-xl shadow-xl z-20 text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-lg font-display font-bold leading-none">15+</div>
              <div className="uppercase tracking-wider leading-tight">Yrs Behavioral<br />Health</div>
            </motion.div>

            {/* NASM badge — floating left */}
            <motion.div
              className="absolute top-1/3 -left-2 lg:left-2 bg-brand-dark border border-brand-teal/30 text-white text-[10px] font-bold px-3 py-2 rounded-xl shadow-xl z-20 text-center"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-brand-teal-light font-display font-bold text-sm leading-none mb-1">NASM</div>
              <div className="text-white/60 uppercase tracking-wider leading-tight">CPT + CNC</div>
            </motion.div>

            {/* Transparent cutout photo */}
            <div className="relative w-[300px] lg:w-[340px]">
              <Image
                src="/joe-luma-cutout.png"
                alt="Joe Luma — Founder, Rooted Ridge Studio"
                width={1885}
                height={2424}
                className="w-full h-auto drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(66,194,186,0.18))' }}
              />

              {/* B.S. Psychology badge at bottom */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-brand-dark text-[10px] font-bold px-4 py-2 rounded-full shadow-xl z-20 whitespace-nowrap flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
                B.S. Psychology · NASM CPT · NASM CNC
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-teal-light" />
              <span className="text-brand-teal-light text-xs font-bold tracking-[0.25em] uppercase">Meet Your Partner</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-2 text-balance">
              I&apos;m Not Just a Tech Expert.{' '}
              <span className="text-brand-teal-light">I&apos;m One of You.</span>
            </h2>

            <p className="text-brand-orange text-sm font-semibold tracking-wide uppercase mb-6">
              Joe Luma — Founder, Rooted Ridge Studio
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-5">
              Before building websites, I spent <strong className="text-white">15+ years working in behavioral health</strong> — directly supporting complex youth and families in high-acuity settings. I know the language, the challenges, the burnout, and the deep sense of purpose that drives every health professional.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-8">
              With a <strong className="text-white">B.S. in Psychology</strong> and certifications as an <strong className="text-white">NASM Personal Trainer</strong> and <strong className="text-white">NASM Nutrition Coach</strong>, I bring field-level credibility that no generic web agency can offer. When I write your website copy and SEO strategy, I&apos;m speaking as someone who has sat in your chair — not just someone who Googled your industry.
            </p>

            {/* Credential cards */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] hover:border-brand-teal/30 rounded-sm p-3.5 transition-colors duration-200"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="mt-0.5 w-7 h-7 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal-light flex-shrink-0">
                    {cred.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold leading-tight">{cred.label}</div>
                    <div className="text-white/40 text-[11px] mt-0.5 leading-tight">{cred.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-200"
              style={{ borderRadius: '2px' }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Work With Me
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Diagonal divider → white */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: '80px' }}>
          <path d="M0,0 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
