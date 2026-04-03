'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  scale?: number
  className?: string
}

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  duration = 0.8,
  x = 0,
  y = 40,
  scale = 1,
  className = ''
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.33, 1, 0.68, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
