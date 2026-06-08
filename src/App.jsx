import ContentSection from './ContentSection.jsx'
import ContactForm from './ContactForm.jsx'
import PinMap from './PinMap.jsx'

function App() {  
  return (
    <div className="min-h-screen bg-zinc-400">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8">
        <header className="space-y-4 text-center">
          <p className="inline-flex rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.92em] text-white">
          Content system 
        </p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Reusable content sections
          </h1>
          <p className="mx-auto max-w-3xl text-base text-zinc-100 sm:text-lg">
            This page demonstrates...
          </p>
        </header>
        <div className="grid gap-8">
          <ContentSection 
          title="This should be hidden"
            subtitle="Subtitle"
            text="Body"
          />
          <ContentSection
            title="Form"
            subtitle="Contact me RIGHT NOW!"
          >
            <ContactForm />
          </ContentSection>

          <ContentSection
            title="Pin map"
            subtitle="Leaflet + OpenStreetMap, centered on Portland"
          >
            <PinMap />
          </ContentSection>

        </div>
      </main>
    </div>
  )
}

export default App
