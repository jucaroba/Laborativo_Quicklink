import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'
const TO = process.env.CONTACT_TO_EMAIL ?? 'linamaria@laborativo.com'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  let body: { nombre?: string; email?: string; telefono?: string; mensaje?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Body inválido' }, { status: 400 })
  }

  const nombre = (body.nombre ?? '').trim()
  const email = (body.email ?? '').trim()
  const telefono = (body.telefono ?? '').trim()
  const mensaje = (body.mensaje ?? '').trim()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Nombre, email y mensaje son obligatorios' }, { status: 400 })
  }

  const subject = `Quicklink — Mensaje de ${nombre}`
  const text = [
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    telefono ? `Teléfono: ${telefono}` : null,
    '',
    mensaje,
  ].filter(Boolean).join('\n')

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0a0a0a; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">Nuevo contacto desde Quicklink</h2>
      <p style="margin: 0 0 4px;"><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p style="margin: 0 0 4px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${telefono ? `<p style="margin: 0 0 4px;"><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>` : ''}
      <p style="margin: 16px 0 4px;"><strong>Mensaje:</strong></p>
      <p style="margin: 0; white-space: pre-line;">${escapeHtml(mensaje)}</p>
    </div>
  `

  try {
    const result = await resend.emails.send({
      from: `Quicklink <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject,
      text,
      html,
    })

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: result.data?.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error desconocido al enviar'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
