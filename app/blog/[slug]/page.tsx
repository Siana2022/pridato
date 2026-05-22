import { createReader } from '@keystatic/core/reader'
import { DocumentRenderer } from '@keystatic/core/renderer'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import config from '@/keystatic.config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const reader = createReader(process.cwd(), config)
  const slugs = await reader.collections.posts.list()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const reader = createReader(process.cwd(), config)
  const post = await reader.collections.posts.read(slug)
  if (!post) return {}
  return {
    title: `${post.title} · PRIDATO`,
    description: post.description ?? undefined,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const reader = createReader(process.cwd(), config)
  const post = await reader.collections.posts.read(slug)
  if (!post) notFound()

  const content = await post.content()

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-rss"></i> {post.category}</span>
          <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>{post.title}</h1>
          <p>{post.description}</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/blog">Blog</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{post.category}</span>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="content-grid">
            <article className="article-body">
              <DocumentRenderer document={content} />
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-info-circle"></i> Sobre este artículo</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {post.date && (
                    <p>
                      <i className="fas fa-calendar" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
                      {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  )}
                  {post.readTime && (
                    <p><i className="fas fa-clock" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>{post.readTime} de lectura</p>
                  )}
                  {post.category && (
                    <p><i className="fas fa-tag" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>{post.category}</p>
                  )}
                </div>
              </div>

              <div className="toc-card" style={{ background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-rocket"></i> ¿Necesitas ayuda?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>Solicita tu diagnóstico gratuito y analizamos tu situación normativa.</p>
                <Link href="/contacto#diagnostico" className="btn btn-accent btn-sm" style={{ width: '100%', justifyContent: 'center' }}>Diagnóstico Gratuito</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
