import { ShieldCheck, Zap, Clock, Award } from 'lucide-react'

export default function WhyChoose() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Science-Backed Methods',
      description: 'Every workout and nutrition guideline is rooted in exercise science, not trends.',
    },
    {
      icon: Zap,
      title: 'Results-Focused',
      description: 'Progressive programming designed to deliver measurable strength and fat-loss results.',
    },
    {
      icon: Clock,
      title: 'Learn at Your Pace',
      description: 'On-demand lessons fit your schedule — no live class times to work around.',
    },
    {
      icon: Award,
      title: 'Lifetime Access',
      description: 'Pay once and keep access to all content, including future updates, forever.',
    },
  ]

  return (
    <section className="section bg-slate-50" id="why">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="section-header text-center">
          <div className="section-badge mx-auto">Why FitPro?</div>
          <h2 className="section-title">Why choose <br />this course?</h2>
          <p className="section-subtitle">
            Join thousands of students who've transformed their bodies with our proven system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: { icon: React.ComponentType<any>; title: string; description: string } }) {
  return (
    <div className="card p-6">
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 text-brand-600">
        <feature.icon size={22} />
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
    </div>
  )
}
