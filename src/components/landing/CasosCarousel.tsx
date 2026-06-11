'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import YouTubeLite from '@/components/landing/YouTubeLite'

export type CasoMedia =
  | { type: 'video'; videoId: string }
  | { type: 'image'; src: string; alt: string }

export type Indicador =
  | { kind: 'percent'; value: string; label: string }
  | { kind: 'ratio'; num: string; den: string; label: string }
  | { kind: 'stack'; items: { value: string; label: string }[] }
  | { kind: 'list'; items: { title: string; description: string }[] }

export type Caso = {
  cliente: string
  media: CasoMedia[]
  reto: string
  descriptionLead?: string
  description: string
  indicadores: Indicador[]
}

type Props = {
  casos: Caso[]
}

export default function CasosCarousel({ casos }: Props) {
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
      <div style={{
        marginTop: 32,
        border: '1.5px solid var(--ink)',
        background: 'var(--card)',
      }}>
        {/* Parte superior: texto + media */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          borderBottom: '1.5px solid var(--ink)',
        }}>
          {/* Lado izquierdo: texto */}
          <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 22, borderRight: '1.5px solid var(--ink)' }}>
            <span className="tag" style={{ alignSelf: 'flex-start' }}>{active.cliente}</span>
            <h3 style={{ fontWeight: 900, fontSize: 'clamp(22px, 2.2vw, 30px)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '15px 0 0', maxWidth: '32ch' }}>
              {active.reto}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {active.descriptionLead && (
                <p style={{ fontSize: 15, lineHeight: 1.55, fontWeight: 800, color: 'var(--ink)', margin: 0 }}>
                  {active.descriptionLead}
                </p>
              )}
              {active.description.split('\n\n').map((p, i) => (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.55, fontWeight: 500, color: 'var(--ink-2)', margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Lado derecho: media (video, imagen o placeholder) */}
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
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              )
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: '#888',
                fontSize: 12,
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
                bottom: 12,
                right: 12,
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
        </div>

        {/* Parte inferior: 3 indicadores con diagramación por kind */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {active.indicadores.map((ind, i) => (
            <div key={i} style={{
              padding: '32px 36px 36px',
              borderRight: i < active.indicadores.length - 1 ? '1.5px solid var(--ink)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              height: 170,
            }}>
              <IndicadorBox indicador={ind} />
            </div>
          ))}
        </div>
      </div>

      {/* Controles del carrusel: flecha + nombre del caso prev/next */}
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button type="button" onClick={() => go(-1)} aria-label="Caso anterior" className="testimonios-nav">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M19 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>{prev.cliente}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>{next.cliente}</span>
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

function IndicadorBox({ indicador }: { indicador: Indicador }) {
  if (indicador.kind === 'percent') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: 16 }}>
        <div style={{ fontWeight: 900, fontSize: 'clamp(48px, 4.4vw, 68px)', letterSpacing: '-0.04em', lineHeight: 0.9 }}>
          {indicador.value}
        </div>
        <div style={{ fontSize: 12, letterSpacing: 'normal', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4 }}>
          {indicador.label}
        </div>
      </div>
    )
  }
  if (indicador.kind === 'ratio') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
          <span style={{ fontSize: 'clamp(48px, 4.4vw, 68px)' }}>{indicador.num}</span>
          <span style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: 'var(--mute)', fontWeight: 700 }}>/ {indicador.den}</span>
        </div>
        <div style={{ fontSize: 12, letterSpacing: 'normal', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4 }}>
          {indicador.label}
        </div>
      </div>
    )
  }
  if (indicador.kind === 'stack') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
        {indicador.items.map((item, j) => (
          <div key={j} style={{
            paddingTop: j > 0 ? 10 : 0,
            borderTop: j > 0 ? '1px solid var(--line-soft)' : 'none',
          }}>
            <div style={{ fontWeight: 900, fontSize: 'clamp(22px, 2.1vw, 30px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              {item.value}
            </div>
            <div style={{ fontSize: 10, letterSpacing: 'normal', fontWeight: 500, color: 'var(--ink)', marginTop: 4, lineHeight: 1.35 }}>
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
          <div key={j} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: '-0.01em', color: 'var(--ink)', lineHeight: 1.2 }}>
              {item.title}
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.35 }}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    )
  }
  return null
}
