import { useState } from 'react'
import Hero from './components/Hero'
import Categories from './components/Categories'
import PreviewPanels from './components/PreviewPanels'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />

      <main className="relative">
        <Categories onSelect={setSelected} />
        {selected && (
          <div className="px-6">
            <div className="max-w-6xl mx-auto rounded-2xl p-6 bg-white/5 border border-white/10">
              <p className="text-sm text-white/70">Selected category</p>
              <h3 className="text-2xl font-semibold mt-1">{selected}</h3>
              <p className="mt-2 text-white/70 text-sm">This demo page previews core features while we iterate further.</p>
            </div>
          </div>
        )}
        <PreviewPanels />

        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto rounded-2xl p-6 bg-gradient-to-r from-indigo-600 to-fuchsia-600">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Ready to explore ClassGuard AI?</h3>
                <p className="text-white/90">Use the backend check to verify API connectivity and database.</p>
              </div>
              <a href="/test" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90 transition">Open Connectivity Test</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-white/60 text-sm">ClassGuard AI — Futuristic education platform</footer>
    </div>
  )
}

export default App
