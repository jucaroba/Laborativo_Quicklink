'use client'

import { useState, type CSSProperties } from 'react'

const inputStyle: CSSProperties = {
  width: '100%',
  border: '1.5px solid var(--ink)',
  background: 'transparent',
  padding: '12px 14px',
  fontSize: 14,
  fontFamily: 'inherit',
  fontWeight: 500,
  color: 'var(--ink)',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: CSSProperties = {
  fontWeight: 900,
  fontSize: 14,
  letterSpacing: '-0.01em',
  margin: 0,
  color: 'var(--ink)',
}

const valueStyle: CSSProperties = {
  fontSize: 14,
  lineHeight: 1.5,
  fontWeight: 500,
  color: 'var(--ink-2)',
  margin: '4px 0 0',
}

export default function ContactoMobile() {
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
    <section style={{ padding: '48px 20px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--bg)' }}>
      <span className="tag">Contacto</span>

      <h2 style={{
        fontWeight: 900,
        fontSize: 22,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        margin: '20px 0 0',
      }}>
        Estamos listos para hablar de tus expectativas o chatear sobre tus inquietudes.
      </h2>

      {/* Formulario */}
      <div style={{ marginTop: 24 }}>
        <h3 style={{
          fontWeight: 900,
          fontSize: 18,
          letterSpacing: '-0.01em',
          margin: '0 0 16px',
        }}>
          Envíanos un mensaje por mail
        </h3>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
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
            style={{ ...inputStyle, gridRow: 'span 2', resize: 'none', fontFamily: 'inherit' }}
            required
          />
          <button
            type="submit"
            className="btn primary"
            style={{ width: '100%', justifyContent: 'flex-end', boxSizing: 'border-box' }}
          >
            Enviar
            <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
              <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </form>
      </div>

      {/* Separador */}
      <div style={{ borderTop: '1px solid var(--ink)', marginTop: 28 }} />

      {/* Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
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
        <div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a
              href="https://www.instagram.com/laborativo.latam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ color: 'var(--ink)', display: 'inline-flex' }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065c0-1.139.925-2.063 2.063-2.063 1.14 0 2.064.924 2.064 2.063 0 1.14-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Caja negra: diagnóstico gratuito */}
      <div style={{
        background: 'var(--ink)',
        color: '#fff',
        padding: '28px 22px',
        marginTop: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
      }}>
        <h3 style={{
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          margin: 0,
          color: '#fff',
        }}>
          Empecemos nuestra relación con el diagnóstico gratuito.
        </h3>

        {/* Descripción full-width */}
        <p style={{
          fontSize: 13,
          lineHeight: 1.5,
          fontWeight: 500,
          margin: 0,
          color: '#fff',
          opacity: 0.85,
        }}>
          Con nuestra herramienta de diagnóstico de cultura, identificamos los principales retos y oportunidades de tu equipo para priorizar acciones y definir intervenciones.
        </p>

        {/* Fila inferior: ícono + botón */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff" style={{ flexShrink: 0 }}>
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
          </svg>
          <a
            href="https://wa.me/573212070606?text=Hola%2C%20quiero%20agendar%20mi%20sesi%C3%B3n%20de%20diagn%C3%B3stico%20gratuito"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              background: '#fff',
              color: 'var(--ink)',
              borderColor: '#fff',
              flex: 1,
              justifyContent: 'space-between',
              boxSizing: 'border-box',
            }}
          >
            Agendar por WhatsApp
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
