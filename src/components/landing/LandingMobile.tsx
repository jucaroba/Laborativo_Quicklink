import Image from 'next/image'
import YouTubeLite from '@/components/landing/YouTubeLite'
import TestimoniosCarouselV2, { type Testimonio } from '@/components/landing/TestimoniosCarouselV2'

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
  cliente: 'Grupo Modelo / México',
  reto: '¡Conectar, inspirar y alinear a 110 personas del nuevo equipo Marketing no era solo el reto: era la oportunidad de transformar un grupo en equipo! Y lo logramos.',
  dato: '99%',
  datoLabel: 'NPS score',
  resultado: 'Alinear y conectar a los 10 líderes del equipo fue el primer paso para lograr algo mucho más grande: movilizar a toda el área hacia una misma visión.',
}

const TESTIMONIOS: Testimonio[] = [
  {
    quote: 'Crearon un cambio de mindset en nuestros líderes y generaron conciencia sobre el liderazgo inclusivo, entendiendo rápidamente la cultura y necesidades de la compañía.',
    name: 'Natalia Caicedo',
    role: 'Head of Talent',
    company: 'Grupo Modelo / México',
    photo: '/img/testimonios/natalia-caicedo.png',
  },
  {
    quote: 'El equipo de Laborativo cambió la forma de nuestros entrenamientos, los hicieron mucho más dinámicos y personalizados a nuestra cultura empresarial. Creamos el programa Beer Leaders para las personas con mayor potencial de crecimiento, enfocando en desarrollar sus skills de liderazgo, bienestar y diversidad e inclusión.',
    name: 'Andrea Cruz',
    role: 'Talent Management and Learning Lead',
    company: 'Cervecería Nacional / Ecuador',
    photo: '/img/testimonios/andrea-cruz.png',
  },
  {
    quote: '¡Con ellos siempre ha sido increíble trabajar! Conectan con la gente como un colaborador más y eso hace que uno confíe ciegamente en su trabajo.',
    name: 'Manuela Martínez',
    role: 'Líder de Cultura, Diversidad & Bienestar',
    company: 'Alpina / Colombia',
    photo: '/img/testimonios/manuela-martinez.png',
  },
  {
    quote: 'Trabajar con Laborativo es tener un aliado estratégico que entiende y soluciona de manera efectiva las necesidades del negocio, desarrollando competencias de manera experiencial.',
    name: 'Natalia Prada',
    role: 'Gerente Talento Humano',
    company: 'Ubits / Colombia - México',
    photo: '/img/testimonios/natalia-prada.png',
  },
  {
    quote: 'Laborativo creó y facilitó el boot camp para el frontline de Supply, logística y ventas: una experiencia vivencial basada en los 10 capabilities. Inolvidable para ellos y para la compañía: llegamos a muchísimas personas y desarrollamos su liderazgo.',
    name: 'Ivanna Von Schoettler',
    role: 'Commercial BP Manager',
    company: 'Cervecería Nacional / Ecuador',
    photo: '/img/testimonios/ivanna-von-schoettler.png',
  },
  {
    quote: 'La mejor forma de aprender es cuando vives una experiencia. Los retos y dinámicas con ellos son la mejor forma de reflexionar sobre liderazgo, relacionamiento y cercanía. ¡Súmenle su buena energía y tienes un espacio que recarga a cualquiera!',
    name: 'Nicolás Nieto',
    role: 'Sales Manager Drug & Pharma Channel',
    company: 'Alpina / Colombia',
    photo: '/img/testimonios/nicolas-nieto.png',
  },
  {
    quote: 'Contar con el apoyo de Laborativo no es solo tener las mejores dinámicas para trabajar el liderazgo, es contar con un aliado estratégico para resolver todo lo que tiene que ver con cultura. Gracias al equipo de Laborativo que nos han acompañado año tras año a crecer.',
    name: 'Sonia Quesada',
    role: 'Fundadora y CEO',
    company: 'High Results / Estados Unidos',
    photo: '/img/testimonios/sonia-quesada.png',
  },
  {
    quote: 'Trabajar con Laborativo ha sido de las mejores experiencias: muestran su pasión y logras aprender mientras disfrutas. Su train de trainers dejó al equipo de HR listo para manejar grupos grandes. Se han vuelto aliada fundamental para el entrenamiento de nuestros talentos.',
    name: 'Analia Castillo',
    role: 'Talent Attraction & EVP Lead',
    company: 'Cervecería Nacional / México',
    photo: '/img/testimonios/analia-castillo.png',
  },
]

