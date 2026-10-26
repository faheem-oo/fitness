import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Download, FileJson } from 'lucide-react'
import { IconRenderer } from '@/components/IconRenderer'
import Layout from '@/components/Layout'
import { downloadEnrolmentJson, getEnrolment } from '@/lib/enrolment'
import { downloadReceiptPdf } from '@/lib/receiptPdf'

export default function PaymentSuccess() {
  const [enrolment] = useState(() => getEnrolment())
  const autoDownloaded = useRef(false)

  useEffect(() => {
    if (!enrolment || autoDownloaded.current) return
    autoDownloaded.current = true
    downloadReceiptPdf(enrolment)
  }, [enrolment])

  return (
    <Layout>
      <section className="section py-24 sm:py-32">
        <div className="max-w-2xl mx-auto text-center" data-reveal>
          <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-8 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center animate-bounce">
              <CheckCircle size={28} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">Payment Successful!</h1>
          <p className={`text-lg text-slate-600 ${enrolment ? 'mb-3' : 'mb-10'}`}>
            Thank you for enrolling. Your access has been activated.
          </p>
          {enrolment && (
            <p className="text-sm text-slate-500 mb-10">
              Order {enrolment.orderId} · {enrolment.plan} · {enrolment.amount}
              <br />
              Your PDF receipt is downloading automatically. Enrolment saved on this
              device as JSON.
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <SuccessItem name="Download" label="Lifetime Access" value="Activated" />
            <SuccessItem name="Clock" label="Program Start" value="Immediate" />
          </div>

          <div className="card p-8 mb-12">
            <h3 className="font-bold text-slate-900 mb-6">What happens next?</h3>
            <div className="space-y-4 text-left">
              <NextStep name="Mail" title="Check your inbox" desc="We've sent your login details and access instructions." />
              <NextStep name="Phone" title="WhatsApp welcome message" desc="Our coach will reach out to help you get started." />
              <NextStep name="ShieldCheck" title="Start training" desc="Log in to your student dashboard and begin Module 1." />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
            <Link to="/" className="btn-primary w-full sm:w-auto">
              Return Home <ArrowRight size={18} />
            </Link>
            <button
              type="button"
              onClick={() => enrolment && downloadReceiptPdf(enrolment)}
              disabled={!enrolment}
              className="btn-outline w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={18} /> Download Receipt
            </button>
            <button
              type="button"
              onClick={() => enrolment && downloadEnrolmentJson(enrolment)}
              disabled={!enrolment}
              className="btn-outline w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileJson size={18} /> Download JSON
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function SuccessItem({ name, label, value }: { name: string; label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
      <div className="text-brand-600 mb-2">
        <IconRenderer name={name} size={20} className="" />
      </div>
      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</div>
      <div className="font-bold text-slate-900">{value}</div>
    </div>
  )
}

function NextStep({ name, title, desc }: { name: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-brand-600 mt-0.5 flex-shrink-0">
        <IconRenderer name={name} size={18} className="" />
      </div>
      <div className="text-sm">
        <div className="font-medium text-slate-900">{title}</div>
        <div className="text-slate-600 text-xs">{desc}</div>
      </div>
    </div>
  )
}
