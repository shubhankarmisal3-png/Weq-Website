'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'

export default function ParticlesBackground() {
  return (
    <>
      <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none" />
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          if (window.particlesJS) {
            // @ts-ignore
            window.particlesJS("particles-js", {
              "particles": {
                "number": {
                  "value": 160, // Increased for a more consistent network
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": ["#e8622a", "#ff986e", "#ffffff"]
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  }
                },
                "opacity": {
                  "value": 0.4,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 210, // Increased to ensure connections across more space
                  "color": "#e8622a",
                  "opacity": 0.25,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 1.5, // Slower, more "perfect" and smooth movement
                  "direction": "none",
                  "random": false, // Reduced randomness for a more structured flow
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false // Disabled to prevent dots from clumping together
                  }
                }
              },
              "interactivity": {
                "detect_on": "window",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 200,
                    "line_linked": {
                      "opacity": 0.6
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            });
          }
        }}
      />
    </>
  )
}
