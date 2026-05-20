import Image from 'next/image'
import LandingMobile from '@/components/landing/LandingMobile'

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

export default function Home() {
  return (
    <>
      <div className="only-mobile">
        <LandingMobile />
      </div>
      <div className="only-desktop" style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "'Red Hat Display', sans-serif" }}>

        {/* Hero */}
        <section style={{ padding: '48px 56px 80px', borderBottom: '1.5px solid var(--ink)' }}>
          <Image
            src="/brand/laborativo-logo.png"
            alt="Laborativo"
            width={200}
            height={51}
            style={{ objectFit: 'contain', display: 'block', marginLeft: -20, marginTop: 15 }}
            priority
          />
          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(48px, 6.5vw, 96px)',
            lineHeight: 0.88,
            letterSpacing: '-0.045em',
            maxWidth: '15ch',
            paddingBottom: '0.08em',
            marginTop: 80,
          }}>
            consultoría creativa basada en la emoción.
          </h1>
        </section>

        {/* Manifiesto */}
        <section style={{ background: 'var(--paper)', padding: '88px 56px 104px', borderBottom: '1.5px solid var(--ink)' }}>
          <span className="eyebrow">Manifiesto</span>
          <div className="rule" />
          <div style={{ marginTop: 48, maxWidth: '54ch' }}>
            {MANIFIESTO.map((parrafo, i) => (
              <p
                key={i}
                style={{
                  fontSize: 22,
                  lineHeight: 1.5,
                  fontWeight: 500,
                  margin: i === 0 ? 0 : '32px 0 0',
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
        <footer style={{ padding: '24px 56px', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600 }}>
          <span>Laborativo / Consultoría Creativa Basada en la Emoción</span>
          <span>Quicklink · V0.1</span>
        </footer>

      </div>
    </>
  )
}
