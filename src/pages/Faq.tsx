import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Mail,
  Phone,
} from 'lucide-react'
import Layout from '@/components/Layout'
import { FAQS } from '@/data/courseData'

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 text-center" data-reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-6">
            <HelpCircle size={14} /> Support
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Frequently asked <span className="text-brand-500">questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Everything you need to know before enrolling. Can't find your answer?
            Our team is one message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enrol" className="btn-primary">
              Enrol Now <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/15550000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Phone size={18} /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ list + help sidebar */}
      <section className="section bg-white" id="faq-list">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start">
            <div className="lg:col-start-1 lg:row-start-1" data-reveal>
              <div className="section-badge">Quick answers</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Everything you need to know
              </h2>
              <p className="text-slate-600">
                Browse the answers below, or reach out if you'd prefer to talk
                to a real person.
              </p>
            </div>

            <div className="space-y-3 lg:col-start-2 lg:row-span-2 lg:row-start-1" data-reveal data-reveal-delay="100">
              {FAQS.map((faq, index) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  isOpen={open === index}
                  onToggle={() => setOpen(open === index ? null : index)}
                />
              ))}
            </div>

            <div className="space-y-6 lg:col-start-1 lg:row-start-2" data-reveal data-reveal-delay="80">
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
                <p className="text-sm text-slate-600 mb-5">
                  We usually reply within a few hours.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/15550000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    <Phone size={18} /> Chat on WhatsApp
                  </a>
                  <a href="mailto:hello@fitpro.com" className="btn-outline w-full">
                    <Mail size={18} /> Email us
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">Ready to enrol?</h3>
                <p className="text-sm text-brand-700 mb-4">
                  Lifetime access and a 14-day money-back guarantee.
                </p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  View pricing <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24">
        <div className="relative z-10 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-brand-100 bg-brand-600 shadow-[0_0_60px_-15px_rgb(220,38,38,0.35)]" data-reveal>
          <div className="p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Still thinking it over?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Enrol today and get immediate access to the full 12-week program,
              coaching, and lifetime updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enrol" className="btn-primary w-full sm:w-auto bg-black hover:bg-neutral-900">
                Enrol Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-black text-white border border-white/20 px-6 py-4 rounded-xl font-semibold hover:bg-neutral-900 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`rounded-2xl border bg-white transition-all ${
        isOpen ? 'border-brand-600' : 'border-slate-200 hover:border-brand-600/50'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left"
      >
        <span className="text-slate-900 font-medium">{faq.q}</span>
        {isOpen ? (
          <ChevronUp size={18} className="text-brand-600 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-slate-100 pt-4 px-5 sm:px-6 pb-5 sm:pb-6">
          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}
