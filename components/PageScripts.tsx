'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PageScripts() {
  const pathname = usePathname()

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in')
    if (fadeEls.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })
      fadeEls.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }
  }, [pathname])

  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]')
    if (!counters.length) return
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const target = parseFloat(el.dataset.count || '0')
          const suffix = el.dataset.suffix || ''
          const duration = 1800
          const start = performance.now()
          const animate = (time: number) => {
            const elapsed = time - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const value = target * eased
            el.textContent = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          counterObserver.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    counters.forEach(c => counterObserver.observe(c))
    return () => counterObserver.disconnect()
  }, [pathname])

  useEffect(() => {
    const headers = document.querySelectorAll('.accordion-header')
    const handleClick = (e: Event) => {
      const header = e.currentTarget as HTMLElement
      const body = header.nextElementSibling as HTMLElement
      const isOpen = header.classList.contains('open')
      const accordion = header.closest('.accordion')
      if (accordion) {
        accordion.querySelectorAll('.accordion-header.open').forEach(h => {
          h.classList.remove('open');
          (h.nextElementSibling as HTMLElement)?.classList.remove('open')
        })
      }
      if (!isOpen) {
        header.classList.add('open')
        body?.classList.add('open')
      }
    }
    headers.forEach(h => h.addEventListener('click', handleClick))
    return () => headers.forEach(h => h.removeEventListener('click', handleClick))
  }, [pathname])

  useEffect(() => {
    const tabBtns = document.querySelectorAll('.tab-btn')
    const handleTabClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement
      const target = btn.dataset.tab
      const container = btn.closest('.tab-container')
      if (!container || !target) return
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
      container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'))
      btn.classList.add('active')
      const pane = container.querySelector(`#${target}`)
      if (pane) pane.classList.add('active')
    }
    tabBtns.forEach(b => b.addEventListener('click', handleTabClick))
    return () => tabBtns.forEach(b => b.removeEventListener('click', handleTabClick))
  }, [pathname])

  return null
}
