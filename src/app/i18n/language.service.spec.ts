import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  beforeEach(() => {
    localStorage.removeItem('langue');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
  });

  it('utilise le français par défaut', () => {
    const s = TestBed.inject(LanguageService);
    expect(s.lang()).toBe('fr');
    expect(s.t().meta.titre).toBe('Nathan Marquis · Développeur IA');
  });

  it('bascule en anglais : titre, attribut lang et document.title', () => {
    const s = TestBed.inject(LanguageService);
    s.setLang('en');
    TestBed.tick();
    expect(s.t().meta.titre).toBe('Nathan Marquis · AI Developer');
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe('Nathan Marquis · AI Developer');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain('Trainee AI developer');
  });

  it('formate les nombres selon la langue', () => {
    const s = TestBed.inject(LanguageService);
    expect(s.nombre(1294426).replace(/\s/g, ' ')).toBe('1 294 426');
    expect(s.nombre(0.4, 3)).toBe('0,400');
    s.setLang('en');
    expect(s.nombre(1294426)).toBe('1,294,426');
    expect(s.nombre(0.4, 3)).toBe('0.400');
  });

  it('relit la langue stockée', () => {
    TestBed.inject(LanguageService).setLang('en');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    expect(TestBed.inject(LanguageService).lang()).toBe('en');
  });
});
