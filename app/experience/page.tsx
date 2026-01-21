'use client'

import { Briefcase, GraduationCap } from 'lucide-react'
import PixelCard from '../_components/PixelCard'
import NavBar from '../_components/NavBar'

export default function Experience() {
  return (
    <>
      <NavBar />
      <main>
        <div className="text-center mb-12">
          <h1 className="mb-4">
            <Briefcase className="inline w-8 h-8 mr-3" />
            PROFESSIONAL EXPERIENCE
          </h1>
          <p className="font-silkscreen text-gameboy-green-400">
            Career Timeline & Education
          </p>
        </div>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="mb-6 text-center">WORK EXPERIENCE</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* HackHub */}
            <PixelCard variant="neon" delay={0.1}>
              <div className="mb-4">
                <h3 className="text-lg md:text-xl mb-2">Software Developer</h3>
                <p className="font-silkscreen text-sm text-neon-pink-400">
                  HackHub - Funded by SFU VentureLabs
                </p>
                <p className="font-silkscreen text-xs text-gameboy-green-400 mt-1">
                  Sep 2024 - May 2025 • Vancouver, Canada
                </p>
              </div>

              <div className="mb-4">
                <span className="px-3 py-1 bg-retro-purple-700 text-retro-yellow-500 text-xs font-pixel">
                  AI RECRUITMENT PLATFORM
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Architected end-to-end AI recruitment platform adopted by industrial firms, <strong className="text-retro-yellow-500">reducing HR screening time by 80%</strong></span>
                </li>
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Engineered secure asynchronous data pipeline using AES encryption and GPT API integration for real-time AI-led interviews</span>
                </li>
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Built Django backend with SSO and LLM-based interview grading for efficient candidate ranking</span>
                </li>
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Optimized performance with MySQL indexing and Redis caching, <strong className="text-retro-yellow-500">improving response times by 50%</strong></span>
                </li>
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Deployed on AWS EC2 with Docker CI/CD pipeline maintaining <strong className="text-retro-yellow-500">99.9% uptime</strong></span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {['Django', 'React', 'GPT API', 'MySQL', 'Redis', 'AWS EC2', 'Docker', 'SSO'].map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-pixel-black text-gameboy-green-400 text-xs font-silkscreen border-pixel-thin border-gameboy-green-700">
                    {tech}
                  </span>
                ))}
              </div>
            </PixelCard>

            {/* Nanjing Institute */}
            <PixelCard variant="gameboy" delay={0.2}>
              <div className="mb-4">
                <h3 className="text-lg md:text-xl mb-2">Data Analytics Intern</h3>
                <p className="font-silkscreen text-sm text-terminal-cyan-400">
                  Nanjing Nanyou Institute of Information Technovation CO., Ltd.
                </p>
                <p className="font-silkscreen text-xs text-gameboy-green-400 mt-1">
                  May 2021 - Aug 2021 • Nanjing, China
                </p>
              </div>

              <div className="mb-4">
                <span className="px-3 py-1 bg-pixel-black text-retro-yellow-500 text-xs font-pixel">
                  MUSIC RECOMMENDATION ENGINE
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Architected scalable data clustering pipeline on AWS EMR to categorize <strong className="text-retro-yellow-500">1M+ songs</strong> using PySpark and K-means</span>
                </li>
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Optimized model with Scikit-learn PCA for dimensionality reduction and improved categorization accuracy</span>
                </li>
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Engineered TensorFlow recommendation engine achieving high-precision genre-based suggestions</span>
                </li>
                <li className="text-sm font-silkscreen text-pixel-white flex items-start">
                  <span className="text-neon-pink-500 mr-2 mt-1">▸</span>
                  <span>Deployed low-latency serving layer on Azure ML using gRPC, achieving <strong className="text-retro-yellow-500">95% user satisfaction rate</strong></span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {['PySpark', 'AWS EMR', 'TensorFlow', 'Azure ML', 'Scikit-learn', 'PCA', 'K-means', 'gRPC'].map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-pixel-black text-gameboy-green-400 text-xs font-silkscreen border-pixel-thin border-gameboy-green-700">
                    {tech}
                  </span>
                ))}
              </div>
            </PixelCard>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-6 text-center">
            <GraduationCap className="inline w-6 h-6 mr-2" />
            EDUCATION
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* UWaterloo */}
            <PixelCard variant="terminal" delay={0.3}>
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-lg md:text-xl mb-2">University of Waterloo</h3>
                  <p className="font-silkscreen text-sm text-terminal-cyan-400">
                    Master&apos;s of Data Science and Artificial Intelligence
                  </p>
                  <p className="font-silkscreen text-xs text-gameboy-green-400 mt-1">
                    Sep 2025 - Present • Waterloo, ON
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-retro-yellow-500 text-2xl font-pixel">85/100</span>
                  <p className="font-silkscreen text-xs text-pixel-white mt-1">Current Grade</p>
                </div>
              </div>
            </PixelCard>

            {/* SFU */}
            <PixelCard variant="terminal" delay={0.4}>
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-lg md:text-xl mb-2">Simon Fraser University</h3>
                  <p className="font-silkscreen text-sm text-terminal-cyan-400">
                    Bachelor of Science in Computer Science (with Distinction)
                  </p>
                  <p className="font-silkscreen text-xs text-gameboy-green-400 mt-1">
                    May 2021 - Dec 2024 • Burnaby, BC
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-retro-yellow-500 text-2xl font-pixel">3.72/4.3</span>
                  <p className="font-silkscreen text-xs text-pixel-white mt-1">CGPA</p>
                </div>
              </div>
            </PixelCard>
          </div>
        </section>
      </main>
    </>
  )
}
