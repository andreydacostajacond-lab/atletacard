/* ═══════════════════════════════════════════════════════
   FIFV — i18n Module
   6 Sprachen: DE (default Schweiz), EN, PT, ES, FR, HE
   Auto-detection via Browser, override via localStorage.
═══════════════════════════════════════════════════════ */

window.FIFV = window.FIFV || {}

const TRANSLATIONS = {
  de: {
    /* GENERIC */
    'app.name':            'FIFV',
    'app.tagline':          'Federação Internacional de Futevôlei',
    'common.loading':       'Laden...',
    'common.save':          'Speichern',
    'common.cancel':        'Abbrechen',
    'common.delete':        'Löschen',
    'common.edit':          'Bearbeiten',
    'common.back':          'Zurück',
    'common.continue':      'Weiter',
    'common.confirm':       'Bestätigen',
    'common.search':        'Suchen',
    'common.optional':      'optional',
    'common.required':      'Pflichtfeld',
    'common.email':         'E-Mail',
    'common.password':      'Passwort',
    'common.error':         'Fehler',
    'common.success':       'Erfolg',

    /* NAV */
    'nav.home':             'Start',
    'nav.tournaments':      'Turniere',
    'nav.clubs':            'Klubs',
    'nav.federations':      'Verbände',
    'nav.profile':          'Profil',
    'nav.login':            'Anmelden',
    'nav.signup':           'Registrieren',
    'nav.logout':           'Abmelden',
    'nav.dashboard':        'Dashboard',
    'nav.atletacard':       'AtletaCard',

    /* LOGIN */
    'auth.login.title':     'Willkommen zurück',
    'auth.login.subtitle':  'Melde dich mit deinem FIFV-Konto an',
    'auth.login.button':    'Anmelden',
    'auth.login.loading':   'Wird angemeldet...',
    'auth.login.invalid':   'E-Mail oder Passwort falsch.',
    'auth.login.forgot':    'Passwort vergessen?',

    /* REGISTER */
    'auth.register.title':       'Konto erstellen',
    'auth.register.subtitle':    'Werde Teil der globalen Footvolley-Community',
    'auth.register.firstName':   'Vorname',
    'auth.register.lastName':    'Nachname',
    'auth.register.country':     'Land',
    'auth.register.countryPick': 'Land auswählen',
    'auth.register.button':      'Konto erstellen',
    'auth.register.loading':     'Konto wird erstellt...',
    'auth.register.terms':       'Mit der Registrierung akzeptierst du unsere Bedingungen.',
    'auth.register.success':     'Konto erstellt! Bitte E-Mail bestätigen.',
    'auth.register.pwTooShort':  'Passwort muss mindestens 6 Zeichen haben.',

    /* AUTH TABS */
    'auth.tab.login':       'Anmelden',
    'auth.tab.register':    'Registrieren',
    'auth.haveAccount':     'Bereits ein Konto?',
    'auth.noAccount':       'Noch kein Konto?',

    /* LICENSE */
    'license.status.active':    'Aktiv',
    'license.status.pending':   'Ausstehend',
    'license.status.expired':   'Abgelaufen',
    'license.status.suspended': 'Gesperrt',
    'license.status.revoked':   'Widerrufen',
    'license.plan.basic':       'Basic',
    'license.plan.premium':     'Premium',
    'license.none':             'Keine aktive Lizenz',
    'license.buy':              'Lizenz kaufen',
  },

  en: {
    'app.name':             'FIFV',
    'app.tagline':          'International Footvolley Federation',
    'common.loading':       'Loading...',
    'common.save':          'Save',
    'common.cancel':        'Cancel',
    'common.delete':        'Delete',
    'common.edit':          'Edit',
    'common.back':          'Back',
    'common.continue':      'Continue',
    'common.confirm':       'Confirm',
    'common.search':        'Search',
    'common.optional':      'optional',
    'common.required':      'required',
    'common.email':         'Email',
    'common.password':      'Password',
    'common.error':         'Error',
    'common.success':       'Success',

    'nav.home':             'Home',
    'nav.tournaments':      'Tournaments',
    'nav.clubs':            'Clubs',
    'nav.federations':      'Federations',
    'nav.profile':          'Profile',
    'nav.login':            'Log in',
    'nav.signup':           'Sign up',
    'nav.logout':           'Log out',
    'nav.dashboard':        'Dashboard',
    'nav.atletacard':       'AtletaCard',

    'auth.login.title':     'Welcome back',
    'auth.login.subtitle':  'Sign in to your FIFV account',
    'auth.login.button':    'Sign in',
    'auth.login.loading':   'Signing in...',
    'auth.login.invalid':   'Incorrect email or password.',
    'auth.login.forgot':    'Forgot password?',

    'auth.register.title':       'Create account',
    'auth.register.subtitle':    'Join the global footvolley community',
    'auth.register.firstName':   'First name',
    'auth.register.lastName':    'Last name',
    'auth.register.country':     'Country',
    'auth.register.countryPick': 'Select country',
    'auth.register.button':      'Create account',
    'auth.register.loading':     'Creating account...',
    'auth.register.terms':       'By signing up you accept our terms.',
    'auth.register.success':     'Account created! Check your email.',
    'auth.register.pwTooShort':  'Password must be at least 6 characters.',

    'auth.tab.login':       'Sign in',
    'auth.tab.register':    'Sign up',
    'auth.haveAccount':     'Already have an account?',
    'auth.noAccount':       'No account yet?',

    'license.status.active':    'Active',
    'license.status.pending':   'Pending',
    'license.status.expired':   'Expired',
    'license.status.suspended': 'Suspended',
    'license.status.revoked':   'Revoked',
    'license.plan.basic':       'Basic',
    'license.plan.premium':     'Premium',
    'license.none':             'No active license',
    'license.buy':              'Buy license',
  },

  pt: {
    'app.name':             'FIFV',
    'app.tagline':          'Federação Internacional de Futevôlei',
    'common.loading':       'Carregando...',
    'common.save':          'Salvar',
    'common.cancel':        'Cancelar',
    'common.delete':        'Excluir',
    'common.edit':          'Editar',
    'common.back':          'Voltar',
    'common.continue':      'Continuar',
    'common.confirm':       'Confirmar',
    'common.search':        'Buscar',
    'common.optional':      'opcional',
    'common.required':      'obrigatório',
    'common.email':         'E-mail',
    'common.password':      'Senha',
    'common.error':         'Erro',
    'common.success':       'Sucesso',

    'nav.home':             'Início',
    'nav.tournaments':      'Torneios',
    'nav.clubs':            'Clubes',
    'nav.federations':      'Federações',
    'nav.profile':          'Perfil',
    'nav.login':            'Entrar',
    'nav.signup':           'Cadastrar',
    'nav.logout':           'Sair',
    'nav.dashboard':        'Painel',
    'nav.atletacard':       'AtletaCard',

    'auth.login.title':     'Bem-vindo de volta',
    'auth.login.subtitle':  'Entre na sua conta FIFV',
    'auth.login.button':    'Entrar',
    'auth.login.loading':   'Entrando...',
    'auth.login.invalid':   'E-mail ou senha incorretos.',
    'auth.login.forgot':    'Esqueceu a senha?',

    'auth.register.title':       'Criar conta',
    'auth.register.subtitle':    'Junte-se à comunidade global do futevôlei',
    'auth.register.firstName':   'Nome',
    'auth.register.lastName':    'Sobrenome',
    'auth.register.country':     'País',
    'auth.register.countryPick': 'Selecione o país',
    'auth.register.button':      'Criar conta',
    'auth.register.loading':     'Criando...',
    'auth.register.terms':       'Ao se cadastrar, você aceita nossos termos.',
    'auth.register.success':     'Conta criada! Verifique seu e-mail.',
    'auth.register.pwTooShort':  'A senha precisa ter pelo menos 6 caracteres.',

    'auth.tab.login':       'Entrar',
    'auth.tab.register':    'Cadastrar',
    'auth.haveAccount':     'Já tem uma conta?',
    'auth.noAccount':       'Ainda não tem conta?',

    'license.status.active':    'Ativa',
    'license.status.pending':   'Pendente',
    'license.status.expired':   'Expirada',
    'license.status.suspended': 'Suspensa',
    'license.status.revoked':   'Revogada',
    'license.plan.basic':       'Basic',
    'license.plan.premium':     'Premium',
    'license.none':             'Sem licença ativa',
    'license.buy':              'Comprar licença',
  },

  es: {
    'app.name':             'FIFV',
    'app.tagline':          'Federación Internacional de Futevoley',
    'common.loading':       'Cargando...',
    'common.save':          'Guardar',
    'common.cancel':        'Cancelar',
    'common.delete':        'Eliminar',
    'common.edit':          'Editar',
    'common.back':          'Volver',
    'common.continue':      'Continuar',
    'common.confirm':       'Confirmar',
    'common.search':        'Buscar',
    'common.optional':      'opcional',
    'common.required':      'obligatorio',
    'common.email':         'Correo',
    'common.password':      'Contraseña',
    'common.error':         'Error',
    'common.success':       'Éxito',

    'nav.home':             'Inicio',
    'nav.tournaments':      'Torneos',
    'nav.clubs':            'Clubes',
    'nav.federations':      'Federaciones',
    'nav.profile':          'Perfil',
    'nav.login':            'Entrar',
    'nav.signup':           'Registrarse',
    'nav.logout':           'Salir',
    'nav.dashboard':        'Panel',
    'nav.atletacard':       'AtletaCard',

    'auth.login.title':     'Bienvenido de vuelta',
    'auth.login.subtitle':  'Inicia sesión en tu cuenta FIFV',
    'auth.login.button':    'Entrar',
    'auth.login.loading':   'Entrando...',
    'auth.login.invalid':   'Correo o contraseña incorrectos.',
    'auth.login.forgot':    '¿Olvidaste la contraseña?',

    'auth.register.title':       'Crear cuenta',
    'auth.register.subtitle':    'Únete a la comunidad global del futevoley',
    'auth.register.firstName':   'Nombre',
    'auth.register.lastName':    'Apellido',
    'auth.register.country':     'País',
    'auth.register.countryPick': 'Seleccionar país',
    'auth.register.button':      'Crear cuenta',
    'auth.register.loading':     'Creando...',
    'auth.register.terms':       'Al registrarte aceptas nuestros términos.',
    'auth.register.success':     '¡Cuenta creada! Verifica tu correo.',
    'auth.register.pwTooShort':  'La contraseña debe tener al menos 6 caracteres.',

    'auth.tab.login':       'Entrar',
    'auth.tab.register':    'Registrarse',
    'auth.haveAccount':     '¿Ya tienes cuenta?',
    'auth.noAccount':       '¿Aún no tienes cuenta?',

    'license.status.active':    'Activa',
    'license.status.pending':   'Pendiente',
    'license.status.expired':   'Expirada',
    'license.status.suspended': 'Suspendida',
    'license.status.revoked':   'Revocada',
    'license.plan.basic':       'Basic',
    'license.plan.premium':     'Premium',
    'license.none':             'Sin licencia activa',
    'license.buy':              'Comprar licencia',
  },

  fr: {
    'app.name':             'FIFV',
    'app.tagline':          'Fédération Internationale de Footvolley',
    'common.loading':       'Chargement...',
    'common.save':          'Enregistrer',
    'common.cancel':        'Annuler',
    'common.delete':        'Supprimer',
    'common.edit':          'Modifier',
    'common.back':          'Retour',
    'common.continue':      'Continuer',
    'common.confirm':       'Confirmer',
    'common.search':        'Rechercher',
    'common.optional':      'facultatif',
    'common.required':      'obligatoire',
    'common.email':         'E-mail',
    'common.password':      'Mot de passe',
    'common.error':         'Erreur',
    'common.success':       'Succès',

    'nav.home':             'Accueil',
    'nav.tournaments':      'Tournois',
    'nav.clubs':            'Clubs',
    'nav.federations':      'Fédérations',
    'nav.profile':          'Profil',
    'nav.login':            'Connexion',
    'nav.signup':           'Inscription',
    'nav.logout':           'Déconnexion',
    'nav.dashboard':        'Tableau de bord',
    'nav.atletacard':       'AtletaCard',

    'auth.login.title':     'Bon retour',
    'auth.login.subtitle':  'Connectez-vous à votre compte FIFV',
    'auth.login.button':    'Connexion',
    'auth.login.loading':   'Connexion...',
    'auth.login.invalid':   'E-mail ou mot de passe incorrect.',
    'auth.login.forgot':    'Mot de passe oublié ?',

    'auth.register.title':       'Créer un compte',
    'auth.register.subtitle':    'Rejoignez la communauté footvolley mondiale',
    'auth.register.firstName':   'Prénom',
    'auth.register.lastName':    'Nom',
    'auth.register.country':     'Pays',
    'auth.register.countryPick': 'Sélectionner le pays',
    'auth.register.button':      'Créer le compte',
    'auth.register.loading':     'Création...',
    'auth.register.terms':       'En vous inscrivant, vous acceptez nos conditions.',
    'auth.register.success':     'Compte créé ! Vérifiez votre e-mail.',
    'auth.register.pwTooShort':  'Le mot de passe doit avoir au moins 6 caractères.',

    'auth.tab.login':       'Connexion',
    'auth.tab.register':    'Inscription',
    'auth.haveAccount':     'Vous avez déjà un compte ?',
    'auth.noAccount':       'Pas encore de compte ?',

    'license.status.active':    'Active',
    'license.status.pending':   'En attente',
    'license.status.expired':   'Expirée',
    'license.status.suspended': 'Suspendue',
    'license.status.revoked':   'Révoquée',
    'license.plan.basic':       'Basic',
    'license.plan.premium':     'Premium',
    'license.none':             'Aucune licence active',
    'license.buy':              'Acheter une licence',
  },

  he: {
    'app.name':             'FIFV',
    'app.tagline':          'הפדרציה הבינלאומית של פוטוולי',
    'common.loading':       'טוען...',
    'common.save':          'שמור',
    'common.cancel':        'ביטול',
    'common.delete':        'מחק',
    'common.edit':          'ערוך',
    'common.back':          'חזור',
    'common.continue':      'המשך',
    'common.confirm':       'אישור',
    'common.search':        'חיפוש',
    'common.optional':      'אופציונלי',
    'common.required':      'חובה',
    'common.email':         'אימייל',
    'common.password':      'סיסמה',
    'common.error':         'שגיאה',
    'common.success':       'הצלחה',

    'nav.home':             'בית',
    'nav.tournaments':      'טורנירים',
    'nav.clubs':            'מועדונים',
    'nav.federations':      'איגודים',
    'nav.profile':          'פרופיל',
    'nav.login':            'התחברות',
    'nav.signup':           'הרשמה',
    'nav.logout':           'התנתקות',
    'nav.dashboard':        'לוח בקרה',
    'nav.atletacard':       'AtletaCard',

    'auth.login.title':     'ברוך שובך',
    'auth.login.subtitle':  'התחבר לחשבון FIFV שלך',
    'auth.login.button':    'התחברות',
    'auth.login.loading':   'מתחבר...',
    'auth.login.invalid':   'אימייל או סיסמה שגויים.',
    'auth.login.forgot':    'שכחת סיסמה?',

    'auth.register.title':       'יצירת חשבון',
    'auth.register.subtitle':    'הצטרף לקהילת הפוטוולי הגלובלית',
    'auth.register.firstName':   'שם פרטי',
    'auth.register.lastName':    'שם משפחה',
    'auth.register.country':     'מדינה',
    'auth.register.countryPick': 'בחר מדינה',
    'auth.register.button':      'יצירת חשבון',
    'auth.register.loading':     'יוצר...',
    'auth.register.terms':       'בהרשמה אתה מקבל את התנאים שלנו.',
    'auth.register.success':     'החשבון נוצר! בדוק את האימייל שלך.',
    'auth.register.pwTooShort':  'הסיסמה חייבת להיות לפחות 6 תווים.',

    'auth.tab.login':       'התחברות',
    'auth.tab.register':    'הרשמה',
    'auth.haveAccount':     'כבר יש לך חשבון?',
    'auth.noAccount':       'אין לך עדיין חשבון?',

    'license.status.active':    'פעיל',
    'license.status.pending':   'בהמתנה',
    'license.status.expired':   'פג תוקף',
    'license.status.suspended': 'מושעה',
    'license.status.revoked':   'מבוטל',
    'license.plan.basic':       'Basic',
    'license.plan.premium':     'Premium',
    'license.none':             'אין רישיון פעיל',
    'license.buy':              'קנה רישיון',
  },
}

