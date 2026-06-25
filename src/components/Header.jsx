export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">支付购买</h1>
            <p className="text-xs text-slate-400">GEO 智能监测服务平台</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <a href="#highlights" className="rounded-lg px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">核心亮点</a>
          <a href="#pricing" className="rounded-lg px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">会员方案</a>
          <a href="#compare" className="rounded-lg px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">权益对比</a>
          <a href="#faq" className="rounded-lg px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">常见问题</a>
        </div>
      </div>
    </header>
  )
}
