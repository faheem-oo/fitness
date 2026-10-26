import { ArrowRight } from 'lucide-react'
import { MODULES, BENEFITS } from '@/data/courseData'
import { IconRenderer } from '@/components/IconRenderer'

export default function Modules() {
  return (
    <section className="section bg-slate-50" id="modules">
      <div className="max-w-7xl mx-auto">
        <div className="section-header" data-reveal>
          <div className="section-badge">
            <ArrowRight size={16} /> Course Modules
          </div>
          <h2 className="section-title">What you'll <br />learn</h2>
          <p className="section-subtitle">
            Six progressive modules taking you from foundations to advanced strength
            and conditioning, plus nutrition and recovery.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16" data-reveal data-reveal-delay="80">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>

        {/* Modules list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal data-reveal-delay="160">
          {MODULES.map((module, index) => (
            <ModuleCard key={index} module={module} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit }: { benefit: { icon: string; title: string; description: string } }) {
  return (
    <div className="card text-center">
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4 text-brand-600">
        <IconRenderer name={benefit.icon} size={24} className="" />
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
      <p className="text-sm text-slate-600">{benefit.description}</p>
    </div>
  )
}

function ModuleCard({ module }: { module: { id: number; title: string; lessons: number; description: string } }) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Module {module.id}</span>
        <span className="text-xs text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">{module.lessons} lessons</span>
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{module.title}</h3>
      <p className="text-sm text-slate-600">{module.description}</p>
    </div>
  )
}
