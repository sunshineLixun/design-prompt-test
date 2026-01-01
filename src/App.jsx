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
    { q: 'How does the AI design process work?', a: 'Simply upload a photo of your room, select your preferred style, and our AI will generate a redesigned version in under 2 minutes.' },
    { q: 'Can I use my own furniture in the designs?', a: 'Yes! You can choose to keep existing furniture or let the AI suggest replacements.' },
    { q: 'What image formats are supported?', a: 'We support JPG, PNG, and HEIC formats. For best results, use well-lit photos.' },
    { q: 'How accurate are the furniture recommendations?', a: 'Our AI provides links to real furniture pieces that match the style and dimensions shown.' },
    { q: 'Can I share designs with my clients?', a: 'Absolutely! Pro and Team plans include shareable links and PDF exports.' },
    { q: 'Do you offer team plans?', a: 'Yes, our Team plan supports up to 10 members with shared projects.' },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-4 left-4 right-4 md:top-8 md:left-1/2 md:-translate-x-1/2 md:w-[540px] z-50 bg-surface-tertiary/90 backdrop-blur-xl rounded-[1.5rem] border border-border-medium">
        <div className="flex items-center justify-between h-14 px-4">
          <a href="/" className="flex items-center gap-2 font-heading text-lg">
            <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
              <span className="text-text-primary font-bold text-sm">D</span>
            </div>
            <span className="hidden md:inline">DesignSpace</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-1">
            <a href="#features" className="px-3 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Features</a>
            <a href="#pricing" className="px-3 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Pricing</a>
            <a href="/blog" className="px-3 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Blog</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/login" className="hidden md:block text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Login</a>
            <a href="/register">
              <button className="h-9 px-4 bg-text-primary text-surface-primary text-sm font-medium rounded-lg hover:bg-text-muted transition-colors">
                Register
              </button>
            </a>
            <button 
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`w-5 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-border-medium overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-2">
                <a href="#features" className="py-3 text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>Features</a>
                <a href="#pricing" className="py-3 text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>Pricing</a>
                <a href="/blog" className="py-3 text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>Blog</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-secondary rounded-full text-sm mb-6">
              <span className="text-text-muted">An alternative to</span>
              <span className="font-medium text-text-primary">Traditional Design</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              AI-powered interior design in minutes
            </h1>
            
            <p className="text-lg text-text-muted max-w-md mx-auto mb-8">
              Transform any room with intelligent design suggestions. Upload a photo, choose your style, and watch the magic happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <motion.button 
                className="h-12 px-6 bg-brand-yellow text-text-primary font-medium rounded-lg hover:bg-brand-yellow-hover transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start 14 day free trial
              </motion.button>
              <motion.button 
                className="h-12 px-6 bg-surface-secondary text-text-primary font-medium rounded-lg border border-border-medium hover:bg-surface-tertiary transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See demo
              </motion.button>
            </div>
            
            <p className="text-sm text-text-muted">No credit card required</p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="rounded-[1.5rem] overflow-hidden border border-border-medium">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" 
                alt="Interior Design" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4" id="features">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎨', title: 'AI Style Transfer', desc: 'Transform rooms into 20+ design styles instantly.' },
                { icon: '📷', title: 'Photo Upload', desc: 'Simply upload a photo of your space to get started.' },
                { icon: '⚡', title: 'Instant Results', desc: 'Get professional designs in under 2 minutes.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="p-6 bg-surface-secondary rounded-[1.5rem] border border-border-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Styles Showcase */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-surface-secondary rounded-lg text-sm text-text-muted mb-4">Styles</span>
              <h2 className="text-3xl md:text-4xl mb-4">Explore 20+ design styles</h2>
              <p className="text-text-muted max-w-md mx-auto">From Modern to Bohemian, find the perfect aesthetic for your space.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Modern', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80' },
                { name: 'Minimalist', img: 'https://images.unsplash.com/photo-1598928506311-c55ez633a2ab?w=400&q=80' },
                { name: 'Scandinavian', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80' },
                { name: 'Industrial', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80' },
                { name: 'Bohemian', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80' },
                { name: 'Mid-Century', img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80' },
                { name: 'Coastal', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80' },
                { name: 'Japanese', img: 'https://images.unsplash.com/photo-1545083036-b175dd155a1d?w=400&q=80' },
              ].map((style, i) => (
                <motion.div 
                  key={i}
                  className="group relative aspect-square rounded-[1.5rem] overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={style.img} alt={style.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-surface-tertiary font-medium">{style.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-16 px-4 bg-surface-secondary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-surface-tertiary rounded-lg text-sm text-text-muted mb-4">Transformation</span>
              <h2 className="text-3xl md:text-4xl mb-4">See the magic happen</h2>
              <p className="text-text-muted">Real transformations from our users.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] overflow-hidden border border-border-medium">
                <div className="p-3 bg-surface-tertiary text-sm font-medium text-center border-b border-border-medium">Before</div>
                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80" alt="Before" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden border border-brand-yellow border-2">
                <div className="p-3 bg-brand-yellow text-sm font-medium text-center">After</div>
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" alt="After" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-surface-secondary rounded-lg text-sm text-text-muted mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-4xl">Loved by designers</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Sarah Chen', role: 'Interior Designer', text: 'This tool has completely transformed how I present ideas to clients. The AI suggestions are surprisingly accurate.' },
                { name: 'Marcus Johnson', role: 'Homeowner', text: 'I redesigned my entire living room using this app. The furniture recommendations were spot on!' },
                { name: 'Emily Park', role: 'Real Estate Agent', text: 'Perfect for staging visualizations. My clients love seeing the potential of empty spaces.' },
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  className="p-6 bg-surface-secondary rounded-[1.5rem] border border-border-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-text-muted mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center font-medium">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-text-primary text-surface-primary">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: '50K+', label: 'Designs Created' },
                { num: '20+', label: 'Style Options' },
                { num: '98%', label: 'Satisfaction Rate' },
                { num: '<2min', label: 'Average Time' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-heading text-brand-yellow mb-2">{stat.num}</p>
                  <p className="text-surface-primary/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-surface-secondary rounded-lg text-sm text-text-muted mb-4">How It Works</span>
              <h2 className="text-3xl md:text-4xl">Simple 3-step process</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: '1', title: 'Upload Photo', desc: 'Take a photo of your room or upload an existing one.' },
                { num: '2', title: 'Choose Style', desc: 'Select from Modern, Minimalist, Scandinavian, and more.' },
                { num: '3', title: 'Get Results', desc: 'AI transforms your space with furniture recommendations.' },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  className="p-6 bg-surface-tertiary rounded-[1.5rem] border border-border-medium text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 bg-text-primary text-surface-primary rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4" id="pricing">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-surface-secondary rounded-lg text-sm text-text-muted mb-4">Pricing</span>
              <h2 className="text-3xl md:text-4xl mb-2">Simplified pricing</h2>
              <p className="text-text-muted">Pay for what you need.</p>
            </div>

            <div className="p-8 bg-surface-tertiary rounded-[1.5rem] border border-border-medium">
              {/* Toggle */}
              <div className="flex gap-1 p-1 bg-surface-secondary rounded-full mb-8">
                <button 
                  className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all ${!isAnnual ? 'bg-surface-tertiary text-text-primary shadow-sm' : 'text-text-muted'}`}
                  onClick={() => setIsAnnual(false)}
                >
                  Monthly
                </button>
                <button 
                  className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2 ${isAnnual ? 'bg-surface-tertiary text-text-primary shadow-sm' : 'text-text-muted'}`}
                  onClick={() => setIsAnnual(true)}
                >
                  Annually <span className="px-1.5 py-0.5 bg-brand-yellow text-xs rounded">-20%</span>
                </button>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-sm text-text-muted mb-2">Per month</p>
                <p className="text-5xl font-heading">${isAnnual ? Math.round(prices[designCount] * 0.8) : prices[designCount]}</p>
              </div>

              {/* Slider */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-3">
                  <span>Monthly designs</span>
                  <span className="font-medium">{designOptions[designCount]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="3" 
                  value={designCount}
                  onChange={(e) => setDesignCount(Number(e.target.value))}
                  className="w-full h-2 bg-surface-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-text-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab"
                />
              </div>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {[
                  ['Design styles', 'All 20+'],
                  ['HD Export', 'Included'],
                  ['Projects', 'Unlimited'],
                ].map(([label, value], i) => (
                  <div key={i} className="flex justify-between py-3 px-4 bg-surface-secondary rounded-xl text-sm">
                    <span>{label}</span>
                    <span className="text-text-muted">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full h-12 bg-brand-yellow text-text-primary font-medium rounded-lg hover:bg-brand-yellow-hover transition-colors">
                Start 14 day free trial
              </button>
              <p className="text-center text-sm text-text-muted mt-3">No credit card required</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-surface-secondary rounded-lg text-sm text-text-muted mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl">Frequently asked questions</h2>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  className="bg-surface-secondary rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button 
                    className="w-full flex justify-between items-center p-4 text-left font-medium"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <motion.span 
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      className="text-brand-yellow"
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="px-4 pb-4 text-text-muted">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4 bg-surface-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-surface-tertiary rounded-lg text-sm text-text-muted mb-4">Integrations</span>
            <h2 className="text-3xl md:text-4xl mb-4">Works with your favorite tools</h2>
            <p className="text-text-muted mb-12 max-w-md mx-auto">Export designs to popular platforms and share with your team.</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {['Figma', 'Notion', 'Slack', 'Pinterest', 'Dropbox', 'Google Drive'].map((tool, i) => (
                <motion.div 
                  key={i}
                  className="px-6 py-4 bg-surface-tertiary rounded-xl border border-border-medium font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto">
            <motion.div 
              className="p-8 bg-surface-secondary rounded-[1.5rem] border border-border-medium text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl mb-2">Stay updated</h3>
              <p className="text-text-muted mb-6">Get design tips and product updates in your inbox.</p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 h-12 px-4 bg-surface-tertiary rounded-lg border border-border-medium focus:outline-none focus:border-brand-yellow transition-colors"
                />
                <button className="h-12 px-6 bg-brand-yellow text-text-primary font-medium rounded-lg hover:bg-brand-yellow-hover transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <motion.div 
            className="max-w-3xl mx-auto p-12 bg-brand-yellow rounded-[1.5rem] text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Transform your space today</h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">Start your 14 day free trial and see your room redesigned in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-12 px-6 bg-text-primary text-surface-primary font-medium rounded-lg hover:bg-text-muted transition-colors">
                Start free trial
              </button>
              <button className="h-12 px-6 bg-surface-tertiary text-text-primary font-medium rounded-lg border border-border-strong hover:bg-surface-secondary transition-colors">
                See demo
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border-medium">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-text-muted text-sm mb-4">AI-powered interior design that helps you visualize and transform any space.</p>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                Operational
              </div>
            </div>
            {[
              { title: 'Product', links: ['Home', 'Login', 'Register', 'Docs'] },
              { title: 'Features', links: ['Styles', 'Furniture', 'Export', 'Teams'] },
              { title: 'Company', links: ['Contact', 'Blog', 'Privacy', 'Terms'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-medium mb-4">{col.title}</h4>
                <div className="space-y-2">
                  {col.links.map((link, j) => (
                    <a key={j} href="#" className="block text-sm text-text-muted hover:text-text-primary transition-colors">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted">© 2026 DesignSpace</p>
        </div>
      </footer>
    </div>
  )
}
