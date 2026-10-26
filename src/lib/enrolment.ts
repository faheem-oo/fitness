export type Enrolment = {
  fullName: string
  email: string
  phone: string
  goal: string
  experience: string
  plan: string
  planId?: string
  amount: string
  orderId: string
  enrolledAt: string
  paidAt?: string
}

const STORAGE_KEY = 'fitpro_enrolment'

export function saveEnrolment(data: Enrolment) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Storage unavailable (private mode / quota) — fail silently.
  }
}

export function getEnrolment(): Enrolment | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<Enrolment>
    if (!parsed || typeof parsed !== 'object') return null
    return {
      fullName: parsed.fullName ?? '',
      email: parsed.email ?? '',
      phone: parsed.phone ?? '',
      goal: parsed.goal ?? '',
      experience: parsed.experience ?? '',
      plan: parsed.plan ?? 'Total Body Transformation',
      planId: parsed.planId,
      amount: parsed.amount ?? '$149',
      orderId: parsed.orderId ?? '',
      enrolledAt: parsed.enrolledAt ?? new Date().toISOString(),
      paidAt: parsed.paidAt,
    }
  } catch {
    return null
  }
}

export function clearEnrolment() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

/** Download the saved enrolment as a formatted JSON file. */
export function downloadEnrolmentJson(enrolment: Enrolment) {
  const blob = new Blob([JSON.stringify(enrolment, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `FitPro-Enrolment-${enrolment.orderId || 'order'}.json`
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function createOrderId() {
  return `FP-${Date.now().toString(36).toUpperCase()}`
}

export function formatGoal(goal: string) {
  if (goal === 'weight-loss') return 'Weight Loss'
  if (goal === 'strength') return 'Strength Gain'
  return goal || '-'
}

export function formatExperience(experience: string) {
  if (!experience) return '-'
  return experience.charAt(0).toUpperCase() + experience.slice(1)
}
