'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Lock, ExternalLink } from 'lucide-react'
import { HomeQuest } from '../_data/homeQuests'

interface Props {
  quest: HomeQuest
  index: number
}

export default function HomeQuestCard({ quest, index }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWarping, setIsWarping] = useState(false)
  const isClickable = quest.status === 'completed' && quest.link
  const isLocked = quest.status === 'locked'

  const statusStyles = {
    completed: {
      border: 'border-retro-yellow-500',
      badge: 'bg-retro-yellow-500 text-pixel-black',
      text: 'QUEST CLEARED'
    },
    active: {
      border: 'border-gameboy-green-700',
      badge: 'bg-gameboy-green-700 text-pixel-black',
      text: 'ACTIVE QUEST'
    },
    locked: {
      border: 'border-terminal-cyan-500/50',
      badge: 'bg-terminal-cyan-500 text-pixel-black',
      text: 'QUEST LOCKED'
    }
  }

  // Level warp handler - flash then navigate
  const handleExecute = (link: string) => {
    setIsWarping(true)
    setTimeout(() => {
      window.open(link, '_blank', 'noopener,noreferrer')
      setIsWarping(false)
    }, 400)
  }

  // Card content component to avoid duplication
  const CardContent = () => (
    <>
      {/* QUEST CLEARED stamp for completed */}
      {quest.status === 'completed' && (
        <div className="absolute top-2 right-2 rotate-12">
          <div className="flex items-center gap-1 bg-retro-yellow-500 text-pixel-black px-2 py-1 text-[8px] font-pixel border-2 border-pixel-black">
            <Trophy className="w-3 h-3" />
            CLEARED
          </div>
        </div>
      )}

      {/* Status badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`${statusStyles[quest.status].badge} px-2 py-1 text-[10px] font-pixel flex items-center gap-1`}>
          {isLocked && <Lock className="w-3 h-3" />}
          {statusStyles[quest.status].text}
        </span>
      </div>

      {/* Title */}
      <h3 className={`text-base md:text-lg font-pixel mb-2 ${isLocked ? 'text-terminal-cyan-400' : 'text-neon-pink-400'}`}>
        {quest.title}
      </h3>

      {/* Description */}
      <p className={`font-silkscreen text-xs md:text-sm mb-4 ${isLocked ? 'text-pixel-white/50' : 'text-pixel-white'}`}>
        {quest.description}
      </p>

      {/* Loot/Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {quest.loot.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + (i * 0.05), type: 'spring', stiffness: 100, damping: 20 }}
            className={`px-2 py-1 text-[10px] font-pixel border ${
              isLocked
                ? 'border-terminal-cyan-500/50 text-terminal-cyan-400/70'
                : 'border-gameboy-green-700 text-gameboy-green-400'
            }`}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Requirement text for locked */}
      {isLocked && quest.requirement && (
        <p className="text-[10px] font-pixel text-terminal-cyan-400/70 italic">
          {quest.requirement}
        </p>
      )}

      {/* EXECUTE button for clickable (bouncing) */}
      {isClickable && (
        <motion.div
          className="flex items-center gap-2 mt-4"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop' }}
        >
          <span className="btn-execute">
            EXECUTE
            <ExternalLink className="w-3 h-3" />
          </span>
        </motion.div>
      )}

      {/* Hover indicator - bottom right corner */}
      {isClickable && isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="absolute bottom-3 right-3 text-[10px] font-pixel text-neon-pink-400"
        >
          ► ENTER
        </motion.div>
      )}
    </>
  )

  // Motion wrapper for the card with enhanced slide-in animation
  const cardElement = (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, type: 'spring', stiffness: 120, damping: 18 }}
      whileHover={isClickable ? { scale: 1.02 } : undefined}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        group
        relative border-pixel ${statusStyles[quest.status].border}
        bg-retro-purple-800 p-4 md:p-6
        ${isClickable ? 'cursor-pixel-hand' : ''}
        ${isLocked ? 'cursor-not-allowed opacity-60' : ''}
        ${isHovered && isClickable ? 'neon-glow-border' : ''}
      `}
      style={{ boxShadow: isHovered && isClickable ? undefined : '8px 8px 0px 0px rgba(0, 0, 0, 0.8)' }}
    >
      <CardContent />
    </motion.div>
  )

  // Wrap with click handler for clickable cards
  if (isClickable && quest.link) {
    return (
      <>
        <div
          onClick={() => handleExecute(quest.link!)}
          className="block quest-card-link"
        >
          {cardElement}
        </div>

        {/* Level Warp Flash Overlay */}
        <AnimatePresence>
          {isWarping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.4, times: [0, 0.1, 0.7, 1] }}
              className="level-warp-flash"
            />
          )}
        </AnimatePresence>
      </>
    )
  }

  return cardElement
}
