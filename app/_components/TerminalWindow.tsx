'use client'

import { useState, useEffect } from 'react'

interface TerminalWindowProps {
  lines: string[]
  typingSpeed?: number
  className?: string
}

export default function TerminalWindow({
  lines,
  typingSpeed = 50,
  className = '',
}: TerminalWindowProps) {

  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex >= lines.length) return

    const currentLine = lines[currentLineIndex]

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev]
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = ''
          }
          newLines[currentLineIndex] += currentLine[currentCharIndex]
          return newLines
        })
        setCurrentCharIndex(prev => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed])

  return (
    <div className={`terminal ${className}`}>
      {displayedLines.map((line, index) => (
        <div key={index} className="mb-2">
          <span className="text-neon-pink-500">{'>'}</span> {line}
          {index === currentLineIndex && <span className="terminal-cursor" />}
        </div>
      ))}
    </div>
  )
}
