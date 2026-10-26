import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Phone } from 'lucide-react'
import { IconRenderer } from '@/components/IconRenderer'
import Layout from '@/components/Layout'
import { COURSE, MODULES, TESTIMONIALS } from '@/data/courseData'

export default function CourseDetails() {
  return (
    <Layout>
      <section className="relative py-20 sm:py-28 lg:py-36 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-6">
            <Clock size={14} className="" /> 12-Week Program
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">{COURSE.title}</h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">{COURSE.tagline}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/enrol"
              className="btn-primary"
            >
              <ArrowRight size={20} /> Enrol Now
            </Link>
            <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="btn-outline bg-brand-600 border-white text-white hover:bg-brand-700 px-4 py-2 text-sm">
              <Phone size={16} className="" /> WhatsApp Coach
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="overview">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="lead text-lg font-medium text-slate-900 mb-4">{COURSE.tagline}</p>
                <p className="mb-6">
                  Our flagship program is designed for busy professionals who want to
                  build strength, lose fat, and feel confident in their bodies — without
                  spending hours in the gym or following restrictive diets.
                </p>
                <p className="mb-6">
                  Over 12 weeks, you'll progress through six carefully structured modules
                  that cover everything from foundational movement patterns to advanced
                  strength training, conditioning, nutrition, and recovery. Each lesson
                  includes video demonstrations, downloadable resources, and actionable
                  homework.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InfoCard name="Clock" title="Duration" value={COURSE.duration} />
                <InfoCard name="ShieldCheck" title="Level" value={COURSE.level} />
                <InfoCard name="CheckCircle" title="Lessons" value={COURSE.lessons} />
                <InfoCard name="Mail" title="Certificate" value={COURSE.certificate} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Program Format</h3>
                <p className="text-sm text-slate-600">{COURSE.format}</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">Limited Spots</h3>
                <p className="text-sm text-brand-700">
                  Enrolment for this month's cohort closes soon. Reserve your spot today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50" id="course-modules">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="section-header text-center mb-12">
            <div className="section-badge mx-auto">Curriculum</div>
            <h2 className="section-title">Course <br />modules</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {MODULES.map((module, index) => (
              <ModuleCard key={index} module={module} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="course-testimonials">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="section-header text-center mb-12">
            <div className="section-badge mx-auto">Student Results</div>
            <h2 className="section-title">What students <br />say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 sm:px-12 lg:px-24">
        <div className="relative z-10 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-brand-100 bg-brand-600 shadow-[0_0_60px_-15px_rgb(220,38,38,0.35)]">
          <div className="p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to begin?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join this month's cohort and start your transformation with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/enrol"
                className="btn-primary w-full sm:w-auto bg-black hover:bg-neutral-900"
              >
                <ArrowRight size={20} /> Enrol Now
              </Link>
              <a
                href="https://wa.me/15550000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white border border-white/20 px-6 py-4 rounded-xl font-semibold hover:bg-neutral-900 transition-colors"
              >
                <Phone size={18} className="" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
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

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`text-xs ${i <= testimonial.rating ? 'text-amber-400' : 'text-slate-200'}`}>
            ★
          </span>
        ))}
      </div>
      <p className="text-sm text-slate-600 italic mb-4">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
        <div>
          <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
          <div className="text-xs text-slate-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

function InfoCard({ name, title, value }: { name: string; title: string; value: string | number }) {
  return (
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
      <div className="text-brand-600 mb-2">
        <IconRenderer name={name} size={20} className="" />
      </div>
      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{title}</div>
      <div className="font-bold text-slate-900">{value}</div>
    </div>
  )
}
