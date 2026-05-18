/* ═══════════════════════════════════════════════════════
   FIFV — Auth Module
   Helpers für Session-Management & Role-Checks.
   Voraussetzung: supabase.js geladen, window.SB existiert.
═══════════════════════════════════════════════════════ */

window.FIFV = window.FIFV || {}

/**
 * Gibt aktuelle Session zurück (oder null wenn nicht eingeloggt).
 */
FIFV.getSession = async function() {
  const { data: { session } } = await SB.auth.getSession()
  return session
}

/**
 * Gibt aktuellen User zurück (oder null).
 */
FIFV.getUser = async function() {
  const session = await FIFV.getSession()
  return session?.user ?? null
}

/**
 * Lädt das vollständige Profil des eingeloggten Users.
 * Returns null wenn nicht eingeloggt.
 */
FIFV.getProfile = async function() {
  const user = await FIFV.getUser()
  if (!user) return null
  const { data, error } = await SB
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()
  if (error) { console.error('[FIFV] getProfile error:', error); return null }
  return data
}

/**
 * Holt die aktive Lizenz des eingeloggten Users via DB-Function.
 * Returns license row oder null.
 */
FIFV.getActiveLicense = async function() {
  const { data, error } = await SB.rpc('get_active_license')
  if (error) { console.error('[FIFV] getActiveLicense error:', error); return null }
  return data?.[0] ?? null
}

/**
 * Prüft ob User eine bestimmte Rolle hat (player/referee/federation/admin).
 */
FIFV.hasRole = async function(role) {
  const { data, error } = await SB.rpc('has_role', { _role: role })
  if (error) return false
  return data === true
}

/**
 * Guard für geschützte Seiten. Redirected zu login.html wenn nicht eingeloggt.
 * Usage am Top jeder geschützten Page:
 *   FIFV.requireAuth().then(user => { ... })
 */
FIFV.requireAuth = async function(redirectTo = 'login.html') {
  const user = await FIFV.getUser()
  if (!user) {
    const next = encodeURIComponent(location.pathname + location.search)
    location.replace(`${redirectTo}?next=${next}`)
    return new Promise(() => {})  // never resolves -> stops page execution
  }
  return user
}

/**
 * Logout + redirect zur Landing Page.
 */
FIFV.logout = async function(redirectTo = 'index.html') {
  await SB.auth.signOut()
  location.replace(redirectTo)
}

/**
 * Listener: wird aufgerufen wenn sich Auth-Status ändert.
 * Hilfreich für Nav-Buttons die je nach Login-Status was anderes zeigen.
 */
FIFV.onAuthChange = function(callback) {
  SB.auth.onAuthStateChange((event, session) => {
    callback(event, session)
  })
}
