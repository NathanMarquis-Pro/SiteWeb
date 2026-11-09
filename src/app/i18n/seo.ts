import { Meta, Title } from '@angular/platform-browser';
import { GROUPES_COMPETENCES } from '../sections/competences/competences.data';
import { LIENS, SITE_URL } from '../shared/liens';
import { Langue, PageId, Translations } from './translations';

/** URL absolue de l'accueil dans chaque langue (le français est aussi la page par défaut). */
export const URL_PAGE: Record<Langue, string> = { fr: SITE_URL, en: `${SITE_URL}en/` };
/** URL absolue de l'étude de cas NutriScope dans chaque langue. */
export const URL_ETUDE: Record<Langue, string> = { fr: `${SITE_URL}nutriscope/`, en: `${SITE_URL}en/nutriscope/` };
export const URLS: Record<PageId, Record<Langue, string>> = { accueil: URL_PAGE, nutriscope: URL_ETUDE };

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

/** Données structurées `Article` de l'étude de cas : titre, description et auteur de la page. */
export function jsonLdEtude(lang: Langue, t: Translations): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t.etude.titre,
    description: t.etude.meta.description,
    inLanguage: lang,
    url: URL_ETUDE[lang],
    mainEntityOfPage: URL_ETUDE[lang],
    image: `${SITE_URL}assets/og-image.jpg`,
    author: { '@type': 'Person', name: 'Nathan Marquis', url: URL_PAGE[lang], sameAs: [LIENS.linkedin, LIENS.github] },
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
export function appliquerSeo(doc: Document, title: Title, meta: Meta, lang: Langue, t: Translations, page: PageId = 'accueil'): void {
  const { titre, description } = page === 'accueil' ? t.meta : t.etude.meta;
  const url = URLS[page][lang];
  const autre = LANGUES.find((l) => l !== lang)!;

  title.setTitle(titre);
  meta.updateTag({ name: 'description', content: description });
  meta.updateTag({ property: 'og:type', content: page === 'accueil' ? 'website' : 'article' });
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
    poser(doc, 'link', `link[rel="alternate"][hreflang="${l}"]`, { rel: 'alternate', hreflang: l, href: URLS[page][l] });
  }
  poser(doc, 'link', 'link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: URLS[page].fr });
  poser(doc, 'script', 'script[type="application/ld+json"]', { type: 'application/ld+json' }, JSON.stringify(page === 'accueil' ? jsonLdPersonne(lang, t) : jsonLdEtude(lang, t)));
}
