import { Meta, Title } from '@angular/platform-browser';
import { GROUPES_COMPETENCES } from '../sections/competences/competences.data';
import { LIENS, SITE_URL } from '../shared/liens';
import { Langue, Translations } from './translations';

/** URL absolue de la page de chaque langue (le français est aussi la page par défaut). */
export const URL_PAGE: Record<Langue, string> = { fr: SITE_URL, en: `${SITE_URL}en/` };

const LOCALE_OG: Record<Langue, string> = { fr: 'fr_FR', en: 'en_US' };
const LANGUES: Langue[] = ['fr', 'en'];

/** Données structurées `Person` : uniquement des faits présents dans le dépôt. */
export function jsonLdPersonne(lang: Langue, t: Translations): Record<string, unknown> {
  const competences = GROUPES_COMPETENCES.flatMap((g) => g.acquises)
    .map((nom) => (typeof nom === 'string' ? nom : nom[lang]))
    .flatMap((nom) => nom.split(' · '));
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nathan Marquis',
    jobTitle: t.meta.poste,
    description: t.meta.description,
    url: URL_PAGE[lang],
    image: SITE_URL + LIENS.photo,
    sameAs: [LIENS.linkedin, LIENS.github],
    knowsAbout: competences,
  };
}

/** Crée ou met à jour un élément de `<head>` repéré par `selecteur`. */
function poser(doc: Document, tag: 'link' | 'script', selecteur: string, attrs: Record<string, string>, texte?: string): void {
  let el = doc.head.querySelector(selecteur);
  if (!el) {
    el = doc.createElement(tag);
    doc.head.appendChild(el);
  }
  for (const [nom, valeur] of Object.entries(attrs)) el.setAttribute(nom, valeur);
  if (texte !== undefined) el.textContent = texte;
}

/**
 * Applique le titre, la description, Open Graph, canonical, hreflang et JSON-LD de la langue.
 * Exécuté aussi pendant le pré-rendu : ces balises se retrouvent dans le HTML statique.
 */
export function appliquerSeo(doc: Document, title: Title, meta: Meta, lang: Langue, t: Translations): void {
  const { titre, description } = t.meta;
  const url = URL_PAGE[lang];
  const autre = LANGUES.find((l) => l !== lang)!;

  title.setTitle(titre);
  meta.updateTag({ name: 'description', content: description });
  meta.updateTag({ property: 'og:title', content: titre });
  meta.updateTag({ property: 'og:description', content: description });
  meta.updateTag({ property: 'og:url', content: url });
  meta.updateTag({ property: 'og:locale', content: LOCALE_OG[lang] });
  meta.updateTag({ property: 'og:locale:alternate', content: LOCALE_OG[autre] });
  meta.updateTag({ property: 'og:image', content: `${SITE_URL}assets/og-image.jpg` });
  meta.updateTag({ property: 'og:image:width', content: '1200' });
  meta.updateTag({ property: 'og:image:height', content: '630' });

  poser(doc, 'link', 'link[rel="canonical"]', { rel: 'canonical', href: url });
  for (const l of LANGUES) {
    poser(doc, 'link', `link[rel="alternate"][hreflang="${l}"]`, { rel: 'alternate', hreflang: l, href: URL_PAGE[l] });
  }
  poser(doc, 'link', 'link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: SITE_URL });
  poser(doc, 'script', 'script[type="application/ld+json"]', { type: 'application/ld+json' }, JSON.stringify(jsonLdPersonne(lang, t)));
}
