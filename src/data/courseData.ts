export const COURSE = {
  id: 'total-body-transformation',
  title: 'Total Body Transformation',
  subtitle: '12-Week Certified Fitness & Strength Program',
  tagline: 'Build strength, burn fat, and transform your body with expert guidance.',
  price: '$149',
  originalPrice: '$299',
  duration: '12 weeks',
  format: 'Self-paced online + live weekly coaching',
  level: 'All levels',
  lessons: 48,
  certificate: 'Certificate of Completion',
  access: 'Lifetime access',
}

export const MODULES = [
  {
    id: 1,
    title: 'Foundations of Fitness',
    lessons: 6,
    description: 'Master the fundamentals of training, mobility, and proper form.',
  },
  {
    id: 2,
    title: 'Strength Training',
    lessons: 10,
    description: 'Progressive overload, compound lifts, and muscle-building splits.',
  },
  {
    id: 3,
    title: 'Cardio & Conditioning',
    lessons: 8,
    description: 'HIIT, steady-state, and metabolic conditioning for fat loss.',
  },
  {
    id: 4,
    title: 'Nutrition for Performance',
    lessons: 10,
    description: 'Macronutrients, meal timing, and sustainable eating habits.',
  },
  {
    id: 5,
    title: 'Recovery & Mobility',
    lessons: 7,
    description: 'Sleep, stretching, foam rolling, and injury prevention.',
  },
  {
    id: 6,
    title: 'Mindset & Habits',
    lessons: 7,
    description: 'Goal setting, motivation, and building lasting discipline.',
  },
]

export const BENEFITS = [
  {
    icon: 'Dumbbell',
    title: 'Build Lean Muscle',
    description: 'Proven strength protocols to add quality muscle mass.',
  },
  {
    icon: 'Flame',
    title: 'Burn Body Fat',
    description: 'Metabolic conditioning that torches calories efficiently.',
  },
  {
    icon: 'Zap',
    title: 'Boost Energy',
    description: 'Train smarter and feel energized all day long.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Expert Coaching',
    description: 'Learn from a certified trainer with 10+ years experience.',
  },
  {
    icon: 'Award',
    title: 'Certificate',
    description: 'Earn a recognized certificate upon completion.',
  },
  {
    icon: 'Clock',
    title: 'Flexible Schedule',
    description: 'Learn at your own pace, anytime, anywhere.',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Manager',
    rating: 5,
    text: 'This course completely changed my approach to fitness. I lost 12kg in 12 weeks and feel stronger than ever. The trainer\'s guidance was invaluable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Daniel Carter',
    role: 'Software Engineer',
    rating: 5,
    text: 'As someone who sits at a desk all day, the mobility and strength modules were a game-changer. My back pain is gone and my posture has improved.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Nurse',
    rating: 5,
    text: 'Flexible, effective, and easy to follow. The nutrition module taught me how to eat for performance without restrictive dieting.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format',
  },
]

export const FAQS = [
  {
    q: 'Do I need any prior fitness experience?',
    a: 'No. This course is designed for all levels. We start with foundations and progress gradually.',
  },
  {
    q: 'What equipment do I need?',
    a: 'A pair of dumbbells, a yoga mat, and resistance bands are recommended. Bodyweight alternatives are provided.',
  },
  {
    q: 'How long do I have access?',
    a: 'You get lifetime access to all course materials, including future updates.',
  },
  {
    q: 'Is there a certificate?',
    a: 'Yes. You\'ll receive a Certificate of Completion upon finishing all modules.',
  },
  {
    q: 'Can I get a refund?',
    a: 'We offer a 14-day money-back guarantee if you\'re not satisfied with the course.',
  },
  {
    q: 'Is there live support?',
    a: 'Yes. Weekly live Q&A sessions with the trainer are included.',
  },
]

export type PricingPlan = {
  id: string
  name: string
  price: string
  originalPrice: string
  discount: string
  description: string
  features: string[]
  popular: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '$149',
    originalPrice: '$299',
    discount: '$150',
    description: 'One-time payment, lifetime access',
    features: [
      'All 48 video lessons',
      '12-week structured program',
      'Downloadable resources',
      'Lifetime access',
      'Certificate of completion',
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$249',
    originalPrice: '$399',
    discount: '$150',
    description: 'One-time payment, everything included',
    features: [
      'Everything in Standard',
      'Weekly live Q&A with the trainer',
      '1-on-1 coaching call',
      'Custom meal plan',
      'Priority WhatsApp support',
    ],
    popular: true,
  },
]
