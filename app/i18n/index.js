import fr from './fr.json';
import en from './en.json';
import de from './de.json';
import es from './es.json';

const dictionaries = { fr, en, de, es };

export const LOCALES = ['fr', 'en', 'de', 'es'];
export const DEFAULT_LOCALE = 'fr';

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}
