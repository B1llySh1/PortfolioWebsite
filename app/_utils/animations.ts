// Spring transition presets for premium fluid feel
export const springTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
}

export const springSnappy = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 25,
}

export const springGentle = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 15,
}

// Page transition with spring
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: springTransition,
}

// Pixel fade-in with spring
export const pixelFadeIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: springTransition,
}

// Stagger container (stagger timing doesn't need spring)
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Glitch hover effect (keeping linear for authentic glitch feel)
export const glitchHover = {
  whileHover: {
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      ease: 'linear',
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
}

// Button press with spring
export const buttonPress = {
  whileTap: {
    scale: 0.95,
    transition: springSnappy,
  },
}

// Quest card reveal with spring
export const questReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: springTransition,
}

// Skill item collect with spring
export const itemCollect = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: springTransition,
}

// Dialogue box slide with spring
export const dialogueSlide = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: springTransition,
}

// Achievement notification with bouncier spring
export const achievementPop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
  transition: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 15,
  },
}

// Section entry animation with spring
export const sectionEntry = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: springTransition,
}

// Card hover scale with spring
export const cardHoverScale = {
  whileHover: {
    scale: 1.02,
    transition: springSnappy,
  },
  whileTap: {
    scale: 0.98,
    transition: springSnappy,
  },
}

// Loot tag pop animation helper
export const lootTagPop = (delay: number) => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    delay,
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
  },
})
