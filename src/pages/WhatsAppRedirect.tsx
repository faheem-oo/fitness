import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, Clock } from 'lucide-react'
import Layout from '@/components/Layout'

export default function WhatsAppRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.open('https://wa.me/15550000000', '_blank')
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <section className="section py-24 sm:py-32 min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-md mx-auto text-center" data-reveal>
          <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Phone size={32} className="text-brand-400" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">Redirecting to WhatsApp...</h1>
          <p className="text-slate-600 mb-10">
            We're opening a chat with our fitness coach so you can enrol directly.
          </p>

          <div className="card p-6 mb-10">
            <div className="flex items-start gap-3 mb-4 text-left">
              <div className="text-brand-400 mt-0.5 flex-shrink-0">
                <span>✓</span>
              </div>
              <div>
                <div className="font-medium text-slate-900">Coach: Marcus Tran</div>
                <div className="text-xs text-slate-500">Certified Trainer • FitPro Academy</div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 text-sm text-slate-600 mb-4">
              Hi! I'm interested in the Total Body Transformation program. Please send me enrolment details.
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock size={14} className="mt-0.5" />
              <span>Typically replies within 2 hours</span>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://wa.me/15550000000?text=Hi%20Marcus%2C%20I%E2%80%99m%20interested%20in%20the%20Total%20Body%20Transformation%20program.%20Please%20send%20me%20enrolment%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/30"
            >
              <Phone size={20} /> Open WhatsApp Chat
            </a>
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-neutral-700 text-neutral-300 font-semibold hover:bg-neutral-900 transition-colors"
            >
              <span aria-hidden="true">→</span> Continue to website
            </button>
          </div>

          <p className="mt-10 text-xs text-slate-400">
            Didn't open?{' '}
            <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-medium hover:underline">
              Click here manually
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
