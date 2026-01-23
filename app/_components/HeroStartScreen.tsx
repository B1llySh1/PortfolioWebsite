'use client'

import { motion } from 'framer-motion'
import { springTransition } from '../_utils/animations'

export default function HeroStartScreen() {
  return (
    <section className="start-screen gpu-accelerated">
      {/* Pixel Avatar Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springTransition}
        className="mb-8"
      >
        <div
          className="w-32 h-32 md:w-40 md:h-40 border-4 border-neon-pink-500 bg-retro-purple-800 mx-auto flex items-center justify-center"
          style={{ boxShadow: '8px 8px 0px 0px rgba(0, 0, 0, 0.8)' }}
        >
          <span className="text-6xl md:text-7xl">👾</span>
        </div>
      </motion.div>

      {/* Name Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...springTransition, delay: 0.15 }}
        className="text-3xl md:text-5xl font-pixel text-neon-pink-500 mb-4 text-center"
        style={{
          textShadow: '4px 4px 0px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 0, 110, 0.5)',
        }}
      >
        BILLY SHI
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm md:text-base font-pixel text-gameboy-green-400 mb-8 text-center"
      >
        Software Developer & Data Scientist
      </motion.p>

      {/* Press Start Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="text-center"
      >
        <div
          className="inline-block px-6 py-3 border-4 border-terminal-cyan-500 bg-retro-purple-800"
          style={{ boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.8)' }}
        >
          <span className="text-terminal-cyan-500 text-xs md:text-sm font-pixel press-start-text">
            PRESS START
          </span>
        </div>
        <p className="text-[10px] font-pixel text-gameboy-green-400/60 mt-6">
          ▼ SCROLL TO BEGIN ADVENTURE ▼
        </p>
      </motion.div>
    </section>
  )
}
