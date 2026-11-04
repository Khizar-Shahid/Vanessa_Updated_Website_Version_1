import { LOCATION_SLUGS, type LocationSlug } from './locations';
import { SERVICE_SLUGS, type ServiceSlug } from './services';

export function serviceUrl(location: LocationSlug, service: ServiceSlug) {
    return `/services/${service}-${location}`;
}

export function locationUrl(location: LocationSlug) {
    return location === 'miami' ? '/therapist-miami-fl' : '/services';
}

export function parseServiceSlug(
    slug: string,
): { location: LocationSlug; service: ServiceSlug } | null {
    for (const location of LOCATION_SLUGS) {
        for (const service of SERVICE_SLUGS) {
            if (slug === `${service}-${location}`) return { location, service };
        }
    }
    return null;
}