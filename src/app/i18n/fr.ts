import { Translations } from './translations';

export const fr: Translations = {
  meta: { titre: 'Nathan Marquis · Développeur IA' },
  nav: {
    nutriscope: 'NutriScope',
    imsa: 'Stage iMSA',
    projets: 'Projets',
    parcours: 'Parcours',
    contact: 'Me contacter',
    langue: 'Langue',
    ouvrirMenu: 'Ouvrir le menu',
  },
  hero: {
    dispo: 'Disponible : stage du 18 janvier au 26 février 2027, puis CDI dès mars',
    identite: 'Nathan Marquis, développeur IA',
    titre1: 'Vos données,',
    titre2: 'mes futures missions',
    paragraphe1:
      "Je veux être développeur depuis le collège et mes premiers scripts sur Scratch. Aujourd'hui, je me forme au développement IA chez M2i (titre RNCP niveau 6, en mars 2027).",
    paragraphe2:
      "Tout le monde dit que l'IA va remplacer le travail. J'ai préféré aller vérifier par moi-même, et apprendre à m'en servir.",
    bouton1: 'Voir mon projet en cours',
    bouton2: 'Télécharger mon CV',
    legendePhoto: 'À Flines-lez-Raches, près de Lille',
  },
  nutriscope: {
    surtitre: 'Le projet du moment',
    titre: 'NutriScope',
    intro:
      "Avec deux camarades de formation, on construit une application qui dit si un produit alimentaire est bon, et sinon, ce qui est mieux. 216 heures sur 8 mois, sur les vraies données d'Open Food Facts.",
    jalons: [
      { nom: 'Cadrage', date: 'sept. 2026' },
      { nom: 'Base de données', date: 'sept. 2026' },
      { nom: 'Nettoyage', date: 'oct. 2026' },
      { nom: 'Machine Learning' },
      { nom: 'Deep Learning' },
      { nom: 'Assistant RAG' },
      { nom: 'Mise en production' },
    ],
    h3: 'Ma partie : rendre les données utilisables',
    p1: "Au départ, il y avait {depart} produits. À l'arrivée, il en reste {arrivee}. J'ai supprimé plus de la moitié du catalogue, et je peux justifier chaque ligne retirée.",
    p2: "Chacune de mes règles produit son propre compte rendu chiffré. Le rapport de nettoyage se génère tout seul, ce qui permet à toute l'équipe de voir ce qui a changé et pourquoi.",
    p3: "J'ai ensuite découpé les données en fichiers Parquet avec DuckDB et préparé le fichier de features pour les futurs modèles.",
    alerte:
      "Je n'invente pas les nutriments manquants : je les signale. Les compléter maintenant fausserait les modèles, il faudra le faire après le découpage entraînement / test.",
    stats: [
      { titre: 'Doublons', desc: 'même code-barres' },
      { titre: 'Inclassables', desc: 'ni catégorie, ni rayon' },
      { titre: 'Vides', desc: 'aucun nutriment' },
    ],
    legendeAvant: 'Extrait de ',
    legendeApres: ' : chaque colonne reçoit une décision explicite, et une décision inconnue arrête le pipeline.',
    boutonEtude: "Lire l'étude de cas",
    boutonCode: 'Voir le code sur GitHub',
  },
  imsa: {
    surtitre: 'Stage · iMSA, avril à juin 2025',
    titre: "D'un premier test illisible à 48 tests que toute l'équipe peut reprendre",
    p1: "Mon projet principal était d'automatiser les tests d'un service en ligne de la MSA avec Playwright. Un projet de ce genre existait déjà dans l'entreprise, mais quand je l'ai ouvert, je n'y ai absolument rien compris : les autres équipes n'avaient pas les mêmes besoins que nous.",
    p2: "Je suis donc reparti de la documentation. La première fois que mon test est passé au vert, j'étais admiratif : Playwright se déplaçait sur la page et cliquait sur les boutons comme un vrai utilisateur, mais 200 fois plus vite.",
    p3: "C'est là que la vraie réflexion a commencé : rendre ces tests maintenables et faciles à comprendre, parce que j'allais devoir passer la main.",
    badgeAvant: 'Avant',
    badgeApres: 'Après',
    ariaAvant: 'Avant : le test généré, avec les mêmes clics répétés sur chaque page',
    ariaApres: 'Après : une carte des pages et une seule fonction de navigation',
    resultats: [
      { fort: '48', apres: ' tests end-to-end' },
      { fort: '28', apres: ' méthodes réutilisables' },
      { avant: 'Tests de non-régression : ', fort: "d'une journée à 5-10 minutes" },
    ],
  },
};
