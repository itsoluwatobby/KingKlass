export function sanitizeString(entry: string) {
  const val =  entry.trim()
  val.replace(/</g, '&lt;') // Replace less-than sign
    .replace(/>/g, '&gt;') // Replace greater-than sign
    .replace(/"/g, '&quot;') // Replace double quote
    .replace(/'/g, '&#39;'); // Replace single quote
  return val
}

/**
 * @description sanitizeEntries - sanitizes object entries
 * @param entries - object to sanitize
 * 
 * @returns the sanitized object
 */
export function sanitizeEntries<T extends object>(entries: T): T {
  const sanitizedValues = Object.entries(entries).map(([key, value]) => {
    if (typeof value === 'string') return [key, sanitizeString(value)]
    else return [key, value]
  })
  return Object.fromEntries(sanitizedValues)
}
