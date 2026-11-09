import { GroupeCompetencesId, Langue } from '../../i18n/translations';

/** Un nom de compétence : identique dans les deux langues, ou traduit. */
export type NomCompetence = string | Record<Langue, string>;

export interface GroupeCompetences {
  id: GroupeCompetencesId;
  acquises: NomCompetence[];
  enCours: NomCompetence[];
}

export const GROUPES_COMPETENCES: GroupeCompetences[] = [
  {
    id: 'ia',
    acquises: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SQL', 'PostgreSQL', 'DuckDB', 'Parquet'],
    enCours: ['TensorFlow / Keras', { fr: 'LLM et RAG', en: 'LLMs and RAG' }],
  },
  {
    id: 'qualite',
    acquises: ['Playwright', 'Pytest', 'Git · GitLab · GitHub', 'Jira', 'Linux · Bash'],
    enCours: ['FastAPI', 'Docker', 'CI/CD'],
  },
  {
    id: 'web',
    acquises: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'JEE'],
    enCours: [],
  },
];
