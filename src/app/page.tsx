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

const DIMENSIONES_COPY = [
  { n: '01', idx: 'Intención',   h: 'Sentido',        pair: '¿A dónde vamos?', p: 'El propósito compartido.\nQué hace que este equipo exista y hacia qué horizonte se orienta.' },
  { n: '02', idx: 'Motivación',  h: 'Energía',        pair: '¿Por qué?',        p: 'Lo que enciende o apaga a las personas.\nLas razones internas detrás del esfuerzo cotidiano.' },
  { n: '03', idx: 'Interacción', h: 'Vínculos',       pair: '¿Con quién?',      p: 'Cómo nos relacionamos.\nCalidad de la conversación, confianza y colaboración entre personas.' },
  { n: '04', idx: 'Acción',      h: 'Comportamiento', pair: '¿Qué?',            p: 'Lo que se hace realmente, no lo que se dice.\nHábitos, decisiones y entregas visibles.' },
]

export default function Home() {
  return (
    <>
      <div className="only-mobile">
        <LandingMobile />
      </div>
      <div className="only-desktop" style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "'Red Hat Display', sans-serif" }}>

        {/* Header con logo */}
        <header style={{ padding: '48px 56px 0' }}>
          <Image
            src="/brand/laborativo-logo.png"
            alt="Laborativo"
            width={200}
            height={51}
            style={{ objectFit: 'contain', display: 'block', marginLeft: -20 }}
            priority
          />
        </header>

        {/* Hero + Manifiesto en dos columnas */}
        <section style={{ padding: '72px 56px 104px', borderBottom: '1.5px solid var(--ink)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 100,
            alignItems: 'flex-end',
          }}>
            {/* Columna izquierda: H1 en 4 líneas */}
            <h1 style={{
              fontWeight: 900,
              fontSize: 'clamp(48px, 5.5vw, 88px)',
              lineHeight: 0.88,
              letterSpacing: '-0.045em',
              paddingBottom: '0.08em',
              margin: 0,
            }}>
              consultoría<br />
              creativa<br />
              basada en<br />
              la emoción.
            </h1>

            {/* Columna derecha: Manifiesto a 18px */}
            <div style={{ maxWidth: '55%' }}>
              <span className="tag">Manifiesto</span>
              <div style={{ marginTop: 28 }}>
                {MANIFIESTO.map((parrafo, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16,
                      lineHeight: 1.55,
                      fontWeight: 500,
                      margin: i === 0 ? 0 : '22px 0 0',
                      whiteSpace: 'pre-line',
                      color: 'var(--ink)',
                    }}
                  >
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qué hacemos — mismo diseño que las dimensiones del diagnóstico */}
        <section style={{ padding: '64px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--paper)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 40 }}>
            <div>
              <span className="tag">Qué hacemos</span>
              <h2 style={{ fontWeight: 900, fontSize: 'clamp(36px,4.2vw,56px)', lineHeight: .95, letterSpacing: '-.035em', maxWidth: '30ch', marginTop: 24 }}>
                No queremos certificar la teoría, queremos resolver los temas comunes con experiencias extraordinarias.
              </h2>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.55, fontWeight: 500, color: 'var(--ink-2)', maxWidth: '60ch' }}>
                Nos dedicamos a desarrollar programas / talleres de transformación cultural enmarcados en 4 dimensiones.
              </p>
            </div>
            <span className="chip">4 dimensiones</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: '1.5px solid var(--ink)' }}>
            {DIMENSIONES_COPY.map((d, i) => (
              <div key={d.n} className="dim-card" style={{
                borderRight: i < 3 ? '1.5px solid var(--ink)' : 'none',
                padding: '28px 24px 32px',
                minHeight: 250, display: 'flex', flexDirection: 'column', gap: 14,
                background: 'var(--card)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, letterSpacing: .5, textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700 }}>{d.idx}</span>
                  <span style={{ fontWeight: 900, fontSize: 14, color: 'var(--ink)' }}>{d.n}</span>
                </div>
                <div style={{ width: 56, height: 8, background: 'var(--ink)' }} />
                <h3 style={{ fontWeight: 900, fontSize: 26, letterSpacing: -.5, lineHeight: 1, marginTop: 15 }}>{d.h} / {d.pair}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.45, color: 'var(--ink-2)', margin: '8px 0 0', maxWidth: '30ch', fontWeight: 500, whiteSpace: 'pre-line' }}>{d.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nuestros amigos */}
        <section style={{ padding: '64px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--bg)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 64,
            alignItems: 'stretch',
          }}>
            {/* Columna izquierda: label arriba + párrafo abajo */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32 }}>
              <span className="tag">Nuestros amigos</span>
              <p style={{
                fontSize: 18,
                lineHeight: 1.55,
                fontWeight: 500,
                color: 'var(--ink)',
                margin: 0,
                maxWidth: '40ch',
              }}>
                Después de diez años, seis países, cuarenta y tres clientes, y haber puesto a prueba miles de experiencias hoy somos expertos en transformar, traducir y redefinir la cultura corporativa a través de nuestro modelo<br /><b style={{ fontWeight: 800 }}>laborativo emocional creativo.</b>
              </p>
            </div>
            {/* Columna derecha: imagen — su aspect ratio define la altura,
                la columna izquierda se estira para coincidir */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1900 / 1002' }}>
              <Image
                src="/img/amigos.png"
                alt="Algunos de nuestros clientes"
                fill
                style={{ objectFit: 'contain', objectPosition: 'right center' }}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
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
