'use client'

import { useRef, useState } from 'react'
import { Video } from "lucide-react"
import { SectionHeading } from "./section-heading"

export function Timeline() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  return (
    <section id="timeline" className="bg-card/40 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="Timeline" kicker="Reel" />

        <div className="mt-10">
          <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-lg border border-border">
            <video
              ref={videoRef}
              src="/Timeline 1.mov"
              controls
              controlsList="nodownload noremoteplayback"
              className="w-full h-full object-cover"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              Tu navegador no soporta video HTML5.
            </video>
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                <div className="relative w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                  <Video className="size-8 text-black ml-1" aria-hidden="true" />
                </div>
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Reel de trabajos recientes
          </p>
        </div>
      </div>
    </section>
  )
}