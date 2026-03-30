import { BarChart3, BriefcaseBusiness, GraduationCap, LayoutDashboard, MapPinned, Settings, Store, Waves } from 'lucide-react'

const items = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: BriefcaseBusiness, label: 'PulseBiz' },
  { icon: Store, label: 'PulseMarket' },
  { icon: MapPinned, label: 'PulsePublic' },
  { icon: GraduationCap, label: 'PulseTalent' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="hidden xl:flex xl:w-64 xl:flex-col xl:gap-4 xl:border-r xl:border-white/10 xl:bg-elevated/70 xl:p-4">
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-brandCyan to-brandIndigo p-2">
            <Waves className="size-5" />
          </div>
          <div>
            <p className="font-['Plus_Jakarta_Sans'] text-lg font-bold">NusaPulse</p>
            <p className="text-xs text-brandCyan">Live Signals</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
              item.active
                ? 'bg-gradient-to-r from-brandIndigo/30 to-brandCyan/20 text-white shadow-glow'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <item.icon className="size-4" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
