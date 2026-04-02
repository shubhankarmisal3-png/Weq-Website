import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'WEQ Technologies - Custom Software Development Company',
  description:
    'WEQ Technologies offers end-to-end product engineering, mobile app development, custom software, and digital transformation solutions. Trusted by 500+ clients globally.',
  keywords: [
    'custom software development',
    'mobile app development',
    'web development',
    'digital transformation',
    'React',
    'Next.js',
    'Mumbai',
    'India',
  ],
  openGraph: {
    title: 'WEQ Technologies - Custom Software Development Company',
    description:
      'End-to-End Product Engineering & Digital Transformation Solutions',
    url: 'https://weqtechnologies.com',
    siteName: 'WEQ Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEQ Technologies',
    description: 'End-to-End Product Engineering & Digital Transformation Solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#1e1b18] text-white antialiased">{children}</body>
    </html>
  )
}
