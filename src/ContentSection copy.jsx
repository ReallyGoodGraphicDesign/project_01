import TextStyleBody from './TextStyleBody.jsx'

function ContentSection({ title, subtitle, children }) {
  return (
    <section className="rounded-[0.25rem] bg-zinc-500 p-4 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-600 sm:p-10">
      <header className="mb-6 flex flex-col gap-2">
        <p className="inline-flex rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.92em] text-white">
          Content block
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-3xl">{title}</h2>
        {subtitle ? <p className="max-w-2xl text-sm text-lime-950 sm:text-base">{subtitle}</p> : null}
      </header>
      <div className="space-y-5 text-slate-300">{children}</div>
    </section> 
  )
}

export default ContentSection