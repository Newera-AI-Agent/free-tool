export function formatJson(value: string): string {
  try { return JSON.stringify(JSON.parse(value), null, 2) }
  catch { return 'Invalid JSON — check commas, quotes, and brackets.' }
}

export function encodeUrl(value: string): string { return encodeURIComponent(value) }

export function countText(value: string): string {
  const words = value.trim() ? value.trim().split(/\s+/).length : 0
  return `Words  ${words}\nCharacters  ${value.length}\nLines  ${value ? value.split(/\n/).length : 0}`
}

export function hexToRgb(value: string): string {
  const hex = value.trim().replace('#', '')
  if (!/^[0-9a-f]{6}$/i.test(hex)) return 'Enter a six-digit hex color.'
  return `rgb(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4), 16)})`
}
