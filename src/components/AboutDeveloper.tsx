import { Brain, Shield, Code, Zap, School, GraduationCap, Award } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Specializing in Neural Networks, GNN-LSTM models, and intelligent data pipelines.",
  },
  {
    icon: Shield,
    title: "Disciplined Execution",
    description: "Active Cadet Corps member. Precision, leadership, and resilience applied to engineering.",
  },
  {
    icon: Code,
    title: "Systems Engineering",
    description: "Proficient in Python, Java, C++, Kotlin. Hands-on with Linux, WSL, and CI/CD automation.",
  },
  {
    icon: Zap,
    title: "Continuous Delivery",
    description: "From traffic simulations to Android foreground services, consistently shipping production code.",
  }
];

const timeline = [
  {
    year: "2025 - Present",
    title: "St. Agnes College, Mangaluru",
    subtitle: "BCA - AI & Machine Learning (2nd Year)",
    icon: GraduationCap
  },
  {
    year: "2022 - 2025",
    title: "Army Public School, Chennai",
    subtitle: "10th & 12th Standard - CBSE (Science Stream)",
    icon: School
  }
];

export function AboutDeveloper() {
  return (
    <section id="stack" className="relative w-full border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-zinc-100 tracking-tight mb-4">Engineer Profile</h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm">
            I am Rahul Jangra (devrahulin), an AI/ML specialized systems engineer bridging the gap between rigorous computational models and high-performance native client architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Engineering Pillars */}
          <div>
            <h3 className="text-xs font-mono font-medium text-zinc-500 tracking-widest uppercase mb-6">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-5 border border-zinc-900 bg-[#0c0c0c] rounded-sm hover:border-zinc-700 transition-colors">
                  <item.icon size={18} className="text-zinc-100 mb-4" />
                  <h4 className="text-sm font-semibold text-zinc-200 mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Timeline */}
          <div>
            <h3 className="text-xs font-mono font-medium text-zinc-500 tracking-widest uppercase mb-6">Academic Trajectory</h3>
            <div className="flex flex-col gap-6">
              {timeline.map((event, idx) => (
                <div key={idx} className="flex gap-4 p-5 border border-zinc-900 bg-[#0c0c0c] rounded-sm">
                  <div className="shrink-0 mt-1">
                    <event.icon size={16} className="text-zinc-400" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-zinc-500 mb-1 block">{event.year}</span>
                    <h4 className="text-sm font-semibold text-zinc-200">{event.title}</h4>
                    <p className="text-xs text-zinc-400 mt-1">{event.subtitle}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex gap-4 p-5 border border-zinc-900 bg-[#0c0c0c] rounded-sm">
                 <div className="shrink-0 mt-1">
                    <Award size={16} className="text-zinc-400" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-zinc-500 mb-1 block">Leadership</span>
                    <h4 className="text-sm font-semibold text-zinc-200">Active Cadet Corps</h4>
                    <p className="text-xs text-zinc-400 mt-1">Competed in drills and leadership events, building discipline that carries into engineering work.</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
