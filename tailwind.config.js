/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#070B14',
        panel: '#111827',
        elevated: '#0F172A',
        brandCyan: '#22D3EE',
        brandIndigo: '#6366F1',
        pulseBiz: '#10B981',
        pulseMarket: '#F59E0B',
        pulsePublic: '#38BDF8',
        pulseTalent: '#8B5CF6',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.15)',
      },
    },
  },
  plugins: [],
}
