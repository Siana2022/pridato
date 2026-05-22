import { NextResponse } from 'next/server'

// Endpoint temporal de diagnóstico — no expone valores, solo longitudes
export async function GET() {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET
  const secret = process.env.KEYSTATIC_SECRET
  const publicGithub = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB

  return NextResponse.json({
    KEYSTATIC_GITHUB_CLIENT_ID: clientId
      ? `✅ presente (${clientId.length} chars)`
      : '❌ no encontrada',
    KEYSTATIC_GITHUB_CLIENT_SECRET: clientSecret
      ? `✅ presente (${clientSecret.length} chars)`
      : '❌ no encontrada',
    KEYSTATIC_SECRET: secret
      ? `✅ presente (${secret.length} chars)`
      : '❌ no encontrada',
    NEXT_PUBLIC_KEYSTATIC_GITHUB: publicGithub
      ? `✅ presente (valor: ${publicGithub})`
      : '❌ no encontrada',
    storageMode: publicGithub === 'true' ? 'github' : 'local',
  })
}
