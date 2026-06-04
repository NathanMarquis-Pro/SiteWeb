import { Injectable } from '@angular/core';
import { Project } from './project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsData: Project[] = [
    {
      title: 'SAE 1.05 - 1.06 : Ubivoit',
      description: "Site Web fictivement créé pour une entreprise afin de réduire les coûts et l'empreinte carbone des déplacements des employés. Elle regroupe des solutions durables pour les trajets domicile-travail. Il a été fait entièrement en HTML et CSS.",
      icon: 'assets/projets/img_1.05.png',
      link: 'https://github.com/NathanMarquis-Pro/Ubivoit',
      tags: ['HTML', 'CSS', 'Site web', 'Durabilité']
    },
    {
      title: 'SAE 2.04 : Parcoursup',
      description: "Mise en place d'une base de donnée pour toutes les données de Parcoursup. Ces données sont importés du site officiel de Parcoursup, filtrées puis triées grâce à un script réutilisable en SQL. Elles sont stockées dans une base de donnée Postgres.",
      icon: 'assets/projets/img_2.04.png',
      link: 'https://github.com/NathanMarquis-Pro/ParcoursupDatabase',
      tags: ['SQL', 'PostgreSQL', 'Base de données', 'Import de données']
    },
    {
      title: 'SAE 3.01 : Catacombes',
      description: "Jeu-vidéo conçu en utilisant la méthode agile. C'est un rogue-like tour par tour où le personnage principal se trouve dans une pyramide, et doit aller le plus loin possible sans mourir. Il a été réalisé exclusivement en java, et utilise des fichiers CSV pour la persistance des données. Ce projet s'est terminé en trois jours de travail.",
      icon: 'assets/projets/img_3.01.png',
      link: 'https://github.com/NathanMarquis-Pro/Catacombes',
      tags: ['Java', 'CSV', 'Jeu vidéo', 'Rogue-like', 'Agile']
    },
    {
      title: 'SAE 2.01 : FlyingDustries',
      description: "FlyingDustries est une application de recherche du meilleur itinéraire parmi une liste de chemins donnés dans des fichiers CSV. Elle a été conçu en Java et utilise JavaFX pour l'interface graphique.",
      icon: 'assets/projets/img_2.01.png',
      link: 'https://github.com/NathanMarquis-Pro/FlyingDustries',
      tags: ['Java', 'JavaFX', 'CSV', 'Itinéraire', 'Algorithme']
    },
    {
      title: 'SAE 3.02 : K_Finds',
      description: "Cette application permet de charger, classer et afficher des données dans un nuage de points. Elle permet également de classifier une nouvelle donnée qu'on ajoute par rapport au jeu de données existant. ELle a été conçu en Java, utilisant JavaFX pour l'IHM.",
      icon: 'assets/projets/img_3.02.png',
      link: 'https://github.com/NathanMarquis-Pro/K_Finds',
      tags: ['Java', 'JavaFX', 'Classification', 'Visualisation', 'Nuage de points']
    },
    {
      title: 'SAE 4.01 : UniVerseLille',
      description: "Ce projet consiste en la conception d'une application de messagerie instantanée pour les étudiants et le personnel de l'Université de Lille. Elle a été développé en Java, avec toutes les dépendances permettant de faire un serveur web (JEE, JSP, JDBC). Le déploiement s'est fait sur un serveur Tomcat, et un serveur PostgresSQL pour la base de donnée.",
      icon: 'assets/projets/img_4.01.png',
      link: 'https://github.com/NathanMarquis-Pro/UniVerseLille',
      tags: ['Java', 'JEE', 'JSP', 'JDBC', 'Tomcat', 'PostgreSQL', 'Messagerie']
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projectsData;
  }
}
