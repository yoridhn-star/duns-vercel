import fr from './fr.json';
import en from './en.json';
import de from './de.json';
import es from './es.json';
import it from './it.json';
import nl from './nl.json';
import pt from './pt.json';
import pl from './pl.json';
import sv from './sv.json';
import da from './da.json';
import no from './no.json';
import fi from './fi.json';
import cs from './cs.json';
import hu from './hu.json';
import ro from './ro.json';
import el from './el.json';

const dictionaries = { fr, en, de, es, it, nl, pt, pl, sv, da, no, fi, cs, hu, ro, el };

export const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pt', 'pl', 'sv', 'da', 'no', 'fi', 'cs', 'hu', 'ro', 'el'];
export const DEFAULT_LOCALE = 'fr';

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}
