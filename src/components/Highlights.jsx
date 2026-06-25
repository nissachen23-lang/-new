import { HIGHLIGHTS } from '../data/pricing'

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
            驱动品牌在生成式 AI 时代全面霸榜
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            为什么选择我们的 GEO 监测服务？
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            覆盖豆包、文心一言、DeepSeek 等主流大模型，助您在 AI 搜索时代抢占品牌先机
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-indigo-400">{item.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
