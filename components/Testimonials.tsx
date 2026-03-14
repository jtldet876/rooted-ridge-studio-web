'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    initials: 'SC',
    name: 'Dr. Sarah Chen',
    title: 'Licensed Clinical Psychologist',
    content:
      "Rooted Ridge completely transformed my practice's online presence. Within 3 months of launching, I was fully booked for the first time in years. The SEO work is incredible — I'm now ranking #1 for therapists in my city.",
    metric: '3× more new client inquiries',
  },
  {
    initials: 'MT',
    name: 'Marcus Thompson',
    title: 'Certified Fitness Trainer & Nutrition Coach',
    content:
      "I was skeptical about investing in a website, but the ROI has been undeniable. New clients regularly tell me they found me on Google. Rooted Ridge understood exactly what I needed and delivered far beyond my expectations.",
    metric: 'Fully booked within 60 days',
  },
  {
    initials: 'PS',
    name: 'Dr. Priya Sharma',
    title: 'Physical Therapist, DPT',
    content:
      "Working with Rooted Ridge was seamless. They handled everything — I just answered their questions and reviewed the design. Now I have a website I'm actually proud to share. The ongoing support is worth every penny.",
    metric: '40% increase in online bookings',
  },
]

const trustStats = [
  { value: '5.0★', label: 'Average Review' },
  { value: '94%', label: 'Client Retention' },
  { value: '7+', label: 'Specialties Served' },
  { value: '100%', label: 'Satisfaction Rate' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-brand-cream overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-teal bg-grid opacity-100" />

      {/* Floating geometry */}
      <motion.div
        className="absolute right-[-5%] bottom-[10%] w-52 h-52 opacity-[0.04] pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,10 190,190 10,190" stroke="#1A5C54" strokeWidth="2" fill="none" />
          <polygon points="100,40 165,165 35,165" stroke="#1A5C54" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-px bg-brand-teal" />
            <span className="text-brand-teal text-xs font-bold tracking-[0.25em] uppercase">Client Results</span>
            <span className="block w-8 h-px bg-brand-teal" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark leading-tight text-balance">
            Health Professionals Love{' '}
            <span className="text-brand-teal">Working With Us</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="group flex flex-col bg-white border border-brand-cream-dark hover:border-brand-teal/20 hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: '2px' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
            >
              {/* Metric pill */}
              <div className="px-6 pt-6">
                <span className="inline-flex items-center gap-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {t.metric}
                </span>
              </div>

              <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Opening quote mark */}
                <div className="font-display text-5xl text-brand-teal/15 leading-none mb-1 select-none">&ldquo;</div>

                <blockquote className="text-brand-dark/65 text-sm leading-relaxed flex-1 mb-6">
                  {t.content}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-brand-cream-dark">
                  <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-dark text-sm">{t.name}</div>
                    <div className="text-brand-dark/45 text-xs mt-0.5">{t.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-12 border-t border-brand-cream-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl text-brand-teal">{stat.value}</div>
              <div className="text-brand-dark/45 text-xs mt-1.5 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Diagonal divider → dark */}
      <div className="pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ height: '80px' }}
        >
          <path d="M0,80 L1440,0 L1440,80 Z" fill="#0D2B28" />
        </svg>
      </div>
    </section>
  )
}
