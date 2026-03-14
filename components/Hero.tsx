'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

/* ─── Stat Cards ────────────────────────────────────────────────────── */

function TrafficCard() {
  const pts = '0,22 13,19 26,17 39,12 52,8 65,5 78,3 91,1'
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 w-[168px] border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <span className="text-brand-dark/50 text-[10px] font-bold uppercase tracking-wider">Traffic</span>
      </div>
      <div className="font-display font-bold text-2xl text-brand-dark leading-none">+312%</div>
      <div className="text-brand-dark/35 text-[10px] mb-2.5">vs. last 90 days</div>
      <svg className="w-full" height="28" viewBox="0 0 96 28">
        <path d={`M${pts} L91,28 L0,28 Z`} fill="#1A5C5418" />
        <polyline points={pts} stroke="#1A5C54" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="91" cy="1" r="2.5" fill="#1A5C54" />
      </svg>
    </div>
  )
}

function RankingCard() {
  return (
    <div className="bg-brand-dark rounded-2xl shadow-2xl p-4 w-[158px] border border-brand-teal/20">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-3 h-3 text-brand-orange fill-brand-orange" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <div className="font-display font-bold text-white text-lg leading-tight">#1 on Google</div>
      <div className="text-brand-teal-light/60 text-[10px] mt-1.5 leading-relaxed">
        &ldquo;Therapist near<br />Queen Creek AZ&rdquo;
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-white/30 text-[10px]">Live ranking</span>
      </div>
    </div>
  )
}

function ClientsCard() {
  const barHeights = [4, 6, 5, 8, 10, 9, 14]
  return (
    <div className="bg-brand-orange rounded-2xl shadow-2xl p-4 w-[148px]">
      <div className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">New Inquiries</div>
      <div className="font-display font-bold text-white text-[2rem] leading-none">14</div>
      <div className="text-white/60 text-[10px] mt-0.5">this week ↑ from 4</div>
      <div className="mt-3 flex items-end gap-1 h-8">
        {barHeights.map((h, i) => (
          <div key={i} className="flex-1 bg-white/30 rounded-sm" style={{ height: `${h * 2}px` }} />
        ))}
      </div>
    </div>
  )
}

/* ─── Hero Image Mockup ─────────────────────────────────────────────── */

function HeroImageMockup() {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="relative w-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        {/* Glow behind the image */}
        <div className="absolute inset-[-8%] rounded-3xl blur-3xl opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #1A5C54 0%, #E07B2820 60%, transparent 80%)' }} />

        {/* Browser chrome bar */}
        <div className="relative bg-[#0a1f1c] rounded-t-2xl px-4 py-3 flex items-center gap-3 border border-white/10 border-b-0">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex items-center gap-2 bg-white/[0.07] rounded-md px-3 py-1.5">
            <svg className="w-3 h-3 text-brand-teal-light/40 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white/30 text-[11px] font-mono">yourpractice.com</span>
          </div>
          {/* Shimmer bar animation */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #42C2BA60, transparent)' }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
          />
        </div>

        {/* Screenshot image */}
        <div className="relative overflow-hidden rounded-b-2xl border border-white/10 border-t-0 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
          <Image
            src="/hero-mockup.png"
            alt="Health professional website design example"
            width={1340}
            height={860}
            className="w-full block"
            style={{ display: 'block' }}
            priority
          />
          {/* Subtle teal overlay to tie it into the hero palette */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-dark/20 pointer-events-none" />
          {/* Bottom fade into dark */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark/60 to-transparent pointer-events-none" />
        </div>

        {/* Reflection / depth line */}
        <div className="absolute -bottom-px left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-teal-light/30 to-transparent" />
      </motion.div>
    </div>
  )
}

/* ─── Main Hero ─────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-brand-dark overflow-hidden">

      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_60%_-10%,#1A5C5435,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,#1A5C5420,transparent)]" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-dark bg-grid" />

      {/* Animated gradient glows */}
      <motion.div
        className="absolute top-1/4 right-[35%] w-[480px] h-[380px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #1A5C54, transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #E07B28, transparent 70%)' }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating decorative geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-[5%] bottom-[22%] w-20 h-20 opacity-[0.08]"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <polygon points="50,8 94,92 6,92" fill="#42C2BA" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute top-[18%] left-[8%] opacity-[0.05]"
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[0, 22, 44, 66].map((offset, i) => (
              <line key={i} x1={offset} y1="0" x2="100" y2={100 - offset} stroke="#42C2BA" strokeWidth="1" />
            ))}
          </svg>
        </motion.div>
        <motion.div
          className="absolute left-[18%] top-[38%] w-2 h-2 rounded-full bg-brand-orange"
          animate={{ y: [-5, 6, -5], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-[22%] top-[52%] w-1.5 h-1.5 rounded-full bg-brand-teal-light"
          animate={{ y: [4, -7, 4], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block w-8 h-px bg-brand-orange" />
              <span className="flex items-center gap-2 text-brand-orange text-[11px] font-bold tracking-[0.22em] uppercase">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Queen Creek, AZ · Web Design &amp; SEO for Health Pros
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.5rem] font-bold text-white leading-[1.04] tracking-tight mb-7"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Patients Are<br />
              Searching Online.{' '}
              <span className="text-brand-teal-light">Are They</span>{' '}
              <span className="relative inline-block">
                <span className="text-brand-orange">Finding You?</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange/40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              We build high-converting websites and SEO strategies for health &amp; wellness professionals across Queen Creek, Gilbert, Chandler &amp; the East Valley — so you can focus on healing, not marketing.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-200 group"
                style={{ borderRadius: '2px' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Free Strategy Call
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-teal-light text-white/75 hover:text-brand-teal-light font-medium px-8 py-4 text-sm tracking-wide transition-all duration-200"
                style={{ borderRadius: '2px' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                See How We Can Help
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 pt-10 border-t border-white/10"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {[
                { value: '50+', label: 'Health Pros Served' },
                { value: '3×', label: 'Avg Traffic Increase' },
                { value: '4.9★', label: 'Client Rating' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-brand-teal-light">{stat.value}</span>
                  <span className="text-white/45 text-sm leading-tight">{stat.label}</span>
                  {i < 2 && <span className="hidden sm:block w-px h-6 bg-white/10" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Hero image mockup + floating cards ── */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative" style={{ width: '500px', paddingLeft: '52px', paddingRight: '48px', paddingTop: '28px', paddingBottom: '44px' }}>

              {/* Main image with 3D tilt */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Gentle continuous float */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <HeroImageMockup />
                </motion.div>
              </motion.div>

              {/* Floating card: Traffic — left */}
              <motion.div
                className="absolute left-0 top-[28%]"
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <TrafficCard />
                </motion.div>
              </motion.div>

              {/* Floating card: Google ranking — top right */}
              <motion.div
                className="absolute right-0 top-0"
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <RankingCard />
                </motion.div>
              </motion.div>

              {/* Floating card: Client inquiries — bottom right */}
              <motion.div
                className="absolute right-0 bottom-0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                >
                  <ClientsCard />
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Diagonal SVG divider → cream */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: '80px' }}>
          <path d="M0,80 L1440,0 L1440,80 Z" fill="#F8F5F0" />
        </svg>
      </div>
    </section>
  )
}
