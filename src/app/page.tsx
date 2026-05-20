import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "'Red Hat Display', sans-serif" }}>
      <div style={{ padding: '48px 56px 64px', borderBottom: '1.5px solid var(--ink)' }}>
        <Image
          src="/brand/laborativo-logo.png"
          alt="Laborativo"
          width={200}
          height={51}
          style={{ objectFit: 'contain', display: 'block', marginLeft: -20, marginTop: 15 }}
          priority
        />

        <div style={{ marginTop: 72 }}>
          <span className="eyebrow">Quicklink</span>
          <div className="rule" />
          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(48px, 6.5vw, 96px)',
            lineHeight: 0.88,
            letterSpacing: '-0.045em',
            maxWidth: '14ch',
            paddingBottom: '0.08em',
            marginTop: 24,
          }}>
            sistema de diseño<br />listo.
          </h1>

          <p style={{
            fontSize: 17,
            lineHeight: 1.45,
            maxWidth: '48ch',
            color: 'var(--ink)',
            margin: '42px 0 0',
            fontWeight: 500,
          }}>
            <b style={{ fontWeight: 900 }}>Red Hat Display</b>, paleta, bordes y componentes base aplicados.{' '}
            <b style={{ fontWeight: 800 }}>Listos para construir las secciones de la landing.</b>
          </p>
        </div>
      </div>

      <div style={{ padding: '24px 56px', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600 }}>
        <span>Laborativo / Consultoría Creativa Basada en la Emoción</span>
        <span>Quicklink · V0.1</span>
      </div>
    </div>
  )
}
