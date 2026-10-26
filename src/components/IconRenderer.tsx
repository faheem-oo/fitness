import {
  Dumbbell,
  Flame,
  Zap,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle,
  Play,
  Star,
  ArrowRight,
  Mail,
  Phone,
  Lock,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Download,
  User,
  Calendar,
  RefreshCw,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Dumbbell,
  Flame,
  Zap,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle,
  Play,
  Star,
  ArrowRight,
  Mail,
  Phone,
  Lock,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Download,
  User,
  Calendar,
  RefreshCw,
}

export function IconRenderer({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}
