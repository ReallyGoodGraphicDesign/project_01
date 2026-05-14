import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 sm:px-8">
        <section className="flex flex-col items-center gap-10 text-center">
          <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-[0_32px_120px_-40px_rgba(15,23,42,0.9)]">
            <img src={heroImg} className="h-44 w-auto rounded-3xl object-cover" alt="Hero" />
            <img src={reactLogo} className="absolute top-8 h-10 w-auto animate-bounce" alt="React logo" />
            <img src={viteLogo} className="absolute bottom-8 h-10 w-auto" alt="Vite logo" />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Get started
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Edit <code className="rounded-md bg-slate-800 px-2 py-1 text-sm text-cyan-300">src/App.jsx</code> and save to test{' '}
              <code className="rounded-md bg-slate-800 px-2 py-1 text-sm text-cyan-300">HMR</code>.
            </p>
            <button
              type="button"
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
          </div>
        </section>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white">Documentation</h2>
            <p className="mt-3 text-slate-300">
              Your questions, answered. Explore Vite and React docs directly from the starter page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://vite.dev/" target="_blank" className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-white">
                <img className="h-4 w-4" src={viteLogo} alt="Vite" />
                Explore Vite
              </a>
              <a href="https://react.dev/" target="_blank" className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-white">
                <img className="h-4 w-4" src={reactLogo} alt="React" />
                Learn more
              </a>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white">Connect with us</h2>
            <p className="mt-3 text-slate-300">Join the Vite community through GitHub, Discord, X, or Bluesky.</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank" className="block rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 transition hover:border-cyan-400 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank" className="block rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 transition hover:border-cyan-400 hover:text-white">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank" className="block rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 transition hover:border-cyan-400 hover:text-white">
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank" className="block rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 transition hover:border-cyan-400 hover:text-white">
                  Bluesky
                </a>
              </li>
            </ul>
          </article>
        </div>
      </main>
    </div>
  )
}

export default App
