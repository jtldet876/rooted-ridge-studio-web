'use client'

import { motion } from 'framer-motion'

const pains = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Your website looks outdated',
    description:
      "First impressions are made in under 3 seconds. If your site doesn't look polished and professional, potential clients bounce — and choose someone else.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    title: "You're invisible on Google",
    description:
      "Patients search for your specialty every single day. But if you're buried on page 2, they'll never find you — even if you're the best in your area.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Zero time to manage it yourself',
    description:
      "You're running a practice, seeing patients, and managing a team. Website updates and SEO fall to the bottom of the list — every week, without fail.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'You paid for a site that never delivered',
    description:
      "A beautiful website without SEO and conversion strategy is just an expensive online brochure. You invested real money — you deserve real results.",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative bg-brand-cream pb-0 pt-12 overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-teal bg-grid opacity-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-px bg-brand-orange" />
            <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase">Sound Familiar?</span>
            <span className="block w-8 h-px bg-brand-orange" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark leading-tight text-balance">
            Most Health Professionals Are{' '}
            <span className="text-brand-teal">Losing Clients Online</span>
          </h2>
          <p className="text-brand-dark/55 text-lg mt-4 leading-relaxed">
            You spent years mastering your craft. But your online presence is costing you new clients every single day.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              className="group relative bg-white border border-brand-cream-dark hover:border-brand-teal/25 hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{ borderRadius: '2px' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-0.5 h-full bg-brand-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <div className="p-6">
                <div className="text-brand-orange mb-4">{pain.icon}</div>
                <h3 className="font-display font-bold text-brand-dark text-base mb-2 leading-tight">
                  {pain.title}
                </h3>
                <p className="text-brand-dark/55 text-sm leading-relaxed">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.p
          className="text-center text-brand-dark/40 text-sm italic mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          &ldquo;The average health professional misses 5–10 potential new clients per month due to poor online visibility.&rdquo;
        </motion.p>
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
          <path d="M0,0 L1440,80 L0,80 Z" fill="#0D2B28" />
        </svg>
      </div>
    </section>
  )
}
