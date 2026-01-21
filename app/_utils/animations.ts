export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.4,
    ease: [0, 0, 1, 1], // Linear stepped easing
  },
}

export const pixelFadeIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.3,
    ease: [0, 0, 1, 1],
  },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

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

export const buttonPress = {
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
}

// Quest Card reveal animation
export const questReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.4,
    ease: [0, 0, 1, 1],
  },
}

// Skill item collect animation (for modal open)
export const itemCollect = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: {
    duration: 0.3,
    ease: [0, 0, 1, 1],
  },
}

// Dialogue box slide-up animation
export const dialogueSlide = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: {
    duration: 0.3,
    ease: [0, 0, 1, 1],
  },
}

// Achievement notification pop animation
export const achievementPop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
  transition: {
    duration: 0.4,
    ease: [0, 0, 1, 1],
  },
}
