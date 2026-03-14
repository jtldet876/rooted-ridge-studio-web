'use client'

import { motion } from 'framer-motion'

const checkpoints = [
  'No commitment required',
  'Tailored to your specialty',
  '30 minutes — no fluff, no pressure',
]

export default function FinalCTA() {
  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          className="relative bg-brand-dark overflow-hidden"
          style={{ borderRadius: '2px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,#1A5C5428,transparent)]" />
          <div className="absolute inset-0 bg-grid-dark bg-grid" />

          {/* Diagonal accent stripe */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
            style={{
              background: 'repeating-linear-gradient(-45deg, #42C2BA, #42C2BA 1px, transparent 1px, transparent 20px)',
            }}
          />

          {/* Floating triangles */}
          <motion.div
            className="absolute -right-12 -top-12 w-80 h-80 opacity-[0.04] pointer-events-none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,20 280,270 20,270" stroke="#42C2BA" strokeWidth="1.5" fill="none" />
              <polygon points="150,60 240,240 60,240" stroke="#42C2BA" strokeWidth="0.8" fill="none" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute -left-8 -bottom-8 w-52 h-52 opacity-[0.04] pointer-events-none"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="100,15 190,185 10,185" stroke="#E07B28" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start p-8 sm:p-12 lg:p-16">

            {/* Left: Copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase">Ready to Grow?</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 text-balance">
                Your Practice Deserves a Website That Works as Hard as{' '}
                <span className="text-brand-teal-light">You Do</span>
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-8">
                Book a free 30-minute strategy call. No commitment, no pressure — just a clear picture of what&apos;s possible for your practice&apos;s online growth.
              </p>

              <div className="space-y-3 mb-10">
                {checkpoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-white/65 text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-teal-light/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {point}
                  </div>
                ))}
              </div>

              {/* Social proof line */}
              <div className="flex items-center gap-3 p-4 bg-white/[0.04] border border-white/[0.07]" style={{ borderRadius: '2px' }}>
                <div className="flex -space-x-2">
                  {['SC', 'MT', 'PS'].map((initials) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full bg-brand-teal border-2 border-brand-dark flex items-center justify-center text-white text-xs font-bold"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-xs leading-tight">
                  <span className="text-white font-semibold">50+ health professionals</span> across Queen Creek, Gilbert &amp; the East Valley trust Rooted Ridge Studio.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="bg-white/[0.04] border border-white/[0.08] p-7 sm:p-8"
              style={{ borderRadius: '2px' }}
            >
              <h3 className="font-display font-bold text-white text-xl mb-6">
                Book Your Free Strategy Call
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Sarah"
                      className="w-full bg-white/[0.05] border border-white/10 focus:border-brand-teal-light text-white text-sm placeholder-white/20 px-4 py-3 outline-none transition-colors duration-200"
                      style={{ borderRadius: '2px' }}
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Chen"
                      className="w-full bg-white/[0.05] border border-white/10 focus:border-brand-teal-light text-white text-sm placeholder-white/20 px-4 py-3 outline-none transition-colors duration-200"
                      style={{ borderRadius: '2px' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@mypractice.com"
                    className="w-full bg-white/[0.05] border border-white/10 focus:border-brand-teal-light text-white text-sm placeholder-white/20 px-4 py-3 outline-none transition-colors duration-200"
                    style={{ borderRadius: '2px' }}
                  />
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">
                    Your Specialty
                  </label>
                  <select
                    className="w-full bg-white/[0.05] border border-white/10 focus:border-brand-teal-light text-white/80 text-sm px-4 py-3 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                    style={{ borderRadius: '2px' }}
                  >
                    <option value="" className="bg-brand-dark text-white">Select your specialty…</option>
                    <option value="therapist" className="bg-brand-dark text-white">Mental Health Therapist</option>
                    <option value="nutritionist" className="bg-brand-dark text-white">Nutritionist / Dietitian</option>
                    <option value="trainer" className="bg-brand-dark text-white">Fitness Trainer</option>
                    <option value="pt" className="bg-brand-dark text-white">Physical Therapist</option>
                    <option value="ot" className="bg-brand-dark text-white">Occupational Therapist</option>
                    <option value="dentist" className="bg-brand-dark text-white">Dentist</option>
                    <option value="other" className="bg-brand-dark text-white">Other Health Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">
                    Biggest Challenge
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your biggest challenge with your online presence…"
                    className="w-full bg-white/[0.05] border border-white/10 focus:border-brand-teal-light text-white text-sm placeholder-white/20 px-4 py-3 outline-none transition-colors duration-200 resize-none"
                    style={{ borderRadius: '2px' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-light text-white font-semibold py-4 text-sm tracking-wide transition-colors duration-200 mt-1"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Book My Free Strategy Call →
                </motion.button>

                <p className="text-white/25 text-xs text-center pt-1">
                  No spam, ever. We respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Diagonal divider → dark */}
      <div className="pointer-events-none -mt-1">
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
