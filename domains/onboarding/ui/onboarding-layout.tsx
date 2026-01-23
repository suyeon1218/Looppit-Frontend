import { ONBOARDING_STEPS_INFO } from '../onboarding.constants';
import { OnboardingStep } from '../onboarding.types';

interface OnboardingLayoutProps {
  currentStep: OnboardingStep;
  children: React.ReactNode;
}

function OnboardingLayout({ currentStep, children }: OnboardingLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      <div className="flex flex-col px-6 flex-1 overflow-y-auto pb-48">
        <div className="h-full flex flex-col items-center justify-center flex-1">
          <OnboardingHeader currentStep={currentStep} />
          <div className="w-full flex flex-col flex-1 items-center justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface OnboardingHeaderProps {
  currentStep: OnboardingStep;
}

function OnboardingHeader({ currentStep }: OnboardingHeaderProps) {
  const { step, title, description } = ONBOARDING_STEPS_INFO[currentStep];

  return (
    <div className="w-full mt-6 mb-12">
      <span className="typography-caption-bold text-primary tracking-[0.2em] uppercase mb-4 block">
        STEP {step}
      </span>
      <h2 className="typography-title-medium leading-snug mb-3">{title}</h2>
      <p className="typography-body-semibold text-secondary/60">
        {description}
      </p>
    </div>
  );
}

export { OnboardingLayout };
