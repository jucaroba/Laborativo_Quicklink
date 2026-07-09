# Sistema de diseño — Laborativo

Estilos gráficos consolidados del proyecto **Quicklink** para arrancar otro proyecto con la misma identidad visual. Stack de referencia: Next.js 16 + TypeScript + Tailwind v4, App Router, `src/` dir, alias `@/*`.

---

## 1. Identidad en una frase

Editorial brutalista-minimal: fondo gris claro, tinta casi negra, **bordes de 1.5px por todos lados**, tipografía Red Hat Display en pesos altos (900 para titulares), tags negros con texto blanco, un único acento neón. Sin sombras, sin gradientes decorativos, sin bordes redondeados (salvo dots). Todo es plano, cuadrado y de alto contraste.

---

## 2. Tokens de color (CSS variables)

```css
:root {
  --bg:        #F5F5F5;   /* fondo base de la página */
  --bg-2:      #E8E8E8;   /* fondo alternativo/hover suave */
  --paper:     #F2F2F2;   /* fondo de secciones "papel" */
  --card:      #FFFFFF;   /* tarjetas, celdas */
  --ink:       #0A0A0A;   /* tinta principal (texto, bordes, botones) */
  --ink-2:     #1A1A1A;   /* tinta secundaria (párrafos) */
  --mute:      #7A7A7A;   /* texto atenuado, footer, eyebrows soft */
  --line:      #0A0A0A;   /* líneas/bordes */
  --line-soft: rgba(10,10,10,.14); /* separadores tenues */
  --neon:      #D8FF00;   /* acento (usar con moderación) */
  --destructive: #FF3366; /* errores, validación */
}
```

Reglas de uso:
- **Bordes siempre `1.5px solid var(--ink)`.** Es la firma visual del sistema.
- Fondos alternan por sección entre `--bg` y `--paper` para dar ritmo.
- El neón `--D8FF00` es acento puntual, no fondo de bloques grandes.
- Blanco `#fff` para texto sobre fondos oscuros/foto (hero usa overlay negro `.55`).

---

## 3. Tipografía — Red Hat Display

Fuente única para todo (titulares y cuerpo). Se sirve local desde `public/fonts/`.

Pesos disponibles: 300, 400 (+ italic), 500, 600, 700 (+ italic), 800, 900.

```css
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-Light.ttf')      format('truetype'); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-Regular.ttf')    format('truetype'); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-Italic.ttf')     format('truetype'); font-weight: 400; font-style: italic; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-Medium.ttf')     format('truetype'); font-weight: 500; font-style: normal; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-SemiBold.ttf')   format('truetype'); font-weight: 600; font-style: normal; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-Bold.ttf')       format('truetype'); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-BoldItalic.ttf') format('truetype'); font-weight: 700; font-style: italic; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-ExtraBold.ttf')  format('truetype'); font-weight: 800; font-style: normal; font-display: swap; }
@font-face { font-family: 'Red Hat Display'; src: url('/fonts/RedHatDisplay-Black.ttf')      format('truetype'); font-weight: 900; font-style: normal; font-display: swap; }
```

> **Slashed zero:** Red Hat Display activa el glifo de "0" con barra al usar `tabular-nums`. Se desactiva globalmente con `font-feature-settings: "zero" 0;` para que el 0 siempre use el glifo proporcional sin barra. Si necesitas números tabulares con 0 sin barra, ten en cuenta este conflicto.

### Escala tipográfica

| Rol | Tamaño | Peso | Notas |
|-----|--------|------|-------|
| H1 hero | `clamp(48px, 5.5vw, 88px)` | 900 | `line-height: 0.88`, `letter-spacing: -0.025em` |
| H2 sección | `clamp(36px, 4.2vw, 56px)` | 900 | `line-height: 0.95`, `letter-spacing: -0.025em` |
| H3 tarjeta | 26px | 900 | `letter-spacing: -0.5px`, `line-height: 1` |
| Cuerpo destacado | 18px | 500 | `line-height: 1.55` |
| Cuerpo | 16px | 500 | `line-height: 1.55`, color `--ink-2` |
| Cuerpo tarjeta | 14px | 500 | `line-height: 1.45` |
| Eyebrow / footer | 10–11px | 600–700 | uppercase, `letter-spacing: .08em` |

Titulares (`h1`–`h5`): siempre `letter-spacing: -0.02em` de base, márgenes en 0.

---

## 4. Componentes de UI (clases utilitarias)

### Botón `.btn`
Borde de 1.5px, fondo transparente, hover a blanco. Variante `.primary` = fondo tinta, texto claro.

```css
.btn {
  all: unset; cursor: pointer;
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 22px;
  border: 1.5px solid var(--ink);
  background: transparent; color: var(--ink);
  font-weight: 700; font-size: 14px; letter-spacing: -0.01em;
  transition: background .15s ease, color .15s ease, border-color .15s ease;
}
.btn:hover { background: #fff; color: var(--ink); border-color: var(--ink); }
.btn.primary { background: var(--ink); color: var(--bg); }
.btn.primary:hover { background: #fff; color: var(--ink); border-color: var(--ink); }
```

### Tag `.tag` — el sello de sección
Rectángulo negro con texto blanco en uppercase. Encabeza cada sección ("Manifiesto", "Casos de éxito", "Testimonios"…). Para fondos oscuros se invierte con `style={{ background:'#fff', color:'var(--ink)' }}`.

