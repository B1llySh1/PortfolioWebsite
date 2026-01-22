'use client'

import { motion } from 'framer-motion'
import { Scroll } from 'lucide-react'
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
        <Scroll className="w-6 h-6 text-retro-yellow-500" />
        <h2 className="text-xl md:text-2xl text-retro-yellow-500">QUEST LOG</h2>
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
