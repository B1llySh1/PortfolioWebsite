'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Terminal, Heart, Mail, Globe, Phone, Briefcase } from 'lucide-react'
import PixelCard from './_components/PixelCard'
import PixelButton from './_components/PixelButton'
import StatBar from './_components/StatBar'
import TerminalWindow from './_components/TerminalWindow'
import NavBar from './_components/NavBar'
import SkillInventory from './_components/SkillInventory'
import DialogueBox from './_components/DialogueBox'
import QuestLog from './_components/QuestLog'
import { skills } from './_data/skills'
import { useScrollTracking } from './_hooks/useScrollTracking'
import { useDialogue } from './_hooks/useDialogue'
import { useAchievements } from './_contexts/AchievementContext'

export default function Home() {
  const { unlockAchievement } = useAchievements()
  useScrollTracking()

  const { showDialogue, closeDialogue, dialogue } = useDialogue('home', {
    text: 'Welcome, traveler! This is Billy\'s realm of code and pixels. Explore to discover legendary quests, rare abilities, and powerful achievements...',
    speaker: 'NARRATOR',
    duration: 5000
  })

  const projects = [
    {
      title: 'LEVEL 1',
      name: 'HackHub AI Platform',
      description: 'End-to-end AI recruitment platform reducing HR screening time by 80%',
      tech: ['Django', 'React', 'GPT API', 'MySQL', 'Redis', 'Docker'],
      status: 'IN PROGRESS',
    },
    {
      title: 'LEVEL 2',
      name: 'Music Recommendation Engine',
      description: 'Scalable engine categorizing 1M+ songs with 95% user satisfaction',
      tech: ['PySpark', 'AWS EMR', 'TensorFlow', 'Azure ML'],
      status: 'COMPLETED',
    },
    {
      title: 'LEVEL 3',
      name: 'Ambient Sound Platform',
      description: 'PANNS-based audio ML platform achieving 90%+ usability score',
      tech: ['PyTorch', 'RabbitMQ', 'AWS', 'Librosa'],
      status: 'COMPLETED',
    },
    {
      title: 'LEVEL 4',
      name: 'Reddit Comment Predictor',
      description: 'BERT-based NLP model with 18% reduction in MAE',
      tech: ['HuggingFace', 'PyTorch', 'Pandas'],
      status: 'COMPLETED',
    },
  ]

  const terminalLines = [
    'Initializing career timeline...',
    '[2025-09] LEVEL UP: Started Master\'s @ UWaterloo',
    '[2024-09] QUEST START: Software Developer @ HackHub',
    '[2024-12] UNLOCKED: BSc Computer Science with Distinction',
    '[2021-05] FIRST QUEST: Data Analytics Intern',
    'Type "resume.pdf" to view full experience...',
  ]

  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 1, 1] }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0, 0, 1, 1] }}
              className="inline-block px-6 py-3 border-pixel border-neon-pink-500 bg-retro-purple-800 mb-6"
              style={{ boxShadow: '8px 8px 0px 0px rgba(0, 0, 0, 0.8)' }}
            >
              <span className="text-terminal-cyan-500 text-xs md:text-sm animate-blink">
                █ PRESS START
              </span>
            </motion.div>

            <h1 className="mb-4">BILLY SHI</h1>
            <h2 className="mb-6">Software Developer & Data Scientist</h2>

            <div className="max-w-2xl mx-auto">
              <PixelCard variant="neon" delay={0.3}>
                <div className="text-center mb-6">
                  <span className="text-retro-yellow-500 text-lg md:text-xl font-pixel">
                    LEVEL 99
                  </span>
                </div>

                <StatBar label="MASTER'S PROGRESS" value={85} color="neon" delay={0.5} />
                <StatBar label="BACHELOR'S GPA" value={87} color="gameboy" delay={0.7} />
                <StatBar label="ML/AI EXPERTISE" value={90} color="cyan" delay={0.9} />

                <p className="text-center text-sm mt-6 font-silkscreen text-gameboy-green-400">
                  Master&apos;s student in Data Science & AI at University of Waterloo.
                  Previously built AI recruitment platforms and ML recommendation engines.
                  Specializing in full-stack development, machine learning, and cloud architecture.
                </p>
              </PixelCard>
            </div>
          </motion.div>
        </section>

        {/* Quest Log Section */}
        <section className="mb-16 pixel-border-top pt-8">
          <QuestLog />
        </section>

        {/* Project Grid */}
        <section className="mb-16">
          <h2 className="mb-8 text-center pixel-border-top pt-8">
            <Zap className="inline w-6 h-6 mr-2" />
            SELECT LEVEL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <PixelCard key={index} variant="gameboy" delay={0.1 * index}>
                <div className="mb-4">
                  <span className="text-neon-pink-500 text-xs font-pixel">
                    {project.title}
                  </span>
                </div>

                <h3 className="mb-3">{project.name}</h3>

                <p className="text-sm font-silkscreen text-pixel-white mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-pixel-black text-gameboy-green-400 text-xs font-silkscreen border-pixel-thin border-gameboy-green-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className={`text-xs font-pixel ${project.status === 'COMPLETED' ? 'text-gameboy-green-400' : 'text-retro-yellow-500'}`}>
                  {project.status}
                </span>
              </PixelCard>
            ))}
          </div>
        </section>

        {/* Skills - Equipment Slots */}
        <section className="mb-16">
          <h2 className="mb-8 text-center pixel-border-top pt-8">
            <Terminal className="inline w-6 h-6 mr-2" />
            EQUIPMENT SLOTS
          </h2>

          <div className="max-w-6xl mx-auto">
            <SkillInventory skills={skills} />
          </div>
        </section>

        {/* Career Log */}
        <section className="mb-16">
          <h2 className="mb-8 text-center pixel-border-top pt-8">
            <Briefcase className="inline w-6 h-6 mr-2" />
            CAREER.LOG
          </h2>

          <div className="max-w-3xl mx-auto">
            <TerminalWindow lines={terminalLines} />
          </div>
        </section>

        {/* Connect */}
        <section className="text-center">
          <PixelCard variant="neon" className="max-w-2xl mx-auto">
            <h3 className="mb-6 text-center">CONNECT</h3>

            <div className="flex flex-wrap justify-center gap-4">
              <PixelButton
                href="mailto:l32shi@uwaterloo.ca"
                variant="primary"
                icon={<Mail className="w-5 h-5" />}
              >
                EMAIL
              </PixelButton>

              <PixelButton
                href="https://billyshi.com"
                variant="secondary"
                icon={<Globe className="w-5 h-5" />}
              >
                WEBSITE
              </PixelButton>

              <PixelButton
                href="tel:+12367889600"
                variant="gameboy"
                icon={<Phone className="w-5 h-5" />}
              >
                PHONE
              </PixelButton>
            </div>

            <p className="text-xs font-silkscreen text-gameboy-green-400 mt-8">
              <Heart className="inline w-4 h-4 mr-1 animate-pulse" />
              Made with pixels and passion • University of Waterloo
            </p>

            {/* Hidden Easter Egg */}
            <button
              onClick={() => unlockAchievement('secret-pixel')}
              className="absolute bottom-2 right-2 w-2 h-2 opacity-0 hover:opacity-10 cursor-pointer"
              aria-label="Hidden secret pixel"
            />
          </PixelCard>
        </section>
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
