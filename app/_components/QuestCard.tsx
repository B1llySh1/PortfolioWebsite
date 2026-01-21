'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Trophy, Package, ChevronDown, ChevronUp, Star, Lock } from 'lucide-react'
import { Quest } from '../_data/quests'

interface QuestCardProps {
  quest: Quest
  index: number
}

export default function QuestCard({ quest, index }: QuestCardProps) {
  const [expanded, setExpanded] = useState(false)

  const statusStyles = {
    active: {
      border: 'border-retro-yellow-500',
      bg: 'bg-retro-purple-800',
      badge: 'bg-retro-yellow-500 text-pixel-black',
      text: 'ACTIVE QUEST'
    },
    completed: {
      border: 'border-gameboy-green-700',
      bg: 'bg-retro-purple-800',
      badge: 'bg-gameboy-green-700 text-pixel-black',
      text: 'COMPLETED'
    },
    legendary: {
      border: 'border-neon-pink-500',
      bg: 'bg-retro-purple-800',
      badge: 'bg-neon-pink-500 text-pixel-black',
      text: 'LEGENDARY'
    },
    upcoming: {
      border: 'border-terminal-cyan-500',
      bg: 'bg-retro-purple-800',
      badge: 'bg-terminal-cyan-500 text-pixel-black',
      text: 'QUEST LOCKED'
    }
  }

  const style = statusStyles[quest.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.4, ease: [0, 0, 1, 1] }}
    >
      <div
        className={`border-pixel ${style.border} ${style.bg} p-6`}
        style={{
          boxShadow: '8px 8px 0px 0px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Quest Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`px-3 py-1 text-xs font-pixel ${style.badge}`}>
                {style.text}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: quest.difficulty }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-retro-yellow-500 text-retro-yellow-500"
                  />
                ))}
              </div>
            </div>
            <h3 className="text-base md:text-lg text-neon-pink-400 mb-1 flex items-center gap-2">
              {quest.status === 'upcoming' && <Lock className="w-4 h-4 text-terminal-cyan-500" />}
              {quest.title}
            </h3>
            <p className="text-xs font-silkscreen text-terminal-cyan-400">{quest.subtitle}</p>
            <p className="text-xs font-silkscreen text-gameboy-green-400 mt-1">{quest.period}</p>
          </div>
        </div>

        {/* Quest Description */}
        <p className="text-sm font-silkscreen text-pixel-white mb-4 leading-relaxed">
          {quest.description}
        </p>

        {/* Loot Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-gameboy-green-400" />
            <h4 className="text-xs font-pixel text-gameboy-green-400">
              {quest.status === 'upcoming' ? 'PLANNED TECH' : 'LOOT ACQUIRED'}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {quest.loot.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.05) }}
                className="px-2 py-1 bg-pixel-black text-gameboy-green-400 text-xs font-silkscreen border-pixel-thin border-gameboy-green-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-retro-yellow-500" />
            <h4 className="text-xs font-pixel text-retro-yellow-500">
              {quest.status === 'upcoming' ? 'POTENTIAL REWARDS' : 'REWARDS EARNED'}
            </h4>
          </div>
          <ul className="space-y-2">
            {quest.rewards.map((reward, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="text-xs font-silkscreen text-pixel-white flex items-start"
              >
                <span className="text-neon-pink-500 mr-2">▸</span>
                <span>{reward}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Expand Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-4 px-4 py-2 border-pixel-thin border-neon-pink-500 bg-retro-purple-700 text-neon-pink-400 font-pixel text-xs flex items-center justify-center gap-2 hover:bg-neon-pink-500 hover:text-pixel-black transition-all"
          aria-expanded={expanded}
          aria-label={expanded ? 'Hide details' : 'View details'}
        >
          {expanded ? 'HIDE DETAILS' : 'VIEW DETAILS'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </motion.button>

        {/* Expanded Details */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t-2 border-neon-pink-500"
          >
            <p className="text-sm font-silkscreen text-pixel-white">
              This quest showcases advanced technical implementation, professional collaboration,
              and measurable impact on real-world systems. All technologies and methodologies were
              chosen for optimal performance and scalability.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
