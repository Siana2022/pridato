import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

const SHEET_ID = '1oTqXLURgCSHhihn9FKR9ZEJe3JmS_SO0Rvps7Tmb-SI'

async function appendToSheet(row: string[]) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'A:H',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [row],
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, empresa, email, telefono, asunto, mensaje, diagnostico } = body

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })

    await appendToSheet([
      fecha,
      nombre,
      empresa ?? '',
      email,
      telefono ?? '',
      asunto,
      mensaje,
      diagnostico ? 'Sí' : 'No',
    ])

    return NextResponse.json({ success: true, message: 'Mensaje recibido correctamente' })
  } catch (error) {
    console.error('Error guardando en Sheets:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
