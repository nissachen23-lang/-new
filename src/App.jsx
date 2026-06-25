import { useState } from 'react'
import Header from './components/Header'
import Highlights from './components/Highlights'
import PricingCards from './components/PricingCards'
import ComparisonTable from './components/ComparisonTable'
import FAQ from './components/FAQ'
import PaymentModal from './components/PaymentModal'

export default function App() {
  const [selectedTier, setSelectedTier] = useState(null)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
      </div>

      <Header />

      <main className="relative">
        <Highlights />
        <PricingCards onSelectTier={setSelectedTier} />
        <ComparisonTable />
        <FAQ />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-sm text-slate-500">
        <p>© 2026 GEO 智能监测服务平台 · 助力品牌在 AI 时代全面霸榜</p>
      </footer>

      {selectedTier && (
        <PaymentModal tier={selectedTier} onClose={() => setSelectedTier(null)} />
      )}
    </div>
  )
}
