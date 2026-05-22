'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    diagnostico: false,
    privacidad: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setForm(prev => ({ ...prev, [target.name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.privacidad) {
      setErrorMsg('Debes aceptar la política de privacidad para continuar.')
      setStatus('error')
      return
    }
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setErrorMsg(data.error || 'Error al enviar el mensaje.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Error de conexión. Por favor, inténtalo de nuevo.')
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero" id="diagnostico">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-envelope"></i> Contacto PRIDATO</span>
          <h1>Solicita tu Diagnóstico<br />Gratuito</h1>
          <p>En menos de 48 horas, un especialista en protección de datos analizará tu situación y te enviará un informe preliminar de cumplimiento normativo sin compromiso.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Contacto</span>
          </nav>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="content-grid">
            <div>
              {status === 'success' ? (
                <div className="card card-body" style={{ textAlign: 'center', padding: '3rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem', color: '#16a34a' }}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 style={{ color: '#166534', marginBottom: '1rem' }}>¡Mensaje enviado!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Hemos recibido tu consulta. Un especialista de PRIDATO se pondrá en contacto contigo en menos de 48 horas hábiles.</p>
                  <Link href="/" className="btn btn-primary">Volver al inicio</Link>
                </div>
              ) : (
                <div className="card card-body">
                  <h3 style={{ marginBottom: '0.25rem' }}><i className="fas fa-rocket" style={{ color: 'var(--accent)', marginRight: '0.5rem' }}></i>Diagnóstico Gratuito</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>Cuéntanos tu situación y te contactamos en 48 horas.</p>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label htmlFor="nombre" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Nombre *</label>
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          value={form.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="empresa" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Empresa</label>
                        <input
                          id="empresa"
                          name="empresa"
                          type="text"
                          value={form.empresa}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa (opcional)"
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="tu@empresa.com"
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Teléfono</label>
                        <input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={form.telefono}
                          onChange={handleChange}
                          placeholder="+34 600 000 000 (opcional)"
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label htmlFor="asunto" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Asunto *</label>
                      <select
                        id="asunto"
                        name="asunto"
                        required
                        value={form.asunto}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', background: 'white' }}
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="diagnostico">Diagnóstico gratuito de cumplimiento</option>
                        <option value="dpo">DPO Externo</option>
                        <option value="adecuacion">Adecuación RGPD</option>
                        <option value="auditoria">Auditoría &amp; Diagnóstico</option>
                        <option value="ia-act">IA Act / Inteligencia Artificial</option>
                        <option value="encargados">Encargados del Tratamiento</option>
                        <option value="formacion">Formación</option>
                        <option value="otro">Otra consulta</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label htmlFor="mensaje" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Mensaje *</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos brevemente tu situación actual y qué tipo de ayuda necesitas..."
                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          name="diagnostico"
                          checked={form.diagnostico}
                          onChange={handleChange}
                          style={{ marginTop: '0.2rem', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Estoy interesado en el diagnóstico gratuito de cumplimiento normativo</span>
                      </label>
                      <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          name="privacidad"
                          checked={form.privacidad}
                          onChange={handleChange}
                          style={{ marginTop: '0.2rem', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>He leído y acepto la <a href="#" style={{ color: 'var(--primary)' }}>Política de Privacidad</a> y consiento el tratamiento de mis datos para atender mi consulta. *</span>
                      </label>
                    </div>
                    {status === 'error' && (
                      <div style={{ padding: '0.85rem 1rem', background: '#fee2e2', borderRadius: '8px', border: '1px solid #fca5a5', marginBottom: '1rem', fontSize: '0.88rem', color: '#dc2626' }}>
                        <i className="fas fa-exclamation-circle" style={{ marginRight: '0.5rem' }}></i>{errorMsg}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={status === 'sending'}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {status === 'sending' ? (
                        <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
                      ) : (
                        <><i className="fas fa-paper-plane"></i> Enviar mensaje</>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div>
              <div className="card card-body" style={{ marginBottom: '1.5rem' }}>
                <h4><i className="fas fa-map-marker-alt" style={{ color: 'var(--accent)', marginRight: '0.5rem' }}></i>Información de contacto</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                  {[
                    { icon: 'fas fa-envelope', label: 'Email', value: 'info@pridato.es' },
                    { icon: 'fas fa-phone', label: 'Teléfono', value: '+34 900 000 000' },
                    { icon: 'fas fa-map-marker-alt', label: 'Ubicación', value: 'España · Cobertura UE' },
                    { icon: 'fas fa-clock', label: 'Horario', value: 'Lun–Vie: 9:00–18:00' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--primary-dark)', fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card card-body" style={{ background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-star"></i> ¿Por qué PRIDATO?</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0' }}>
                  {[
                    'Especialistas exclusivos en privacidad y compliance',
                    'DPOs certificados CIPP/E, CIPM y CDPSE',
                    'Respuesta en menos de 48 horas',
                    'Sin compromisos en el diagnóstico inicial',
                    'Cobertura en toda España y la UE',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', fontSize: '0.88rem' }}>
                      <i className="fas fa-check" style={{ color: '#86efac', marginTop: '0.2rem', flexShrink: 0 }}></i>
                      <span style={{ color: 'rgba(255,255,255,0.9)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
