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

export function encodeBase64(value: string): string {
  try { return btoa(unescape(encodeURIComponent(value))) }
  catch { return 'Unable to encode this value.' }
}

export function decodeBase64(value: string): string {
  try { return decodeURIComponent(escape(atob(value.trim()))) }
  catch { return 'Unable to decode this Base64 value.' }
}

export async function sha256(value: string): Promise<string> {
  if (!value) return 'Enter text to hash.'
  if (!globalThis.crypto?.subtle) return 'SHA-256 is unavailable in this browser context.'
  const bytes = new TextEncoder().encode(value)
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('')
}

export function createUuid(): string {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16)
    globalThis.crypto.getRandomValues(bytes)
    bytes[6] = (bytes[6] & 0x0f) | 0x40
    bytes[8] = (bytes[8] & 0x3f) | 0x80
    const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('')
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
  }
  return 'UUID generation is unavailable in this browser.'
}
