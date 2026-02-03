'use client';

import { Suspense } from 'react';

import { OnboardingScreen } from '@/domains/onboarding/onboarding-screen';

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <OnboardingScreen />
    </Suspense>
  );
}
