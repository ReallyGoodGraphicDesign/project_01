import Header from './Header.jsx'
import ContentSection1 from './ContentSection1.jsx'
import ContentSection2 from './ContentSection2.jsx'
import ContactForm from './ContactForm.jsx'
import PinMap from './PinMap.jsx'
import Chart1Bar from './Chart1Bar.jsx'
import Chart2Line from './Chart2Line.jsx'

function App() { 
return (
<div className="min-h-screen bg-zinc-400">
<Header />
<main 
className="
mx-auto 
flex 
min-h-screen 
max-w-[100%] 
flex-col 
gap-10 
px-6 
py-10 
sm:px-8"
>
<header className="space-y-4 text-center">
<h1 
className="
text-5xl 
font-semibold 
tracking-tight 
text-white 
sm:text-6xl
">
Reusable content sections
</h1>
<p 
className=" 
mx-auto 
max-w-3xl 
text-base 
text-zinc-100 
sm:text-lg
">
The header (the links), above, is a component. The title directly above this text, and this text, and all of the content sections are in a 'main' element - there is no 'main' component. 
</p>
</header>
<div className="grid grid-cols-2 gap-8">


<ContentSection1
id="chart-1"
group="CS1 text varies 111"
title="Chart One - Bar"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
<Chart1Bar />
</ContentSection1>

<ContentSection2 
id="chart-2"                
title="Chart Two - Line"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
<Chart2Line />
</ContentSection2>

<ContentSection1 
                 
id="map-1"
group="CS1 text varies XXX"
title="Pin map"
subtitle="Leaflet + OpenStreetMap, centered on Portland" >
<PinMap />
</ContentSection1>

<ContentSection2
 
id="section-3"
title="Title (typed in app)"
subtitle="Subtitle (typed in app)"
text="Body text (typed in app)" />

<ContentSection1
 
id="section-4"
group="CS1 text varies JJJ"
title="Title (typed in app)"
subtitle="Subtitle (typed in app)"
text="Body text (typed in app)" />

<ContentSection2
 
id="section-5"
title="Title (typed in app)"
subtitle="App: Subtitle"
text="App: Body" />

<ContentSection1
 
id="section-6"
group="CS1 text varies ZZZ"
title="Title (typed in app)"
subtitle="App: Subtitle"
text="App: Body" />

<ContentSection2
 
id="contact_form"
title="Form"
subtitle="Please contact me. PLEASE." >
<ContactForm />
</ContentSection2>



</div>
</main>
</div>
)
}

export default App
