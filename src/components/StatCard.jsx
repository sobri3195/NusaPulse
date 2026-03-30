import { ArrowUpRight } from 'lucide-react'

export default function StatCard({ title, value, delta, accent = 'from-brandIndigo to-brandCyan' }) {
  return (
    <div className="kpi-glass rounded-2xl p-4">
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-300">{title}</p>
        <span className={`rounded-full bg-gradient-to-r px-2 py-1 text-xs ${accent}`}>{delta}</span>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight">{value}</h3>
        <ArrowUpRight className="size-4 text-emerald-400" />
      </div>
    </div>
  )
}
