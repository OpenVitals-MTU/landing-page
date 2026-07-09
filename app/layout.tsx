import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://openvitals.health'),
  title: {
    default: 'OpenVitals - Local-first Android health dashboard',
    template: '%s - OpenVitals'
  },
  description:
    'OpenVitals is a local-first Android app for viewing, logging, importing, and understanding Health Connect data without accounts, ads, or analytics.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'OpenVitals',
    description:
      'A local-first Android health dashboard powered by Health Connect, built without accounts, ads, or analytics.',
    url: 'https://openvitals.health',
    siteName: 'OpenVitals',
    images: [
      {
        url: '/images/dashboard.png',
        width: 1440,
        height: 3120,
        alt: 'OpenVitals dashboard screenshot'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenVitals',
    description:
      'Local-first Android health tools for Health Connect data, without accounts, ads, or analytics.',
    images: ['/images/dashboard.png']
  },
  icons: {
    icon: '/images/openvitals-logo.png',
    apple: '/images/openvitals-logo.png'
  }
}

export const viewport: Viewport = {
  themeColor: '#0f766e',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
