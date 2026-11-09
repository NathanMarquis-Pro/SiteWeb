/*
 * Redirection de langue depuis la racine du site, exécutée dans <head> avant le premier rendu
 * (aucun flash). `/` est la page française et `/en/` la page anglaise, toutes deux pré-rendues.
 *
 * On redirige vers `/en/` seulement si :
 *  - on est sur la racine (jamais sur `/en/` : un lien partagé vers `/en/` reste en anglais) ;
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

  /** Chemin de la page anglaise si `pathname` est la racine du site, sinon null. */
  function cheminRedirection(pathname, base, search, hash) {
    var racine = pathname === base || pathname === base + 'index.html';
    return racine ? base + 'en/' + (search || '') + (hash || '') : null;
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
