const readCssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

// AXIS
// axis line & tick color
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
// line color
export const lineColor = readCssVar('--color-cyan-600')
// line width
export const lineWidth = 3

// CARTESIAN GRID
// grid line color
export const gridColor = readCssVar('--color-zinc-600')

