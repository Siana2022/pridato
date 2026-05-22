import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'

export const metadata: Metadata = {
  title: 'PRIDATO · Consultoría en Privacidad y Cumplimiento Normativo Digital',
  description: 'PRIDATO es tu consultoría especializada en RGPD, LOPDGDD, IA Act, DSA, eIDAS 2, NIS2 y toda la normativa de protección de datos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
