import { Quote, Award } from 'lucide-react'
import heroImage from '@/assets/hero.png'

export default function Trainer() {
  return (
    <section className="section bg-white" id="trainer">
      <div className="max-w-7xl mx-auto">
        <div className="section-header text-center">
          <div className="section-badge mx-auto">Trainer Profile</div>
          <h2 className="section-title">Meet your <br />coach</h2>
          <p className="section-subtitle">
            Learn from a certified strength & conditioning coach with over a decade
            of experience transforming lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group" data-reveal>
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-slate-900 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-premium">
              <img
                src={heroImage}
                alt="Marcus Tran - Certified Trainer"
                className="w-full h-auto object-cover transition-all duration-700"
              />
            </div>
          </div>

          <div className="space-y-6" data-reveal data-reveal-delay="120">
            <h3 className="text-2xl font-bold text-slate-900">Qualifications & Approach</h3>
            <p className="text-slate-600 leading-relaxed">
              Marcus is a certified personal trainer and nutrition coach who has
              helped over 500 clients transform their bodies through sustainable,
              science-based training. His approach focuses on progressive overload,
              proper form, and building habits that last a lifetime.
            </p>

            <div className="space-y-4">
              <QualificationItem icon={Award} title="NSCA-Certified Personal Trainer" description="National Strength & Conditioning Association certification." />
              <QualificationItem icon={Award} title="Precision Nutrition Level 1" description="Evidence-based nutrition coaching for sustainable results." />
              <QualificationItem icon={Quote} title="CPR & AED Certified" description="Current certification in emergency response and safety." />
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-brand-50 border border-brand-100">
              <Quote size={20} className="text-brand-600 mb-3" />
              <p className="text-brand-900 italic text-sm leading-relaxed">
                "Strength isn't just about lifting heavier — it's about showing up
                consistently and becoming the strongest version of yourself."
              </p>
              <p className="mt-2 text-xs font-semibold text-brand-700 uppercase tracking-wider">— Marcus Tran, Head Coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QualificationItem({ icon: Icon, title, description }: { icon: React.ComponentType<any>; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={18} className="text-brand-600 mt-0.5 flex-shrink-0" />
      <div>
        <div className="font-medium text-slate-900 text-sm">{title}</div>
        <div className="text-xs text-slate-500">{description}</div>
      </div>
    </div>
  )
}
