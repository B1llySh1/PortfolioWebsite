'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PixelCardProps {
  children: ReactNode
  variant?: 'default' | 'neon' | 'gameboy' | 'terminal'
  hoverEffect?: boolean
  className?: string
  delay?: number
}

export default function PixelCard({
  children,
  variant = 'default',
  hoverEffect = true,
  className = '',
  delay = 0,
}: PixelCardProps) {

  const variants = {
    default: 'border-gameboy-green-700 bg-retro-purple-800',
    neon: 'border-neon-pink-500 bg-retro-purple-800',
    gameboy: 'border-gameboy-green-700 bg-gameboy-green-900',
    terminal: 'border-terminal-cyan-500 bg-pixel-black',
  }

  const hoverVariants = {
    default: 'hover:border-neon-pink-500',
    neon: 'hover:shadow-pixel-neon',
    gameboy: 'hover:shadow-pixel-green',
    terminal: 'hover:border-neon-pink-500',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 25,
        delay: delay,
      }}
      whileHover={hoverEffect ? {
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {}}
      className={`
        pixel-card gpu-accelerated
        ${variants[variant]}
        ${hoverEffect ? hoverVariants[variant] : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
