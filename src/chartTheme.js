const readCssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

// AXIS
// axis line, tick, labels color
export const axisColor = readCssVar('--color-zinc-300')
// add little padding L&R of x-axis labels
export const xAxisPaddingLess = { left: 10, right: 10}
// add lotsa padding L&R of x-axis labels
export const xAxisPaddingMore = { left: 30, right:30}

// BAR
// bar fill color
export const barColor = readCssVar('--color-lime-900')
// bar highlight color based on selection
export const barHighlight1 = readCssVar('--color-cyan-700')
// bar highlight color based on value
export const barHighlight2 = readCssVar('--color-cyan-800')

// LINE
// y axis domain
export const yAxisDomain = dataMax + 40
// line color
export const lineColor = readCssVar('--color-cyan-600')
// line width
export const lineWidth = 2

// dot fill color
export const dotFillColor = readCssVar('--color-cyan-500')
// dot fill color - active
export const activeDotFillColor = readCssVar('--color-lime-600')

// dot stroke color
export const dotStrokeColor = readCssVar('--color-cyan-600')
// dot stroke color - active
export const activeDotStrokeColor = readCssVar('--color-lime-700')

// dot radius
export const dotRadius = 5
// dot radius - active
export const activeDotRadius = 7.5

// dot stroke width
export const dotStrokeWidth = 5
// dot stroke width - active
export const activeDotStrokeWidth = 7.5

// CARTESIAN GRID
// grid line color
export const gridColor = readCssVar('--color-zinc-600')

// DATA LABELS
// label color
export const labelColor = readCssVar('--color-zinc-300')

// TOOLTIP
// cursor color
export const cursorColor = readCssVar('--color-zinc-200')
// cursor opacity for bar chart
export const cursorOpacityBarChart = .1
// cursor opacity for line chart
export const cursorOpacityLineChart = .25

// PIE
// slice colors, cycled across slices (one per data point)
export const pieColors = [
  readCssVar('--color-cyan-700'),
  readCssVar('--color-cyan-500'),
  readCssVar('--color-lime-600'),
  readCssVar('--color-lime-900'),
  readCssVar('--color-zinc-500'),
  readCssVar('--color-zinc-300'),
]


