'use client'

import { useEffect, useState } from 'react'
import { useAchievements } from '../_contexts/AchievementContext'

export function useScrollTracking() {
  const { unlockAchievement } = useAchievements()
  const [scrollDepth, setScrollDepth] = useState(0)

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null

    const handleScroll = () => {
      // Throttle scroll handler to max 60fps
      if (throttleTimeout) return

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null
      }, 16) // ~60fps

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0

      setScrollDepth(scrollPercentage)

      // Unlock Deep Diver achievement at 80% scroll
      if (scrollPercentage > 80) {
        unlockAchievement('deep-diver')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (throttleTimeout) clearTimeout(throttleTimeout)
    }
  }, [unlockAchievement])

  return { scrollDepth }
}
