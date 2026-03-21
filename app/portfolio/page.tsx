'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* ─── Data ───────────────────────────────────────────────────────────── */

const projects = [
  {
    id: 'rising-minds',
    name: 'Rising Minds Clinic',
    url: 'risingmindsclinic.com',
    specialty: 'Mental Health · Child & Adolescent Therapy',
    headline: 'A calming, trust-first digital presence for a behavioral health clinic',
    description:
      'Rising Minds Clinic needed a website that immediately conveyed warmth and professionalism to parents seeking therapy for their children and teens. We built a conversion-focused site with clear service navigation, social proof, and a streamlined booking flow.',
    image: '/portfolio-rising-minds.jpg',
    tags: ['Mental Health', 'Child & Teen Therapy', 'Families', 'SEO', 'Booking Integration', 'Mobile-First'],
    results: [
      { metric: '↑ 280%', label: 'Organic Traffic' },
      { metric: '#1', label: 'Local Search' },
      { metric: '3×', label: 'Booking Rate' },
    ],
    accent: 'brand-teal',
    accentHex: '#1A5C54',
  },
  {
    id: 'first-step',
    name: 'First Step Impact',
    url: 'firststepimpact.com',
    specialty: 'Personal Training · Nutrition · Wellness Coaching',
    headline: 'A bold, high-converting site for a fitness and nutrition coaching brand',
    description:
      'First Step Impact needed a brand identity and website that stood apart in a crowded market. We built a site centered on lead generation, with a clear value proposition, credibility-building sections, and an integrated lead magnet to grow their email list.',
    image: '/portfolio-first-step.jpg',
    tags: ['Fitness Coaching', 'Nutrition', 'Personal Training', 'Lead Generation', 'Brand Identity', 'SEO'],
    results: [
      { metric: '↑ 4×', label: 'Lead Volume' },
      { metric: '95%', label: 'Mobile Score' },
      { metric: '↑ 190%', label: 'Page 1 Keywords' },
    ],
    accent: 'brand-orange',
    accentHex: '#E07B28',
  },
  {
    id: 'pt1-fitness',
    name: 'PT1 Fitness',
    url: 'pt1fitness.com',
    specialty: 'Personal Training · Strength & Conditioning',
    headline: 'A results-driven website built to convert visitors into personal training clients',
    description:
      'PT1 Fitness needed a bold, high-energy web presence that showcased real client transformations and turned website visitors into booked consultations. We built a conversion-focused site with a compelling hero, before-and-after results, flexible pricing packages, and an integrated contact flow to generate consistent leads.',
    image: '/portfolio-pt1.png',
    tags: ['Personal Training', 'Strength & Conditioning', 'Lead Generation', 'Before & After Results', 'Pricing Packages', 'Mobile-First'],
    results: [
      { metric: '↑ 3×', label: 'Consultation Bookings' },
      { metric: '#1', label: 'Local Search' },
      { metric: '97', label: 'Mobile Score' },
    ],
    accent: 'brand-orange',
    accentHex: '#E07B28',
  },
  {
    id: 'bratton-ryan-dental',
    name: 'Bratton Ryan Dental',
    url: 'bratton-ryan-dental.vercel.app',
    specialty: 'Dental Practice · General & Cosmetic Dentistry',
    headline: 'A clean, trustworthy website built to attract and convert new dental patients',
    description:
      'Bratton Ryan Dental needed a modern, professional web presence that would instill immediate confidence in prospective patients. We built a fast, mobile-first site with clear service pages, a streamlined appointment flow, and local SEO targeting to drive new patient inquiries.',
    image: '/portfolio-bratton-ryan-dental.png',
    tags: ['Dental Practice', 'General Dentistry', 'Cosmetic Dentistry', 'Web Design', 'Local SEO', 'Mobile-First'],
    results: [
      { metric: '↑ 3×', label: 'New Patient Inquiries' },
      { metric: '#1', label: 'Local Search' },
      { metric: '98', label: 'Mobile Score' },
    ],
    accent: 'brand-teal',
    accentHex: '#1A5C54',
  },
]

const specialties = [
  'Mental Health Therapists',
  'Physical Therapists',
  'Nutritionists & Dietitians',
  'Fitness & Personal Trainers',
  'Occupational Therapists',
  'Dentists & Oral Health',
  'Wellness Coaches',
  'Behavioral Health Clinics',
]

