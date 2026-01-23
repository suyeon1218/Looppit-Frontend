import { useState } from 'react';

import { OnboardingStep } from './onboarding.types';

export function useOnboardingStep() {
  const [step, setStep] = useState<OnboardingStep>('nicknameStep');

  const onNextStep = () => {
    if (step === 'nicknameStep') {
      setStep('profileImageStep');
    } else if (step === 'profileImageStep') {
      setStep('completedStep');
    }
  };

  const onPreviousStep = () => {
    if (step === 'profileImageStep') {
      setStep('nicknameStep');
    } else if (step === 'completedStep') {
      setStep('profileImageStep');
    }
  };

  return { step, onNextStep, onPreviousStep };
}
