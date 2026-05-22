import { config, fields, collection } from '@keystatic/core'

// NEXT_PUBLIC_KEYSTATIC_GITHUB=true → modo GitHub (Vercel producción)
// Sin esa variable → modo local (desarrollo)
// Usar NEXT_PUBLIC_ para que el valor llegue también al navegador (cliente).
const storage =
  process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB === 'true'
    ? ({
        kind: 'github',
        repo: 'Siana2022/pridato',
      } as const)
    : ({ kind: 'local' } as const)

export default config({
  storage,
  ui: {
    brand: { name: 'PRIDATO Blog' },
  },
  collections: {
    posts: collection({
      label: 'Artículos del Blog',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({
          label: 'Descripción (resumen para SEO y listado)',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Fecha de publicación',
          validation: { isRequired: true },
        }),
        category: fields.text({
          label: 'Categoría (ej: RGPD, IA Act, LOPDGDD…)',
          validation: { isRequired: true },
        }),
        readTime: fields.text({
          label: 'Tiempo de lectura (ej: 8 min)',
          validation: { isRequired: true },
        }),
        content: fields.document({
          label: 'Contenido del artículo',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
})
