'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Code, Sparkles, Shield, X } from 'lucide-react'
import { Skill } from '../_data/skills'

interface SkillInventoryProps {
  skills: Skill[]
}

export default function SkillInventory({ skills }: SkillInventoryProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const categories = {
    weaponry: {
      label: 'WEAPONRY',
      subtitle: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      color: 'neon-pink'
    },
    magic: {
      label: 'MAGIC',
      subtitle: 'AI/ML Technologies',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'terminal-cyan'
    },
    armor: {
      label: 'ARMOR',
      subtitle: 'Cloud Infrastructure',
      icon: <Shield className="w-5 h-5" />,
      color: 'gameboy-green'
    }
  }

  const groupedSkills = {
    weaponry: skills.filter(s => s.category === 'weaponry'),
    magic: skills.filter(s => s.category === 'magic'),
    armor: skills.filter(s => s.category === 'armor')
  }

  // Complete class names for Tailwind to detect at build time
  // (Tailwind cannot detect dynamically constructed class names like `bg-${color}-500`)
  const categoryColors = {
    weaponry: {
      text: 'text-neon-pink-500',
      border: 'border-neon-pink-500',
      bg: 'bg-neon-pink-500'
    },
    magic: {
      text: 'text-terminal-cyan-500',
      border: 'border-terminal-cyan-500',
      bg: 'bg-terminal-cyan-500'
    },
    armor: {
      text: 'text-gameboy-green-700',
      border: 'border-gameboy-green-700',
      bg: 'bg-gameboy-green-700'
    }
  }

  return (
    <div className="space-y-8">
      {(Object.keys(categories) as Array<keyof typeof categories>).map((category, catIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: catIndex * 0.2, duration: 0.4, ease: [0, 0, 1, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={categoryColors[category].text}>
              {categories[category].icon}
            </span>
            <div>
              <h3 className={`${categoryColors[category].text} text-sm md:text-base`}>
                {categories[category].label}
              </h3>
              <p className="text-xs font-silkscreen text-gameboy-green-400">
                {categories[category].subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {groupedSkills[category].map((skill) => (
              <motion.button
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSkill(skill)}
                className={`
                  border-pixel ${categoryColors[category].border}
                  bg-retro-purple-800 p-4 text-center cursor-pointer
                  hover:bg-retro-purple-700 transition-all
                `}
                style={{
                  boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.8)',
                }}
                aria-label={`Skill: ${skill.name} - Click for details`}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-xs font-pixel text-pixel-white mb-2">{skill.name}</p>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 ${
                        i < Math.floor(skill.level / 20)
                          ? categoryColors[category].bg
                          : 'bg-pixel-black border border-pixel-white'
                      }`}
                    />
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
            role="dialog"
            aria-label={`Details for ${selectedSkill.name}`}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="border-pixel border-neon-pink-500 bg-retro-purple-900 max-w-lg w-full p-6"
              style={{
                boxShadow: '8px 8px 0px 0px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedSkill.icon}</span>
                  <div>
                    <h3 className="text-lg text-neon-pink-400">{selectedSkill.name}</h3>
                    <p className="text-xs font-silkscreen text-gameboy-green-400">
                      {selectedSkill.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-neon-pink-400 hover:text-neon-pink-300"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-pixel text-terminal-cyan-500 mb-2">PROFESSIONAL USAGE</h4>
                <p className="text-sm font-silkscreen text-pixel-white leading-relaxed">
                  {selectedSkill.usage}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs font-pixel text-gameboy-green-400">PROFICIENCY</span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(selectedSkill.level / 20)
                          ? 'bg-retro-yellow-500'
                          : 'bg-pixel-black border border-pixel-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
