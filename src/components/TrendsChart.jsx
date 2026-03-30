import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { month: 'Jan', biz: 62, market: 48, public: 40, talent: 45 },
  { month: 'Feb', biz: 66, market: 52, public: 44, talent: 51 },
  { month: 'Mar', biz: 71, market: 58, public: 49, talent: 57 },
  { month: 'Apr', biz: 74, market: 55, public: 53, talent: 60 },
  { month: 'May', biz: 77, market: 61, public: 57, talent: 66 },
  { month: 'Jun', biz: 82, market: 64, public: 63, talent: 71 },
]

export default function TrendsChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel/70 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold">Signal Trend Overview</h3>
        <p className="text-xs text-slate-400">Last 6 months</p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="biz" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="market" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="public" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="talent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A3E635" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#A3E635" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#233047" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#9FB0C7" />
            <YAxis stroke="#9FB0C7" />
            <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid #233047' }} />
            <Area type="monotone" dataKey="biz" stroke="#10B981" fill="url(#biz)" />
            <Area type="monotone" dataKey="market" stroke="#F59E0B" fill="url(#market)" />
            <Area type="monotone" dataKey="public" stroke="#22D3EE" fill="url(#public)" />
            <Area type="monotone" dataKey="talent" stroke="#A3E635" fill="url(#talent)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
