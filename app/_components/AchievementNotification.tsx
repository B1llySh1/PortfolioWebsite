'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useAchievements } from '../_contexts/AchievementContext'
import { Trophy } from 'lucide-react'

export default function AchievementNotification() {
  const { showNotification, currentUnlocked } = useAchievements()

  return (
    <AnimatePresence>
      {showNotification && currentUnlocked && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0, 0, 1, 1] }}
          className="fixed top-4 right-4 z-[10000] max-w-sm"
          role="alert"
          aria-live="polite"
          aria-label="Achievement notification"
        >
          <div className="border-pixel border-retro-yellow-500 bg-pixel-black p-4 shadow-pixel-lg">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-6 h-6 text-retro-yellow-500 animate-bounce" />
              <h3 className="text-retro-yellow-500 text-sm">ACHIEVEMENT UNLOCKED!</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">{currentUnlocked.icon}</span>
              <div>
                <p className="font-pixel text-xs text-neon-pink-400">{currentUnlocked.title}</p>
                <p className="font-silkscreen text-xs text-pixel-white">{currentUnlocked.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
