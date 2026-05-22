'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import BackToTop from './BackToTop'
import PageScripts from './PageScripts'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/keystatic')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
      <BackToTop />
      <PageScripts />
    </>
  )
}
