import {
	LineChart,
	Line,
	LabelList,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'
import 
	useSheetData 
from './useSheetData.js'
import { 
	containerBorderColor,	
	containerBorderWidth,
	containerFill,
	axisColor, 
	gridColor, 
	barColor,
	xAxisPaddingLess,
	xAxisPaddingMore,
	yAxisDomain,
	lineColor,
	lineWidth,
	labelColor,
	dotFillColor,
	activeDotFillColor,
	dotStrokeColor,
	activeDotStrokeColor,
	dotStrokeWidth,
	activeDotStrokeWidth,
	dotRadius,
	activeDotRadius,
	cursorColor,
	cursorOpacityLineChart
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
<ResponsiveContainer 
	width="100%" 
	height="100%"
	style={{ border: `${containerBorderWidth}px solid ${containerBorderColor}`, backgroundColor: containerFill }}
>
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
domain={[0.5, 5]}
/>
<Line 
dataKey="value" 
stroke={lineColor}
strokeWidth={lineWidth} 
dot={{ fill: dotFillColor, stroke: dotStrokeColor, strokeWidth: dotStrokeWidth, r: dotRadius }} 
activeDot={{ fill: activeDotFillColor, stroke: activeDotStrokeColor, strokeWidth: activeDotStrokeWidth, r: activeDotRadius }} 
>
<LabelList 
dataKey="value" 
position="top" 
offset={20}
fill={labelColor} 
fontSize={12} />
</Line>
<Tooltip
hidden
isAnimationActive={false}
cursor={{ stroke: cursorColor, strokeOpacity: cursorOpacityLineChart }}
content={<CustomTooltip />}
/>
</LineChart>
</ResponsiveContainer>
</div>
)
}

export default Chart2Line
