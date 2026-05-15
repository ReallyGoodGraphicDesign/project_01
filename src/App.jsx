import ContentSection from './ContentSection.jsx'

function App() { 
  return (
    <div className="min-h-screen bg-zinc-400 text-zinc-200">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8">
        <header className="space-y-4 text-center">
          <p className="inline-flex rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.92em] text-white">
          Content system
        </p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Reusable content sections for your app!!!!!
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-400 sm:text-lg">
            This page demonstrates a modern, consistent content container that can hold text, lists, and other nested elements without extra styling on each instance.
          </p>
        </header>

        <div className="grid gap-8">
          <ContentSection
            title="Welcome"
            subtitle="A polished content wrapper with consistent spacing, elevation, and typography."
          >
            <p>
              Use this section for introductions, summaries, or short narrative text. The component handles structure and styling so the content itself remains the focus.
            </p>
            <p>
              Because the component contains all its styling ijjjnternally, each instance remains simple and easy to reuse across pages or layouts.
            </p>
          </ContentSection>

          <ContentSection
            title="Features"
            subtitle="Add headings, paragraphs, and inline sections to build rich content blocks."
          >
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">
                  1
                </span>
                <span>Consistent typography and spacing across every section.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">
                  2
                </span>
                <span>Subtle elevation and hover state for a premium feel.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">
                  3
                </span>
                <span>Fully responsive layout without per-instance styling.</span>
              </li>
            </ul>
          </ContentSection>

          <ContentSection
            title="Next steps"
            subtitle="Let this component become the default wrapper for your rich content areas."
          >
            <p>
              Drop in markdown-style text, nested lists, callouts, or media sections. The component is intentionally generic so it works for documentation, marketing pages, or dashboard content.
            </p>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300">
              <strong className="text-white">Tip:</strong> Keep your markup clean and let the component styling provide the visual polish.
            </div>
          </ContentSection>
        </div>
      </main>
    </div>
  )
}

export default App
