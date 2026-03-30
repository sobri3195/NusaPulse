import { motion } from 'framer-motion'
import { Bell, Search } from 'lucide-react'
import ModuleCards from './components/ModuleCards'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import TrendsChart from './components/TrendsChart'

const stats = [
  { title: 'PulseBiz Trust Score', value: '82.4', delta: '+4.8%', accent: 'from-brandIndigo to-pulseBiz' },
  { title: 'PulseMarket Risk Level', value: '14%', delta: '-2.1%', accent: 'from-pulseMarket to-rose-500' },
  { title: 'PulsePublic Queue Index', value: '67', delta: '+6.3%', accent: 'from-brandCyan to-pulsePublic' },
  { title: 'PulseTalent Readiness', value: '74.9', delta: '+3.6%', accent: 'from-pulseTalent to-lime-500' },
]

const alerts = [
  'Jakarta Barat: queue peak expected 14:00–16:00',
  'Bandung: cabai scarcity risk moved to High',
  'Surabaya MSME cluster exceeded trust target +8%',
]

export default function App() {
  return (
    <div className="min-h-screen bg-base text-white">
      <div className="mx-auto flex max-w-[1440px]">
        <Sidebar />

        <main className="w-full p-4 md:p-6 xl:p-8">
          <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brandCyan">National Signal Console</p>
              <h1 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold md:text-4xl">NusaPulse Dashboard</h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="rounded-xl border border-white/15 bg-elevated p-2 hover:bg-white/5">
                <Search className="size-4" />
              </button>
              <button className="rounded-xl border border-white/15 bg-elevated p-2 hover:bg-white/5">
                <Bell className="size-4" />
              </button>
              <button className="rounded-xl bg-gradient-to-r from-brandIndigo to-brandCyan px-3 py-2 text-sm font-semibold text-slate-950">
                Scenario Mode: Demo
              </button>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.24 }}
              >
                <StatCard {...item} />
              </motion.div>
            ))}
          </section>

          <section className="mt-6 grid gap-4 xl:grid-cols-12">
            <div className="xl:col-span-8">
              <TrendsChart />
            </div>
            <div className="space-y-4 xl:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-panel/70 p-4">
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold">Action Center</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Prioritize interventions across city, district, and module level.
                </p>
                <ul className="mt-4 space-y-3">
                  {alerts.map((alert) => (
                    <li key={alert} className="rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm">
                      {alert}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-panel/70 p-4">
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold">Data Health</h3>
                <div className="mt-3 space-y-2 text-sm text-slate-200">
                  <p>Freshness: <span className="text-emerald-400">98%</span></p>
                  <p>Coverage: <span className="text-brandCyan">31 Provinces</span></p>
                  <p>Anomalies: <span className="text-amber-400">4 flagged events</span></p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="mb-3 font-['Plus_Jakarta_Sans'] text-xl font-semibold">Module Overview</h2>
            <ModuleCards />
          </section>
        </main>
      </div>
    </div>
  )
}
