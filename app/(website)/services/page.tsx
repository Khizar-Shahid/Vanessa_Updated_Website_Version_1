import React from 'react';
import LocationLandingContent from '@/components/locations/LocationLandingContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therapy Services in Coral Gables, FL | Thrive with Therapy',
  description:
    'Explore therapy services in Coral Gables, FL, including individual therapy, trauma therapy, couples therapy, and parenting support.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <LocationLandingContent location="coral-gables" />;
}