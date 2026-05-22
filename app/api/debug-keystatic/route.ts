import { NextRequest, NextResponse } from 'next/server'

// Endpoint temporal de diagnóstico
export async function GET(req: NextRequest) {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET
  const secret = process.env.KEYSTATIC_SECRET
  const publicGithub = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB

  // Si se pasa ?code=XXX, intenta el intercambio con GitHub para ver el error real
  const code = req.nextUrl.searchParams.get('code')
  let githubResponse = null

  if (code && clientId && clientSecret) {
    const url = new URL('https://github.com/login/oauth/access_token')
    url.searchParams.set('client_id', clientId)
    url.searchParams.set('client_secret', clientSecret)
    url.searchParams.set('code', code)

    const res = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
    })
    githubResponse = await res.json()
  }

  return NextResponse.json({
    variables: {
      KEYSTATIC_GITHUB_CLIENT_ID: clientId
        ? `✅ (${clientId.length} chars, empieza con: ${clientId.substring(0, 4)})`
        : '❌ no encontrada',
      KEYSTATIC_GITHUB_CLIENT_SECRET: clientSecret
        ? `✅ (${clientSecret.length} chars)`
        : '❌ no encontrada',
      KEYSTATIC_SECRET: secret
        ? `✅ (${secret.length} chars)`
        : '❌ no encontrada',
      NEXT_PUBLIC_KEYSTATIC_GITHUB: publicGithub ?? '❌ no encontrada',
    },
    githubTokenResponse: githubResponse,
  })
}
