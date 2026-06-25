import { useEffect, useState } from 'react'

const PAYMENT_METHODS = [
  { id: 'wechat', name: '微信支付', icon: '💚' },
  { id: 'alipay', name: '支付宝', icon: '💙' },
  { id: 'bank', name: '对公转账', icon: '🏦' },
]

export default function PaymentModal({ tier, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('wechat')
  const [step, setStep] = useState('confirm')
  const [agreed, setAgreed] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!tier) return null

  const handlePay = () => {
    if (!agreed) return
    setStep('processing')
    setTimeout(() => setStep('success'), 2000)
  }

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="animate-slide-up relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-lg font-bold text-white">
            {step === 'success' ? '支付成功' : '确认购买'}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {step === 'confirm' && (
          <div className="px-6 py-5">
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">所选方案</p>
                  <p className="mt-1 text-xl font-bold text-white">{tier.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">月费</p>
                  <p className="mt-1 text-2xl font-extrabold text-indigo-400">¥{tier.price}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div className="rounded-lg bg-slate-800/50 px-3 py-2">
                  <p className="text-xs text-slate-400">每月赠送</p>
                  <p className="text-sm font-semibold text-white">{tier.monthlyCredits.toLocaleString()} 积分</p>
                </div>
                <div className="rounded-lg bg-slate-800/50 px-3 py-2">
                  <p className="text-xs text-slate-400">每日赠送</p>
                  <p className="text-sm font-semibold text-white">{tier.dailyCredits} 积分/天</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-sm font-medium text-slate-300">选择支付方式</p>
              <div className="grid grid-cols-3 gap-3">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 text-sm transition ${
                      paymentMethod === method.id
                        ? 'border-indigo-500 bg-indigo-500/10 text-white'
                        : 'border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xl">{method.icon}</span>
                    <span className="text-xs">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-2.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-500 focus:ring-indigo-500"
              />
              <span className="text-xs leading-relaxed text-slate-400">
                我已阅读并同意
                <a href="#" className="text-indigo-400 hover:underline">《会员服务协议》</a>
                及
                <a href="#" className="text-indigo-400 hover:underline">《积分使用规则》</a>
                ，了解积分过期与扣费优先级规则
              </span>
            </label>

            <button
              onClick={handlePay}
              disabled={!agreed}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              确认支付 ¥{tier.price}
            </button>
          </div>
        )}

        {step === 'processing' && (
          <div className="flex flex-col items-center px-6 py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500" />
            <p className="mt-5 text-lg font-medium text-white">正在处理支付...</p>
            <p className="mt-2 text-sm text-slate-400">请稍候，正在连接支付通道</p>
          </div>
        )}

        {step === 'success' && (
          <div className="flex flex-col items-center px-6 py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-5 text-xl font-bold text-white">购买成功！</p>
            <p className="mt-2 text-center text-sm text-slate-400">
              您已成功开通 <strong className="text-white">{tier.name}</strong>，
              {tier.monthlyCredits.toLocaleString()} 积分已到账，每日 {tier.dailyCredits} 积分将于次日 0:00 发放
            </p>
            <button
              onClick={onClose}
              className="mt-8 rounded-xl bg-white/10 px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              完成
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
