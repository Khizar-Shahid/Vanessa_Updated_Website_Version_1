/**
 * Set NEXT_PUBLIC_SITE_ENV=staging on the client-review Vercel project.
 * Staging builds tell search engines not to index anything, so the review
 * copy never competes with thrivewiththerapy.org. Remove the variable at launch.
 */
export const IS_STAGING = process.env.NEXT_PUBLIC_SITE_ENV === 'staging';
