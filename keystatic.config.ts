import { config, fields, collection } from '@keystatic/core'

// Si KEYSTATIC_GITHUB_CLIENT_ID está definido (en Vercel), usa GitHub como storage.
// En local sin esa variable, usa archivos locales.
const storage =
  process.env.KEYSTATIC_GITHUB_CLIENT_ID
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
