'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-[0_2px_24px_rgba(13,43,40,0.10)] py-2' : 'shadow-sm py-3'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo — no container needed, white bg matches white nav */}
        <a href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/rrlogo.png"
            alt="Rooted Ridge Studio"
            width={375}
            height={225}
            style={{ height: '82px', width: 'auto', display: 'block' }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-brand-teal hover:text-brand-dark text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="/#contact"
            className="bg-brand-orange hover:bg-brand-orange-light text-white text-sm font-semibold px-5 py-2.5 tracking-wide transition-colors duration-200"
            style={{ borderRadius: '2px' }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Free Consultation
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-dark p-2 space-y-1.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-brand-dark origin-center"
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-brand-dark"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-brand-dark origin-center"
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-brand-cream-dark overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-teal hover:text-brand-dark text-base font-semibold py-3 border-b border-brand-cream-dark last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 bg-brand-orange text-white font-semibold text-sm px-5 py-3.5 text-center tracking-wide"
                style={{ borderRadius: '2px' }}
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
