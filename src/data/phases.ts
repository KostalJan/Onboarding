import type { OnboardingPhaseId } from '../types/onboarding'

export interface OnboardingPhase {
  id: OnboardingPhaseId
  title: string
  description: string
}

export const onboardingPhases: OnboardingPhase[] = [
  {
    id: 'first-week',
    title: '1. týden',
    description: 'Základní seznámení s firmou, týmem a pracovními nástroji.',
  },
  {
    id: 'first-month',
    title: '1. měsíc',
    description: 'Rozšíření znalostí, první samostatné úkoly a zpětná vazba.',
  },
  {
    id: 'trial-period',
    title: 'Zkušební doba',
    description: 'Samostatnější práce, vyhodnocení adaptace a další rozvoj.',
  },
]