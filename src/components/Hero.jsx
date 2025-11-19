import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]">
          ClassGuard AI
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Futuristic, AI-powered education platform for students, teachers, parents and admins.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#categories" className="px-5 py-3 rounded-lg bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition">
            Explore Categories
          </a>
          <a href="/test" className="px-5 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition">
            Check Backend
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)]" />
    </section>
  )
}
