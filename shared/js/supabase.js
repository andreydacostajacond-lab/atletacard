/* ═══════════════════════════════════════════════════════
   FIFV — Supabase Client
   Wird auf jeder Seite eingebunden VOR allen anderen Scripts.
   Voraussetzung: supabase-js v2 von CDN geladen.
═══════════════════════════════════════════════════════ */

const SUPABASE_URL = 'https://uocpjvvpfvdsfulqipjj.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvY3BqdnZwZnZkc2Z1bHFpcGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NzE3MzUsImV4cCI6MjA5MjU0NzczNX0.tKByVKDUuKOfFB68y5cjSywTOd8evYKg-3Ft9ouGs6M'

// Globaler Client — auf window damit andere Scripts zugreifen können
window.SB = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
})

console.log('[FIFV] Supabase client ready →', SUPABASE_URL)
