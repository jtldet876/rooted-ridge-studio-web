import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rooted Ridge Studio | Web Design & SEO for Health Professionals — Queen Creek, AZ',
  description:
    'Rooted Ridge Studio builds high-converting websites and local SEO strategies for health & wellness professionals in Queen Creek, Gilbert, Chandler, Mesa & the East Valley, AZ. Book a free strategy call today.',
  keywords: [
    'web design Queen Creek AZ',
    'SEO Queen Creek Arizona',
    'health professional website design',
    'therapist website design Queen Creek',
    'nutritionist website Arizona',
    'physical therapist SEO Gilbert AZ',
    'fitness trainer website Chandler AZ',
    'dental website design Mesa AZ',
    'medical website design East Valley',
    'health and wellness SEO San Tan Valley',
    'occupational therapist website Arizona',
    'local SEO health professionals',
    'website design Maricopa AZ',
    'website design Apache Junction AZ',
    'Rooted Ridge Studio',
  ].join(', '),
  authors: [{ name: 'Rooted Ridge Studio', url: 'https://rootedridgestudio.com' }],
  openGraph: {
    title: 'Rooted Ridge Studio | Web Design & SEO for Health Professionals — Queen Creek, AZ',
    description:
      'High-converting websites and local SEO for health & wellness professionals across the East Valley. Based in Queen Creek, AZ.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rooted Ridge Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooted Ridge Studio | Web Design & SEO for Health Professionals',
    description:
      'High-converting websites and SEO for health & wellness professionals in Queen Creek, AZ & the East Valley.',
  },
  icons: {
    icon: [{ url: '/rrlogo.png', type: 'image/png' }],
    apple: [{ url: '/rrlogo.png' }],
    shortcut: '/rrlogo.png',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rooted Ridge Studio',
  description:
    'Web design, SEO, and digital marketing exclusively for health and wellness professionals in Queen Creek, AZ and the East Valley.',
  url: 'https://rootedridgestudio.com',
  email: 'hello@rootedridgestudio.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Queen Creek',
    addressRegion: 'AZ',
    postalCode: '85142',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '33.2488',
    longitude: '-111.6346',
  },
  areaServed: [
    { '@type': 'City', name: 'Queen Creek', sameAs: 'https://en.wikipedia.org/wiki/Queen_Creek,_Arizona' },
    { '@type': 'City', name: 'Gilbert' },
    { '@type': 'City', name: 'Chandler' },
    { '@type': 'City', name: 'Mesa' },
    { '@type': 'City', name: 'San Tan Valley' },
    { '@type': 'City', name: 'Gold Canyon' },
    { '@type': 'City', name: 'Maricopa' },
    { '@type': 'City', name: 'Scottsdale' },
    { '@type': 'City', name: 'Apache Junction' },
    { '@type': 'City', name: 'Tempe' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design & SEO Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO & Google Rankings' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing Website Support & Maintenance' } },
    ],
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-17:00',
  sameAs: [
    'https://www.linkedin.com/company/rootedridgestudio',
    'https://www.instagram.com/rootedridgestudio',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
