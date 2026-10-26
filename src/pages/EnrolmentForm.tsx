import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { IconRenderer } from '@/components/IconRenderer'
import Layout from '@/components/Layout'
import { PRICING_PLANS } from '@/data/courseData'
import { createOrderId, getEnrolment, saveEnrolment } from '@/lib/enrolment'

export default function EnrolmentForm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(1)
  const [initialEnrolment] = useState(() => getEnrolment())
  const [formData, setFormData] = useState(() => ({
    fullName: initialEnrolment?.fullName ?? '',
    email: initialEnrolment?.email ?? '',
    phone: initialEnrolment?.phone ?? '',
    goal: initialEnrolment?.goal ?? '',
    experience: initialEnrolment?.experience ?? '',
  }))

  const selectedPlan =
    PRICING_PLANS.find((plan) => plan.id === searchParams.get('plan')) ??
    PRICING_PLANS.find((plan) => plan.name === initialEnrolment?.plan) ??
    PRICING_PLANS[0]

  const fields = [
    { id: 'fullName', label: 'Full name', type: 'text', icon: 'User', placeholder: 'John Doe' },
    { id: 'email', label: 'Email address', type: 'email', icon: 'Mail', placeholder: 'john@example.com' },
    { id: 'phone', label: 'WhatsApp number', type: 'tel', icon: 'Phone', placeholder: '9150904940' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 2) {
      setStep(step + 1)
      return
    }

    saveEnrolment({
      ...formData,
      plan: selectedPlan.name,
      planId: selectedPlan.id,
      amount: selectedPlan.price,
      orderId: createOrderId(),
      enrolledAt: new Date().toISOString(),
    })
    navigate('/checkout')
  }

  return (
    <Layout>
      <section className="section py-12 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <LinkBack />

          <div className="text-center mb-12" data-reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Reserve Your Spot</h2>
            <p className="text-slate-600">Complete the enrolment form to secure your place in the program.</p>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5" data-reveal data-reveal-delay="80">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Selected plan
              </div>
              <div className="font-semibold text-slate-900">
                {selectedPlan.name} — {selectedPlan.price}
              </div>
              <div className="text-xs text-slate-500">{selectedPlan.description}</div>
            </div>
            <Link
              to="/pricing"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 whitespace-nowrap"
            >
              Change plan
            </Link>
          </div>

          {/* Progress steps */}
          <div className="flex items-center justify-between mb-10 px-2" data-reveal data-reveal-delay="120">
            {[1, 2, 3].map((n) => (
              <StepIndicator key={n} n={n} step={step} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" data-reveal data-reveal-delay="160">
            {step === 1 && (
              <div className="space-y-6">
                {fields.map((field) => (
                  <FormField key={field.id} field={field} value={formData[field.id as keyof typeof formData]} onChange={(val) => setFormData({ ...formData, [field.id]: val })} />
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <GoalOption label="Weight Loss" description="Burn fat and build lean muscle" selected={formData.goal === 'weight-loss'} onSelect={() => setFormData({ ...formData, goal: 'weight-loss' })} />
                  <GoalOption label="Strength Gain" description="Build strength and power" selected={formData.goal === 'strength'} onSelect={() => setFormData({ ...formData, goal: 'strength' })} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <GoalOption label="Beginner" description="New to fitness training" selected={formData.experience === 'beginner'} onSelect={() => setFormData({ ...formData, experience: 'beginner' })} />
                  <GoalOption label="Intermediate" description="Some training experience" selected={formData.experience === 'intermediate'} onSelect={() => setFormData({ ...formData, experience: 'intermediate' })} />
                </div>
              </div>
            )}

            <div className="pt-8 border-t border-slate-100">
              <button
                type="submit"
                disabled={step === 1 && (!formData.fullName || !formData.email || !formData.phone)}
                className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  step === 1 && (!formData.fullName || !formData.email || !formData.phone)
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg hover:shadow-brand-600/30'
                }`}
              >
                {step === 2 ? 'Proceed to Payment' : 'Continue'} <ArrowRight size={18} />
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                Secure &amp; confidential. We never share your details.
              </p>
            </div>
          </form>

          <div className="mt-12 text-center" data-reveal data-reveal-delay="200">
            <p className="text-sm text-slate-500 mb-2">Prefer to enrol via WhatsApp?</p>
            <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
              <Phone size={16} /> Chat with our coach
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function LinkBack() {
  return (
    <a href="/course" className="inline-flex items-center gap-2 text-sm text-brand-600 font-medium hover:text-brand-700 mb-8 block">
      <span aria-hidden="true">←</span> Back to course
    </a>
  )
}

function StepIndicator({ n, step }: { n: number; step: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
        step >= n ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'
      }`}>
        {step >= n ? '✓' : n}
      </div>
      <span className={`text-xs font-medium ${step === n ? 'text-brand-600' : 'text-slate-500'}`}>
        {n === 1 ? 'Details' : n === 2 ? 'Goals' : 'Confirm'}
      </span>
    </div>
  )
}

function FormField({ field, value, onChange }: { field: { id: string; label: string; type: string; icon: string; placeholder: string }; value: string; onChange: (val: string) => void }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700">{field.label}</label>
        <div className="text-slate-400">
          <IconRenderer name={field.icon} size={16} className="" />
        </div>
      </div>
      <input
        type={field.type}
        inputMode={field.type === 'tel' ? 'numeric' : undefined}
        pattern={field.type === 'tel' ? '[0-9]*' : undefined}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => {
          const next = field.type === 'tel' ? e.target.value.replace(/\D/g, '') : e.target.value
          onChange(next)
        }}
        className="input-field"
      />
    </div>
  )
}

function GoalOption({ label, description, selected, onSelect }: { label: string; description: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className={`flex flex-col gap-2 p-4 rounded-xl border transition-all cursor-pointer ${
        selected
          ? 'border-brand-600 bg-brand-50'
          : 'border-slate-200 hover:border-brand-600/50 hover:bg-brand-50/50'
      }`}
    >
      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${selected ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-400 border-slate-200'}`}>
        {selected ? '✓' : ''}
      </div>
      <div className="font-semibold text-slate-900 text-sm">{label}</div>
      <div className="text-xs text-slate-500">{description}</div>
    </button>
  )
}
