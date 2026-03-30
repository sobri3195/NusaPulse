const modules = [
  {
    title: 'PulseBiz',
    desc: 'MSME trust score, export readiness, and storytelling quality.',
    metric: 'Trust Index 82.4',
    accent: 'from-brandIndigo/40 to-pulseBiz/30',
  },
  {
    title: 'PulseMarket',
    desc: 'Food price risk heatmap with scarcity alerting by region.',
    metric: 'Scarcity Risk 14%',
    accent: 'from-pulseMarket/40 to-rose-500/30',
  },
  {
    title: 'PulsePublic',
    desc: 'Queue prediction and citizen issue map for public services.',
    metric: 'Queue Pressure 67',
    accent: 'from-brandCyan/40 to-pulsePublic/30',
  },
  {
    title: 'PulseTalent',
    desc: 'Skill mapping and job readiness dashboard for workforce planning.',
    metric: 'Readiness 74.9',
    accent: 'from-pulseTalent/40 to-lime-500/30',
  },
]

export default function ModuleCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {modules.map((module) => (
        <article
          key={module.title}
          className={`rounded-2xl border border-white/10 bg-gradient-to-br ${module.accent} p-5`}
        >
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold">{module.title}</h3>
          <p className="mt-2 text-sm text-slate-100/90">{module.desc}</p>
          <p className="mt-4 text-sm font-semibold text-white">{module.metric}</p>
        </article>
      ))}
    </section>
  )
}
