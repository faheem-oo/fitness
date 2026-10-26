import { CheckCircle } from 'lucide-react'
import { IconRenderer } from '@/components/IconRenderer'

export default function About() {
  return (
    <section className="section bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative" data-reveal>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-600/10 rounded-full blur-lg" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Training session"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6" data-reveal data-reveal-delay="120">
            <div className="section-badge">
              <CheckCircle size={16} /> About the Course
            </div>
            <h2 className="section-title">Everything you need to <br />transform your body</h2>
            <p className="section-subtitle">
              Our flagship 12-week program combines science-backed strength training,
              conditioning, and nutrition into a complete system you can follow at home
              or in the gym.
            </p>

            <div className="space-y-5 mt-8">
              <FeatureItem name="Dumbbell" title="Progressive Overload" description="Structured workouts that gradually increase in intensity for continuous gains." />
              <FeatureItem name="Play" title="On-Demand Video" description="Follow along with high-quality video demonstrations for every exercise." />
              <FeatureItem name="CheckCircle" title="Certification" description="Earn a recognized certificate when you complete all modules." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ name, title, description }: { name: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-brand-600 mt-0.5 flex-shrink-0">
        <IconRenderer name={name} size={20} className="" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  )
}
