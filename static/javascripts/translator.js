/**
 * Will use Google Translate to translate page into english.
 */
function translateEnglish() { new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element'); }

/**
 * Will use Google Translate to translate page into danish.
 */
function translateDanish() { new google.translate.TranslateElement({pageLanguage: 'dk'}, 'google_translate_element'); }