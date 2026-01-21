'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  // Parallax layers with different speeds
  const layerFar = useTransform(scrollY, [0, 1000], [0, 150])
  const layerMid = useTransform(scrollY, [0, 1000], [0, 300])
  const layerNear = useTransform(scrollY, [0, 1000], [0, 500])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.02
      const y = (e.clientY - window.innerHeight / 2) * 0.02
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Far layer: Stars/pixels */}
      <motion.div
        className="parallax-layer-far"
        style={{
          y: layerFar,
          x: mousePosition.x * 0.5,
        }}
      />

      {/* Mid layer: Floating islands */}
      <motion.div
        className="parallax-layer-mid"
        style={{
          y: layerMid,
          x: mousePosition.x * 1,
        }}
      />

      {/* Near layer: Foreground elements */}
      <motion.div
        className="parallax-layer-near"
        style={{
          y: layerNear,
          x: mousePosition.x * 1.5,
        }}
      />
    </div>
  )
}
