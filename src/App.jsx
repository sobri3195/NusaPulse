import { motion } from 'framer-motion'
import { Bell, Plus, Search, Trash2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import ModuleCards from './components/ModuleCards'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import TrendsChart from './components/TrendsChart'

const defaultModules = [
  {
    id: 1,
    title: 'PulseBiz',
    desc: 'MSME trust score, export readiness, and storytelling quality.',
    metric: 'Trust Index 82.4',
    enabled: true,
  },
  {
    id: 2,
    title: 'PulseMarket',
    desc: 'Food price risk heatmap with scarcity alerting by region.',
    metric: 'Scarcity Risk 14%',
    enabled: true,
  },
  {
    id: 3,
    title: 'PulsePublic',
    desc: 'Queue prediction and citizen issue map for public services.',
    metric: 'Queue Pressure 67',
    enabled: true,
  },
  {
    id: 4,
    title: 'PulseTalent',
    desc: 'Skill mapping and job readiness dashboard for workforce planning.',
    metric: 'Readiness 74.9',
    enabled: true,
  },
]

const defaultAlerts = [
  'Jakarta Barat: queue peak expected 14:00–16:00',
  'Bandung: cabai scarcity risk moved to High',
  'Surabaya MSME cluster exceeded trust target +8%',
]

const getLocalData = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export default function App() {
  const [modules, setModules] = useState([])
  const [alerts, setAlerts] = useState([])
  const [newAlert, setNewAlert] = useState('')
  const [newModule, setNewModule] = useState({ title: '', desc: '', metric: '' })

  useEffect(() => {
    setModules(getLocalData('nusapulse_modules', defaultModules))
    setAlerts(getLocalData('nusapulse_alerts', defaultAlerts))
  }, [])

  useEffect(() => {
    localStorage.setItem('nusapulse_modules', JSON.stringify(modules))
  }, [modules])

  useEffect(() => {
    localStorage.setItem('nusapulse_alerts', JSON.stringify(alerts))
  }, [alerts])

  const stats = useMemo(() => {
    const enabledCount = modules.filter((item) => item.enabled).length
    return [
      { title: 'PulseBiz Trust Score', value: '82.4', delta: '+4.8%', accent: 'from-brandIndigo to-pulseBiz' },
      { title: 'PulseMarket Risk Level', value: '14%', delta: '-2.1%', accent: 'from-pulseMarket to-rose-500' },
      { title: 'PulsePublic Queue Index', value: '67', delta: '+6.3%', accent: 'from-brandCyan to-pulsePublic' },
      {
        title: 'Active Modules',
        value: `${enabledCount}/${modules.length || defaultModules.length}`,
        delta: '+100%',
        accent: 'from-pulseTalent to-lime-500',
      },
    ]
  }, [modules])

  const addAlert = () => {
    const value = newAlert.trim()
    if (!value) return
    setAlerts((prev) => [value, ...prev])
    setNewAlert('')
  }

  const addModule = () => {
    if (!newModule.title || !newModule.desc || !newModule.metric) return
    setModules((prev) => [
      ...prev,
      { id: Date.now(), ...newModule, enabled: true },
    ])
    setNewModule({ title: '', desc: '', metric: '' })
  }

  return (
    <div className="min-h-screen bg-base text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col xl:flex-row">
        <Sidebar />

        <main className="w-full p-4 md:p-6 xl:p-8">
          <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="animate-fade-in-up">
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
              <img src="/logo.svg" alt="NusaPulse logo" className="size-10 rounded-xl border border-white/20 bg-slate-900/60 p-1" />
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
              <div className="rounded-2xl border border-white/10 bg-panel/70 p-4 animate-fade-in-up">
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold">Action Center</h3>
                <p className="mt-1 text-sm text-slate-300">Prioritize interventions across city, district, and module level.</p>
                <div className="mt-3 flex gap-2">
                  <input
                    value={newAlert}
                    onChange={(e) => setNewAlert(e.target.value)}
                    placeholder="Tambah alert baru"
                    className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm"
                  />
                  <button onClick={addAlert} className="rounded-xl bg-brandCyan/80 px-3 text-sm font-semibold text-slate-950">
                    <Plus className="size-4" />
                  </button>
                </div>
                <ul className="mt-4 space-y-3">
                  {alerts.map((alert) => (
                    <li key={alert} className="flex items-start justify-between gap-2 rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm">
                      <span>{alert}</span>
                      <button onClick={() => setAlerts((prev) => prev.filter((item) => item !== alert))}>
                        <Trash2 className="size-4 text-amber-200" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-panel/70 p-4 animate-float">
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold">Data Health</h3>
                <div className="mt-3 space-y-2 text-sm text-slate-200">
                  <p>Freshness: <span className="text-emerald-400">98%</span></p>
                  <p>Coverage: <span className="text-brandCyan">38 Provinces</span></p>
                  <p>Anomalies: <span className="text-amber-400">4 flagged events</span></p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="mb-3 font-['Plus_Jakarta_Sans'] text-xl font-semibold">Module Overview</h2>
            <div className="mb-4 grid gap-2 rounded-2xl border border-white/10 bg-panel/70 p-3 md:grid-cols-3">
              <input
                value={newModule.title}
                onChange={(e) => setNewModule((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Nama modul"
                className="rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm"
              />
              <input
                value={newModule.metric}
                onChange={(e) => setNewModule((prev) => ({ ...prev, metric: e.target.value }))}
                placeholder="Metrik utama"
                className="rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm"
              />
              <button onClick={addModule} className="rounded-xl bg-brandCyan/80 px-3 py-2 text-sm font-semibold text-slate-950">
                Tambah Modul
              </button>
              <textarea
                value={newModule.desc}
                onChange={(e) => setNewModule((prev) => ({ ...prev, desc: e.target.value }))}
                placeholder="Deskripsi modul"
                rows={2}
                className="rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm md:col-span-3"
              />
            </div>
            <ModuleCards
              modules={modules}
              onDelete={(id) => setModules((prev) => prev.filter((item) => item.id !== id))}
              onToggle={(id) => setModules((prev) => prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)))}
              onUpdate={(id, payload) => setModules((prev) => prev.map((item) => (item.id === id ? { ...item, ...payload } : item)))}
            />
          </section>
        </main>
      </div>
    </div>
  )
}
