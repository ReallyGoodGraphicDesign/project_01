import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LabelList,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import useSheetData from './useSheetData.js'
import { 
	axisColor, 
	gridColor, 
	barColor,
	barHighlight1,
	barHighlight2,
	xAxisPaddingLess,	 
	xAxisPaddingMore,
	labelColor,
	cursorColor
} from './chartTheme.js'
import CustomTooltip from './CustomTooltip.jsx'

// A bar chart driven by the Google source via /api/data. Swap the data shape
// (keys "month"/"value") to match whatever columns your sheet returns.
function Chart1Bar() {
  const { data, loading, error } = useSheetData()

  if (loading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center text-zinc-500">
        Loading chart…
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center text-zinc-500">
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
<BarChart
data={data} 
margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
layout="horizontal"
barCategoryGap="5%"
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
dataKey="month"
tickLine={false}
stroke={axisColor}
fontSize={12}
unit="" 
padding={xAxisPaddingLess}
/>
<YAxis 
hide
dataKey="value"
stroke={axisColor}
fontSize={12}
/>
<Tooltip
isAnimationActive={false}
cursor={{ fill: cursorColor, fillOpacity: .15 }}
content={<CustomTooltip />}
/>
<Bar 
dataKey="value" 
fill={barColor} 
radius={[4, 4, 0, 0]}
> 
{data.map((d, i) => {
  const fill =
    d.month === 'Mar'  ? barHighlight1   // chosen bar wins
    : d.value > 59     ? barHighlight2    // else value threshold
    : barColor                                // else default
  return <Cell key={i} fill={fill} />
})}
<LabelList 
dataKey="value" 
position="top" 
fill={labelColor} 
fontSize={12} 
formatter={v => `$${v}`} />
</Bar>
</BarChart>
</ResponsiveContainer>
</div>
)
}

export default Chart1Bar