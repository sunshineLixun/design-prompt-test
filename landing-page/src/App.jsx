import './App.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)
  const [designCount, setDesignCount] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)
  
  const designOptions = [10, 50, 200, 'Unlimited']
  const prices = [9, 19, 39, 79]
  
  const faqs = [
    { q: 'How does the AI design process work?', a: 'Simply upload a photo of your room, select your preferred style, and our AI will generate a redesigned version in under 2 minutes. The AI analyzes your space and applies the chosen aesthetic while maintaining the room\'s structure.' },
    { q: 'Can I use my own furniture in the designs?', a: 'Yes! You can choose to keep existing furniture or let the AI suggest replacements. Our system recognizes furniture in your photos and can work around pieces you want to keep.' },
    { q: 'What image formats are supported?', a: 'We support JPG, PNG, and HEIC formats. For best results, use well-lit photos taken from a corner of the room to capture the full space.' },
    { q: 'How accurate are the furniture recommendations?', a: 'Our AI provides links to real furniture pieces that match the style and dimensions shown in your design. Accuracy improves as you provide more details about your budget and preferences.' },
    { q: 'Can I share designs with my clients?', a: 'Absolutely! Pro and Team plans include shareable links and PDF exports. You can also invite clients to view designs directly in the app.' },
    { q: 'Do you offer team plans?', a: 'Yes, our Team plan supports up to 10 members with shared projects, client management, and brand customization features.' },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="app">
      {/* Mobile Header */}
      <header className="header header-mobile">
        <div className="header-inner">
          <a className="logo" href="/">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="var(--accent-1)"/>
              <path d="M10 22V10h4l4 8 4-8h4v12h-3v-8l-3.5 7h-3L13 14v8h-3z" fill="#fff"/>
            </svg>
            <span>DesignSpace</span>
          </a>
          <div className="header-actions">
            <a className="nav-link" href="/login">Login</a>
            <a href="/register">
              <button className="btn btn-primary btn-sm">Register</button>
            </a>
            <button 
              className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} 
              type="button" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Nav Menu */}
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a className="mobile-nav-link" href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a className="mobile-nav-link" href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a className="mobile-nav-link" href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
          <a className="mobile-nav-link" href="/docs" onClick={() => setMenuOpen(false)}>Docs</a>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="header header-desktop">
        <div className="header-inner">
          <a className="logo" href="/">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="var(--accent-1)"/>
              <path d="M10 22V10h4l4 8 4-8h4v12h-3v-8l-3.5 7h-3L13 14v8h-3z" fill="#fff"/>
            </svg>
          </a>
          <nav className="nav-links">
            <div className="nav-dropdown">
              <button className="nav-btn">
                Features 
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#styles">
                  <span className="dropdown-icon">🎨</span>
                  <div>
                    <div className="dropdown-title">Design Styles</div>
                    <div className="dropdown-desc">20+ interior styles</div>
                  </div>
                </a>
                <a className="dropdown-item" href="#furniture">
                  <span className="dropdown-icon">🛋️</span>
                  <div>
                    <div className="dropdown-title">Furniture</div>
                    <div className="dropdown-desc">AI recommendations</div>
                  </div>
                </a>
                <a className="dropdown-item" href="#export">
                  <span className="dropdown-icon">📤</span>
                  <div>
                    <div className="dropdown-title">HD Export</div>
                    <div className="dropdown-desc">High-res downloads</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="nav-dropdown">
              <button className="nav-btn">
                Why 
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#speed">
                  <span className="dropdown-icon">⚡</span>
                  <div>
                    <div className="dropdown-title">Fast Results</div>
                    <div className="dropdown-desc">Designs in 2 minutes</div>
                  </div>
                </a>
                <a className="dropdown-item" href="#ai">
                  <span className="dropdown-icon">🤖</span>
                  <div>
                    <div className="dropdown-title">AI Powered</div>
                    <div className="dropdown-desc">Smart suggestions</div>
                  </div>
                </a>
              </div>
            </div>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/docs">Docs</a>
          </nav>
          <a className="nav-link" href="/login">Login</a>
          <a href="/register">
            <button className="btn btn-primary btn-sm">Register</button>
          </a>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-text">An alternative to</span>
              <span className="badge-highlight">Traditional Design</span>
            </motion.div>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              AI-powered interior design in minutes
            </motion.h1>
            <motion.p 
              className="hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transform any room with intelligent design suggestions. Upload a photo, choose your style, and watch the magic happen.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="/register">
                <motion.button 
                  className="btn btn-primary btn-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start 14 day free trial
                </motion.button>
              </a>
              <a href="/demo">
                <motion.button 
                  className="btn btn-secondary btn-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See demo
                </motion.button>
              </a>
            </motion.div>
            <motion.p 
              className="hero-note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              No credit card required
            </motion.p>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Interior Design Dashboard" />
            </div>
          </motion.div>

          <motion.div 
            className="features-row"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {[
              { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2L2 7l8 4 8-4-8-5zM2 12l8 4 8-4" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'AI Style Transfer.', desc: 'Transform rooms into 20+ design styles instantly.' },
              { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="2"/><circle cx="7" cy="7" r="1.5"/><path d="M17 12l-4-4L5 17"/></svg>, title: 'Photo Upload.', desc: 'Simply upload a photo of your space to get started.' },
              { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="8"/><path d="M10 6v4l3 2"/></svg>, title: 'Instant Results.', desc: 'Get professional designs in under 2 minutes.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="feature-item"
                variants={fadeInUp}
              >
                <div className="feature-icon-wrapper">{item.icon}</div>
                <h3 className="feature-title">
                  {item.title} <span className="text-muted">{item.desc}</span>
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Styles Section */}
        <section className="section">
          <motion.div 
            className="section-inner"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <span className="section-badge">Styles</span>
              <h2 className="section-title">
                Explore design styles.<br/>
                <span className="text-muted">Find the perfect aesthetic for your space.</span>
              </h2>
            </div>

            <motion.div 
              className="styles-image-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" alt="Design Styles" />
            </motion.div>

            <p className="section-desc">
              Choose from Modern, Minimalist, Scandinavian, Industrial, Bohemian, and many more styles. Our AI understands the nuances of each aesthetic and applies them intelligently to your space.
            </p>
          </motion.div>

          <div className="feature-cards">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-card-visual">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" alt="Modern Style" />
              </div>
              <div className="feature-card-content">
                <h3 className="feature-card-title">See your room in any style</h3>
                <p className="feature-card-desc">Preview your space in different design aesthetics before making any changes. Compare styles side by side.</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-card reverse"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-card-visual">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" alt="Furniture" />
              </div>
              <div className="feature-card-content">
                <h3 className="feature-card-title">Get furniture recommendations</h3>
                <p className="feature-card-desc">AI suggests specific furniture pieces that match your chosen style and fit your room dimensions.</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-card-visual">
                <div className="activity-grid">
                  {[...Array(50)].map((_, i) => (
                    <div key={i} className={`activity-dot ${Math.random() > 0.5 ? 'active' : ''}`}></div>
                  ))}
                </div>
              </div>
              <div className="feature-card-content">
                <h3 className="feature-card-title">Track your design journey</h3>
                <p className="feature-card-desc">Save all your designs and iterations. See how your style preferences evolve over time.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-badge">How It Works</span>
              <h2 className="section-title">
                Simple 3-step process.<br/>
                <span className="text-muted">From photo to professional design in minutes.</span>
              </h2>
            </div>

            <motion.div 
              className="steps-grid"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              {[
                { num: '1', title: 'Upload Photo', desc: 'Take a photo of your room or upload an existing one from your device.' },
                { num: '2', title: 'Choose Style', desc: 'Select from Modern, Minimalist, Scandinavian, Industrial, and more.' },
                { num: '3', title: 'Get Results', desc: 'AI transforms your space and provides furniture recommendations.' },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="step-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="step-visual">
                    <div className="step-number">{step.num}</div>
                  </div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section" id="pricing">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-badge">Pricing</span>
              <h2 className="section-title">Simplified pricing</h2>
              <p className="section-subtitle">Simple and transparent. Pay for what you need.</p>
            </div>

            <div className="pricing-card">
              <div className="pricing-toggle">
                <button 
                  className={`toggle-btn ${!isAnnual ? 'active' : ''}`}
                  onClick={() => setIsAnnual(false)}
                >
                  Monthly
                </button>
                <button 
                  className={`toggle-btn ${isAnnual ? 'active' : ''}`}
                  onClick={() => setIsAnnual(true)}
                >
                  Annually <span className="discount-badge">-20%</span>
                </button>
              </div>

              <div className="pricing-amount">
                <span className="pricing-label">Per month</span>
                <div className="price">${isAnnual ? Math.round(prices[designCount] * 0.8) : prices[designCount]}</div>
              </div>

              <div className="pricing-slider">
                <div className="slider-header">
                  <span>Monthly designs</span>
                  <span className="slider-value">{designOptions[designCount]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="3" 
                  value={designCount}
                  onChange={(e) => setDesignCount(Number(e.target.value))}
                  className="slider-input"
                />
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span>Design styles</span>
                  <span>All 20+</span>
                </div>
                <div className="pricing-feature">
                  <span>HD Export</span>
                  <span>Included</span>
                </div>
                <div className="pricing-feature">
                  <span>Projects</span>
                  <span>Unlimited</span>
                </div>
              </div>

              <div className="pricing-cta">
                <button className="btn btn-primary btn-lg btn-full">Start 14 day free trial</button>
                <p className="pricing-note">No credit card required</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Frequently asked questions</h2>
              <p className="section-subtitle">Quick answers to common questions.</p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button 
                    className="faq-trigger"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <motion.svg 
                      width="16" 
                      height="16" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        className="faq-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="section-inner">
            <motion.div 
              className="cta-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cta-title">Transform your space today</h2>
              <p className="cta-desc">Start your 14 day free trial and see your room redesigned in minutes.</p>
              <div className="cta-buttons">
                <motion.button 
                  className="btn btn-primary btn-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start 14 day free trial
                </motion.button>
                <motion.button 
                  className="btn btn-secondary btn-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See demo
                </motion.button>
              </div>
              <p className="cta-note">No credit card required</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <p className="footer-desc">AI-powered interior design that helps you visualize and transform any space in minutes.</p>
              <div className="footer-status">
                <span>Operational</span>
                <span className="status-dot"></span>
              </div>
              <p className="footer-copyright">© 2026</p>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/docs">Docs</a>
              </div>
              <div className="footer-col">
                <h4>Features</h4>
                <a href="/styles">Styles</a>
                <a href="/furniture">Furniture</a>
                <a href="/export">Export</a>
                <a href="/teams">Teams</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="/contact">Contact</a>
                <a href="/blog">Blog</a>
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo-large">
              <svg width="360" height="80" viewBox="0 0 32 32" fill="none" opacity="0.1">
                <rect width="32" height="32" rx="8" fill="var(--accent-1)"/>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
