const REGISTRATION_KEY = 'kexplore_registrations'
const THEME_KEY = 'kexplore_theme'

export function getRegistrations() {
  try { return JSON.parse(localStorage.getItem(REGISTRATION_KEY) || '[]') }
  catch { return [] }
}
export function saveRegistration(registration) {
  const all = getRegistrations()
  const updated = [...all, { ...registration, id: crypto.randomUUID?.() || String(Date.now()), createdAt: new Date().toISOString() }]
  localStorage.setItem(REGISTRATION_KEY, JSON.stringify(updated))
  return updated
}
export function getSavedTheme() { return localStorage.getItem(THEME_KEY) || 'light' }
export function saveTheme(theme) { localStorage.setItem(THEME_KEY, theme) }
