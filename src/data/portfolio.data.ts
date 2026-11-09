import { Education } from '../app/education/education.model';
import { Experience } from '../app/experiences/experience.model';
import { Project } from '../app/projects/project.model';
import { Skill } from '../app/skills/skill.model';

/**
 * ============================================================
 *  FICHIER UNIQUE DES DONNÉES DU PORTFOLIO
 *  Tout le contenu du site se modifie ici : infos perso,
 *  formations, expériences, projets et compétences.
 *  Les erreurs de structure sont détectées au build (typage).
 * ============================================================
 */

export interface ContactLink {
  label: string;
  url: string;
  icon: string; // classe Tabler Icons
  external: boolean; // true = ouvre dans un nouvel onglet
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string; // pastille au-dessus du titre du hero
  heroTitle: { main: string; emphasis: string };
  tagline: string;
  cvPath: string;
  cvDownloadName: string;
  stackBadges: string[];
  about: { paragraphs: string[]; stats: Stat[] };
  contactTitle: string;
  contacts: ContactLink[];
  copyright: string;
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}

export const PORTFOLIO: PortfolioData = {
  // ---------------------------------------------------------
  // Infos personnelles (header, hero, à propos, contact)
  // ---------------------------------------------------------
  profile: {
    name: 'Nathan Marquis',
    title: 'Développeur Fullstack',
    heroTitle: { main: 'Vos projets,', emphasis: 'mes futures missions' },
    tagline: 'Allier robustesse et simplicité — rien de tel pour un projet réussi.',
    cvPath: 'assets/CV_Nathan_Marquis.pdf',
    cvDownloadName: 'CV Nathan Marquis',
    stackBadges: ['Angular', 'Spring Boot', 'Java', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API'],
    about: {
      // Les paragraphes sont affichés les uns à la suite des autres.
      paragraphs: [
        "Titulaire d'un DUT Informatique (2026), j'ai consolidé mes bases en algorithmique, bases de données et développement web avant de me spécialiser en fullstack Java/TypeScript.",
        "Mon stage de 10 semaines chez iMSA m'a donné mes premiers repères en environnement professionnel — livraison, code review, travail en équipe.",
        "Aujourd'hui je cherche à continuer sur cette lancée, dans une structure où je peux apprendre vite et contribuer concrètement."
      ],
      stats: [
        { value: '6+', label: 'Projets scolaires et personnels aboutis' },
        { value: '10 semaines', label: 'En entreprise' },
        { value: 'Stack fullstack Java/JS/TS', label: '' }
      ]
    },
    contactTitle: 'Travaillons ensemble.',
    contacts: [
      { label: 'GitHub', url: 'https://github.com/NathanMarquis-Pro', icon: 'ti ti-brand-github', external: true },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nathan-marquis-43a516264', icon: 'ti ti-brand-linkedin', external: true },
      { label: 'Email', url: 'mailto:nathan.marquis.etu@univ-lille.fr', icon: 'ti ti-mail', external: false }
    ],
    copyright: "Cette page est protégée par les droits d'auteur"
  },

  // ---------------------------------------------------------
  // Formations
  // ---------------------------------------------------------
  education: [
    {
      period: '2023 - 2025',
      degree: "DUT Informatique - Parcours A : réalisation d'applications",
      school: "IUT de Lille - Villeneuve-d'Ascq",
      schoolLogo: 'assets/education/logo_iut_lille_coupe.png',
      description: "Le parcours A, réalisation d'applications : conception, développement, validation permet d'apprendre les compétences techniques et méthodologiques utiles à un développeur comme l'algorithmique, les bases de données, le développement web et la gestion de projets. Stage de 10 semaines en entreprise.",
      link: 'https://www.univ-lille.fr/formations/fr-00082372',
      tags: ['Algorithmique', 'Réseaux', 'Bases de données', 'Développement web', 'Gestion de projet', 'Documentation technique', 'Tests unitaires']
    },
    {
      period: '2020 - 2023',
      degree: 'Baccalauréat technologique STI2D en spécialisation SIN',
      school: 'Lycée Elisa Lemonnier - Douai',
      schoolLogo: 'assets/education/logo_Elisa_Lemonnier.png',
      description: "Obtenu avec mention, le Baccalauréat technologique STI2D est construit autour de l'innovation technologique et des sciences. La spécialisation SIN est orientée vers les systèmes d'information et numériques, couvrant des domaines tels que les réseaux, la programmation, l'électronique et les systèmes embarqués.",
      link: 'https://www.lycee-elisalemonnier.fr/site/nos-formations/',
      tags: ['Mention TB', 'Réseaux', 'Programmation', 'Électronique', 'Systèmes embarqués']
    }
  ],

  // ---------------------------------------------------------
  // Expériences professionnelles
  // ---------------------------------------------------------
  experiences: [
    {
      period: 'Avr. 2026 — Juin 2026 · 10 semaines',
      role: 'Développeur Fullstack',
      company: 'iMSA · Stage',
      companyLogo: 'assets/experiences/imsa.jpg',
      description: "Développement et intégration de nouvelles fonctionnalités sur une application web externe. Mise en place d'une solution de tests automatisés avec Playwright. Participation aux code reviews, travail en méthode agile et livraison en simulations.",
      tags: ['Angular', 'Spring Boot', 'Git', 'Agile', 'TypeScript', 'Java', 'Playwright', 'CI/CD']
    }
  ],

  // ---------------------------------------------------------
  // Projets
  // ---------------------------------------------------------
  projects: [
    {
      title: 'SAE 1.05 - 1.06 : Ubivoit',
      description: "Site Web fictivement créé pour une entreprise afin de réduire les coûts et l'empreinte carbone des déplacements des employés. Elle regroupe des solutions durables pour les trajets domicile-travail. Il a été fait entièrement en HTML et CSS.",
      icon: 'ti ti-leaf',
      link: 'https://github.com/NathanMarquis-Pro/Ubivoit',
      tags: ['HTML', 'CSS', 'Site web', 'Durabilité']
    },
    {
      title: 'SAE 2.04 : Parcoursup',
      description: "Mise en place d'une base de donnée pour toutes les données de Parcoursup. Ces données sont importés du site officiel de Parcoursup, filtrées puis triées grâce à un script réutilisable en SQL. Elles sont stockées dans une base de donnée Postgres.",
      icon: 'ti ti-database',
      link: 'https://github.com/NathanMarquis-Pro/ParcoursupDatabase',
      tags: ['SQL', 'PostgreSQL', 'Base de données', 'Import de données']
    },
    {
      title: 'SAE 3.01 : Catacombes',
      description: "Jeu-vidéo conçu en utilisant la méthode agile. C'est un rogue-like tour par tour où le personnage principal se trouve dans une pyramide, et doit aller le plus loin possible sans mourir. Il a été réalisé exclusivement en java, et utilise des fichiers CSV pour la persistance des données. Ce projet s'est terminé en trois jours de travail.",
      icon: 'ti ti-device-gamepad-2',
      link: 'https://github.com/NathanMarquis-Pro/Catacombes',
      tags: ['Java', 'CSV', 'Jeu vidéo', 'Rogue-like', 'Agile']
    },
    {
      title: 'SAE 2.01 : FlyingDustries',
      description: "FlyingDustries est une application de recherche du meilleur itinéraire parmi une liste de chemins donnés dans des fichiers CSV. Elle a été conçu en Java et utilise JavaFX pour l'interface graphique.",
      icon: 'ti ti-plane',
      link: 'https://github.com/NathanMarquis-Pro/FlyingDustries',
      tags: ['Java', 'JavaFX', 'CSV', 'Itinéraire', 'Algorithme']
    },
    {
      title: 'SAE 3.02 : K_Finds',
      description: "Cette application permet de charger, classer et afficher des données dans un nuage de points. Elle permet également de classifier une nouvelle donnée qu'on ajoute par rapport au jeu de données existant. ELle a été conçu en Java, utilisant JavaFX pour l'IHM.",
      icon: 'ti ti-chart-line',
      link: 'https://github.com/NathanMarquis-Pro/K_Finds',
      tags: ['Java', 'JavaFX', 'Classification', 'Visualisation', 'Nuage de points']
    },
    {
      title: 'SAE 4.01 : UniVerseLille',
      description: "Ce projet consiste en la conception d'une application de messagerie instantanée pour les étudiants et le personnel de l'Université de Lille. Elle a été développé en Java, avec toutes les dépendances permettant de faire un serveur web (JEE, JSP, JDBC). Le déploiement s'est fait sur un serveur Tomcat, et un serveur PostgresSQL pour la base de donnée.",
      icon: 'ti ti-send',
      link: 'https://github.com/NathanMarquis-Pro/UniVerseLille',
      tags: ['Java', 'JEE', 'JSP', 'JDBC', 'Tomcat', 'PostgreSQL', 'Messagerie']
    }
  ],

  // ---------------------------------------------------------
  // Compétences (icons = chemins des logos, [] si aucun logo)
  // ---------------------------------------------------------
  skills: [
    { name: 'Java', icons: ['assets/skills/logo_Java.svg'] },
    { name: 'Git', icons: ['assets/skills/logo_Git.png'] },
    { name: 'GitLab', icons: ['assets/skills/logo_GitLab.png'] },
    { name: 'GitHub', icons: ['assets/skills/logo_GitHub.svg'] },
    { name: 'HTML', icons: ['assets/skills/logo_HTML.png'] },
    { name: 'CSS', icons: ['assets/skills/logo_CSS.png'] },
    { name: 'JavaFX', icons: ['assets/skills/logo_JavaFX.png'] },
    { name: 'Figma', icons: ['assets/skills/logo_Figma.png'] },
    { name: 'PostgreSQL', icons: ['assets/skills/logo_PostgreSQL.png'] },
    { name: 'SQLite', icons: ['assets/skills/logo_SQLite.png'] },
    { name: 'C', icons: ['assets/skills/logo_C.svg'] },
    { name: 'Office', icons: ['assets/skills/logo_Office.png'] },
    { name: 'Markdown', icons: ['assets/skills/logo_Markdown.png'] },
    { name: 'Angular', icons: ['assets/skills/logo_Angular.png'] },
    { name: 'Spring Boot', icons: ['assets/skills/logo_Spring_Boot.png'] },
    { name: 'JavaScript', icons: ['assets/skills/logo_JavaScript.png'] },
    { name: 'TypeScript', icons: ['assets/skills/logo_TypeScript.png'] },
    { name: 'Docker', icons: ['assets/skills/logo_Docker.svg'] },
    { name: 'REST API', icons: [] },
    { name: 'Playwright', icons: ['assets/skills/logo_Playwright.png'] },
    { name: 'CI/CD', icons: [] },
    { name: 'JEE', icons: ['assets/skills/logo_JEE.png'] },
    { name: 'JDBC', icons: ['assets/skills/logo_JDBC.svg'] },
    { name: 'Bash', icons: ['assets/skills/logo_Bash.png'] },
    { name: 'Jira', icons: ['assets/skills/logo_Jira.png'] },
    { name: 'Anglais', icons: ['assets/skills/logo_TOEIC.png'] }
  ]
};