/* ─── Project Card ───────────────────────────────────────────────────── */

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Screenshot — alternates left/right */}
      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
        <div className="group relative">
          {/* Glow */}
          <div
            className="absolute inset-[-6%] rounded-3xl blur-3xl opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-35"
            style={{ background: `radial-gradient(ellipse, ${project.accentHex}, transparent 70%)` }}
          />

          {/* Browser chrome */}
          <div className="relative bg-[#0a1f1c] rounded-t-2xl px-4 py-3 flex items-center gap-3 border border-white/10">
            <div className="flex gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex items-center gap-2 bg-white/[0.07] rounded-md px-3 py-1.5">
              <svg className="w-3 h-3 text-brand-teal-light/40 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white/30 text-[11px] font-mono">{project.url}</span>
            </div>
          </div>

          {/* Screenshot with scroll-on-hover reveal */}
          <div
            className="relative overflow-hidden rounded-b-2xl border border-white/10 border-t-0 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            style={{ height: '480px' }}
          >
            <motion.div
              className="absolute inset-x-0 top-0"
              initial={{ y: 0 }}
              whileHover={{ y: '-62%' }}
              transition={{ duration: 4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={project.image}
                alt={`${project.name} website design`}
                width={1340}
                height={3600}
                className="w-full h-auto block"
              />
            </motion.div>

            {/* Scroll hint overlay (fades on hover) */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none flex flex-col items-center justify-end pb-4 gap-1"
              style={{ background: 'linear-gradient(to top, rgba(13,43,40,0.85), transparent)' }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-4 h-4 text-white/50 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-white/40 text-[10px] uppercase tracking-widest">Hover to scroll</span>
            </motion.div>
          </div>

          {/* Result pills */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {project.results.map((r) => (
              <div
                key={r.label}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5"
              >
                <span className="font-display font-bold text-brand-teal-light text-sm">{r.metric}</span>
                <span className="text-white/40 text-xs">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-8 h-px" style={{ background: project.accentHex }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: project.accentHex }}>
            {project.specialty}
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
          {project.name}
        </h2>
        <p className="text-brand-teal-light text-base font-medium mb-5 italic">
          &ldquo;{project.headline}&rdquo;
        </p>
        <p className="text-white/65 text-base leading-relaxed mb-7">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/[0.1] text-white/50 bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href="/#contact"
          className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 border border-white/20 hover:border-brand-teal-light hover:text-brand-teal-light transition-all duration-200"
          style={{ borderRadius: '2px' }}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          Get a Site Like This
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>
    </motion.article>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative bg-brand-dark pt-40 pb-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,#1A5C5435,transparent)]" />
          <div className="absolute inset-0 bg-grid-dark bg-grid" />

          {/* Floating geometry */}
          <motion.div
            className="absolute right-[10%] top-[20%] w-64 h-64 opacity-[0.04] pointer-events-none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 260 260" fill="none">
              <polygon points="130,15 245,240 15,240" stroke="#42C2BA" strokeWidth="2" fill="none" />
              <polygon points="130,50 210,210 50,210" stroke="#42C2BA" strokeWidth="1" fill="none" />
            </svg>
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block w-8 h-px bg-brand-orange" />
              <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase">Our Work</span>
              <span className="block w-8 h-px bg-brand-orange" />
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Websites That{' '}
              <span className="text-brand-teal-light">Fill Calendars.</span>
            </motion.h1>

            <motion.p
              className="text-white/60 text-xl max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Every project is built around one goal: more patients, more clients, more growth. Here&apos;s a look at what we&apos;ve built for health professionals just like you.
            </motion.p>

            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-200"
              style={{ borderRadius: '2px' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          {/* Diagonal → dark */}
          <div className="pointer-events-none">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
              <path d="M0,80 L1440,0 L1440,80 Z" fill="#0D2B28" />
            </svg>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="bg-brand-dark py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-28">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>

          {/* Diagonal → cream */}
          <div className="pointer-events-none mt-24">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
              <path d="M0,0 L1440,80 L0,80 Z" fill="#F8F5F0" />
            </svg>
          </div>
        </section>

        {/* ── Specialties we serve ── */}
        <section className="bg-brand-cream py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block w-8 h-px bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase">Who We Build For</span>
                <span className="block w-8 h-px bg-brand-orange" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark leading-tight">
                Built for Every Corner of{' '}
                <span className="text-brand-teal">Health &amp; Wellness</span>
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {specialties.map((s, i) => (
                <motion.span
                  key={s}
                  className="bg-white border border-brand-cream-dark text-brand-teal font-semibold text-sm px-4 py-2.5 rounded-full hover:border-brand-teal/30 hover:shadow-md transition-all duration-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ y: -2 }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Diagonal → dark */}
          <div className="pointer-events-none mt-16">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
              <path d="M0,80 L1440,0 L1440,80 Z" fill="#0D2B28" />
            </svg>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-brand-dark py-8 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="block w-8 h-px bg-brand-teal-light" />
                <span className="text-brand-teal-light text-xs font-bold tracking-[0.25em] uppercase">Ready to Grow?</span>
                <span className="block w-8 h-px bg-brand-teal-light" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 text-balance">
                Let&apos;s Build Something{' '}
                <span className="text-brand-orange">Worth Showing Off</span>
              </h2>
              <p className="text-white/55 text-lg mb-10 max-w-2xl mx-auto">
                Your practice deserves a website as professional as the care you deliver. Book a free 30-minute strategy call — no pitch, just clarity on what&apos;s possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-200"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Free Strategy Call
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-teal-light text-white/75 hover:text-brand-teal-light font-medium px-8 py-4 text-sm tracking-wide transition-all duration-200"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Home
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
