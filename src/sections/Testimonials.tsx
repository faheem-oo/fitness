import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/data/courseData'

export default function Testimonials() {
  return (
    <section className="section bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="section-header text-center" data-reveal>
          <div className="section-badge mx-auto">Student Results</div>
          <h2 className="section-title">Trusted by <br />our students</h2>
          <p className="section-subtitle">
            Real transformations from real people who completed the program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6" data-reveal data-reveal-delay="80">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star key={i} size={16} className={i < testimonial.rating ? 'text-amber-400' : 'text-slate-200'} />
  ))

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        {stars}
        <span className="ml-2 text-xs text-slate-400">({testimonial.rating})</span>
      </div>
      <div className="relative pl-4 mb-6">
        <p className="text-slate-600 leading-relaxed italic">{testimonial.text}</p>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border border-slate-200"
        />
        <div>
          <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
          <div className="text-xs text-slate-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}
