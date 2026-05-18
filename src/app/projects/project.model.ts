export interface Project {
  id: string; // Could be a slug or unique name
  title: string;
  description: string;
  icon: string; // Icon class for the project (e.g., "ti-layout-dashboard")
  link: string; // External link to GitHub, etc.
  tags: string[]; // List of tags for the project
}