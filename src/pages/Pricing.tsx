import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import Layout from '@/components/Layout'
import { PRICING_PLANS } from '@/data/courseData'

const INCLUDED = [
  {
    icon: CheckCircle,
    title: '48 video lessons',
    description: 'Step-by-step demonstrations for every movement and module.',
  },
  {
    icon: Clock,
    title: '12-week program',
    description: 'A structured plan that progresses with you week by week.',
  },
  {
    icon: RefreshCw,
    title: 'Lifetime access',
    description: 'Revisit every lesson and future update, forever.',
  },
  {
    icon: Award,
    title: 'Certificate',
    description: 'Earn a certificate of completion when you finish the program.',
  },
]

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 text-center" data-reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-6">
            <Sparkles size={14} /> Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Invest in your <span className="text-brand-500">transformation</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            One payment, lifetime access, and no hidden fees. Choose the plan that
            fits your goals and start training today.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-500" /> No hidden fees
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-500" /> 14-day money-back guarantee
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} className="text-brand-500" /> Instant access
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section bg-white" id="plans">
        <div className="max-w-7xl mx-auto">
          <div className="section-header" data-reveal>
            <div className="section-badge mx-auto">Plans</div>
            <h2 className="section-title">Choose your plan</h2>
            <p className="section-subtitle">
              Both plans include the full 48-lesson program with lifetime access.
              Premium adds live coaching and personal support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch" data-reveal data-reveal-delay="80">
            {PRICING_PLANS.map((plan) => (
              <article
                key={plan.id}
                className={`card p-8 relative flex flex-col ${
                  plan.popular
                    ? 'border-brand-600 bg-brand-50 shadow-[0_0_40px_-10px_rgb(220,38,38,0.25)]'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-brand-600 text-white text-xs font-bold rounded-full uppercase tracking-wider whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-lg text-slate-500 line-through">{plan.originalPrice}</span>
                </div>
                <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={16} className="text-brand-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/enrol?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-[0_0_30px_-10px_rgb(220,38,38,0.5)]'
                      : 'border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  Choose {plan.name} <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-10">
            14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>

      {/* Included in every plan */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="section-header" data-reveal>
            <div className="section-badge mx-auto">Included</div>
            <h2 className="section-title">Every plan includes</h2>
            <p className="section-subtitle">
              The complete program, downloadable resources, and lifetime access —
              whichever plan you choose.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal data-reveal-delay="80">
            {INCLUDED.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-500" data-reveal data-reveal-delay="140">
            <ShieldCheck size={18} className="text-brand-600" />
            <span>Try the full program risk-free for 14 days. If it's not for you, we'll refund you.</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24">
        <div className="relative z-10 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-brand-100 bg-brand-600 shadow-[0_0_60px_-15px_rgb(220,38,38,0.35)]" data-reveal>
          <div className="p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to begin?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Pick your plan and start your 12-week transformation with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#plans" className="btn-primary w-full sm:w-auto bg-black hover:bg-neutral-900">
                Choose a Plan <ArrowRight size={20} />
              </a>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center gap-2 bg-black text-white border border-white/20 px-6 py-4 rounded-xl font-semibold hover:bg-neutral-900 transition-colors"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
