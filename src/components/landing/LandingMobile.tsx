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

const DIMENSIONES_COPY = [
  { n: '01', idx: 'Intención',   h: 'Sentido',        pair: '¿A dónde vamos?', p: 'El propósito compartido.\nQué hace que este equipo exista y hacia qué horizonte se orienta.' },
  { n: '02', idx: 'Motivación',  h: 'Energía',        pair: '¿Por qué?',        p: 'Lo que enciende o apaga a las personas.\nLas razones internas detrás del esfuerzo cotidiano.' },
  { n: '03', idx: 'Interacción', h: 'Vínculos',       pair: '¿Con quién?',      p: 'Cómo nos relacionamos.\nCalidad de la conversación, confianza y colaboración entre personas.' },
  { n: '04', idx: 'Acción',      h: 'Comportamiento', pair: '¿Qué?',            p: 'Lo que se hace realmente, no lo que se dice.\nHábitos, decisiones y entregas visibles.' },
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
        <span className="tag">Manifiesto</span>
        <div style={{ marginTop: 22 }}>
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

      {/* Qué hacemos */}
      <section style={{ padding: '48px 20px 56px', borderBottom: '1.5px solid var(--ink)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 28 }}>
          <div style={{ flex: 1 }}>
            <span className="tag">Qué hacemos</span>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px, 7.5vw, 36px)', lineHeight: .98, letterSpacing: '-.03em', marginTop: 16 }}>
              No queremos certificar la teoría, queremos resolver los temas comunes con experiencias extraordinarias.
            </h2>
            <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.5, fontWeight: 500, color: 'var(--ink-2)' }}>
              Nos dedicamos a desarrollar programas / talleres de transformación cultural enmarcados en 4 dimensiones.
            </p>
          </div>
        </div>
        <span className="chip" style={{ marginBottom: 20, display: 'inline-flex' }}>4 dimensiones</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', border: '1.5px solid var(--ink)', marginTop: 8 }}>
          {DIMENSIONES_COPY.map((d, i) => (
            <div key={d.n} style={{
              borderBottom: i < DIMENSIONES_COPY.length - 1 ? '1.5px solid var(--ink)' : 'none',
              padding: '22px 18px 24px',
              display: 'flex', flexDirection: 'column', gap: 12,
              background: 'var(--card)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, letterSpacing: .5, textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700 }}>{d.idx}</span>
                <span style={{ fontWeight: 900, fontSize: 13, color: 'var(--ink)' }}>{d.n}</span>
              </div>
              <div style={{ width: 48, height: 6, background: 'var(--ink)' }} />
              <h3 style={{ fontWeight: 900, fontSize: 22, letterSpacing: -.5, lineHeight: 1.05, marginTop: 8 }}>{d.h} / {d.pair}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--ink-2)', margin: '4px 0 0', fontWeight: 500, whiteSpace: 'pre-line' }}>{d.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nuestros amigos */}
      <section style={{ padding: '48px 20px 56px', borderBottom: '1.5px solid var(--ink)' }}>
        <span className="tag">Nuestros amigos</span>
        <p style={{
          marginTop: 24,
          fontSize: 15,
          lineHeight: 1.55,
          fontWeight: 500,
          color: 'var(--ink)',
        }}>
          Después de diez años, seis países, cuarenta y tres clientes, y haber puesto a prueba miles de experiencias hoy somos expertos en transformar, traducir y redefinir la cultura corporativa a través de nuestro modelo<br /><b style={{ fontWeight: 800 }}>laborativo emocional creativo.</b>
        </p>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1920 / 940', marginTop: 28 }}>
          <Image
            src="/img/amigos.png"
            alt="Algunos de nuestros clientes"
            fill
            style={{ objectFit: 'contain' }}
            sizes="100vw"
          />
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
