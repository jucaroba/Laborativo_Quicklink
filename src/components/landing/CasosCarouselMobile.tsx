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
          <p style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 500, color: 'var(--ink-2)', margin: 0 }}>
            {active.description}
          </p>
        </div>

        {/* Indicadores */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1.5px solid var(--ink)' }}>
          {active.indicadores.map((ind, i) => (
            <div key={i} style={{
              padding: '20px 14px',
              borderRight: i < active.indicadores.length - 1 ? '1.5px solid var(--ink)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 140,
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
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: 10 }}>
        <div style={{ fontWeight: 900, fontSize: 30, letterSpacing: '-0.04em', lineHeight: 0.9 }}>
          {indicador.value}
        </div>
        <div style={{ fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4 }}>
          {indicador.label}
        </div>
      </div>
    )
  }
  if (indicador.kind === 'ratio') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
          <span style={{ fontSize: 30 }}>{indicador.num}</span>
          <span style={{ fontSize: 15, color: 'var(--mute)', fontWeight: 700 }}>/ {indicador.den}</span>
        </div>
        <div style={{ fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4 }}>
          {indicador.label}
        </div>
      </div>
    )
  }
  if (indicador.kind === 'stack') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
        {indicador.items.map((item, j) => (
          <div key={j} style={{
            paddingTop: j > 0 ? 8 : 0,
            borderTop: j > 0 ? '1px solid var(--line-soft)' : 'none',
          }}>
            <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: '-0.04em', lineHeight: 0.9 }}>
              {item.value}
            </div>
            <div style={{ fontSize: 8, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--ink)', marginTop: 3, lineHeight: 1.4 }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (indicador.kind === 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
        {indicador.items.map((item, j) => (
          <div key={j}>
            <div style={{ fontWeight: 900, fontSize: 11, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
              {item.title}
            </div>
            <div style={{ fontSize: 9, color: 'var(--ink-2)', lineHeight: 1.4, marginTop: 1 }}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    )
  }
  return null
}
