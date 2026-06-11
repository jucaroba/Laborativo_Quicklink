import Image from 'next/image'
import TestimoniosCarouselV2, { type Testimonio } from '@/components/landing/TestimoniosCarouselV2'
import CasosCarouselMobile from '@/components/landing/CasosCarouselMobile'
import { type Caso } from '@/components/landing/CasosCarousel'

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

const CASO_AB_INBEV_DIV: Caso = {
  cliente: 'AB INBEV / Colombia, México, Ecuador',
  media: [
    { type: 'image', src: '/img/casos/grupo-modelo/1.jpg', alt: 'AB INBEV diversidad — imagen 1' },
    { type: 'image', src: '/img/casos/grupo-modelo/2.png', alt: 'AB INBEV diversidad — imagen 2' },
  ],
  reto: '¿Cómo un programa de diversidad, equidad e inclusión puede aumentar los indicadores de pertenencia en la organización?',
  description: 'Desarrollamos el programa "Diversidad e inclusión al alcance de tus manos" entregando herramientas prácticas a más de 35 equipos en Alpina, Bavaria en Colombia, Grupo Modelo en México y Cervecería Nacional en Ecuador.',
  indicadores: [
    { kind: 'percent', value: '100%', label: 'de los participantes recomendarían este taller' },
    { kind: 'ratio', num: '9', den: '10', label: 'afirmaron tener herramientas concretas para aplicar inmediatamente' },
    { kind: 'percent', value: '94%', label: 'identificó acciones concretas para incluir en su día a día' },
  ],
}

const CASO_AB_INBEV_LID: Caso = {
  cliente: 'AB INBEV / Perú, México',
  media: [
    { type: 'image', src: '/img/casos/caso-2/1.png', alt: 'AB INBEV liderazgo — imagen 1' },
    { type: 'image', src: '/img/casos/caso-2/2.png', alt: 'AB INBEV liderazgo — imagen 2' },
    { type: 'image', src: '/img/casos/caso-2/3.png', alt: 'AB INBEV liderazgo — imagen 3' },
    { type: 'image', src: '/img/casos/caso-2/4.png', alt: 'AB INBEV liderazgo — imagen 4' },
  ],
  reto: '¿Cómo lideramos con humanidad sin perder de vista los resultados? Ese fue el reto que varias organizaciones nos invitaron a resolver a través del liderazgo.',
  description: 'Creamos 3 programas de liderazgo: Beer Leader, Lidera + y Mi otro yo, que a través de las experiencias y la práctica dieron herramientas para liderar mejor.',
  indicadores: [
    {
      kind: 'stack',
      items: [
        { value: '+500', label: 'personas en los programas' },
        { value: '+5.000', label: 'beneficiados por un mejor liderazgo' },
      ],
    },
    {
      kind: 'list',
      items: [
        { title: 'Beer Leader', description: 'Programa para top talent.' },
        { title: 'Lidera +', description: 'Programa para empezar a liderar.' },
        { title: 'Mi otro yo', description: 'Programa para…' },
      ],
    },
    { kind: 'percent', value: '87%', label: 'cambió al menos un comportamiento en las 4 semanas posteriores' },
  ],
}

const CASO_PRIMAX: Caso = {
  cliente: 'Primax / Colombia',
  media: [
    { type: 'image', src: '/img/casos/caso-3/1.png', alt: 'Primax — imagen 1' },
    { type: 'image', src: '/img/casos/caso-3/2.png', alt: 'Primax — imagen 2' },
    { type: 'image', src: '/img/casos/caso-3/3.png', alt: 'Primax — imagen 3' },
    { type: 'image', src: '/img/casos/caso-3/4.png', alt: 'Primax — imagen 4' },
  ],
  reto: 'Llevar la cultura más allá de las oficinas centrales y hacer que cada persona, en cada estación y territorio, pudiera reconocerla, vivirla y hacerla suya.',
  description: 'Diseñar Cultura sin Fronteras: un viaje para conectar personas, comportamientos y propósito, haciendo que la esencia de Primax se viviera con la misma fuerza en todos los territorios.',
  indicadores: [
    { kind: 'percent', value: '100%', label: 'del territorio cubierto — 7 plantas a nivel nacional' },
    { kind: 'percent', value: '99%', label: 'manifestó sentirse más conectado con la esencia de Primax' },
    { kind: 'percent', value: '77%', label: 'salió con un compromiso concreto y lo implementó' },
  ],
}

const CASO_BANCO_FALABELLA: Caso = {
  cliente: 'Banco Falabella / Colombia',
  media: [],
  reto: 'Creían que los mayores desafíos eran de procesos, herramientas o coordinación.',
  description: 'El problema no era Excel. Descubrimos que el verdadero reto era otro: conocerse, confiar y conectar con las personas detrás de cada cargo.',
  indicadores: [
    { kind: 'percent', value: '99%', label: 'expresó sentirse más cómodo pidiendo ayuda a otros miembros del equipo' },
    { kind: 'percent', value: '100%', label: 'descubrió algo significativo sobre un compañero que no conocía' },
    { kind: 'ratio', num: '8', den: '10', label: 'se comprometieron con un comportamiento para fortalecer la relación con sus compañeros' },
  ],
}

const CASO_GRUPO_MODELO: Caso = {
  cliente: 'Grupo Modelo / México',
  media: [
    { type: 'video', videoId: 'ovDlsGJNJps' },
    { type: 'image', src: '/img/casos/grupo-modelo/1.jpg', alt: 'Grupo Modelo — imagen 1' },
    { type: 'image', src: '/img/casos/grupo-modelo/2.png', alt: 'Grupo Modelo — imagen 2' },
  ],
  reto: 'Conectar, inspirar y alinear a 110 personas del nuevo equipo Marketing.',
  description: 'Vector 110 fue el concepto en el que combinamos las dimensiones más relevantes: Dirección y Magnitud. Con los 10 líderes del equipo definimos los tres comportamientos clave para desarrollar el potencial de las personas. Vinculamos a las 90 personas del nuevo equipo para entender que la intención y el esfuerzo de cada uno fortalece el logro colectivo.',
  indicadores: [
    { kind: 'percent', value: '110', label: 'personas conectadas' },
    { kind: 'percent', value: '99%', label: 'NPS score' },
    { kind: 'percent', value: '10', label: 'líderes alineados' },
  ],
}

const CASOS: Caso[] = [CASO_AB_INBEV_DIV, CASO_AB_INBEV_LID, CASO_PRIMAX, CASO_BANCO_FALABELLA, CASO_GRUPO_MODELO]

const TESTIMONIOS: Testimonio[] = [
  {
    quote: 'Crearon un cambio de mindset en nuestros líderes y generaron conciencia sobre el liderazgo inclusivo, entendiendo rápidamente la cultura y necesidades de la compañía.',
    name: 'Natalia Caicedo',
    role: 'Head of Talent',
    company: 'Grupo Modelo / México',
    photo: '/img/testimonios/natalia-caicedo.png',
  },
  {
    quote: 'Laborativo transformó nuestros entrenamientos, haciéndolos más dinámicos y alineados con nuestra cultura. Juntos creamos Beer Leaders, un programa para desarrollar liderazgo, bienestar y diversidad e inclusión.',
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
        <CasosCarouselMobile casos={CASOS} />
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
