import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { LanguageService } from './i18n/language.service';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let page: HTMLElement;

  beforeEach(async () => {
    localStorage.removeItem('langue');
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    page = fixture.nativeElement as HTMLElement;
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

  it('a une cible pour chaque lien interne (#ancre)', () => {
    const liens = Array.from(page.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    expect(liens.length).toBeGreaterThan(0);
    for (const lien of liens) {
      const ancre = lien.getAttribute('href')!;
      expect(page.querySelector(ancre)).withContext(`cible de ${ancre}`).not.toBeNull();
    }
  });

  it('passe en anglais : titre, attribut lang et nombres', async () => {
    TestBed.inject(LanguageService).setLang('en');
    await fixture.whenStable();
    TestBed.tick();
    expect(page.querySelector('h1')?.textContent).toContain('Your data');
    expect(document.documentElement.lang).toBe('en');
    expect(page.querySelector('#nutriscope')?.textContent).toContain('1,294,426');
  });
});
