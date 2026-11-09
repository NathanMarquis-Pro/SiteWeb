import { Translations } from './translations';

export const fr: Translations = {
  meta: {
    titre: 'Nathan Marquis · Développeur IA',
    poste: 'Développeur IA',
    description:
      'Développeur IA en formation (RNCP 6, mars 2027). NutriScope, nettoyage de données, tests automatisés. Stage dès janvier 2027, CDI dès mars, Lille.',
  },
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
    stats: {
      doublons: { titre: 'Doublons', desc: 'même code-barres' },
      inclassables: { titre: 'Inclassables', desc: 'ni catégorie, ni rayon' },
      vides: { titre: 'Vides', desc: 'aucun nutriment' },
    },
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
  methode: {
    titre: 'Comment je travaille',
    intro: 'Trois habitudes prises en BUT, en stage et en formation, que je garde sur chaque projet.',
    habitudes: {
      verifier: {
        titre: 'Je vérifie avant de croire.',
        texte:
          "On lit partout que la préparation des données compte plus que l'algorithme. Je l'ai testé sur un TP : c'est plus nuancé, ça dépend du modèle.",
        lien: 'Voir le TP Wine Quality',
      },
      relancer: {
        titre: "Je fais des choses qu'on peut relancer.",
        texte:
          "Mon script Parcoursup télécharge les données officielles, vérifie le fichier, crée la base et nettoie derrière lui. Un seul lancement, le même résultat à chaque fois.",
        lien: 'Voir le projet',
      },
      transmettre: {
        titre: "J'écris pour la personne qui reprendra mon code.",
        texte:
          "Des outils de test pensés pour toute l'équipe chez iMSA, un compte rendu automatique pour chaque règle de nettoyage dans NutriScope.",
        lien: 'Voir le stage',
      },
    },
  },
  projets: {
    titre: 'Autres projets',
    moyenne: 'Moyenne',
    xgboost: 'XGBoost',
    liste: {
      wine: {
        surtitre: 'TP de formation · oct. 2026',
        description: "Prédire la note d'un vin, et mesurer ce qui fait vraiment baisser l'erreur moyenne.",
      },
      parcoursup: {
        surtitre: 'BUT · SAE 2.04',
        description:
          'Un script SQL qui télécharge les 13 870 formations Parcoursup, vérifie le fichier, puis les range dans une base PostgreSQL propre.',
      },
      kfinds: {
        surtitre: 'BUT · SAE 3.02',
        description:
          "Charger un jeu de données, l'afficher en nuage de points et classer une nouvelle donnée d'après ses voisines.",
      },
      universelille: {
        surtitre: 'BUT · SAE 4.01',
        description:
          "Une messagerie instantanée pour les étudiants et le personnel de l'Université de Lille, déployée sur Tomcat.",
      },
    },
  },
  parcours: {
    titre: 'Parcours',
    items: {
      bac: {
        date: '2020 → 2023',
        titre: 'Bac STI2D, spécialité SIN · mention Très Bien',
        detail: 'Lycée Elisa Lemonnier (ex-Edmond Labbé), Douai',
        lien: 'Voir la formation',
      },
      dut: {
        date: '2023 → 2025',
        titre: 'DUT Informatique (2 années de BUT)',
        detail: "IUT de Lille, Villeneuve-d'Ascq · parcours Réalisation d'applications",
        lien: 'Voir la formation',
      },
      imsa: {
        date: 'Avril → juin 2025 · 10 semaines',
        titre: 'Stage développeur full stack, iMSA (Avelin)',
        detail: 'Angular, Spring Boot, Playwright · organisation SAFe',
        lien: '48 tests',
      },
      m2i: {
        date: 'Juillet 2026 → mars 2027 · en cours',
        titre: 'Titre professionnel Développeur IA (RNCP niveau 6)',
        detail: 'M2i · données, Machine Learning, Deep Learning, IA générative, déploiement, RGPD',
        lien: 'NutriScope',
      },
    },
  },
  competences: {
    titre: "Ce que j'utilise",
    legendePleine: 'Compétence acquise',
    legendeVide: 'Apprentissage en cours',
    enCoursSr: "(en cours d'apprentissage)",
    groupes: {
      ia: 'IA et données',
      qualite: 'Qualité et outillage',
      web: 'Développement web',
      langues: 'Langues',
    },
    langues: 'Français · Anglais courant (TOEIC 900/990)',
  },
  horsCode: {
    titre: 'Hors du code',
    texte:
      "Je fais beaucoup de sport. Le dernier défi en date : un trail de 16 km et 300 m de dénivelé sur les terrils de Raismes, après un triathlon en début d'année. Avant ça, il y a eu 7 ans de tennis, de l'escalade, du basket, du foot, et toujours un peu de piscine.",
  },
  footer: {
    titre: 'Travaillons ensemble.',
    texte:
      "Je cherche un stage du 18 janvier au 26 février 2027, puis un CDI à partir de mars. J'habite à Flines-lez-Raches : métropole lilloise, Douaisis, hybride ou à distance.",
    basDePage: '© 2026 Nathan Marquis · site fait avec Angular et DaisyUI',
  },
};
