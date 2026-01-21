'use client'

import { useState, useEffect } from 'react'

interface DialogueConfig {
  text: string
  speaker: string
  duration?: number
}

export function useDialogue(pageId: string, dialogue: DialogueConfig) {
  const [showDialogue, setShowDialogue] = useState(false)

  useEffect(() => {
    // Check if dialogue has been seen before
    const seenDialogues = JSON.parse(localStorage.getItem('seenDialogues') || '[]')

    if (!seenDialogues.includes(pageId)) {
      // Show dialogue after a brief delay
      const timer = setTimeout(() => {
        setShowDialogue(true)

        // Mark as seen
        const updated = [...seenDialogues, pageId]
        localStorage.setItem('seenDialogues', JSON.stringify(updated))
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [pageId])

  const closeDialogue = () => {
    setShowDialogue(false)
  }

  return { showDialogue, closeDialogue, dialogue }
}
