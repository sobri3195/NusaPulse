import { Pencil, Power, Save, Trash2, X } from 'lucide-react'
import { useState } from 'react'

const accents = [
  'from-brandIndigo/40 to-pulseBiz/30',
  'from-pulseMarket/40 to-rose-500/30',
  'from-brandCyan/40 to-pulsePublic/30',
  'from-pulseTalent/40 to-lime-500/30',
]

export default function ModuleCards({ modules, onDelete, onToggle, onUpdate }) {
  const [editingId, setEditingId] = useState(null)
  const [editPayload, setEditPayload] = useState({ title: '', desc: '', metric: '' })

  const beginEdit = (module) => {
    setEditingId(module.id)
    setEditPayload({ title: module.title, desc: module.desc, metric: module.metric })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditPayload({ title: '', desc: '', metric: '' })
  }

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {modules.map((module, idx) => {
        const isEditing = editingId === module.id

        return (
          <article
            key={module.id}
            className={`rounded-2xl border border-white/10 bg-gradient-to-br p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow ${accents[idx % accents.length]} ${
              module.enabled ? 'opacity-100' : 'opacity-50'
            }`}
          >
            {isEditing ? (
              <div className="space-y-2">
                <input
                  className="w-full rounded-lg border border-white/20 bg-slate-950/60 px-3 py-2 text-sm"
                  value={editPayload.title}
                  onChange={(e) => setEditPayload((prev) => ({ ...prev, title: e.target.value }))}
                />
                <textarea
                  className="w-full rounded-lg border border-white/20 bg-slate-950/60 px-3 py-2 text-sm"
                  rows={3}
                  value={editPayload.desc}
                  onChange={(e) => setEditPayload((prev) => ({ ...prev, desc: e.target.value }))}
                />
                <input
                  className="w-full rounded-lg border border-white/20 bg-slate-950/60 px-3 py-2 text-sm"
                  value={editPayload.metric}
                  onChange={(e) => setEditPayload((prev) => ({ ...prev, metric: e.target.value }))}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onUpdate(module.id, editPayload)
                      cancelEdit()
                    }}
                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/30 px-2 py-1 text-xs"
                  >
                    <Save className="size-3" /> Simpan
                  </button>
                  <button onClick={cancelEdit} className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-xs">
                    <X className="size-3" /> Batal
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold">{module.title}</h3>
                  <span className={`rounded-full px-2 py-1 text-xs ${module.enabled ? 'bg-emerald-500/30' : 'bg-slate-600/50'}`}>
                    {module.enabled ? 'Aktif' : 'Nonaktif'}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-100/90">{module.desc}</p>
                <p className="mt-4 text-sm font-semibold text-white">{module.metric}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button onClick={() => onToggle(module.id)} className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-xs">
                    <Power className="size-3" /> Toggle
                  </button>
                  <button onClick={() => beginEdit(module)} className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-xs">
                    <Pencil className="size-3" /> Edit
                  </button>
                  <button onClick={() => onDelete(module.id)} className="inline-flex items-center gap-1 rounded-lg bg-rose-500/30 px-2 py-1 text-xs">
                    <Trash2 className="size-3" /> Hapus
                  </button>
                </div>
              </>
            )}
          </article>
        )
      })}
    </section>
  )
}
