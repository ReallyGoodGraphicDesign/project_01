import Header from './Header.jsx'
import ContentSection1 from './ContentSection1.jsx'
import ContactForm from './ContactForm.jsx'
import PinMap from './PinMap.jsx'
import Chart1Bar from './Chart1Bar.jsx'
import Chart2Line from './Chart2Line.jsx'
import Chart3Pie from './Chart3Pie.jsx'

function App() { 
return (
<div className="min-h-screen bg-zinc-400">
<Header className=""
 />
<main 
className="
mx-auto 
flex 
min-h-screen 
max-w-[100%] 
flex-col 
gap-10 
p-4 
">
<header hidden className="space-y-4 text-center">
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

<div className="grid grid-cols-2 gap-4">

<ContentSection1
id="chart-1"
group="UNIQUE OVERRIDE TEXT - CHARLIE PARKER"
title="Chart One - Bar"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
<Chart1Bar />
</ContentSection1>

<ContentSection1 
id="chart-2"     
group="UNIQUE OVERRIDE TEXT - JOE ZAWINUL"
title="Chart Two - Line"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
<Chart2Line />
</ContentSection1>

<ContentSection1
id="chart-3"
group="UNIQUE OVERRIDE TEXT - LADY SOVEREIGN"
title="Chart Three - Pie"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
<Chart3Pie />
</ContentSection1>

<ContentSection1 
id="map-1"
group="UNIQUE OVERRIDE TEXT - LADY GAGA"
title="Pin map"
subtitle="Leaflet + OpenStreetMap, centered on Portland" >
<PinMap />
</ContentSection1>

<ContentSection1
id="section-3"
group="UNIQUE OVERRIDE TEXT - WIZ KALIFA"
title="Title (typed in app)"
subtitle="Subtitle (typed in app)"
text="Body text (typed in app)" />

<ContentSection1
id="section-4"
group="UNIQUE OVERRIDE TEXT - NURSE WITH WOUND"
title="Title (typed in app)"
subtitle="Subtitle (typed in app)"
text="Body text (typed in app)" />

<ContentSection1
id="section-5"
group="UNIQUE OVERRIDE TEXT - HANK WILLIAMS"
title="Title (typed in app)"
subtitle="App: Subtitle"
text="App: Body" />

<ContentSection1
 
id="section-6"
group="UNIQUE OVERRIDE TEXT - GILLIAN WELCH"
title="Title (typed in app)"
subtitle="App: Subtitle"
text="App: Body" />

<ContentSection1
id="contact_form"
group="UNIQUE OVERRIDE TEXT - BRENT HINDS"
title="Form"
subtitle="Please contact me. It's urgent." >
<ContactForm />
</ContentSection1>

</div>
</main>
</div>
)
}

export default App
