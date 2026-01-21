import type { Metadata } from 'next'
import { Press_Start_2P, Silkscreen } from 'next/font/google'
import './globals.css'
import { AchievementProvider } from './_contexts/AchievementContext'
import ParallaxBackground from './_components/ParallaxBackground'
import AchievementNotification from './_components/AchievementNotification'

// Fonts
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-silkscreen',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Billy Shi | Level 99 Developer',
  description: 'Retro-gaming themed developer portfolio - Master\'s student in Data Science & AI at University of Waterloo',
  keywords: ['developer', 'portfolio', 'full-stack', 'data science', 'machine learning', 'retro', '8-bit'],
  authors: [{ name: 'Billy Shi' }],
  openGraph: {
    title: 'Billy Shi | Level 99 Developer',
    description: 'Software Developer & Data Scientist specializing in AI, ML, and full-stack development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${silkscreen.variable}`}>
      <body className={pressStart2P.className}>
        <AchievementProvider>
          <ParallaxBackground />
          {children}
          <AchievementNotification />
        </AchievementProvider>
      </body>
    </html>
  )
}
