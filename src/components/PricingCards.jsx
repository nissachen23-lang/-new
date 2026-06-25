import { TIERS } from '../data/pricing'

const colorMap = {
  slate: {
    border: 'border-slate-600/50',
    badge: 'bg-slate-700 text-slate-200',
    button: 'bg-slate-700 hover:bg-slate-600 text-white',
    glow: '',
  },
  blue: {
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-300',
    button: 'bg-blue-600 hover:bg-blue-500 text-white',
    glow: 'shadow-blue-500/10',
  },
  indigo: {
    border: 'border-indigo-400/60',
    badge: 'bg-indigo-500 text-white',
    button: 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-500/30',
    glow: 'shadow-indigo-500/20 ring-2 ring-indigo-500/50',
  },
  violet: {
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/20 text-violet-300',
    button: 'bg-violet-600 hover:bg-violet-500 text-white',
    glow: 'shadow-violet-500/10',
  },
  amber: {
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/20 text-amber-300',
    button: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-lg shadow-amber-500/20',
    glow: 'shadow-amber-500/10',
  },
}

export default function PricingCards({ onSelectTier }) {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            多档位会员方案
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            按月订阅，不同档位赠送不同积分额度。次数有限、积分无限 — 灵活应对各类监测场景
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {TIERS.map((tier) => {
            const colors = colorMap[tier.color]
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${colors.border} ${colors.glow} ${tier.popular ? 'scale-[1.02]' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}>
                      最受欢迎
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <p className="mt-1 text-xs text-slate-400">{tier.description}</p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      {tier.price === 0 ? '免费' : `¥${tier.price}`}
                    </span>
                    {tier.price > 0 && (
                      <span className="text-sm text-slate-400">{tier.period}</span>
                    )}
                  </div>

                  <div className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    <CreditItem label="每月赠送积分" value={tier.monthlyCredits} suffix="积分" />
                    <CreditItem label="每日赠送积分" value={tier.dailyCredits} suffix="积分/天" />
                  </div>
                </div>

                <button
                  onClick={() => onSelectTier(tier)}
                  disabled={tier.id === 'free'}
                  className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${colors.button}`}
                >
                  {tier.cta}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CreditItem({ label, value, suffix }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-white">
        {value === 0 ? '—' : `${value.toLocaleString()} ${suffix}`}
      </span>
    </div>
  )
}