const CASOS_THUMBS = [
  { cliente: 'Cliente A', reto: 'Frase del reto de este caso.', dato: '200', datoLabel: 'líderes alineados', resultado: 'Resultado del caso explicado en una frase corta.' },
  { cliente: 'Cliente B', reto: 'Frase del reto de este caso.', dato: '6 países', datoLabel: 'en 4 meses', resultado: 'Resultado del caso explicado en una frase corta.' },
  { cliente: 'Cliente C', reto: 'Frase del reto de este caso.', dato: '×3', datoLabel: 'velocidad de decisión', resultado: 'Resultado del caso explicado en una frase corta.' },
]

export default function LandingMobile() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "'Red Hat Display', sans-serif" }}>

      {/* Hero + Manifiesto con foto de fondo */}
      <div style={{
        background: `linear-gradient(rgba(10,10,10,.55), rgba(10,10,10,.55)), url('/img/hero-bg.png') center/cover no-repeat`,
        color: '#fff',
        borderBottom: '1.5px solid #fff',
      }}>
        <section style={{ padding: '24px 20px 48px' }}>
          <Image
            src="/brand/laborativo-logo.png"
            alt="Laborativo"
            width={140}
            height={36}
            style={{ objectFit: 'contain', display: 'block', marginLeft: -12, filter: 'invert(1) brightness(2)' }}
            priority
          />
          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(36px, 11vw, 52px)',
            lineHeight: 0.92,
            letterSpacing: '-0.025em',
            paddingBottom: '0.08em',
            marginTop: 48,
            color: '#fff',
          }}>
            consultoría creativa basada en la emoción.
          </h1>
        </section>

        <section style={{ padding: '48px 20px 64px' }}>
          <span className="tag" style={{ background: '#fff', color: 'var(--ink)' }}>Manifiesto</span>
          <div style={{ marginTop: 22 }}>
            {MANIFIESTO.map((parrafo, i) => (
              <p
                key={i}
                style={{
                  fontSize: 16,
                  lineHeight: 1.5,
                  fontWeight: 500,
                  margin: i === 0 ? 0 : '24px 0 0',
                  whiteSpace: 'pre-line',
                  color: '#fff',
                }}
              >
                {parrafo}
              </p>
            ))}
          </div>
        </section>
      </div>

      {/* Qué hacemos */}
      <section style={{ padding: '48px 20px 56px', borderBottom: '1.5px solid var(--ink)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 28 }}>
          <div style={{ flex: 1 }}>
            <span className="tag">Qué hacemos</span>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(26px, 7vw, 32px)', lineHeight: .98, letterSpacing: '-0.025em', marginTop: 16 }}>
              No queremos certificar la teoría, queremos resolver los temas comunes con experiencias extraordinarias.
            </h2>
            <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.5, fontWeight: 500, color: 'var(--ink-2)' }}>
              Nos dedicamos a desarrollar programas / talleres de transformación cultural enmarcados en cuatro dimensiones.
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
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1900 / 1002', marginTop: 28 }}>
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
          {/* Video YouTube (lite embed) */}
          <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden' }}>
            <YouTubeLite id="ovDlsGJNJps" title={`Caso: ${CASO_HERO.cliente}`} />
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
              <div style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--ink)', marginTop: 6 }}>
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

      {/* Testimonios */}
      <section style={{ padding: '48px 20px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--paper)' }}>
        <div style={{ marginBottom: 22 }}>
          <span className="tag">Testimonios</span>
        </div>
        <TestimoniosCarouselV2 testimonios={TESTIMONIOS} />
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 9, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600 }}>
        <span>Laborativo / Consultoría Creativa Basada en la Emoción</span>
        <span>Quicklink · V0.1</span>
      </footer>

    </div>
  )
}
