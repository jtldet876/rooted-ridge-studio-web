'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: 'Custom Website Design',
    description:
      'Beautiful, lightning-fast, mobile-first websites built specifically to convert visitors into booked clients. Every element crafted to reflect your expertise and build patient trust on contact.',
    features: ['Conversion-optimized layouts', 'HIPAA-aware design practices', 'Fast, secure hosting included'],
  },
  {
    number: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803M10.5 7.5v6m3-3h-6" />
      </svg>
    ),
    title: 'SEO & Local Rankings',
    description:
      "Dominate Google when patients search for your specialty in your area. Our proven local SEO strategies are designed specifically for health & wellness practices — not generic businesses.",
    features: ['Local SEO & Google Business Profile', 'Specialty keyword targeting', 'Monthly ranking reports'],
  },
  {
    number: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Ongoing Support & Growth',
    description:
      "We become your dedicated digital partner — handling updates, security, performance, and continuous optimization so you never have to worry about your website again.",
    features: ['Unlimited edits & updates', 'Security & performance monitoring', 'Monthly growth reviews'],
  },
]

export default function Solution() {
  return (
    <section id="services" className="relative bg-brand-dark overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_60%,#1A5C5415,transparent)]" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-dark bg-grid" />

      {/* Decorative ring */}
      <motion.div
        className="absolute -right-32 top-1/4 w-[500px] h-[500px] rounded-full border border-brand-teal-light/[0.04] pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -right-20 top-1/3 w-[350px] h-[350px] rounded-full border border-brand-orange/[0.04] pointer-events-none"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      />

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
            <span className="block w-8 h-px bg-brand-teal-light" />
            <span className="text-brand-teal-light text-xs font-bold tracking-[0.25em] uppercase">Our Services</span>
            <span className="block w-8 h-px bg-brand-teal-light" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
            Everything Your Practice Needs{' '}
            <span className="text-brand-teal-light">to Grow Online</span>
          </h2>
          <p className="text-white/55 text-lg mt-4 leading-relaxed">
            One trusted partner. All the digital tools your practice needs to attract and retain more clients.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-brand-teal-light/30 transition-all duration-300 p-8"
              style={{ borderRadius: '2px' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-teal-light/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex items-start justify-between mb-7">
                <div className="text-brand-teal-light">{service.icon}</div>
                <span className="font-display font-bold text-[3.5rem] leading-none text-white/[0.06] select-none">
                  {service.number}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-xl mb-3">{service.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2.5 pt-5 border-t border-white/[0.07]">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-white/45 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Diagonal divider → white */}
      <div className="pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ height: '80px' }}
        >
          <path d="M0,80 L1440,0 L1440,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
