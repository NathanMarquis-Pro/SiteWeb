import { Routes } from '@angular/router';

/**
 * Une route par langue pré-rendue. Aucune n'a de composant : `App` affiche la même page,
 * la langue est déduite de l'URL par `LANGUE_INITIALE` (voir `i18n/language.service.ts`).
 */
export const routes: Routes = [
  { path: '', children: [] },
  { path: 'en', children: [] },
];
