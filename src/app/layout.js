import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://prashantsingh.vercel.app'),

  title: {
    default: 'Prashant Singh | Full Stack Developer',
    template: '%s | Prashant Singh',
  },

  description:
    'Prashant Singh is a Full Stack Developer specializing in React, Next.js, and modern SaaS applications. Hire for high-converting web experiences.',

  keywords: [
    'Prashant Singh',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer India',
    'Hire Web Developer',
    'SaaS Developer',
  ],

  authors: [{ name: 'Prashant Singh' }],
  creator: 'Prashant Singh',

  openGraph: {
    title: 'Prashant Singh | Full Stack Developer',
    description:
      'Building high-performance SaaS and modern web apps using React & Next.js.',
    url: 'https://prashantsingh.vercel.app',
    siteName: 'Prashant Portfolio',
    images: [
      {
        url: '/prashant-logo.png', // 👉 create this image
        width: 1200,
        height: 630,
        alt: 'Prashant Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Singh | Full Stack Developer',
    description:
      'Hire Prashant Singh for modern, scalable, high-converting web apps.',
    images: ['/prashant-logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://prashantsingh.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y4J1EHQYKV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y4J1EHQYKV');
          `}
        </Script>

        {/* 🔥 Structured Data (SUPER IMPORTANT FOR SEO) */}
        <Script id="schema" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Prashant Singh',
            url: 'https://prashantsingh.vercel.app',
            sameAs: [
              'https://github.com/yourusername',
              'https://linkedin.com/in/yourprofile',
            ],
            jobTitle: 'Full Stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance',
            },
          })}
        </Script>
      </body>
    </html>
  )
}