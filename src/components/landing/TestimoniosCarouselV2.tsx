'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type Testimonio = {
  quote: string
  name: string
  role: string
  company: string
  photo?: string | null
}

type Props = {
  testimonios: Testimonio[]
  autoAdvanceMs?: number
}

const VISIBLE = 4

export default function TestimoniosCarouselV2({ testimonios, autoAdvanceMs = 8000 }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    let rafId: number | null = null

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const topRel = rect.top / vh
      // 1 cuando el top de la sección está al borde inferior del viewport (recién entrando).
      // 0 cuando el top cruza el 60% del viewport — ahí las cartas se asientan y quedan
      // alineadas aunque no se pueda hacer más scroll porque la página terminó.
      const raw = (topRel - 0.6) / 0.4
      const progress = Math.max(0, Math.min(1, raw))
      el.style.setProperty('--parallax', String(progress))
      rafId = null
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setIndex(i => (i + VISIBLE) % testimonios.length)
    }, autoAdvanceMs)
    return () => clearTimeout(t)
  }, [paused, autoAdvanceMs, testimonios.length, index])

  const go = (delta: number) => {
    setIndex(i => ((i + delta * VISIBLE) % testimonios.length + testimonios.length) % testimonios.length)
  }

  const visible = Array.from({ length: VISIBLE }, (_, i) => {
    const realIndex = (index + i) % testimonios.length
    return { t: testimonios[realIndex], realIndex }
  })

  return (
    <div
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="testimonios-v2-wrap"
    >
      <div className="testimonios-v2-track">
        {visible.map(({ t, realIndex }, slot) => (
          <article key={`${slot}-${realIndex}`} className="testimonios-v2-card">
            <div className="testimonios-v2-photo">
              {t.photo ? (
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 280px, 260px"
                />
              ) : (
                <div className="testimonios-v2-photo-fallback">{t.name.charAt(0)}</div>
              )}
            </div>

            <h3 className="testimonios-v2-name">{t.name}</h3>

            <span className="chip testimonios-v2-company">{t.company}</span>

            <blockquote className="testimonios-v2-quote">{`“${t.quote}”`}</blockquote>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="testimonios-v2-controls">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="testimonios-nav"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M19 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </button>

        <div className="testimonios-v2-dots" aria-label="Progreso del carrusel">
          {testimonios.map((_, i) => {
            const isActive = i >= index && i < index + VISIBLE
            return <span key={i} className={`testimonios-v2-dot${isActive ? ' is-active' : ''}`} />
          })}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente"
          className="testimonios-nav"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </button>
      </div>
    </div>
  )
}
