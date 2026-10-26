import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '@/pages/Landing'
import CourseDetails from '@/pages/CourseDetails'
import EnrolmentForm from '@/pages/EnrolmentForm'
import PaymentCheckout from '@/pages/PaymentCheckout'
import PaymentSuccess from '@/pages/PaymentSuccess'
import WhatsAppRedirect from '@/pages/WhatsAppRedirect'
import FaqPage from '@/pages/Faq'
import PricingPage from '@/pages/Pricing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/course" element={<CourseDetails />} />
        <Route path="/enrol" element={<EnrolmentForm />} />
        <Route path="/checkout" element={<PaymentCheckout />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/whatsapp" element={<WhatsAppRedirect />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
