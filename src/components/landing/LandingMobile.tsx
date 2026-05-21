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

const CASO_HERO = {
  cliente: 'Cliente destacado',
  reto: 'Una frase corta y poderosa que resume el reto del cliente.',
  dato: '+38%',
  datoLabel: 'en compromiso del equipo',
  resultado: 'Resultado en una frase explicando el impacto real del trabajo, sin tecnicismos.',
}

const CASOS_THUMBS = [
  { cliente: 'Cliente A', reto: 'Frase del reto de este caso.', dato: '200', datoLabel: 'líderes alineados', resultado: 'Resultado del caso explicado en una frase corta.' },
  { cliente: 'Cliente B', reto: 'Frase del reto de este caso.', dato: '6 países', datoLabel: 'en 4 meses', resultado: 'Resultado del caso explicado en una frase corta.' },
  { cliente: 'Cliente C', reto: 'Frase del reto de este caso.', dato: '×3', datoLabel: 'velocidad de decisión', resultado: 'Resultado del caso explicado en una frase corta.' },
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

      {/* Casos de éxito */}
      <section style={{ padding: '48px 20px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--paper)' }}>
        <span className="tag">Casos de éxito</span>

        {/* Caso destacado */}
        <div style={{ marginTop: 22, border: '1.5px solid var(--ink)', background: 'var(--card)' }}>
          {/* Video placeholder */}
          <div style={{ position: 'relative', aspectRatio: '16 / 9', background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: 64, height: 64,
                border: '2px solid #fff',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,.4)',
              }}>
                <svg width="20" height="22" viewBox="0 0 28 32" fill="#fff" style={{ marginLeft: 3 }}>
                  <polygon points="0,0 28,16 0,32" />
                </svg>
              </div>
            </div>
          </div>
          {/* Texto */}
          <div style={{ padding: '24px 20px 26px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1.5px solid var(--ink)' }}>
            <span className="tag" style={{ alignSelf: 'flex-start' }}>{CASO_HERO.cliente}</span>
            <h3 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 }}>
              {CASO_HERO.reto}
            </h3>
            <div>
              <div style={{ fontWeight: 900, fontSize: 48, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
                {CASO_HERO.dato}
              </div>
              <div style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--mute)', marginTop: 6 }}>
                {CASO_HERO.datoLabel}
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5, fontWeight: 500, color: 'var(--ink-2)', margin: 0 }}>
              {CASO_HERO.resultado}
            </p>
          </div>
        </div>

        {/* 3 thumbs apilados */}
        <div style={{ marginTop: 12, border: '1.5px solid var(--ink)', background: 'var(--card)' }}>
          {CASOS_THUMBS.map((c, i) => (
            <div key={i} style={{
              padding: '22px 20px 24px',
              borderBottom: i < CASOS_THUMBS.length - 1 ? '1.5px solid var(--ink)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <span className="tag" style={{ alignSelf: 'flex-start' }}>{c.cliente}</span>
              <h4 style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 }}>
                {c.reto}
              </h4>
              <div>
                <div style={{ fontWeight: 900, fontSize: 32, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
                  {c.dato}
                </div>
                <div style={{ fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--mute)', marginTop: 5 }}>
                  {c.datoLabel}
                </div>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5, fontWeight: 500, color: 'var(--ink-2)', margin: 0 }}>
                {c.resultado}
              </p>
            </div>
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
