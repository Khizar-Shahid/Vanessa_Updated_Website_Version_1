export interface PodcastEpisode {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  topics: string[];
}

export interface PodcastChannel {
  title: string;
  handle: string;
  url: string;
  subscribeUrl: string;
  description: string;
}

export const EASE = [0.2, 0.8, 0.3, 1] as const;
