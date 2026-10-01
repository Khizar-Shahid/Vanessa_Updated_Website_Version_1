import insightsData from '@/content/insights.json';

/**
 * Insights shown on the site. Set "hidden": true on an entry in
 * content/insights.json to take it offline (its page, cards, and sitemap
 * entry all disappear); delete the flag to bring it back.
 */
export const publishedInsights = insightsData.filter(
  (item) => !(item as { hidden?: boolean }).hidden,
);
