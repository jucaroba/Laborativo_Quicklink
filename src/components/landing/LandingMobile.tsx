import Image from 'next/image'

const MANIFIESTO = [
  `Después de muchos años trabajando con equipos entendimos algo muy simple:
Muchos problemas que parecen de negocio en realidad tienen un origen profundamente humano.`,
  `La emoción es el elemento más inestable y al mismo tiempo más poderoso de cualquier organización.
No se ve. No se mide fácilmente.
Pero transforma todo.`,
  `Sin emoción no hay intención. Sin intención no hay conciencia.
Y si no hay conciencia…
nada cambia.`,
  `En Laborativo aprendimos a trabajar con ella.
Diseñamos experiencias donde la emoción no sea un accidente…
sino una herramienta.`,
]

export default function LandingMobile() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "'Red Hat Display', sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: '24px 20px 48px', borderBottom: '1.5px solid var(--ink)' }}>
        <Image
          src="/brand/laborativo-logo.png"
          alt="Laborativo"
          width={140}
          height={36}
          style={{ objectFit: 'contain', display: 'block', marginLeft: -12 }}
          priority
        />
        <h1 style={{
          fontWeight: 900,
          fontSize: 'clamp(36px, 11vw, 52px)',
          lineHeight: 0.92,
          letterSpacing: '-0.035em',
          paddingBottom: '0.08em',
          marginTop: 48,
        }}>
          consultoría creativa basada en la emoción.
        </h1>
      </section>

      {/* Manifiesto */}
      <section style={{ background: 'var(--paper)', padding: '48px 20px 64px', borderBottom: '1.5px solid var(--ink)' }}>
        <span className="eyebrow">Manifiesto</span>
        <div className="rule" />
        <div style={{ marginTop: 28 }}>
          {MANIFIESTO.map((parrafo, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                lineHeight: 1.5,
                fontWeight: 500,
                margin: i === 0 ? 0 : '24px 0 0',
                whiteSpace: 'pre-line',
                color: 'var(--ink)',
              }}
            >
              {parrafo}
            </p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 9, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600 }}>
        <span>Laborativo / Consultoría Creativa Basada en la Emoción</span>
        <span>Quicklink · V0.1</span>
      </footer>

    </div>
  )
}
