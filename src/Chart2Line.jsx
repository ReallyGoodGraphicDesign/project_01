import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import useSheetData from './useSheetData.js'
import { 
	axisColor, 
	gridColor, 
	barColor,
	xAxisPaddingLess,
	xAxisPaddingMore,
	lineColor,
	lineWidth,
	cursorColor
} from './chartTheme.js'
import CustomTooltip from './CustomTooltip.jsx'

// A bar chart driven by the Google source via /api/data. Swap the data shape
// (keys "month"/"value") to match whatever columns your sheet returns.
function Chart2Line() {
  const { data, loading, error } = useSheetData('/api/data2')

  if (loading) {
	return (
	  <div className="flex h-[400px] w-full items-center justify-center text-zinc-500">
		Loading chart…
	  </div>
	)
  }

  if (error) {
	return (
	  <div className="flex h-[400px] w-full items-center justify-center text-red-600">
		Couldn’t load data: {error.message}
	  </div>
	)
  }

return (
<div  
className="
h-[400px] w-full
">
<ResponsiveContainer width="100%" height="100%">
<LineChart
data={data} 
margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
layout="horizontal"
>
<CartesianGrid 
horizontal={false}
vertical={false}
strokeDasharray="1 1"
stroke={gridColor}
fill="red"
fillOpacity={0}
/>
<XAxis 
dataKey="fruit"
tickLine={false}
stroke={axisColor}
fontSize={12}
unit="" 
padding={xAxisPaddingMore}
/>
<YAxis 
hide
dataKey="value"
stroke={axisColor}
fontSize={12}
/>
<Tooltip
isAnimationActive={false}
cursor={{ stroke: cursorColor, strokeOpacity: .4 }}
content={<CustomTooltip />}
/>
<Line 
dataKey="value" 
stroke={lineColor}
strokeWidth={lineWidth} 
radius={[4, 4, 0, 0]} 
/>
</LineChart>
</ResponsiveContainer>
</div>
)
}

export default Chart2Line
