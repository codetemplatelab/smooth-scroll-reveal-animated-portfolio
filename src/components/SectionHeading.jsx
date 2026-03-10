function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 space-y-4 md:mb-12">
      <p className="font-mono-title text-xs uppercase tracking-[0.2em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
        {description}
      </p>
      <div className="gradient-divider" aria-hidden="true" />
    </div>
  )
}

export default SectionHeading
