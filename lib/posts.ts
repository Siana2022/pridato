export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: string
}

export const posts: Post[] = [
  {
    slug: 'rgpd-ia-act-2024',
    title: 'RGPD e IA Act: Cómo conviven las dos normativas más importantes de la UE',
    description: 'El IA Act y el RGPD no son normativas independientes. Se solapan, se complementan y generan obligaciones cumulativas para cualquier organización que use IA y trate datos personales.',
    date: '2025-01-15',
    category: 'IA Act',
    readTime: '8 min',
  },
]
