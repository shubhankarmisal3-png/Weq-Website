'use client'

import React, { useMemo } from 'react'

export default function OrbAnimation() {
  const total = 300
  const baseHue = 15 // A bit of orange/red to match the theme

  const particles = useMemo(() => {
    return Array.from({ length: total }).map((_, i) => {
      const z = Math.random() * 360
      const y = Math.random() * 360
      const hue = (40 / total) * i + baseHue
      const delay = i * 0.01

      return {
        id: i,
        style: {
          '--z': `${z}deg`,
          '--y': `${y}deg`,
          '--hue': hue,
          '--delay': `${delay}s`,
        } as React.CSSProperties,
      }
    })
  }, [])

  return (
    <div className="outer-orb-container">
      <div className="inner-space">
        <div className="orb-container">
          <div className="orb-wrap">
            {particles.map((p) => (
              <div key={p.id} className="orb-c" style={p.style} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
