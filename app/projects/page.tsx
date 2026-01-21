'use client'

import { AnimatePresence } from 'framer-motion'
import { Scroll, Lock } from 'lucide-react'
import NavBar from '../_components/NavBar'
import QuestCard from '../_components/QuestCard'
import DialogueBox from '../_components/DialogueBox'
import { quests } from '../_data/quests'
import { useDialogue } from '../_hooks/useDialogue'
import { useAchievements } from '../_contexts/AchievementContext'
import { useEffect } from 'react'

export default function Projects() {
  const { unlockAchievement } = useAchievements()

  const { showDialogue, closeDialogue, dialogue } = useDialogue('projects', {
    text: 'Behold! The legendary quests undertaken by our hero. Each quest represents a triumph over technical challenges, yielding powerful loot and glorious rewards...',
    speaker: 'QUEST MASTER',
    duration: 5000
  })

  // Unlock project-explorer achievement when visiting this page
  useEffect(() => {
    unlockAchievement('project-explorer')
  }, [unlockAchievement])

  return (
    <>
      <NavBar />
      <main>
        <div className="text-center mb-12">
          <h1 className="mb-4">
            <Scroll className="inline w-8 h-8 mr-3" />
            QUEST LOG
          </h1>
          <p className="font-silkscreen text-gameboy-green-400">
            Legendary Quests & Epic Achievements
          </p>
        </div>

        {/* Active & Completed Quests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {quests.filter(q => q.status !== 'upcoming').map((quest, index) => (
            <QuestCard key={index} quest={quest} index={index} />
          ))}
        </div>

        {/* Upcoming Quests Section */}
        {quests.filter(q => q.status === 'upcoming').length > 0 && (
          <div className="mt-16">
            <div className="border-t-2 border-terminal-cyan-500 pt-8 mb-8">
              <h2 className="text-center text-terminal-cyan-500 text-lg md:text-xl flex items-center justify-center gap-3">
                <Lock className="w-6 h-6" />
                COMING SOON
              </h2>
              <p className="text-center font-silkscreen text-gameboy-green-400 text-xs mt-2">
                Quests in Development
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 opacity-80">
              {quests.filter(q => q.status === 'upcoming').map((quest, index) => (
                <QuestCard key={`upcoming-${index}`} quest={quest} index={index} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Dialogue Box */}
      <AnimatePresence>
        {showDialogue && (
          <DialogueBox
            text={dialogue.text}
            speaker={dialogue.speaker}
            onClose={closeDialogue}
            autoClose
            duration={dialogue.duration}
          />
        )}
      </AnimatePresence>
    </>
  )
}
