// Shared custom tooltip for charts: shows ONLY the `note` column, and only when
// that cell has content. Bars/points with an empty note get no tooltip at all.
//
// payload[0].payload is the full data row (keyed by the sheet's lowercased
// headers), so we can read `note` regardless of which series the chart plots.
export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null
  const note = payload[0].payload.note
  if (!note) return null

  return (
    <div
      key={label}
      style={{ animation: 'tooltipFadeIn .5s ease-out' }}
      className="rounded bg-zinc-800 p-2 text-sm text-zinc-100 shadow"
    >
      {note}
    </div>
  )
}