```css
.tag {
  display: inline-block;
  background: var(--ink); color: #fff;
  padding: 6px 12px;
  font-size: 11px; font-weight: 700;
  letter-spacing: .08em; text-transform: uppercase;
}
```

### Chip `.chip` — etiqueta con borde
Contador/atributo con borde (ej. "4 dimensiones").

```css
.chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 12px;
  border: 1.5px solid var(--line);
  font-size: 11px; font-weight: 600;
  letter-spacing: .04em; text-transform: uppercase;
}
```

### Eyebrow + rule
```css
.eyebrow { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--ink); font-weight: 700; }
.eyebrow.soft { color: var(--mute); }
.rule { height: 2px; background: var(--ink); width: 42px; margin: 12px 0 0; }
```

### Botones de navegación (carruseles)
Cuadrados con borde, hover invierte a tinta. Dos tamaños: `.testimonios-nav` (56px, 48px en mobile) y `.casos-media-nav` (36px).

```css
.testimonios-nav {
  all: unset; cursor: pointer; box-sizing: border-box;
  width: 56px; height: 56px;
  border: 1.5px solid var(--ink);
  display: flex; align-items: center; justify-content: center;
  background: transparent; color: var(--ink);
  transition: background .15s ease, color .15s ease;
}
.testimonios-nav:hover { background: var(--ink); color: var(--bg); }
@media (max-width: 768px) { .testimonios-nav { width: 48px; height: 48px; } }
```

### Dots de paginación
Círculos de 10px con borde; activo se rellena.
```css
.dot { width: 10px; height: 10px; border-radius: 50%; border: 1.5px solid var(--ink); background: transparent; transition: background .3s ease; }
.dot.is-active { background: var(--ink); }
```

---

## 5. Patrones de layout

### Sección estándar
```jsx
<section style={{ padding: '80px 56px', borderBottom: '1.5px solid var(--ink)', background: 'var(--paper)' }}>
  <span className="tag">Nombre de sección</span>
  {/* contenido */}
</section>
```
- Padding horizontal de página: **56px** en desktop.
- Padding vertical de sección: **80px**.
- Cada sección cierra con `borderBottom: 1.5px solid var(--ink)`.
- Alterna `background` entre `--bg` y `--paper`.

### Hero con foto de fondo
Overlay negro `linear-gradient(rgba(10,10,10,.55), rgba(10,10,10,.55))` sobre imagen `center/cover`. Texto en blanco, logo con `filter: invert(1) brightness(2)`. Grid de 2 columnas (`auto 1fr`) con H1 gigante a la izquierda y bloque de texto a la derecha. Indicador "SCROLL" vertical (`writing-mode: vertical-rl`) abajo a la derecha.

### Grid de tarjetas (ej. dimensiones)
Contenedor con borde exterior 1.5px; celdas separadas solo con `borderRight` (sin doble borde). Cada celda: header con índice + nombre, una barra sólida `56×8px` de tinta, H3 y párrafo.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: '1.5px solid var(--ink)' }}>
  {items.map((d, i) => (
    <div style={{ borderRight: i < items.length-1 ? '1.5px solid var(--ink)' : 'none', padding: '28px 24px 32px', background: 'var(--card)' }}>
      …
    </div>
  ))}
</div>
```

### Footer
```jsx
<footer style={{ padding: '24px 56px', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600 }}>
```

---

## 6. Desktop / Mobile

**Convención del proyecto: mobile es una versión separada, no responsive del mismo árbol.** Se renderizan ambas y se muestran con CSS. Breakpoint único: **768px**.

```css
.only-desktop { display: block; }
.only-mobile  { display: none; }
@media (max-width: 768px) {
  .only-desktop { display: none !important; }
  .only-mobile  { display: block !important; }
  html, body { overflow-x: hidden; }
}
```

```jsx
<div className="only-mobile"><LandingMobile /></div>
<div className="only-desktop">{/* … */}</div>
```

Al portar: crear componentes `*Mobile.tsx` en paralelo, no tocar el desktop.

---

## 7. Reset base (globals.css)

```css
* { box-sizing: border-box; }

html, body {
  margin: 0; padding: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Red Hat Display', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-feature-settings: "zero" 0;
}

h1, h2, h3, h4, h5 { font-family: 'Red Hat Display', sans-serif; margin: 0; letter-spacing: -0.02em; }
button { font-family: inherit; }
```

---

## 8. Checklist para arrancar un proyecto nuevo

1. `npx create-next-app` con TypeScript + Tailwind v4 + `src/` + App Router + alias `@/*`.
2. Copiar `public/fonts/RedHatDisplay-*.ttf` (9 archivos).
3. Copiar el bloque completo de `globals.css`: `@import "tailwindcss"` + `@font-face` + `:root` tokens + reset + clases (`.btn`, `.tag`, `.chip`, `.eyebrow`, `.rule`, navs, dots) + switch `.only-desktop/.only-mobile`.
4. Layout raíz: `<html lang="es">`, body `min-h-full flex flex-col`.
5. Construir secciones con el patrón estándar (padding 80/56, borderBottom, tag).
6. Mobile como componentes `*Mobile.tsx` separados.

---

*Fuente: `Laborativo_Quicklink` — `src/app/globals.css`, `src/app/page.tsx`, `src/app/layout.tsx`.*
