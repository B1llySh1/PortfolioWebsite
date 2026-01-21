'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface StatBarProps {
  label: string
  value: number // 0-100
  maxValue?: number
  color?: 'neon' | 'gameboy' | 'cyan'
  delay?: number
}

export default function StatBar({
  label,
  value,
  maxValue = 100,
  color = 'neon',
  delay = 0,
}: StatBarProps) {

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [value, delay])

  const colors = {
    neon: 'from-neon-pink-500 to-neon-pink-300',
    gameboy: 'from-gameboy-green-700 to-gameboy-green-400',
    cyan: 'from-terminal-cyan-500 to-terminal-cyan-300',
  }

  const percentage = (displayValue / maxValue) * 100

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs md:text-sm font-pixel text-gameboy-green-400">
          {label}
        </span>
        <span className="text-xs font-silkscreen text-pixel-white">
          {displayValue}/{maxValue}
        </span>
      </div>

      <div className="stat-bar">
        <motion.div
          className={`stat-bar-fill bg-gradient-to-r ${colors[color]}`}
          initial={{ width: '0%' }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 1.5,
            delay: delay,
            ease: [0, 0, 1, 1], // Stepped easing
          }}
        />
      </div>
    </div>
  )
}
