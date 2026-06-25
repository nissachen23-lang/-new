import { Fragment } from 'react'
import { FEATURE_ROWS, TIERS, CREDIT_RULES } from '../data/pricing'

export default function ComparisonTable() {
  const tierNames = TIERS.map((t) => t.name)

  return (
    <section id="compare" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            权益详细对比
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            一目了然查看各档位在各栏目的免费使用次数与增值权益差异
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-300">
            <span>⚡</span> 积分消耗规则（超额后）
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CREDIT_RULES.map((rule) => (
              <div key={rule.feature} className="rounded-xl bg-slate-900/50 px-4 py-3">
                <p className="text-xs text-slate-400">{rule.feature}</p>
                <p className="mt-1 text-sm font-medium text-white">{rule.formula}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-slate-800/50">
                  <th className="sticky left-0 z-10 bg-slate-800/90 px-5 py-4 font-semibold text-slate-300 backdrop-blur-sm">
                    权益项目
                  </th>
                  {tierNames.map((name, i) => (
                    <th
                      key={name}
                      className={`px-4 py-4 text-center font-semibold ${
                        i === 2 ? 'bg-indigo-500/10 text-indigo-300' : 'text-slate-300'
                      }`}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_ROWS.map((group) => (
                  <Fragment key={group.category}>
                    <tr className="border-b border-white/5 bg-slate-800/30">
                      <td
                        colSpan={6}
                        className="sticky left-0 px-5 py-3 text-xs font-bold uppercase tracking-wider text-indigo-400"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feature) => (
                      <tr
                        key={`${group.category}-${feature.name}`}
                        className="border-b border-white/5 transition hover:bg-white/5"
                      >
                        <td className="sticky left-0 z-10 bg-slate-900/90 px-5 py-3.5 backdrop-blur-sm">
                          <div className="font-medium text-white">{feature.name}</div>
                          {feature.tip && (
                            <div className="mt-0.5 text-xs text-slate-500">{feature.tip}</div>
                          )}
                        </td>
                        {feature.values.map((val, i) => (
                          <td
                            key={i}
                            className={`px-4 py-3.5 text-center ${
                              i === 2 ? 'bg-indigo-500/5 font-medium text-indigo-200' : 'text-slate-300'
                            } ${val === '不限' || val === '✓' || val.includes('✓') ? 'font-semibold text-emerald-400' : ''}`}
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
