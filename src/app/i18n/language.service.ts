import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { en } from './en';
import { fr } from './fr';
import { Langue } from './translations';

const CLE_STOCKAGE = 'langue';

function lireLangueStockee(): Langue {
  try {
    const v = localStorage.getItem(CLE_STOCKAGE);
    return v === 'fr' || v === 'en' ? v : 'fr';
  } catch {
    return 'fr';
  }
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Langue>(lireLangueStockee());
  readonly t = computed(() => (this.lang() === 'fr' ? fr : en));

  constructor() {
    effect(() => {
      this.doc.documentElement.lang = this.lang();
      const { titre, description } = this.t().meta;
      this.title.setTitle(titre);
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:title', content: titre });
      this.meta.updateTag({ property: 'og:description', content: description });
    });
  }

  setLang(l: Langue): void {
    this.lang.set(l);
    try {
      localStorage.setItem(CLE_STOCKAGE, l);
    } catch {
      // stockage indisponible : on ignore
    }
  }
}
