'use client'

import { useState, type CSSProperties } from 'react'

const inputStyle: CSSProperties = {
  width: '100%',
  border: '1.5px solid var(--ink)',
  background: 'transparent',
  padding: '14px 16px',
  fontSize: 15,
  fontFamily: 'inherit',
  fontWeight: 500,
  color: 'var(--ink)',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: CSSProperties = {
  fontWeight: 900,
  fontSize: 15,
  letterSpacing: '-0.01em',
  margin: 0,
  color: 'var(--ink)',
}

const valueStyle: CSSProperties = {
  fontSize: 15,
  lineHeight: 1.5,
  fontWeight: 500,
  color: 'var(--ink-2)',
  margin: '4px 0 0',
}

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Quicklink — Mensaje de ${nombre || 'visitante'}`
    const body = [
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      `Teléfono: ${telefono}`,
      '',
      mensaje,
    ].join('\n')
    window.location.href = `mailto:linamaria@laborativo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section style={{ padding: '80px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--bg)' }}>
      <span className="tag">Contacto</span>

      <h2 style={{
        fontWeight: 900,
        fontSize: 'clamp(26px, 2.8vw, 40px)',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        margin: '32px 0 0',
        maxWidth: '32ch',
      }}>
        Estamos listos para hablar de tus expectativas o chatear sobre tus inquietudes.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, marginTop: 56 }}>
        {/* Lado izquierdo: info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <h3 style={labelStyle}>Oficina</h3>
            <p style={valueStyle}>Carrera 15a # 106-41</p>
          </div>
          <div>
            <h3 style={labelStyle}>Teléfono</h3>
            <p style={valueStyle}>321 207 0606</p>
          </div>
          <div>
            <h3 style={labelStyle}>Email</h3>
            <p style={valueStyle}>linamaria@laborativo.com</p>
          </div>
          <div style={{ marginTop: 8 }}>
            <h3 style={labelStyle}>Síguenos en nuestras redes</h3>
            <div style={{ display: 'flex', gap: 14, marginTop: 12 }}>
              <a
                href="https://instagram.com/laborativo"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{ color: 'var(--ink)', display: 'inline-flex' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/laborativo"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{ color: 'var(--ink)', display: 'inline-flex' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065c0-1.139.925-2.063 2.063-2.063 1.14 0 2.064.924 2.064 2.063 0 1.14-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Lado derecho: formulario */}
        <div>
          <h3 style={{
            fontWeight: 900,
            fontSize: 'clamp(18px, 1.7vw, 22px)',
            letterSpacing: '-0.01em',
            margin: '0 0 24px',
          }}>
            Envíanos un mensaje por mail
          </h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={telefono}
              onChange={e => setTelefono(e.target.value)}
              style={inputStyle}
            />
            <textarea
              placeholder="Mensaje"
              value={mensaje}
              onChange={e => setMensaje(e.target.value)}
              rows={5}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
              required
            />
            <button type="submit" className="btn primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              Enviar
              <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
                <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
