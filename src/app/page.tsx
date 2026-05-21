import Image from 'next/image'
import LandingMobile from '@/components/landing/LandingMobile'
import YouTubeLite from '@/components/landing/YouTubeLite'
import TestimoniosCarousel, { type Testimonio } from '@/components/landing/TestimoniosCarousel'

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

const TESTIMONIOS: Testimonio[] = [
  {
    quote: 'Lo que hicimos con Laborativo no fue un taller, fue una transformación. El equipo salió hablando un idioma común y eso cambió cómo decidimos todo lo que sigue.',
    name: 'Andrea Cruz',
    role: 'Cargo pendiente',
    company: 'Cervecería Nacional / Ecuador',
    photo: '/img/testimonios/andrea-cruz.png',
  },
  {
    quote: 'Por primera vez sentimos que la cultura era un activo, no un problema. Esa claridad emocional es la diferencia.',
    name: 'Manuela Martínez',
    role: 'Cargo pendiente',
    company: 'Alpina / Colombia',
    photo: '/img/testimonios/manuela-martinez.png',
  },
  {
    quote: 'Llevamos los hallazgos a junta directiva y la conversación cambió por completo. Ahora hablamos de lo que importa.',
    name: 'Natalia Caicedo',
    role: 'Cargo pendiente',
    company: 'Grupo Modelo / México',
    photo: '/img/testimonios/natalia-caicedo.png',
  },
  {
    quote: 'Diseñaron una experiencia que ningún otro proveedor nos había mostrado. Salimos con preguntas mejores y decisiones más rápidas.',
    name: 'Natalia Prada',
    role: 'Cargo pendiente',
    company: 'Ubits / Colombia',
    photo: '/img/testimonios/natalia-prada.png',
  },
]

const CASOS_THUMBS = [
  {
    cliente: 'Cliente A',
    reto: 'Frase del reto de este caso.',
    dato: '200',
    datoLabel: 'líderes alineados',
    resultado: 'Resultado del caso explicado en una frase corta.',
  },
  {
    cliente: 'Cliente B',
    reto: 'Frase del reto de este caso.',
    dato: '6 países',
    datoLabel: 'en 4 meses',
    resultado: 'Resultado del caso explicado en una frase corta.',
  },
  {
    cliente: 'Cliente C',
    reto: 'Frase del reto de este caso.',
    dato: '×3',
    datoLabel: 'velocidad de decisión',
    resultado: 'Resultado del caso explicado en una frase corta.',
  },
]

export default function Home() {
  return (
    <>
      <div className="only-mobile">
        <LandingMobile />
      </div>
      <div className="only-desktop" style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "'Red Hat Display', sans-serif" }}>

        {/* Header + Hero + Manifiesto con foto de fondo */}
        <div style={{
          position: 'relative',
          background: `linear-gradient(rgba(10,10,10,.55), rgba(10,10,10,.55)), url('/img/hero-bg.png') center/cover no-repeat`,
          color: '#fff',
          borderBottom: '1.5px solid #fff',
        }}>
          {/* Header con logo */}
          <header style={{ padding: '48px 56px 0' }}>
            <Image
              src="/brand/laborativo-logo.png"
              alt="Laborativo"
              width={200}
              height={51}
              style={{ objectFit: 'contain', display: 'block', marginLeft: -20, filter: 'invert(1) brightness(2)' }}
              priority
            />
          </header>

          {/* Hero + Manifiesto en dos columnas */}
          <section style={{ padding: '72px 56px 104px' }}>
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
                letterSpacing: '-0.025em',
                paddingBottom: '0.08em',
                margin: 0,
                color: '#fff',
              }}>
                consultoría<br />
                creativa<br />
                basada en<br />
                la emoción.
              </h1>

              {/* Columna derecha: Manifiesto a 16px */}
              <div style={{ maxWidth: '55%' }}>
                <span className="tag" style={{ background: '#fff', color: 'var(--ink)' }}>Manifiesto</span>
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
                        color: '#fff',
                      }}
                    >
                      {parrafo}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Qué hacemos — mismo diseño que las dimensiones del diagnóstico */}
        <section style={{ padding: '64px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--paper)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 40 }}>
            <div>
              <span className="tag">Qué hacemos</span>
              <h2 style={{ fontWeight: 900, fontSize: 'clamp(36px,4.2vw,56px)', lineHeight: .95, letterSpacing: '-0.025em', marginTop: 24 }}>
                No queremos certificar la teoría,<br />
                queremos resolver los temas comunes<br />
                con experiencias extraordinarias.
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

        {/* Casos de éxito */}
        <section style={{ padding: '80px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--paper)' }}>
          <span className="tag">Casos de éxito</span>

          {/* Caso destacado (hero) */}
          <div style={{
            marginTop: 32,
            border: '1.5px solid var(--ink)',
            background: 'var(--card)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
          }}>
            {/* Lado izquierdo: texto */}
            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 22, borderRight: '1.5px solid var(--ink)' }}>
              <span className="tag" style={{ alignSelf: 'flex-start' }}>{CASO_HERO.cliente}</span>
              <h3 style={{ fontWeight: 900, fontSize: 'clamp(22px, 2.2vw, 30px)', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, maxWidth: '24ch' }}>
                {CASO_HERO.reto}
              </h3>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontWeight: 900, fontSize: 'clamp(56px, 5.6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
                  {CASO_HERO.dato}
                </div>
                <div style={{ fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--mute)', marginTop: 8 }}>
                  {CASO_HERO.datoLabel}
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 500, color: 'var(--ink-2)', margin: 0, maxWidth: '40ch' }}>
                {CASO_HERO.resultado}
              </p>
            </div>

            {/* Lado derecho: video YouTube (lite embed) */}
            <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden' }}>
              <YouTubeLite id="ovDlsGJNJps" title={`Caso: ${CASO_HERO.cliente}`} />
            </div>
          </div>

          {/* 3 thumbs */}
          <div style={{
            marginTop: 16,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1.5px solid var(--ink)',
            background: 'var(--card)',
          }}>
            {CASOS_THUMBS.map((c, i) => (
              <div key={i} style={{
                padding: '28px 24px 30px',
                borderRight: i < CASOS_THUMBS.length - 1 ? '1.5px solid var(--ink)' : 'none',
                display: 'flex', flexDirection: 'column', gap: 16,
                minHeight: 260,
              }}>
                <span className="tag" style={{ alignSelf: 'flex-start' }}>{c.cliente}</span>
                <h4 style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0, maxWidth: '24ch' }}>
                  {c.reto}
                </h4>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontWeight: 900, fontSize: 40, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
                    {c.dato}
                  </div>
                  <div style={{ fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--mute)', marginTop: 6 }}>
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

        {/* Testimonios */}
        <section style={{ padding: '80px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--bg)' }}>
          <div style={{ marginBottom: 36 }}>
            <span className="tag">Testimonios</span>
          </div>
          <TestimoniosCarousel testimonios={TESTIMONIOS} />
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
