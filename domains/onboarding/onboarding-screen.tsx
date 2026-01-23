import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';

import {
  onboardingFormSchema,
  OnboardingFormValues,
  OnboardingStep,
  OnboardingStepSchema,
} from './onboarding.types';
import {
  OnboardingLayout,
  CompletedStep,
  NicknameStep,
  ProfileStep,
} from './ui';

function OnboardingScreen() {
  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingFormSchema),
    defaultValues: {
      nickname: '',
      profileImage: null,
    },
    mode: 'onChange',
  });
  const [step, setStep] = useState<OnboardingStep>('nicknameStep');

  const handleNextStep = () => {
    if (step === 'nicknameStep') {
      setStep('profileImageStep');
    } else if (step === 'profileImageStep') {
      setStep('completedStep');
    }
  };

  const buttonDisabled = !OnboardingStepSchema[step].safeParse(form.getValues())
    .success;

  return (
    <Form {...form}>
      <OnboardingLayout currentStep={step}>
        {step === 'nicknameStep' && <NicknameStep />}
        {step === 'profileImageStep' && <ProfileStep />}
        {step === 'completedStep' && <CompletedStep />}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 pt-10 z-10">
          <Button onClick={handleNextStep} disabled={buttonDisabled}>
            {step === 'completedStep' ? '완료' : '다음'}
          </Button>
        </div>
      </OnboardingLayout>
    </Form>
  );
}

export { OnboardingScreen };
