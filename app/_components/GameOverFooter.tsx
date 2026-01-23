'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { springTransition } from '../_utils/animations'

export default function GameOverFooter() {
  const socialLinks = [
    {
      href: 'https://linkedin.com/in/lei-shi-4a4073226',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LINKEDIN',
    },
    {
      href: 'https://github.com/B1llySh1',
      icon: <Github className="w-5 h-5" />,
      label: 'GITHUB',
    },
  ]

  return (
    <footer className="game-over-footer gpu-accelerated">
      {/* THANKS FOR PLAYING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={springTransition}
      >
        <h2 className="game-over-title">THANKS FOR PLAYING</h2>
      </motion.div>

      {/* Credits */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <p className="text-xs font-pixel text-gameboy-green-400 mb-4">
          ═══ CREDITS ═══
        </p>
        <p className="text-sm font-silkscreen text-pixel-white mb-2">
          Designed & Developed by{' '}
          <span className="text-neon-pink-400">Lei Shi</span>
        </p>
        <p className="text-xs font-silkscreen text-gameboy-green-400">
          Powered by Next.js | Framer Motion | Tailwind CSS
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pixel-social-link neon-flicker"
          >
            {link.icon}
            <span className="text-xs font-pixel">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-[10px] font-pixel text-gameboy-green-400/50"
      >
        © 2025 BILLY.EXE | ALL RIGHTS RESERVED
      </motion.p>
    </footer>
  )
}
