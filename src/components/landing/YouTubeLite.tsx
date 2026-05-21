'use client'

import { useState } from 'react'

type Props = {
  id: string
  title: string
  /** "maxresdefault" (1280×720) | "hqdefault" (480×360, siempre existe) */
  thumb?: 'maxresdefault' | 'hqdefault'
}

export default function YouTubeLite({ id, title, thumb = 'maxresdefault' }: Props) {
  const [activated, setActivated] = useState(false)

  if (activated) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Reproducir: ${title}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        padding: 0,
        border: 0,
        cursor: 'pointer',
        backgroundColor: '#0a0a0a',
        backgroundImage: `url('https://i.ytimg.com/vi/${id}/${thumb}.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        aria-hidden
        style={{
          width: 88,
          height: 88,
          border: '2px solid #fff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,.4)',
        }}
      >
        <svg width="28" height="32" viewBox="0 0 28 32" fill="#fff" style={{ marginLeft: 4 }}>
          <polygon points="0,0 28,16 0,32" />
        </svg>
      </span>
    </button>
  )
}
