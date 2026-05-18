/* ═══════════════════════════════════════════════════════
   FIFV — Countries Module
   ISO 3166-1 alpha-2 codes + flag emojis + multilingual names.
   Reihenfolge: Top-Footvolley-Länder zuerst, dann alphabetisch.
═══════════════════════════════════════════════════════ */

window.FIFV = window.FIFV || {}

/** Top-Länder die als erstes erscheinen (Footvolley-Hochburgen) */
const FEATURED = ['BR', 'PT', 'CH', 'IL', 'ES', 'FR', 'DE', 'IT', 'NL', 'US']

FIFV.countries = {
  /** Alle Länder mit ISO Code + Flag + Namen in 6 Sprachen */
  list: [
    // === FEATURED ===
    { code: 'BR', flag: '🇧🇷', de: 'Brasilien',           en: 'Brazil',          pt: 'Brasil',          es: 'Brasil',          fr: 'Brésil',         he: 'ברזיל' },
    { code: 'PT', flag: '🇵🇹', de: 'Portugal',             en: 'Portugal',        pt: 'Portugal',        es: 'Portugal',        fr: 'Portugal',       he: 'פורטוגל' },
    { code: 'CH', flag: '🇨🇭', de: 'Schweiz',              en: 'Switzerland',     pt: 'Suíça',           es: 'Suiza',           fr: 'Suisse',         he: 'שווייץ' },
    { code: 'IL', flag: '🇮🇱', de: 'Israel',               en: 'Israel',          pt: 'Israel',          es: 'Israel',          fr: 'Israël',         he: 'ישראל' },
    { code: 'ES', flag: '🇪🇸', de: 'Spanien',              en: 'Spain',           pt: 'Espanha',         es: 'España',          fr: 'Espagne',        he: 'ספרד' },
    { code: 'FR', flag: '🇫🇷', de: 'Frankreich',           en: 'France',          pt: 'França',          es: 'Francia',         fr: 'France',         he: 'צרפת' },
    { code: 'DE', flag: '🇩🇪', de: 'Deutschland',          en: 'Germany',         pt: 'Alemanha',        es: 'Alemania',        fr: 'Allemagne',      he: 'גרמניה' },
    { code: 'IT', flag: '🇮🇹', de: 'Italien',              en: 'Italy',           pt: 'Itália',          es: 'Italia',          fr: 'Italie',         he: 'איטליה' },
    { code: 'NL', flag: '🇳🇱', de: 'Niederlande',          en: 'Netherlands',     pt: 'Holanda',         es: 'Países Bajos',    fr: 'Pays-Bas',       he: 'הולנד' },
    { code: 'US', flag: '🇺🇸', de: 'USA',                  en: 'United States',   pt: 'Estados Unidos',  es: 'Estados Unidos',  fr: 'États-Unis',     he: 'ארצות הברית' },

    // === REST (alphabetisch nach EN) ===
    { code: 'AR', flag: '🇦🇷', de: 'Argentinien',          en: 'Argentina',       pt: 'Argentina',       es: 'Argentina',       fr: 'Argentine',      he: 'ארגנטינה' },
    { code: 'AT', flag: '🇦🇹', de: 'Österreich',           en: 'Austria',         pt: 'Áustria',         es: 'Austria',         fr: 'Autriche',       he: 'אוסטריה' },
    { code: 'AU', flag: '🇦🇺', de: 'Australien',           en: 'Australia',       pt: 'Austrália',       es: 'Australia',       fr: 'Australie',      he: 'אוסטרליה' },
    { code: 'BE', flag: '🇧🇪', de: 'Belgien',              en: 'Belgium',         pt: 'Bélgica',         es: 'Bélgica',         fr: 'Belgique',       he: 'בלגיה' },
    { code: 'CA', flag: '🇨🇦', de: 'Kanada',               en: 'Canada',          pt: 'Canadá',          es: 'Canadá',          fr: 'Canada',         he: 'קנדה' },
    { code: 'CL', flag: '🇨🇱', de: 'Chile',                en: 'Chile',           pt: 'Chile',           es: 'Chile',           fr: 'Chili',          he: 'צ׳ילה' },
    { code: 'CN', flag: '🇨🇳', de: 'China',                en: 'China',           pt: 'China',           es: 'China',           fr: 'Chine',          he: 'סין' },
    { code: 'CO', flag: '🇨🇴', de: 'Kolumbien',            en: 'Colombia',        pt: 'Colômbia',        es: 'Colombia',        fr: 'Colombie',       he: 'קולומביה' },
    { code: 'CZ', flag: '🇨🇿', de: 'Tschechien',           en: 'Czechia',         pt: 'Tchéquia',        es: 'Chequia',         fr: 'Tchéquie',       he: 'צ׳כיה' },
    { code: 'DK', flag: '🇩🇰', de: 'Dänemark',             en: 'Denmark',         pt: 'Dinamarca',       es: 'Dinamarca',       fr: 'Danemark',       he: 'דנמרק' },
    { code: 'EC', flag: '🇪🇨', de: 'Ecuador',              en: 'Ecuador',         pt: 'Equador',         es: 'Ecuador',         fr: 'Équateur',       he: 'אקוודור' },
    { code: 'GB', flag: '🇬🇧', de: 'Vereinigtes Königreich', en: 'United Kingdom', pt: 'Reino Unido',    es: 'Reino Unido',     fr: 'Royaume-Uni',    he: 'בריטניה' },
    { code: 'GR', flag: '🇬🇷', de: 'Griechenland',         en: 'Greece',          pt: 'Grécia',          es: 'Grecia',          fr: 'Grèce',          he: 'יוון' },
    { code: 'HU', flag: '🇭🇺', de: 'Ungarn',               en: 'Hungary',         pt: 'Hungria',         es: 'Hungría',         fr: 'Hongrie',        he: 'הונגריה' },
    { code: 'IE', flag: '🇮🇪', de: 'Irland',               en: 'Ireland',         pt: 'Irlanda',         es: 'Irlanda',         fr: 'Irlande',        he: 'אירלנד' },
    { code: 'JP', flag: '🇯🇵', de: 'Japan',                en: 'Japan',           pt: 'Japão',           es: 'Japón',           fr: 'Japon',          he: 'יפן' },
    { code: 'MA', flag: '🇲🇦', de: 'Marokko',              en: 'Morocco',         pt: 'Marrocos',        es: 'Marruecos',       fr: 'Maroc',          he: 'מרוקו' },
    { code: 'MX', flag: '🇲🇽', de: 'Mexiko',               en: 'Mexico',          pt: 'México',          es: 'México',          fr: 'Mexique',        he: 'מקסיקו' },
    { code: 'NO', flag: '🇳🇴', de: 'Norwegen',             en: 'Norway',          pt: 'Noruega',         es: 'Noruega',         fr: 'Norvège',        he: 'נורווגיה' },
    { code: 'NZ', flag: '🇳🇿', de: 'Neuseeland',           en: 'New Zealand',     pt: 'Nova Zelândia',   es: 'Nueva Zelanda',   fr: 'Nouvelle-Zélande', he: 'ניו זילנד' },
    { code: 'PE', flag: '🇵🇪', de: 'Peru',                 en: 'Peru',            pt: 'Peru',            es: 'Perú',            fr: 'Pérou',          he: 'פרו' },
    { code: 'PL', flag: '🇵🇱', de: 'Polen',                en: 'Poland',          pt: 'Polônia',         es: 'Polonia',         fr: 'Pologne',        he: 'פולין' },
    { code: 'RO', flag: '🇷🇴', de: 'Rumänien',             en: 'Romania',         pt: 'Romênia',         es: 'Rumania',         fr: 'Roumanie',       he: 'רומניה' },
    { code: 'RU', flag: '🇷🇺', de: 'Russland',             en: 'Russia',          pt: 'Rússia',          es: 'Rusia',           fr: 'Russie',         he: 'רוסיה' },
    { code: 'SE', flag: '🇸🇪', de: 'Schweden',             en: 'Sweden',          pt: 'Suécia',          es: 'Suecia',          fr: 'Suède',          he: 'שוודיה' },
    { code: 'TR', flag: '🇹🇷', de: 'Türkei',               en: 'Turkey',          pt: 'Turquia',         es: 'Turquía',         fr: 'Turquie',        he: 'טורקיה' },
    { code: 'UA', flag: '🇺🇦', de: 'Ukraine',              en: 'Ukraine',         pt: 'Ucrânia',         es: 'Ucrania',         fr: 'Ukraine',        he: 'אוקראינה' },
    { code: 'UY', flag: '🇺🇾', de: 'Uruguay',              en: 'Uruguay',         pt: 'Uruguai',         es: 'Uruguay',         fr: 'Uruguay',        he: 'אורוגוואי' },
    { code: 'VE', flag: '🇻🇪', de: 'Venezuela',            en: 'Venezuela',       pt: 'Venezuela',       es: 'Venezuela',       fr: 'Venezuela',      he: 'ונצואלה' },
    { code: 'ZA', flag: '🇿🇦', de: 'Südafrika',            en: 'South Africa',    pt: 'África do Sul',   es: 'Sudáfrica',       fr: 'Afrique du Sud', he: 'דרום אפריקה' },
  ],

  /** Land nach Code finden */
  byCode(code) {
    return this.list.find(c => c.code === code.toUpperCase())
  },

  /** Flag-Emoji nach Code */
  flag(code) {
    return this.byCode(code)?.flag ?? '🏳️'
  },

  /** Lokalisierter Name */
  name(code, lang = FIFV.i18n?.current ?? 'de') {
    const c = this.byCode(code)
    return c?.[lang] ?? c?.en ?? code
  },

  /** Sortierte Liste in der gewählten Sprache. Featured zuerst, Rest alphabetisch. */
  getSorted(lang = FIFV.i18n?.current ?? 'de') {
    const featured = []
    const rest = []
    this.list.forEach(c => {
      if (FEATURED.includes(c.code)) featured[FEATURED.indexOf(c.code)] = c
      else rest.push(c)
    })
    rest.sort((a, b) => (a[lang] ?? a.en).localeCompare(b[lang] ?? b.en))
    return [...featured.filter(Boolean), ...rest]
  },

  /** Renderhilfe: <option> Tags für <select> */
  renderOptions(selectedCode = '', lang = FIFV.i18n?.current ?? 'de') {
    const sorted = this.getSorted(lang)
    return sorted.map(c => `
      <option value="${c.code}"${c.code === selectedCode ? ' selected' : ''}>
        ${c.flag}  ${c[lang] ?? c.en}
      </option>
    `).join('')
  },
}
