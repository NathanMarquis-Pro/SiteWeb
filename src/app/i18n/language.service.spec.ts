import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LIENS, SITE_URL } from '../shared/liens';
import { LANGUE_INITIALE, LanguageService, langueDepuisChemin } from './language.service';
import { Langue } from './translations';

function creer(lang?: Langue): LanguageService {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({
    providers: [provideZonelessChangeDetection(), ...(lang ? [{ provide: LANGUE_INITIALE, useValue: lang }] : [])],
  });
  const service = TestBed.inject(LanguageService);
  TestBed.tick();
  return service;
}

const attr = (selecteur: string, nom: string) => document.head.querySelector(selecteur)?.getAttribute(nom);

describe('LanguageService', () => {
  beforeEach(() => localStorage.removeItem('langue'));

  it("utilise le français quand l'URL n'est pas /en", () => {
    const s = creer();
    expect(s.lang()).toBe('fr');
    expect(s.t().meta.titre).toBe('Nathan Marquis · Développeur IA');
  });

  it('anglais : titre, attribut lang, document.title et meta description', () => {
    const s = creer('en');
    expect(s.t().meta.titre).toBe('Nathan Marquis · AI Developer');
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe('Nathan Marquis · AI Developer');
    expect(attr('meta[name="description"]', 'content')).toContain('Trainee AI developer');
    expect(attr('meta[property="og:title"]', 'content')).toBe('Nathan Marquis · AI Developer');
    expect(attr('meta[property="og:description"]', 'content')).toContain('Trainee AI developer');
  });

  it('canonical, og:url et og:locale suivent la langue', () => {
    creer('fr');
    expect(attr('link[rel="canonical"]', 'href')).toBe(SITE_URL);
    expect(attr('meta[property="og:url"]', 'content')).toBe(SITE_URL);
    expect(attr('meta[property="og:locale"]', 'content')).toBe('fr_FR');
    creer('en');
    expect(attr('link[rel="canonical"]', 'href')).toBe(`${SITE_URL}en/`);
    expect(attr('meta[property="og:url"]', 'content')).toBe(`${SITE_URL}en/`);
    expect(attr('meta[property="og:locale"]', 'content')).toBe('en_US');
    expect(attr('meta[property="og:locale:alternate"]', 'content')).toBe('fr_FR');
  });

  it('déclare hreflang fr, en et x-default sur les deux langues, sans doublon', () => {
    creer('fr');
    creer('en');
    expect(attr('link[rel="alternate"][hreflang="fr"]', 'href')).toBe(SITE_URL);
    expect(attr('link[rel="alternate"][hreflang="en"]', 'href')).toBe(`${SITE_URL}en/`);
    expect(attr('link[rel="alternate"][hreflang="x-default"]', 'href')).toBe(SITE_URL);
    expect(document.head.querySelectorAll('link[rel="alternate"]').length).toBe(3);
    expect(document.head.querySelectorAll('link[rel="canonical"]').length).toBe(1);
  });

  it("l'image Open Graph est une URL absolue", () => {
    creer('fr');
    expect(attr('meta[property="og:image"]', 'content')).toBe(`${SITE_URL}assets/og-image.jpg`);
  });

  it('JSON-LD Person : faits du dépôt uniquement, dans la langue', () => {
    creer('en');
    const bloc = document.head.querySelectorAll('script[type="application/ld+json"]');
    expect(bloc.length).toBe(1);
    const p = JSON.parse(bloc[0].textContent!);
    expect(p['@type']).toBe('Person');
    expect(p.name).toBe('Nathan Marquis');
    expect(p.jobTitle).toBe('AI Developer');
    expect(p.url).toBe(`${SITE_URL}en/`);
    expect(p.image).toBe(SITE_URL + LIENS.photo);
    expect(p.sameAs).toEqual([LIENS.linkedin, LIENS.github]);
    expect(p.knowsAbout).toContain('Python');
    expect(p.knowsAbout).toContain('GitLab');
    expect(p.knowsAbout).not.toContain('FastAPI'); // compétence « en cours », pas acquise
    expect(JSON.stringify(p)).not.toContain(LIENS.email);
    creer('fr');
    expect(JSON.parse(document.head.querySelector('script[type="application/ld+json"]')!.textContent!).jobTitle).toBe('Développeur IA');
  });

  it('formate les nombres selon la langue', () => {
    const fr = creer('fr');
    expect(fr.nombre(1294426).replace(/\s/g, ' ')).toBe('1 294 426');
    expect(fr.nombre(0.4, 3)).toBe('0,400');
    const en = creer('en');
    expect(en.nombre(1294426)).toBe('1,294,426');
    expect(en.nombre(0.4, 3)).toBe('0.400');
  });

  it('lien() préfixe les ancres en anglais seulement', () => {
    const fr = creer('fr');
    expect(fr.lien('#imsa')).toBe('#imsa');
    const en = creer('en');
    expect(en.lien('#imsa')).toBe('en/#imsa');
    expect(en.lien('https://github.com/x')).toBe('https://github.com/x');
    expect(en.lienLangue('fr')).toBe('./');
    expect(en.lienLangue('en')).toBe('en/');
  });

  it("memoriser() écrit le choix, sans changer la langue de l'URL", () => {
    const s = creer('en');
    s.memoriser('fr');
    expect(localStorage.getItem('langue')).toBe('fr');
    expect(s.lang()).toBe('en');
  });

  it("déduit la langue de l'URL, avec ou sans préfixe de base", () => {
    for (const [chemin, attendu] of [
      ['/', 'fr'],
      ['/SiteWeb/', 'fr'],
      ['/en', 'en'],
      ['/en/', 'en'],
      ['/SiteWeb/en', 'en'],
      ['/SiteWeb/en/', 'en'],
      ['/SiteWeb/entreprise', 'fr'],
      ['/context.html', 'fr'],
    ] as const) {
      expect(langueDepuisChemin(chemin)).withContext(chemin).toBe(attendu);
    }
  });
});
