export interface NavItem {
  label: string;
  href: string;
}

export interface EducationEntry {
  period: string;
  institution: string;
  program: string;
}

export interface SkillItem {
  name: string;
  note: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  liveUrl: string;
  codeUrl: string;
  featured?: boolean;
}

export interface PlaylistTrack {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

export interface StatusItem {
  emoji: string;
  label: string;
}
