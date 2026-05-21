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

export default function TestimoniosCarousel({ testimonios, autoAdvanceMs = 8000 }: Props) {
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

  const current = testimonios[index]
  const counterCur = String(index + 1).padStart(2, '0')
  const counterTot = String(testimonios.length).padStart(2, '0')

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="testimonios-card"
        style={{
          border: '1.5px solid var(--ink)',
          background: 'var(--card)',
          display: 'grid',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Photo column (stack for cross-fade) */}
        <div className="testimonios-photo">
          {testimonios.map((t, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: i === index ? 1 : 0,
                transition: 'opacity .5s ease',
              }}
            >
              {t.photo ? (
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#1a1a1a', color: '#fff',
                  fontSize: 'clamp(80px, 11vw, 140px)', fontWeight: 900,
                  letterSpacing: '-0.04em',
                }}>
                  {t.name.charAt(0)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content column */}
        <div className="testimonios-content">
          {/* Big quote mark decorativo */}
          <div aria-hidden className="testimonios-quote-mark" style={{
            fontWeight: 900,
            color: 'var(--ink)',
            margin: 0,
          }}>&ldquo;</div>

          {/* Quote text con cross-fade */}
          <div style={{ position: 'relative', flex: 1, minHeight: 100 }}>
            {testimonios.map((t, i) => (
              <blockquote
                key={i}
                className="testimonios-quote"
                style={{
                  position: i === index ? 'relative' : 'absolute',
                  inset: i === index ? undefined : 0,
                  opacity: i === index ? 1 : 0,
                  transition: 'opacity .4s ease',
                  margin: 0,
                  lineHeight: 1.32,
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  color: 'var(--ink)',
                  maxWidth: '34ch',
                }}
              >
                {t.quote}
              </blockquote>
            ))}
          </div>

          {/* Persona */}
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em' }}>
              {current.name}
            </span>
            <span style={{
              fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase',
              fontWeight: 600, color: 'var(--ink)',
            }}>
              {current.role} · {current.company}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 2, background: 'rgba(10,10,10,.08)',
          pointerEvents: 'none',
        }}>
          <div
            key={`${index}-${paused}`}
            className="testimonios-progress"
            style={{
              animationDuration: `${autoAdvanceMs}ms`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          />
        </div>
      </div>

      {/* Controls fuera de la card */}
      <div style={{
        marginTop: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
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
