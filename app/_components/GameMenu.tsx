'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { springTransition } from '../_utils/animations'

interface MenuItem {
  href: string
  label: string
  level: number
}

export default function GameMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const menuItems: MenuItem[] = [
    { href: '/', label: 'HOME', level: 1 },
    { href: '/projects', label: 'QUESTS', level: 2 },
    { href: '/experience', label: 'SKILLS', level: 3 },
    { href: '/contact', label: 'CONTACT', level: 4 },
  ]

  return (
    <nav className="game-menu-container gpu-accelerated">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xs md:text-sm font-pixel text-gameboy-green-400 mb-6"
        >
          ═══ SELECT LEVEL ═══
        </motion.h2>

        <div className="game-menu">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springTransition, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="game-menu-item flex items-center gap-2"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Selection cursor */}
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{
                    opacity: hoveredItem === item.href ? 1 : 0,
                    x: hoveredItem === item.href ? [0, 3, 0] : -5,
                  }}
                  transition={{
                    opacity: { duration: 0.1 },
                    x: { duration: 0.4, repeat: hoveredItem === item.href ? Infinity : 0 },
                  }}
                  className="text-neon-pink-500 font-pixel"
                >
                  ►
                </motion.span>

                <span className="whitespace-nowrap">
                  Level {item.level}: {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  )
}
