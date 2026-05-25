'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setIndex(i => (i + 1) % testimonios.length)
    }, autoAdvanceMs)
    return () => clearTimeout(t)
  }, [paused, autoAdvanceMs, testimonios.length, index])

  const go = (delta: number) => {
    setIndex(i => (i + delta + testimonios.length) % testimonios.length)
  }

  const counterCur = String(index + 1).padStart(2, '0')
  const counterTot = String(testimonios.length).padStart(2, '0')

  const visible = Array.from({ length: VISIBLE }, (_, i) => {
    const realIndex = (index + i) % testimonios.length
    return { t: testimonios[realIndex], realIndex }
  })

  return (
    <div
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

      {/* Progress bar */}
      <div className="testimonios-v2-progress">
        <div
          key={`${index}-${paused}`}
          className="testimonios-progress"
          style={{
            animationDuration: `${autoAdvanceMs}ms`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        />
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

        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em' }}>
          {counterCur}
          <span style={{ color: 'var(--ink)' }}> / {counterTot}</span>
        </span>

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
