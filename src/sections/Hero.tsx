import { Link } from 'react-router-dom'
import { Play, ArrowRight, CheckCircle } from 'lucide-react'
import heroImage from '@/assets/hero.png'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-24 sm:pt-14 sm:pb-32 lg:pt-16 lg:pb-40">
      {/* Background glow decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-24 right-0 w-[500px] h-[300px] bg-brand-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Transform Your Body in <br />
              <span className="text-brand-600 italic">Just 12 Weeks</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
              Certified strength &amp; conditioning program designed for all fitness levels. Expert coaching,
              progressive workouts, and nutrition guidance to help you build strength, burn fat, and feel your best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/enrol" className="btn-primary">
                <ArrowRight size={20} /> Enrol Now
              </Link>
              <a
                href="https://www.youtube.com/watch?v=99LquYW0LAg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:from-brand-700 hover:to-brand-600 shadow-lg shadow-brand-500/30"
              >
                <Play size={20} /> Watch Course Trailer
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle size={16} className="text-brand-600" />
                  <span>{i === 1 ? '48 video lessons' : i === 2 ? 'Certificate included' : 'Lifetime access'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer image/video placeholder */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-slate-900 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            {/* Trainer image - clickable to view course trailer */}
            <a
              href="https://www.youtube.com/watch?v=99LquYW0LAg"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-premium bg-slate-100 aspect-video min-[600px]:aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                  <img
                    src={heroImage}
                    alt="Certified trainer demonstrating exercise"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/40 hover:scale-110 transition-transform"
                      aria-label="Play course trailer"
                    >
                      <Play size={28} className="ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight size={24} className="text-slate-400" />
      </div>
    </section>
  )
}
