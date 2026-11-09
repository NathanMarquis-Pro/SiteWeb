import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { LANGUE_INITIALE } from './i18n/language.service';
import { Langue } from './i18n/translations';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let page: HTMLElement;

  async function afficher(lang?: Langue) {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), ...(lang ? [{ provide: LANGUE_INITIALE, useValue: lang }] : [])],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    page = fixture.nativeElement as HTMLElement;
  }

  beforeEach(async () => {
    localStorage.removeItem('langue');
    await afficher();
  });

  afterEach(() => localStorage.removeItem('langue'));

  it('affiche toutes les sections', () => {
    const ids = ['haut', 'nutriscope', 'imsa', 'methode', 'projets', 'parcours', 'competences', 'hors-code', 'contact'];
    for (const id of ids) {
      expect(page.querySelector(`#${id}`)).withContext(`section #${id}`).not.toBeNull();
    }
  });

  it('a un seul h1', () => {
    expect(page.querySelectorAll('h1').length).toBe(1);
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
