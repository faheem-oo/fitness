import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Lock, ShieldCheck, Clock } from 'lucide-react'
import { IconRenderer } from '@/components/IconRenderer'
import Layout from '@/components/Layout'
import { PRICING_PLANS } from '@/data/courseData'
import { getEnrolment, saveEnrolment } from '@/lib/enrolment'

export default function PaymentCheckout() {
  const navigate = useNavigate()
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [enrolment] = useState(() => getEnrolment())
  const plan =
    PRICING_PLANS.find((item) => item.id === enrolment?.planId) ??
    PRICING_PLANS.find((item) => item.name === enrolment?.plan) ??
    PRICING_PLANS[0]

  const methods = [
    { id: 'card', label: 'Credit / Debit Card', icon: 'CreditCard', details: 'Visa, MasterCard, Amex' },
    { id: 'paypal', label: 'PayPal', icon: 'Mail', details: 'Secure PayPal checkout' },
    { id: 'upi', label: 'UPI / Bank Transfer', icon: 'Phone', details: 'Instant bank payment' },
  ]

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault()
    const current = getEnrolment()
    if (!current) {
      navigate('/enrol')
      return
    }
    setProcessing(true)
    await new Promise((r) => setTimeout(r, 2000))
    const paidEnrolment = { ...current, paidAt: new Date().toISOString() }
    saveEnrolment(paidEnrolment)
    navigate('/payment-success')
  }

  return (
    <Layout>
      <section className="section py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 mb-10 sm:flex-row sm:justify-between sm:items-start" data-reveal>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Secure Checkout</h2>
              <p className="text-sm text-slate-500">Complete your purchase</p>
            </div>
            <div className="flex gap-2">
              <StepBadge number={1} active={true} />
              <StepBadge number={2} active={false} />
              <StepBadge number={3} active={false} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" data-reveal data-reveal-delay="100">
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4">Order Summary</h3>
                {enrolment && (
                  <div className="mb-4 pb-4 border-b border-slate-200">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Student</div>
                    <div className="font-medium text-slate-900">{enrolment.fullName}</div>
                    <div className="text-xs text-slate-500 break-all">{enrolment.email}</div>
                    <div className="text-xs text-slate-400 mt-1">Order {enrolment.orderId}</div>
                  </div>
                )}
                <div className="space-y-4 mb-6">
                  <OrderSummaryRow label={`${plan.name} Program`} value={plan.originalPrice} />
                  <OrderSummaryRow label="Discount (launch offer)" value={`-${plan.discount}`} textClass="text-brand-600" />
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between mb-6">
                    <span className="font-bold text-slate-900 text-lg">Total</span>
                    <span className="font-bold text-brand-600 text-xl">{plan.price}</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-6">
                    Includes lifetime access + certificate
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <Lock size={12} className="" /> Secure 256-bit encryption
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-600 mb-6">
                    <ShieldCheck size={12} className="" /> 14-day money-back guarantee
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-brand-50 border border-brand-100">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-brand-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-brand-900">Limited-time offer</div>
                    <div className="text-xs text-brand-700">Price increases in 5 days</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handlePay} className="card p-8">
                <h3 className="font-bold text-slate-900 mb-6">Payment Method</h3>
                <div className="space-y-3 mb-8">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full flex items-center gap-4 p-3 rounded-xl border transition-all ${
                        paymentMethod === method.id
                          ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-600/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <IconRenderer name={method.icon} size={20} className={paymentMethod === method.id ? 'text-brand-600' : 'text-slate-400'} />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{method.label}</div>
                        <div className="text-xs text-slate-500">{method.details}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Card number</label>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={19}
                        placeholder="•••• •••• •••• ••••"
                        className="input-field"
                        onChange={(e) => { e.target.value = e.target.value.replace(/\D/g, '') }}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Expiry date</label>
                        <input type="text" placeholder="MM/YY" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">CVC</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={4}
                          placeholder="•••"
                          className="input-field"
                          onChange={(e) => { e.target.value = e.target.value.replace(/\D/g, '') }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name on card</label>
                      <input type="text" placeholder="John Doe" className="input-field" />
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={processing}
                    className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70 ${
                      processing ? 'bg-slate-400 text-white' : 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg hover:shadow-brand-600/30'
                    }`}
                  >
                    {processing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing…
                      </>
                    ) : (
                      <>
                        Pay {plan.price} <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-slate-400 mt-6">
                  Your payment is processed securely. We accept all major cards.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function StepBadge({ number, active }: { number: number; active: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
        active ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'
      }`}>
        {number}
      </div>
      {number < 3 && <div className="w-3 h-px bg-slate-200" />}
    </div>
  )
}

function OrderSummaryRow({ label, value, textClass }: { label: string; value: string; textClass?: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-600">{label}</span>
      <span className={`font-medium ${textClass || 'text-slate-900'}`}>{value}</span>
    </div>
  )
}
