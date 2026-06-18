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
gap-1.5
sm:gap-1.5 
md:gap-2
lg:gap-3
xl:gap-3.5
p-1.5 
sm:p-2 
md:p-2.5
lg:p-3
xl:p-3.5
">
<header 
className="
pb-0
mb-0
my-0
py-0
">
<h1  
className="
pb-0
mb-0
my-0
py-0
text-4xl 
sm:text-4xl
md:text-5xl
lg:text-6xl
font-semibold 
tracking-tight 
text-white 
">
MAIN BRANCH
</h1>

</header>
<div 
className="
mt-0
pt-0
grid 
grid-cols-1	
lg:grid-cols-2
gap-1.5
sm:gap-2
md:gap-2.5
lg:gap-3
xl:gap-3.5
">

<ContentSection1
id="bar-chart"
group=""
unusedOverride=""
hideGroup="If you want unique text in 'group', add it in 'group'. If you want default text (as specified in the master component) in 'group', ensure 'group' is empty and unusedOverride is NOT empty - even a space character will suffice, or you can move the 'group' text to 'unusedOR'. If you want the entire group gonzo, ensure 'group' and 'unusedOverride' are both empty and hideGroup is NOT empty. "
title="Bar Chart"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" 
>
<Chart1Bar />
</ContentSection1>

<ContentSection1 
id="line-chart"     
group=""
unusedOverride=""
hideGroup="If you want unique text in 'group', add it in 'group'. If you want default text (as specified in the master component) in 'group', ensure 'group' is empty and unusedOverride is NOT empty - even a space character will suffice, or you can move the 'group' text to 'unusedOR'. If you want the entire group gonzo, ensure 'group' and 'unusedOverride' are both empty and hideGroup is NOT empty. "
title="Line Chart"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
<Chart2Line />
</ContentSection1>

<ContentSection1
id="pie-chart"
group=""
unusedOverride=""
hideGroup="If you want unique text in 'group', add it in 'group'. If you want default text (as specified in the master component) in 'group', ensure 'group' is empty and unusedOverride is NOT empty - even a space character will suffice, or you can move the 'group' text to 'unusedOR'. If you want the entire group gonzo, ensure 'group' and 'unusedOverride' are both empty and hideGroup is NOT empty. "
title="Pie Chart"
subtitle="Recharts, fed by a Cloudflare Pages Function proxy" >
<Chart3Pie />
</ContentSection1>

<ContentSection1 
id="map-1"
group=""
unusedOverride=""
hideGroup="If you want unique text in 'group', add it in 'group'. If you want default text (as specified in the master component) in 'group', ensure 'group' is empty and unusedOverride is NOT empty - even a space character will suffice, or you can move the 'group' text to 'unusedOR'. If you want the entire group gonzo, ensure 'group' and 'unusedOverride' are both empty and hideGroup is NOT empty. "
title="Map One"
subtitle="Leaflet + OpenStreetMap, centered on Portland" >
<PinMap />
</ContentSection1>

<ContentSection1
id="contact_form"
group=""
unusedOverride=""
hideGroup="If you want unique text in 'group', add it in 'group'. If you want default text (as specified in the master component) in 'group', ensure 'group' is empty and unusedOverride is NOT empty - even a space character will suffice, or you can move the 'group' text to 'unusedOR'. If you want the entire group gonzo, ensure 'group' and 'unusedOverride' are both empty and hideGroup is NOT empty. "
title="Contact Form"
subtitle="Please contact me. It's urgent." >
<ContactForm />
</ContentSection1>

</div>
</main>
</div>
)
}

export default App
