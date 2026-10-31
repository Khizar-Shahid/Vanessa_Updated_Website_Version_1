export interface BlogItem {
  id: string;
  slug: string;
  type: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  posterUrl: string | null;
}
