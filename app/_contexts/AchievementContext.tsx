'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt?: Date
}

interface AchievementContextType {
  achievements: Achievement[]
  unlockAchievement: (id: string) => void
  showNotification: boolean
  currentUnlocked: Achievement | null
}

const defaultAchievements: Achievement[] = [
  {
    id: 'visitor',
    title: 'First Steps',
    description: 'Visited the portfolio',
    icon: '🎮',
    unlocked: false
  },
  {
    id: 'deep-diver',
    title: 'Deep Diver',
    description: 'Explored all sections',
    icon: '🏆',
    unlocked: false
  },
  {
    id: 'secret-pixel',
    title: 'Pixel Hunter',
    description: 'Found the hidden pixel',
    icon: '✨',
    unlocked: false
  },
  {
    id: 'project-explorer',
    title: 'Quest Reader',
    description: 'Viewed all projects',
    icon: '📜',
    unlocked: false
  },
  {
    id: 'contact-me',
    title: 'Connection Made',
    description: 'Reached out via contact',
    icon: '💌',
    unlocked: false
  }
]

const AchievementContext = createContext<AchievementContextType | null>(null)

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(defaultAchievements)
  const [showNotification, setShowNotification] = useState(false)
  const [currentUnlocked, setCurrentUnlocked] = useState<Achievement | null>(null)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('achievements')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setAchievements(parsed)
      } catch (e) {
        console.error('Failed to parse achievements:', e)
      }
    }

    // Unlock visitor achievement on first visit
    unlockAchievement('visitor')
  }, [])

  const unlockAchievement = (id: string) => {
    setAchievements(prev => {
      const achievement = prev.find(a => a.id === id)

      // Don't do anything if already unlocked
      if (achievement?.unlocked) {
        return prev
      }

      const updated = prev.map(a =>
        a.id === id
          ? { ...a, unlocked: true, unlockedAt: new Date() }
          : a
      )

      localStorage.setItem('achievements', JSON.stringify(updated))

      // Show notification for newly unlocked achievement
      const unlocked = updated.find(a => a.id === id && a.unlocked)
      if (unlocked) {
        setCurrentUnlocked(unlocked)
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 4000)
      }

      return updated
    })
  }

  return (
    <AchievementContext.Provider
      value={{
        achievements,
        unlockAchievement,
        showNotification,
        currentUnlocked
      }}
    >
      {children}
    </AchievementContext.Provider>
  )
}

export const useAchievements = () => {
  const context = useContext(AchievementContext)
  if (!context) {
    throw new Error('useAchievements must be used within AchievementProvider')
  }
  return context
}
