import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, asunto, mensaje } = body

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    // In production, integrate with an email service (Resend, SendGrid, etc.)
    // For now, just log and return success
    console.log('Nuevo contacto:', { nombre, email, asunto, mensaje: mensaje.substring(0, 100) })

    return NextResponse.json({ success: true, message: 'Mensaje recibido correctamente' })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
