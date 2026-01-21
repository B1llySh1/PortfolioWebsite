'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface DialogueBoxProps {
  text: string
  speaker?: string
  onClose?: () => void
  autoClose?: boolean
  duration?: number
}

export default function DialogueBox({
  text,
  speaker = 'NARRATOR',
  onClose,
  autoClose = false,
  duration = 3000
}: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 30)
      return () => clearTimeout(timer)
    } else if (autoClose && onClose) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, autoClose, onClose, duration])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: [0, 0, 1, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] max-w-2xl w-full mx-4"
      role="dialog"
      aria-label={`Dialogue from ${speaker}`}
    >
      <div className="pixel-card border-neon-pink-500 bg-retro-purple-900 p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gameboy-green-400 font-pixel text-xs">{speaker}</span>
          {onClose && (
            <button
              onClick={onClose}
              className="text-neon-pink-400 hover:text-neon-pink-300 transition-colors"
              aria-label="Close dialogue"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="font-silkscreen text-sm text-pixel-white leading-relaxed">
          {displayedText}
          {currentIndex < text.length && (
            <span className="inline-block w-2 h-4 bg-pixel-white ml-1 animate-blink" />
          )}
        </p>
      </div>
    </motion.div>
  )
}
