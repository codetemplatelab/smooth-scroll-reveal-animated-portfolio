function GradientButton({ href, children, variant = 'primary', className = '' }) {
  const baseClassName =
    'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300'

  const variantClassName =
    variant === 'secondary'
      ? 'border border-cyan-200 bg-white/70 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 hover:shadow-[0_0_28px_rgba(14,165,233,0.2)]'
      : 'bg-[linear-gradient(120deg,#0ea5e9,#6366f1,#06b6d4)] bg-[length:200%_200%] text-white shadow-[0_12px_30px_-10px_rgba(14,165,233,0.55)] hover:scale-[1.03] hover:shadow-[0_16px_42px_-10px_rgba(99,102,241,0.55)]'

  return (
    <a
      href={href}
      className={`${baseClassName} ${variantClassName} ${className}`}
    >
      {children}
    </a>
  )
}

export default GradientButton
