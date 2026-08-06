export type Project = {
  id: number;
  title: string;
  image: string;
  link?: string;
  github?: string;
  npm?: string;
  category: 'personal' | 'professional';
  description: string;
};
