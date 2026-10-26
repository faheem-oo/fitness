import type { Enrolment } from './enrolment'
import { formatExperience, formatGoal } from './enrolment'

/**
 * Build a small, dependency-free PDF receipt and trigger a download.
 * Uses only ASCII text so byte offsets in the xref are exact.
 */

function toAscii(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7E]/g, '')
}

function escapePdfText(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return new Date().toLocaleDateString('en-US')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function buildReceiptPdf(enrolment: Enrolment): Blob {
  const rows: Array<{ text: string; size: number; gap: number }> = [
    { text: 'FITPRO', size: 28, gap: 22 },
    { text: 'Fitness Academy', size: 11, gap: 40 },
    { text: 'PAYMENT RECEIPT', size: 16, gap: 34 },
    { text: `Order ID: ${enrolment.orderId || '-'}`, size: 11, gap: 18 },
    { text: `Date: ${formatDate(enrolment.paidAt || enrolment.enrolledAt)}`, size: 11, gap: 36 },
    { text: 'BILLED TO', size: 10, gap: 18 },
    { text: enrolment.fullName || '-', size: 13, gap: 18 },
    { text: enrolment.email || '-', size: 11, gap: 18 },
    { text: enrolment.phone || '-', size: 11, gap: 36 },
    { text: 'PROGRAM', size: 10, gap: 18 },
    { text: enrolment.plan || 'Total Body Transformation', size: 13, gap: 18 },
    { text: '12-Week Certified Fitness & Strength Program', size: 11, gap: 18 },
    { text: `Goal: ${formatGoal(enrolment.goal)}`, size: 11, gap: 18 },
    { text: `Experience: ${formatExperience(enrolment.experience)}`, size: 11, gap: 40 },
    { text: `AMOUNT PAID: ${enrolment.amount || '$149'}`, size: 17, gap: 30 },
    { text: 'Lifetime access + certificate of completion', size: 11, gap: 18 },
    { text: '14-day money-back guarantee', size: 11, gap: 48 },
    { text: 'Thank you for enrolling!', size: 12, gap: 18 },
    { text: 'FitPro Fitness Academy', size: 11, gap: 18 },
  ]

  const contentParts: string[] = []
  let y = 780

  for (const row of rows) {
    contentParts.push(
      `BT /F1 ${row.size} Tf 72 ${y} Td (${escapePdfText(toAscii(row.text))}) Tj ET`,
    )
    y -= row.gap
  }

  // Horizontal rules
  contentParts.push('0.8 w 72 744 m 523 744 l S')
  contentParts.push('0.8 w 72 648 m 523 648 l S')

  const content = contentParts.join('\n')

  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
  ]

  let pdf = '%PDF-1.4\n'
  const offsets: number[] = []

  objects.forEach((object, index) => {
    offsets.push(pdf.length)
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`
  })

  const xrefOffset = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  for (const offset of offsets) {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  return new Blob([pdf], { type: 'application/pdf' })
}

export function downloadReceiptPdf(enrolment: Enrolment) {
  const blob = buildReceiptPdf(enrolment)
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `FitPro-Receipt-${enrolment.orderId || 'order'}.pdf`
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
