import Header from './Header.jsx'
import ContentSection1 from './ContentSection1.jsx'
import ContentSection2 from './ContentSection2.jsx'
import ContactForm from './ContactForm.jsx'
import PinMap from './PinMap.jsx'
import Chart1 from './Chart1.jsx'

function App() { 
  return (
    <div className="min-h-screen bg-zinc-400">
      <Header />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Reusable content sections
          </h1>
          <p className="mx-auto max-w-3xl text-base text-zinc-100 sm:text-lg">
            This page demonstrates...
          </p>
        </header>
        <div className="grid gap-8">


                <ContentSection1
                id="chart-1"
                group="CS1: Each instance can have unique group name"
                title="Chart One"
                subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
                        <Chart1 />
                </ContentSection1>



                <ContentSection1
                id="map-1"
                group="CS1: Typed in app; varies per instance. Different, see?"
                title="Pin map"
                subtitle="Leaflet + OpenStreetMap, centered on Portland" >
                        <PinMap />
                </ContentSection1>



                <ContentSection1
                id="section-3"
                group="CS1 group name typed in app; varies per instance"
                title="Title (typed in app)"
                subtitle="Subtitle (typed in app)"
                text="Body text (typed in app)" />



                <ContentSection2
                id="section-4"
                title="Title (typed in app)"
                subtitle="Subtitle (typed in app)"
                text="Body text (typed in app)" />



                <ContentSection1
                id="section-5"
                group="This is typed in app"
                title="Title (typed in app)"
                subtitle="App: Subtitle"
                text="App: Body" />



                <ContentSection2
                id="section-6"
                title="Title (typed in app)"
                subtitle="App: Subtitle"
                text="App: Body" />



                <ContentSection1
                id="contact_form"
                group="CS1 group name typed in app. See? Different!"
                title="Form"
                subtitle="Please contact me. PLEASE - it's important." >
                        <ContactForm />
                </ContentSection1>



        </div>
      </main>
    </div>
  )
}

export default App
