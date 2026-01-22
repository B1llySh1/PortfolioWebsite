'use client'

import { motion } from 'framer-motion'
import { ClipboardList } from 'lucide-react'
import HomeQuestCard from './HomeQuestCard'
import { homeQuests } from '../_data/homeQuests'
import { sectionEntry } from '../_utils/animations'

export default function QuestLog() {
  return (
    <section className="mb-16">
      {/* Section Header */}
      <motion.div
        initial={sectionEntry.initial}
        animate={sectionEntry.animate}
        transition={sectionEntry.transition}
        className="flex items-center gap-3 mb-8"
      >
        <ClipboardList className="w-6 h-6 text-retro-yellow-500" />
        <div>
          <h2 className="text-xl md:text-2xl text-retro-yellow-500 font-pixel">THE QUEST BOARD</h2>
          <p className="text-[10px] font-pixel text-gameboy-green-400 mt-1">
            Select a mission to view deployment details.
          </p>
        </div>
      </motion.div>

      {/* Quest Grid - 2 cols desktop, 1 col mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {homeQuests.map((quest, index) => (
          <HomeQuestCard key={quest.title} quest={quest} index={index} />
        ))}
      </div>
    </section>
  )
}
