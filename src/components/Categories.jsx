import { BookOpen, GraduationCap, FlaskConical, Shield, Cpu, Layers } from 'lucide-react'

const categories = [
  { key: '5-10', title: '5th–10th', icon: BookOpen, desc: 'Foundational learning, guided practice and progress tracking.' },
  { key: '11-12', title: '11th–12th', icon: Layers, desc: 'Boards + fundamentals with smart revision and analytics.' },
  { key: 'jee', title: 'JEE', icon: Cpu, desc: 'Focused prep, PYQs, mocks, speed/accuracy analytics and rank predictor.' },
  { key: 'neet', title: 'NEET', icon: FlaskConical, desc: 'Concept-first learning with mock tests and AI improvement tips.' },
  { key: 'mht-cet', title: 'MHT–CET', icon: Shield, desc: 'Chapter-wise tests, PYQs and targeted practice flows.' },
  { key: 'engineering', title: 'Engineering', icon: GraduationCap, desc: 'Skill courses, project submission, placements and 75% auto-block.' },
]

export default function Categories({ onSelect }) {
  return (
    <section id="categories" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Choose your path</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ key, title, icon: Icon, desc }) => (
            <button
              key={key}
              onClick={() => onSelect?.(key)}
              className="group text-left rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
