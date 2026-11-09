import { DOCUMENT, isPlatformBrowser, PlatformLocation } from '@angular/common';
import { computed, effect, inject, Injectable, InjectionToken, PLATFORM_ID, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { en } from './en';
import { fr } from './fr';
import { appliquerSeo } from './seo';
import { Langue, PageId } from './translations';

/** Clé de `localStorage` lue par `public/langue.js` (redirection depuis la racine). */
export const CLE_STOCKAGE = 'langue';

/** Segment d'URL de chaque page (vide pour l'accueil). */
export const SLUGS: Record<PageId, string> = { accueil: '', nutriscope: 'nutriscope', keepsous: 'keepsous' };

/** Langue d'une URL : `…/en`, `…/en/` et `…/en/<étude>[/]` → anglais, tout le reste → français. */
export function langueDepuisChemin(chemin: string): Langue {
  return /\/en(?:\/(?:(?:nutriscope|keepsous)\/?)?)?$/.test(chemin) ? 'en' : 'fr';
}

/** Page d'une URL : `…/nutriscope[/]` ou `…/keepsous[/]` → étude de cas, tout le reste → accueil. */
export function pageDepuisChemin(chemin: string): PageId {
  const m = /\/(nutriscope|keepsous)\/?$/.exec(chemin);
  return m ? (m[1] as PageId) : 'accueil';
}

/**
 * Langue de la page, déduite de l'URL et non de `localStorage` : le serveur (pré-rendu) et le
 * navigateur obtiennent le même résultat, donc l'hydratation ne voit aucun écart.
 */
export const LANGUE_INITIALE = new InjectionToken<Langue>('LANGUE_INITIALE', {
  providedIn: 'root',
  factory: () => langueDepuisChemin(inject(PlatformLocation).pathname),
});

/** Page affichée, déduite de l'URL pour la même raison que la langue. */
export const PAGE_INITIALE = new InjectionToken<PageId>('PAGE_INITIALE', {
  providedIn: 'root',
  factory: () => pageDepuisChemin(inject(PlatformLocation).pathname),
});

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly navigateur = isPlatformBrowser(inject(PLATFORM_ID));

  /** Langue de la page. Fixe : changer de langue, c'est changer d'URL (`/` ↔ `/en/`). */
  readonly lang = signal<Langue>(inject(LANGUE_INITIALE)).asReadonly();
  /** Page affichée. Fixe, comme la langue : changer de page, c'est charger une autre URL. */
  readonly page = signal<PageId>(inject(PAGE_INITIALE)).asReadonly();
  readonly t = computed(() => (this.lang() === 'fr' ? fr : en));
  /** Locale `Intl` de la langue active. */
  readonly locale = computed(() => (this.lang() === 'fr' ? 'fr-FR' : 'en-US'));

  private readonly formateurs = new Map<string, Intl.NumberFormat>();

  constructor() {
    effect(() => {
      this.doc.documentElement.lang = this.lang();
      appliquerSeo(this.doc, this.title, this.meta, this.lang(), this.t(), this.page());
    });
  }

  /** Formate un nombre selon la langue active : `1 294 426` en français, `1,294,426` en anglais. */
  nombre(valeur: number, decimales = 0): string {
    const cle = `${this.locale()}:${decimales}`;
    let formateur = this.formateurs.get(cle);
    if (!formateur) {
      formateur = new Intl.NumberFormat(this.locale(), {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales,
      });
      this.formateurs.set(cle, formateur);
    }
    return formateur.format(valeur);
  }

  /**
   * Lien interne. Le `<base href>` fait pointer `#imsa` vers la page française : en anglais,
   * on préfixe `en/` pour rester sur `/en/#imsa`. Les liens externes sont rendus tels quels.
   */
  lien(href: string): string {
    return href.startsWith('#') && this.lang() === 'en' ? `en/${href}` : href;
  }

  /** Lien vers la page courante dans une autre langue, relatif au `<base href>`. */
  lienLangue(l: Langue): string {
    const slug = SLUGS[this.page()];
    const chemin = slug ? `${slug}/` : '';
    return l === 'en' ? `en/${chemin}` : chemin || './';
  }

  /** Lien vers une étude de cas (NutriScope par défaut), dans la langue active. */
  lienEtude(page: Exclude<PageId, 'accueil'> = 'nutriscope'): string {
    return `${this.lang() === 'en' ? 'en/' : ''}${SLUGS[page]}/`;
  }

  /**
   * Ancre de l'étude de cas. Comme pour `lien()`, `#id` mènerait à l'accueil (`<base href>`) :
   * on rappelle donc le chemin de la page.
   */
  ancreEtude(id: string, page: Exclude<PageId, 'accueil'> = 'nutriscope'): string {
    return `${this.lienEtude(page)}#${id}`;
  }

  /** Mémorise le choix de langue : `public/langue.js` le relit pour ne plus rediriger depuis `/`. */
  memoriser(l: Langue): void {
    if (!this.navigateur) return;
    try {
      localStorage.setItem(CLE_STOCKAGE, l);
    } catch {
      // stockage indisponible : on ignore
    }
  }
}
