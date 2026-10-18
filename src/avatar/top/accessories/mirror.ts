// Mirrors a shape drawn on the viewer's left half onto the right half (face axis x=132)
export const mirror = 'translate(264, 0) scale(-1, 1)'

export function starPath (cx: number, cy: number, outer: number, inner: number) {
  const points: string[] = []
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = -Math.PI / 2 + i * Math.PI / 5
    points.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return 'M' + points.join(' L') + ' Z'
}
