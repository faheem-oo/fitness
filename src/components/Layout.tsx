import { useState, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ArrowRight, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false)
  const location = useLocation()

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (elements.length === 0) return

    elements.forEach((element) => {
      element.classList.add('reveal')
      const delay = Number(element.dataset.revealDelay ?? 0)
      if (delay > 0) element.style.setProperty('--reveal-delay', `${delay}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar open={open} setOpen={setOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

const PATH_TO_NAV: Record<string, string> = {
  '/course': 'course',
  '/pricing': 'pricing',
  '/faq': 'faq',
}

function Navbar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const location = useLocation()
  const active =
    location.pathname === '/' ? 'home' : (PATH_TO_NAV[location.pathname] ?? '')

  const linkClass = (key: string) =>
    cn('nav-link', active === key ? 'font-semibold text-brand-600' : 'text-slate-600')

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-600/30">
              <Dumbbell size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl text-slate-900 tracking-tight">FITPRO</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={linkClass('home')}>Home</Link>
            <Link to="/course" className={linkClass('course')}>Course</Link>
            <Link to="/pricing" className={linkClass('pricing')}>Pricing</Link>
            <Link to="/faq" className={linkClass('faq')}>FAQ</Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? <X size={22} className="" /> : <Menu size={22} className="" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 pb-4 space-y-2">
            <Link to="/" onClick={() => setOpen(false)} className={cn(linkClass('home'), 'block')}>Home</Link>
            <Link to="/course" onClick={() => setOpen(false)} className={cn(linkClass('course'), 'block')}>Course</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className={cn(linkClass('pricing'), 'block')}>Pricing</Link>
            <Link to="/faq" onClick={() => setOpen(false)} className={cn(linkClass('faq'), 'block')}>FAQ</Link>
            <a
              href="https://wa.me/15550000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary block text-center"
            >
              <Phone size={18} className="" /> WhatsApp Us
            </a>
            <div className="flex gap-3 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12" data-reveal>
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
                <Dumbbell size={14} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">FITPRO</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs mb-6 leading-relaxed">
              Transform your body and mind with expert-led fitness training. Join thousands of students
              achieving their goals every day.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="YouTube">
                <YoutubeIcon />
              </a>
              <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white hover:bg-brand-700 transition-colors" aria-label="WhatsApp">
                <Phone size={18} className="" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <p className="text-sm text-slate-400 mb-2 flex items-center gap-2"><Phone size={16} className="flex-shrink-0" /> 9150904940</p>
            <p className="text-sm text-slate-400 mb-4 flex items-center gap-2"><Mail size={16} className="flex-shrink-0" /> hello@fitpro.com</p>
            <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-400 text-sm font-medium hover:text-brand-300 transition-colors">
              <ArrowRight size={14} className="" /> Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing</Link></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">FAQs</Link></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" data-reveal data-reveal-delay="100">
          <p className="text-xs text-slate-500">© 2026 FitPro Fitness Academy. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
