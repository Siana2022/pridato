import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-mark">PR</div>
                <span className="footer-brand-name">PRIDATO</span>
              </div>
              <p className="footer-brand-desc">Consultoría especializada en privacidad, protección de datos y cumplimiento normativo digital. Tu socio estratégico para navegar la complejidad regulatoria europea con garantías reales.</p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter/X"><i className="fab fa-x-twitter"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Servicios</h4>
              <ul className="footer-links">
                <li><Link href="/servicios#dpo">DPO Externo</Link></li>
                <li><Link href="/servicios#adecuacion">Adecuación RGPD</Link></li>
                <li><Link href="/servicios#auditoria">Auditoría &amp; Diagnóstico</Link></li>
                <li><Link href="/servicios#ia">IA &amp; Automatización</Link></li>
                <li><Link href="/servicios#encargados">Encargados Tratamiento</Link></li>
                <li><Link href="/servicios#formacion">Formación</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Normativa</h4>
              <ul className="footer-links">
                <li><Link href="/normativa/rgpd">RGPD</Link></li>
                <li><Link href="/normativa/lopdgdd">LOPDGDD</Link></li>
                <li><Link href="/normativa/lssi">LSSI-CE</Link></li>
                <li><Link href="/normativa/ia-act">IA Act</Link></li>
                <li><Link href="/normativa/dsa">DSA</Link></li>
                <li><Link href="/normativa/eidas2">eIDAS 2</Link></li>
                <li><Link href="/normativa/nis2">NIS2</Link></li>
                <li><Link href="/normativa/dma">DMA</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <div className="footer-contact-item"><i className="fas fa-envelope"></i><span>info@pridato.es</span></div>
              <div className="footer-contact-item"><i className="fas fa-phone"></i><span>+34 900 000 000</span></div>
              <div className="footer-contact-item"><i className="fas fa-map-marker-alt"></i><span>España · Cobertura UE</span></div>
              <div className="footer-contact-item"><i className="fas fa-clock"></i><span>Lun–Vie: 9:00–18:00</span></div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container">
            <div className="footer-bottom">
              <span>© 2025 PRIDATO · Todos los derechos reservados</span>
              <div className="footer-legal">
                <a href="#">Aviso Legal</a>
                <a href="#">Política de Privacidad</a>
                <a href="#">Política de Cookies</a>
                <a href="#">Condiciones de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
