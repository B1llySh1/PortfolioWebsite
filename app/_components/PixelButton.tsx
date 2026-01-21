'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PixelButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'gameboy'
  icon?: ReactNode
  className?: string
}

export default function PixelButton({
  children,
  onClick,
  href,
  variant = 'primary',
  icon,
  className = '',
}: PixelButtonProps) {

  const variants = {
    primary: 'border-neon-pink-500 text-neon-pink-400 hover:bg-neon-pink-500 hover:text-pixel-black',
    secondary: 'border-terminal-cyan-500 text-terminal-cyan-500 hover:bg-terminal-cyan-500 hover:text-pixel-black',
    gameboy: 'border-gameboy-green-700 text-gameboy-green-400 hover:bg-gameboy-green-700 hover:text-pixel-black',
  }

  const Component = href ? motion.a : motion.button
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick }

  return (
    <Component
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0, 0, 1, 1] }}
      className={`
        btn-pixel
        ${variants[variant]}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {children}
    </Component>
  )
}
