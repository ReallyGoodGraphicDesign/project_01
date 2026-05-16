import ContentSection from './ContentSection.jsx'
import ContactForm from './ContactForm.jsx'

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
          <p className="mx-auto max-w-3xl text-base text-zinc-100 sm:text-lg">
            This page demonstrates a modern, consistent content container that can hold text, lists, and other nested elements without extra styling on each instance.
          </p>
        </header>

        <div className="grid gap-8">
          <ContentSection            
          title="Title typed in App.jsx"
            subtitle="Subtitle typed in App.jsx"
            text="Body typed in App.jsx"
          />
          <ContentSection
            title="Form"
            subtitle="Contact me RIGHT NOW!"
          >
            <ContactForm />
          </ContentSection>

        </div>
      </main>
    </div>
  )
}

export default App
