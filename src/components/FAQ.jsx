import { useState } from 'react'
import { FAQS } from '../data/pricing'

function renderParagraph(p) {
  if (p.highlight) {
    return <span className="font-medium text-indigo-300">{p.text}</span>
  }
  if (p.bold) {
    const parts = p.text.split(p.bold)
    return (
      <>
        {parts[0]}
        <strong className="text-slate-200">{p.bold}</strong>
        {parts[1] || ''}
      </>
    )
  }
  return p.text
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            常见问题
          </h2>
          <p className="mx-auto mt-4 text-slate-400">
            💡 本模块专门针对积分清零规则、消耗优先级、以及企业级导出的疑惑进行解答，打消购买顾虑
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-indigo-500/40 bg-indigo-500/5 shadow-lg shadow-indigo-500/5'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-start gap-4 px-6 py-5 text-left"
                >
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isOpen ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    Q{i + 1}
                  </span>
                  <span className="flex-1 font-medium text-white">{faq.q}</span>
                  <svg
                    className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-6 pb-5 pt-2 text-sm leading-relaxed text-slate-400">
                      {faq.paragraphs.map((p, j) => (
                        <p key={j} className={j > 0 ? 'mt-2' : ''}>
                          {renderParagraph(p)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
