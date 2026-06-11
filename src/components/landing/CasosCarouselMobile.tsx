'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import YouTubeLite from '@/components/landing/YouTubeLite'
import { type Caso, type Indicador } from '@/components/landing/CasosCarousel'

type Props = {
  casos: Caso[]
}

export default function CasosCarouselMobile({ casos }: Props) {
  const [index, setIndex] = useState(0)
  const [mediaIndex, setMediaIndex] = useState(0)
  const total = casos.length
  const active = casos[index]
  const prev = casos[(index - 1 + total) % total]
  const next = casos[(index + 1) % total]

  useEffect(() => {
    setMediaIndex(0)
  }, [index])

  const go = (delta: number) => {
    setIndex(i => (i + delta + total) % total)
  }

  const goMedia = (delta: number) => {
    const totalMedia = active.media.length
    if (totalMedia === 0) return
    setMediaIndex(m => (m + delta + totalMedia) % totalMedia)
  }

  const currentMedia = active.media[mediaIndex] ?? active.media[0]

  return (
    <>
      <div style={{ marginTop: 22, border: '1.5px solid var(--ink)', background: 'var(--card)' }}>
        {/* Media */}
        <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', background: '#000' }}>
          {currentMedia ? (
            currentMedia.type === 'video' ? (
              <YouTubeLite id={currentMedia.videoId} title={`Caso: ${active.cliente}`} />
            ) : (
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            )
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: '#888',
              fontSize: 11,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}>
              Imágenes próximamente
            </div>
          )}

          {active.media.length > 1 && (
            <div style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              display: 'flex',
              gap: 6,
              zIndex: 2,
            }}>
              <button type="button" onClick={() => goMedia(-1)} aria-label="Imagen anterior" className="casos-media-nav">
                <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
                  <path d="M19 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </button>
              <button type="button" onClick={() => goMedia(1)} aria-label="Imagen siguiente" className="casos-media-nav">
                <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
                  <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Texto */}
        <div style={{ padding: '24px 20px 26px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1.5px solid var(--ink)' }}>
          <span className="tag" style={{ alignSelf: 'flex-start' }}>{active.cliente}</span>
          <h3 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1.2, margin: '15px 0 0' }}>
            {active.reto}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {active.descriptionLead && (
              <p style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 800, color: 'var(--ink)', margin: 0 }}>
                {active.descriptionLead}
              </p>
            )}
            {active.description.split('\n\n').map((p, i) => (
              <p key={i} style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 500, color: 'var(--ink-2)', margin: 0 }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1.5px solid var(--ink)' }}>
          {active.indicadores.map((ind, i) => (
            <div key={i} style={{
              padding: '14px 14px',
              borderRight: i < active.indicadores.length - 1 ? '1.5px solid var(--ink)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              height: 75,
            }}>
              <IndicadorBoxMobile indicador={ind} />
            </div>
          ))}
        </div>
      </div>

      {/* Controles del carrusel */}
      <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button type="button" onClick={() => go(-1)} aria-label="Caso anterior" className="testimonios-nav">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M19 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>{prev.cliente}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>{next.cliente}</span>
          <button type="button" onClick={() => go(1)} aria-label="Caso siguiente" className="testimonios-nav">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

function IndicadorBoxMobile({ indicador }: { indicador: Indicador }) {
  if (indicador.kind === 'percent') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: 8 }}>
        <div style={{ fontWeight: 900, fontSize: 26, letterSpacing: '-0.04em', lineHeight: 0.9, flexShrink: 0 }}>
          {indicador.value}
        </div>
        <div style={{ fontSize: 10, letterSpacing: 'normal', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.35, flex: 1 }}>
          {indicador.label}
        </div>
      </div>
    )
  }
  if (indicador.kind === 'ratio') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 0, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--ink)', flexShrink: 0 }}>
          <span style={{ fontSize: 26 }}>{indicador.num}</span>
          <span style={{ fontSize: 26 }}>/{indicador.den}</span>
        </div>
        <div style={{ fontSize: 10, letterSpacing: 'normal', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.35, flex: 1 }}>
          {indicador.label}
        </div>
      </div>
    )
  }
  if (indicador.kind === 'stack') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center', height: '100%' }}>
        {indicador.items.map((item, j) => (
          <div key={j} style={{
            display: 'flex', alignItems: 'baseline', gap: 6,
            paddingTop: j > 0 ? 5 : 0,
            borderTop: j > 0 ? '1px solid var(--line-soft)' : 'none',
          }}>
            <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: '-0.04em', lineHeight: 0.95, flexShrink: 0 }}>
              {item.value}
            </div>
            <div style={{ fontSize: 9, letterSpacing: 'normal', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.35, flex: 1 }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (indicador.kind === 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, justifyContent: 'center', height: '100%' }}>
        {indicador.items.map((item, j) => (
          <div key={j} style={{ display: 'flex', alignItems: 'baseline', gap: 4, fontSize: 9, lineHeight: 1.35 }}>
            <span style={{ fontWeight: 900, color: 'var(--ink)', flexShrink: 0 }}>{item.title}</span>
            <span style={{ color: 'var(--ink-2)', fontWeight: 500 }}>{item.description}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}
