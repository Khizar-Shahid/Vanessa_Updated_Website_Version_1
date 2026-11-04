import React from 'react';
import LocationLandingContent from '@/components/locations/LocationLandingContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therapist in Miami, FL | Thrive with Therapy',
  description:
    'Find compassionate therapy in Miami, FL at Thrive with Therapy. Explore personalized mental health support, couples therapy, trauma therapy, and more.',
  alternates: {
    canonical: '/therapist-miami-fl',
  },
};

export default function MiamiPage() {
  return <LocationLandingContent location="miami" />;
}