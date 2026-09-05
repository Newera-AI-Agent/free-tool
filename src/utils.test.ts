import { describe, expect, it } from 'vitest'
import { countText, encodeUrl, formatJson, hexToRgb } from './utils'

describe('browser transformations', () => {
  it('formats valid JSON and rejects malformed input', () => {
    expect(formatJson('{"name":"Free Tool"}')).toContain('"name": "Free Tool"')
    expect(formatJson('{bad}')).toMatch(/Invalid JSON/)
  })
  it('encodes URL characters safely', () => expect(encodeUrl('one two')).toBe('one%20two'))
  it('counts words, characters, and lines', () => expect(countText('one two\nthree')).toBe('Words  3\nCharacters  13\nLines  2'))
  it('converts six digit hex colors', () => expect(hexToRgb('#e4572e')).toBe('rgb(228, 87, 46)'))
})
