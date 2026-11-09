import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { LANGUE_INITIALE, PAGE_INITIALE, SLUGS } from './i18n/language.service';
import { Langue, PageId } from './i18n/translations';
import { SECTIONS as SECTIONS_KEEPSOUS } from './pages/etude-keepsous/etude-keepsous.data';
import { SECTIONS } from './pages/etude-nutriscope/etude-nutriscope.data';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let page: HTMLElement;

  /** Affiche la coque `App` sur une route, comme le ferait le navigateur après chargement de l'URL. */
  async function afficher(lang?: Langue, id: PageId = 'accueil') {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes),
        { provide: PAGE_INITIALE, useValue: id },
        ...(lang ? [{ provide: LANGUE_INITIALE, useValue: lang }] : []),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(id === 'accueil' ? '/' : `/${SLUGS[id]}`);
    await fixture.whenStable();
    page = fixture.nativeElement as HTMLElement;
  }

  beforeEach(async () => {
    localStorage.removeItem('langue');
    await afficher();
  });

  afterEach(() => localStorage.removeItem('langue'));

  describe('accueil', () => {
    it('affiche toutes les sections', () => {
      const ids = ['haut', 'nutriscope', 'keepsous', 'imsa', 'methode', 'projets', 'parcours', 'competences', 'hors-code', 'contact'];
      for (const id of ids) {
        expect(page.querySelector(`#${id}`)).withContext(`section #${id}`).not.toBeNull();
      }
    });

    it('a un seul h1 et un seul main', () => {
      expect(page.querySelectorAll('h1').length).toBe(1);
      expect(page.querySelectorAll('main').length).toBe(1);
    });

    it('a une cible pour chaque lien interne (#ancre), dans les deux langues', async () => {
      for (const lang of ['fr', 'en'] as const) {
        await afficher(lang);
        // En anglais les ancres sont préfixées (`en/#imsa`) pour rester sur la page anglaise.
        const liens = Array.from(page.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="en/#"]'));
        expect(liens.length).withContext(lang).toBeGreaterThan(0);
        for (const lien of liens) {
          const href = lien.getAttribute('href')!;
          expect(href.startsWith('en/')).withContext(`${lang} ${href}`).toBe(lang === 'en');
          const ancre = href.slice(href.indexOf('#'));
          expect(page.querySelector(ancre)).withContext(`cible de ${href}`).not.toBeNull();
        }
        // Aucune ancre nue ne doit subsister en anglais : elle mènerait à la page française.
        if (lang === 'en') expect(page.querySelectorAll('a[href^="#"]').length).toBe(0);
      }
    });

    it("le bouton « étude de cas » mène à la page de l'étude, dans la langue de la page", async () => {
      const bouton = () => page.querySelector<HTMLAnchorElement>('#nutriscope a.btn-primary');
      expect(bouton()?.getAttribute('href')).toBe('nutriscope/');
      expect(bouton()?.hasAttribute('target')).toBeFalse();
      await afficher('en');
      expect(bouton()?.getAttribute('href')).toBe('en/nutriscope/');
    });

    it("le bouton « étude de cas » de KeepSous mène à sa page, sans nouvel onglet, et le code reste privé", async () => {
      const bouton = () => page.querySelector<HTMLAnchorElement>('#keepsous a.btn-primary');
      expect(bouton()?.getAttribute('href')).toBe('keepsous/');
      expect(bouton()?.hasAttribute('target')).toBeFalse();
      expect(page.querySelector('#keepsous a[target]')).toBeNull();
      expect(page.querySelector('#keepsous a[href*="github"]')).toBeNull();
      await afficher('en');
      expect(bouton()?.getAttribute('href')).toBe('en/keepsous/');
    });

    it('le sélecteur de langue est fait de liens vers / et /en/', () => {
      const liens = Array.from(page.querySelectorAll<HTMLAnchorElement>('.join a[hreflang]'));
      expect(liens.map((a) => [a.getAttribute('hreflang'), a.getAttribute('href')])).toEqual([
        ['fr', './'],
        ['en', 'en/'],
      ]);
      expect(liens[0].getAttribute('aria-current')).toBe('true');
      expect(liens[1].getAttribute('aria-current')).toBeNull();
    });

    it('cliquer sur un lien de langue mémorise le choix', () => {
      const en = page.querySelector<HTMLAnchorElement>('.join a[hreflang="en"]')!;
      en.addEventListener('click', (e) => e.preventDefault()); // pas de navigation dans le test
      en.click();
      expect(localStorage.getItem('langue')).toBe('en');
    });

    it('page anglaise : titre, attribut lang, nombres et lien actif', async () => {
      await afficher('en');
      expect(page.querySelector('h1')?.textContent).toContain('Your data');
      expect(document.documentElement.lang).toBe('en');
      expect(page.querySelector('#nutriscope')?.textContent).toContain('1,294,426');
      expect(page.querySelector('.join a[hreflang="en"]')?.getAttribute('aria-current')).toBe('true');
    });
  });

  describe("étude de cas NutriScope", () => {
    const espaces = (texte: string | null | undefined) => (texte ?? '').replace(/\s/g, ' ');

    beforeEach(async () => afficher('fr', 'nutriscope'));

    it("affiche l'étude, la barre de navigation et le pied de page, sans l'accueil", () => {
      expect(page.querySelector('app-etude-nutriscope')).not.toBeNull();
      expect(page.querySelector('app-accueil')).toBeNull();
      expect(page.querySelector('header nav.navbar')).not.toBeNull();
      expect(page.querySelector('#contact')).not.toBeNull();
    });

    it('a un seul h1, un seul main et un h2 par section, sans saut de niveau', () => {
      expect(page.querySelectorAll('h1').length).toBe(1);
      expect(page.querySelectorAll('main').length).toBe(1);
      for (const id of SECTIONS) {
        expect(page.querySelectorAll(`#${id} h2`).length).withContext(`#${id}`).toBe(1);
      }
      // Les h3 sont toujours dans une section qui a son h2 ; aucun h4.
      expect(page.querySelectorAll('h4').length).toBe(0);
    });

    it('le sommaire a une cible pour chaque entrée, dans les deux langues', async () => {
      for (const lang of ['fr', 'en'] as const) {
        await afficher(lang, 'nutriscope');
        const prefixe = lang === 'en' ? 'en/nutriscope/#' : 'nutriscope/#';
        const liens = Array.from(page.querySelectorAll<HTMLAnchorElement>(`nav[aria-label] a[href^="${prefixe}"]`));
        expect(liens.map((a) => a.getAttribute('href'))).withContext(lang).toEqual(SECTIONS.map((id) => prefixe + id));
        for (const lien of liens) {
          const href = lien.getAttribute('href')!;
          expect(page.querySelector(`#${href.split('#')[1]}`)).withContext(href).not.toBeNull();
        }
      }
    });

    it("le retour mène à la section NutriScope de l'accueil, dans la langue de la page", async () => {
      const retour = () => Array.from(page.querySelectorAll<HTMLAnchorElement>('main a')).filter((a) => a.getAttribute('href')?.endsWith('#nutriscope'));
      expect(retour().map((a) => a.getAttribute('href'))).toEqual(['#nutriscope', '#nutriscope']);
      await afficher('en', 'nutriscope');
      expect(retour().map((a) => a.getAttribute('href'))).toEqual(['en/#nutriscope', 'en/#nutriscope']);
    });

    it("le sélecteur de langue reste sur l'étude de cas", async () => {
      const cibles = () => Array.from(page.querySelectorAll<HTMLAnchorElement>('.join a[hreflang]')).map((a) => [a.getAttribute('hreflang'), a.getAttribute('href')]);
      expect(cibles()).toEqual([
        ['fr', 'nutriscope/'],
        ['en', 'en/nutriscope/'],
      ]);
      await afficher('en', 'nutriscope');
      expect(cibles()).toEqual([
        ['fr', 'nutriscope/'],
        ['en', 'en/nutriscope/'],
      ]);
    });

    it('les nombres suivent la langue', async () => {
      expect(espaces(page.querySelector('#donnees')?.textContent)).toContain('1 294 426');
      expect(espaces(page.querySelector('#donnees')?.textContent)).toContain('4 636 471');
      expect(espaces(page.querySelector('#resultats')?.textContent)).toContain('29,3 %');
      await afficher('en', 'nutriscope');
      expect(page.querySelector('#donnees')?.textContent).toContain('1,294,426');
      expect(page.querySelector('#resultats')?.textContent).toContain('29.3%');
      expect(document.documentElement.lang).toBe('en');
    });

    it('chaque tableau a des en-têtes de colonne et des en-têtes de ligne', () => {
      const tableaux = Array.from(page.querySelectorAll('table'));
      expect(tableaux.length).toBe(6);
      for (const tableau of tableaux) {
        expect(tableau.querySelectorAll('thead th[scope="col"]').length).toBeGreaterThan(0);
        expect(tableau.querySelectorAll('tbody th[scope="row"]').length).toBe(tableau.querySelectorAll('tbody tr').length);
      }
    });

    it('les zones qui défilent sont accessibles au clavier et nommées', () => {
      for (const zone of Array.from(page.querySelectorAll('main .overflow-x-auto, main .mockup-code'))) {
        expect(zone.getAttribute('tabindex')).withContext(zone.className).toBe('0');
      }
      for (const zone of Array.from(page.querySelectorAll('main .overflow-x-auto'))) {
        expect(zone.getAttribute('role')).toBe('region');
        expect(zone.getAttribute('aria-label')).toBeTruthy();
      }
    });

    it("crédite Open Food Facts et lie le dépôt, en ouvrant un nouvel onglet sans fuite de référent", () => {
      expect(page.querySelector('#suite')?.textContent).toContain('Open Food Facts');
      const depot = page.querySelector<HTMLAnchorElement>('#suite a[target="_blank"]')!;
      expect(depot.getAttribute('href')).toContain('github.com');
      expect(depot.getAttribute('rel')).toContain('noopener');
    });
  });

  describe('étude de cas KeepSous', () => {
    beforeEach(async () => afficher('fr', 'keepsous'));

    it("affiche l'étude, sans l'accueil", () => {
      expect(page.querySelector('app-etude-keepsous')).not.toBeNull();
      expect(page.querySelector('app-accueil')).toBeNull();
      expect(page.querySelector('#contact')).not.toBeNull();
    });

    it('a un seul h1, un seul main et un h2 par section, sans h4', () => {
      expect(page.querySelectorAll('h1').length).toBe(1);
      expect(page.querySelectorAll('main').length).toBe(1);
      for (const id of SECTIONS_KEEPSOUS) {
        expect(page.querySelectorAll(`#${id} h2`).length).withContext(`#${id}`).toBe(1);
      }
      expect(page.querySelectorAll('h4').length).toBe(0);
    });

    it('le sommaire a une cible pour chaque entrée, dans les deux langues', async () => {
      for (const lang of ['fr', 'en'] as const) {
        await afficher(lang, 'keepsous');
        const prefixe = lang === 'en' ? 'en/keepsous/#' : 'keepsous/#';
        const liens = Array.from(page.querySelectorAll<HTMLAnchorElement>(`nav[aria-label] a[href^="${prefixe}"]`));
        expect(liens.map((a) => a.getAttribute('href'))).withContext(lang).toEqual(SECTIONS_KEEPSOUS.map((id) => prefixe + id));
        for (const lien of liens) {
          expect(page.querySelector(`#${lien.getAttribute('href')!.split('#')[1]}`)).withContext(lang).not.toBeNull();
        }
      }
    });

    it('chaque tableau a des en-têtes de colonne et de ligne', () => {
      const tableaux = Array.from(page.querySelectorAll('table'));
      expect(tableaux.length).toBe(4);
      for (const tableau of tableaux) {
        expect(tableau.querySelectorAll('thead th[scope="col"]').length).toBeGreaterThan(0);
        expect(tableau.querySelectorAll('tbody th[scope="row"]').length).toBe(tableau.querySelectorAll('tbody tr').length);
      }
    });

    it('les zones qui défilent sont accessibles au clavier et nommées', () => {
      for (const zone of Array.from(page.querySelectorAll('main .overflow-x-auto, main .mockup-code'))) {
        expect(zone.getAttribute('tabindex')).withContext(zone.className).toBe('0');
      }
      for (const zone of Array.from(page.querySelectorAll('main .overflow-x-auto'))) {
        expect(zone.getAttribute('role')).toBe('region');
        expect(zone.getAttribute('aria-label')).toBeTruthy();
      }
    });

    it('le sélecteur de langue reste sur la page KeepSous', async () => {
      const cibles = () => Array.from(page.querySelectorAll<HTMLAnchorElement>('.join a[hreflang]')).map((a) => [a.getAttribute('hreflang'), a.getAttribute('href')]);
      expect(cibles()).toEqual([['fr', 'keepsous/'], ['en', 'en/keepsous/']]);
      await afficher('en', 'keepsous');
      expect(cibles()).toEqual([['fr', 'keepsous/'], ['en', 'en/keepsous/']]);
    });

    it('le code est privé : aucun lien externe ni nouvel onglet, aucune image cassée', () => {
      expect(page.querySelector('main a[target]')).toBeNull();
      expect(page.querySelector('main a[href^="http"]')).toBeNull();
      expect(page.querySelectorAll('main img').length).toBe(0); // aucune capture publiée pour l'instant
    });

    it('les montants suivent la langue', async () => {
      const espaces = (t: string | null | undefined) => (t ?? '').replace(/\s/g, ' ');
      expect(espaces(page.querySelector('#imprevus')?.textContent)).toContain('5,84 €');
      await afficher('en', 'keepsous');
      expect(page.querySelector('#imprevus')?.textContent).toContain('€5.84');
      expect(page.querySelector('#imprevus')?.textContent).toContain('€300.00');
    });
  });
});
