import type {
  ChecklistTask,
  OnboardingPhaseId,
} from '../types/onboarding'

export const onboardingChecklists: Record<
  OnboardingPhaseId,
  ChecklistTask[]
> = {
  'first-week': [
    {
      id: 'fw-1',
      title: 'Notebook a příslušenství',
      owner: 'manager',
    },
    {
      id: 'fw-2',
      title: 'Telefon',
      owner: 'manager',
    },
    {
      id: 'fw-3',
      title: 'Pracovní místo',
      owner: 'manager',
    },
    {
      id: 'fw-4',
      title: 'Přístup do relevantních systémů',
      owner: 'manager',
    },
    {
      id: 'fw-5',
      title: 'VPN',
      owner: 'manager',
    },
    {
      id: 'fw-6',
      title: 'Připojení notebooku na Wi-Fi',
      owner: 'manager',
    },
    {
      id: 'fw-7',
      title: 'Stanovení školitele (buddyho)',
      owner: 'manager',
    },
    {
      id: 'fw-8',
      title: 'Kartička pro přístupy',
      owner: 'manager',
    },
    {
      id: 'fw-9',
      title: 'Uvedení do kolektivu',
      owner: 'manager',
    },
    {
      id: 'fw-10',
      title: 'Uvítací mail od týmu',
      owner: 'manager',
    },
  ],

  'first-month': [
    {
      id: 'fm-1',
      title: 'Vysvětlení role v týmu',
      owner: 'manager',
    },
    {
      id: 'fm-2',
      title: 'Nastavení pravidelných 1:1 schůzek',
      owner: 'manager',
    },
    {
      id: 'fm-3',
      title: 'Korporátní výrazy a terminologie',
      owner: 'manager',
    },
    {
      id: 'fm-4',
      title: 'Možnost sledovat práci ostatních',
      owner: 'manager',
    },
    {
      id: 'fm-5',
      title: 'První odborné školení',
      owner: 'manager',
    },
    {
      id: 'fm-6',
      title: 'Kontrola pracovních pomůcek',
      owner: 'manager',
    },
    {
      id: 'fm-7',
      title: 'Pracovní SIM karta',
      owner: 'manager',
    },
    {
      id: 'fm-8',
      title: 'Aplikování zaučovacího plánu',
      owner: 'manager',
    },
    {
      id: 'fm-9',
      title: 'Multisport a Pluxee kartičky',
      owner: 'manager',
    },
  ],

  'trial-period': [
    {
      id: 'tp-1',
      title: 'Check-in po 1. měsíci',
      owner: 'manager',
    },
    {
      id: 'tp-2',
      title: 'Stanovení cílů pro zkušební dobu',
      owner: 'manager',
    },
    {
      id: 'tp-3',
      title: 'Úprava frekvence 1:1 schůzek',
      owner: 'manager',
    },
    {
      id: 'tp-4',
      title: 'Identifikace mezer ve znalostech',
      owner: 'manager',
    },
    {
      id: 'tp-5',
      title: 'Hloubková zpětná vazba',
      owner: 'manager',
    },
    {
      id: 'tp-6',
      title: 'Oslava konce zkušební doby',
      owner: 'manager',
    },
    {
      id: 'tp-7',
      title: 'Vyřešení formalit s HR',
      owner: 'manager',
    },
    {
      id: 'tp-8',
      title: 'Plán dalšího rozvoje',
      owner: 'manager',
    },
  ],
}