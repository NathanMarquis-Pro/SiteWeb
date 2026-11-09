/*
 * Redirection de langue depuis une page française, exécutée dans <head> avant le premier rendu
 * (aucun flash). `/` et `/nutriscope/` sont les pages françaises, `/en/` et `/en/nutriscope/` les
 * pages anglaises, toutes pré-rendues.
 *
 * On redirige vers la page anglaise correspondante seulement si :
 *  - on est sur une page française (jamais sur `/en/…` : un lien partagé vers `/en/` reste en anglais) ;
 *  - le visiteur n'est pas un robot (les robots indexent `/` en français, `/en/` par hreflang) ;
 *  - son choix mémorisé (boutons FR / EN) est « en », ou, sans choix, `navigator.language` n'est pas français.
 *
 * Ce fichier doit rester du JavaScript classique (pas de module) : il est bloquant et minuscule.
 */
(function () {
  'use strict';

  var CLE = 'langue';
  var ROBOTS = /bot|crawl|spider|slurp|facebookexternalhit|linkedin|embedly/i;

  /** Langue à servir : 'fr' ou 'en'. */
  function langueCible(stockee, navigateur, agent) {
    if (ROBOTS.test(agent || '')) return 'fr';
    if (stockee === 'fr' || stockee === 'en') return stockee;
    if (!navigateur) return 'fr';
    return /^fr([-_]|$)/i.test(navigateur) ? 'fr' : 'en';
  }

  /** Chemin de la page anglaise si `pathname` est une page française (accueil ou étude de cas), sinon null. */
  function cheminRedirection(pathname, base, search, hash) {
    var suffixe = (search || '') + (hash || '');
    if (pathname === base || pathname === base + 'index.html') return base + 'en/' + suffixe;
    var relatif = pathname.indexOf(base) === 0 ? pathname.slice(base.length) : '';
    if (/^nutriscope(\/(index\.html)?)?$/.test(relatif)) return base + 'en/nutriscope/' + suffixe;
    return null;
  }

  window.NMLangue = { langueCible: langueCible, cheminRedirection: cheminRedirection };

  try {
    var base = new URL(document.baseURI).pathname;
    var cible = cheminRedirection(location.pathname, base, location.search, location.hash);
    if (!cible) return;
    var stockee = null;
    try {
      stockee = localStorage.getItem(CLE);
    } catch (e) {
      // stockage indisponible : on se fie à la langue du navigateur
    }
    if (langueCible(stockee, navigator.language, navigator.userAgent) === 'en') {
      location.replace(cible);
    }
  } catch (e) {
    // en cas de doute, on reste sur la page française
  }
})();
