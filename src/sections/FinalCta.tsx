import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24">
      <div className="absolute inset-0 bg-brand-600/5" />
      <div className="relative z-10 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-brand-100 bg-white shadow-premium" data-reveal>
        <div className="p-8 md:p-12">
          <div className="flex flex-col items-center text-center justify-center p-6 md:p-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Ready to transform? <br />
              <span className="text-brand-600">Enrol today.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
              Limited spots available for this month's cohort. Start your journey
              with expert coaching and proven programming.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/enrol" className="btn-primary">
                Enrol Now <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
