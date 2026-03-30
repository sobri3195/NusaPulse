import { useState } from 'react'
import {
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  LayoutDashboard,
  MapPinned,
  Menu,
  Settings,
  Store,
  Waves,
  X,
} from 'lucide-react'

const items = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: BriefcaseBusiness, label: 'PulseBiz', active: true },
  { icon: Store, label: 'PulseMarket', active: true },
  { icon: MapPinned, label: 'PulsePublic', active: true },
  { icon: GraduationCap, label: 'PulseTalent', active: true },
  { icon: BarChart3, label: 'Reports', active: true },
  { icon: Settings, label: 'Settings', active: true },
]

function SidebarContent() {
  return (
    <>
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="NusaPulse" className="size-10 rounded-xl border border-white/20 bg-slate-950/80 p-1" />
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
    </>
  )
}

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <aside className="hidden xl:flex xl:w-64 xl:flex-col xl:gap-4 xl:border-r xl:border-white/10 xl:bg-elevated/70 xl:p-4">
        <SidebarContent />
      </aside>

      <div className="sticky top-0 z-30 border-b border-white/10 bg-base/95 px-4 py-3 backdrop-blur xl:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Waves className="size-5 text-brandCyan" />
            <p className="font-['Plus_Jakarta_Sans'] text-lg font-bold">NusaPulse</p>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-white/20 bg-elevated p-2"
            aria-label="Toggle navigation"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-3 space-y-3 rounded-xl border border-white/10 bg-panel/90 p-3 animate-fade-in-up">
            <SidebarContent />
          </div>
        )}
      </div>
    </>
  )
}
