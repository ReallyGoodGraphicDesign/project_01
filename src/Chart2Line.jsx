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
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 16, right: 16, bottom: 8, left: 0 }}>
          <CartesianGrid strokeDasharray="13 13" stroke="#e4e4e7" />
          <XAxis dataKey="fruit" stroke="#ff22f4" fontSize={12} />
          <YAxis stroke="#71717a" fontSize={12} />
          <Tooltip />
          <Line dataKey="value" fill="#3f3f46" radius={[10, 10, 10, 10]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart2Line
