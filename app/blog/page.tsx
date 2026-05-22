import Link from 'next/link'
import { createReader } from '@keystatic/core/reader'
import config from '@/keystatic.config'

export const metadata = {
  title: 'Blog · PRIDATO – Artículos sobre Privacidad y Cumplimiento Normativo',
  description: 'Artículos, análisis y guías prácticas sobre RGPD, IA Act, DSA, NIS2 y toda la normativa de privacidad y protección de datos.',
}

export default async function BlogPage() {
  const reader = createReader(process.cwd(), config)
  const slugs = await reader.collections.posts.list()
  const posts = (
    await Promise.all(
      slugs.map(async slug => {
        const post = await reader.collections.posts.read(slug)
        if (!post) return null
        return { slug, ...post }
      })
    )
  )
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date ?? '').getTime() - new Date(a!.date ?? '').getTime())

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-rss"></i> Blog PRIDATO</span>
          <h1>Artículos sobre Privacidad<br />y Cumplimiento Normativo</h1>
          <p>Análisis, guías prácticas y novedades sobre RGPD, IA Act, DSA, NIS2 y toda la normativa europea de privacidad y datos.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Blog</span>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {posts.length === 0 && (
              <div className="card card-body" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                <i className="fas fa-pen-to-square" style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.4 }}></i>
                <p>Próximamente publicaremos artículos. <Link href="/keystatic" style={{ color: 'var(--primary)' }}>Ir al panel de administración</Link></p>
              </div>
            )}
            {posts.map(post => (
              <article key={post!.slug} className="card card-body" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="service-tag">{post!.category}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <i className="fas fa-calendar" style={{ marginRight: '0.35rem' }}></i>
                    {post!.date ? new Date(post!.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <i className="fas fa-clock" style={{ marginRight: '0.35rem' }}></i>
                    {post!.readTime} lectura
                  </span>
                </div>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>
                  <Link href={`/blog/${post!.slug}`} style={{ color: 'var(--primary-dark)', textDecoration: 'none' }}>
                    {post!.title}
                  </Link>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>{post!.description}</p>
                <Link href={`/blog/${post!.slug}`} className="btn btn-outline btn-sm">
                  Leer artículo <i className="fas fa-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>¿Necesitas asesoramiento personalizado?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '540px', margin: '0 auto 2rem' }}>Nuestro equipo está disponible para resolver tus dudas sobre cumplimiento normativo.</p>
          <Link href="/contacto#diagnostico" className="btn btn-accent btn-lg"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
        </div>
      </section>
    </>
  )
}