FIFV.i18n = {
  current: 'de',  // default Schweiz

  /** Erkennt die Browser-Sprache, fallback DE */
  detectLang() {
    const stored = localStorage.getItem('fifv_lang')
    if (stored && TRANSLATIONS[stored]) return stored
    const browserLang = (navigator.language || 'de').slice(0, 2).toLowerCase()
    return TRANSLATIONS[browserLang] ? browserLang : 'de'
  },

  /** Sprache setzen + im LocalStorage speichern */
  setLang(lang) {
    if (!TRANSLATIONS[lang]) lang = 'de'
    this.current = lang
    localStorage.setItem('fifv_lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr'
    this.applyToDOM()
  },

  /** Übersetzt einen Key. Fallback EN, dann key selbst. */
  t(key) {
    return TRANSLATIONS[this.current]?.[key]
        ?? TRANSLATIONS.en[key]
        ?? key
  },

  /** Wendet alle data-i18n Attribute im DOM an */
  applyToDOM(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.dataset.i18n)
    })
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder)
    })
    root.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = this.t(el.dataset.i18nTitle)
    })
  },

  /** Init beim Seitenstart */
  init() {
    this.setLang(this.detectLang())
  },

  /** Liste verfügbarer Sprachen für Switcher */
  available: [
    { code: 'de', label: 'Deutsch',    flag: '🇨🇭' },
    { code: 'en', label: 'English',    flag: '🇬🇧' },
    { code: 'pt', label: 'Português',  flag: '🇧🇷' },
    { code: 'es', label: 'Español',    flag: '🇪🇸' },
    { code: 'fr', label: 'Français',   flag: '🇫🇷' },
    { code: 'he', label: 'עברית',      flag: '🇮🇱' },
  ],
}

// Init sofort (vor DOMContentLoaded für richtige dir/lang Attribute)
FIFV.i18n.init()
