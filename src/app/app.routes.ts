import { Routes } from '@angular/router';
import { AccueilPage } from './pages/accueil/accueil.page';

/**
 * Une route par page et par langue, toutes pré-rendues. Les liens entre pages sont des liens
 * HTML ordinaires (pas de `routerLink`) : chaque page se charge en entier, la langue et le SEO
 * sont donc ceux de l'URL, sans état à synchroniser (voir `i18n/language.service.ts`).
 */
export const routes: Routes = [
  { path: '', component: AccueilPage },
  { path: 'en', component: AccueilPage },
  { path: 'nutriscope', loadComponent: () => import('./pages/etude-nutriscope/etude-nutriscope.page').then((m) => m.EtudeNutriscopePage) },
  { path: 'en/nutriscope', loadComponent: () => import('./pages/etude-nutriscope/etude-nutriscope.page').then((m) => m.EtudeNutriscopePage) },
  { path: 'keepsous', loadComponent: () => import('./pages/etude-keepsous/etude-keepsous.page').then((m) => m.EtudeKeepsousPage) },
  { path: 'en/keepsous', loadComponent: () => import('./pages/etude-keepsous/etude-keepsous.page').then((m) => m.EtudeKeepsousPage) },
  { path: '**', redirectTo: '' },
];
