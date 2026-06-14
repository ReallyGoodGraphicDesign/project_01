import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import useSheetData from './useSheetData.js'
import { pieColors } from './chartTheme.js'

// A pie chart driven by a Google sheet via /api/data3. To light up the live
// data you'll need the matching backend, mirroring data2:
//   - functions/api/data3.js  (copy data2.js, swap SHEET_URL2 -> SHEET_URL3)
//   - SHEET_URL3 secret        (.dev.vars locally, Cloudflare dashboard in prod)
//
// Adjust nameKey/dataKey below to your sheet's lowercased column headers:
//   nameKey = the category/label column, dataKey = the numeric column.
function Chart3Pie() {
  const { data, loading, error } = useSheetData('/api/data3')

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
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            startAngle={90}
            endAngle={-270}
            outerRadius="80%"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((d, i) => (
              <Cell key={i} fill={pieColors[i % pieColors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart3Pie
