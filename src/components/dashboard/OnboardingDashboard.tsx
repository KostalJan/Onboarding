import { initialEmployees } from '../../data/initialEmployees'
import { onboardingPhases } from '../../data/onboardingPhases'
import { OnboardingColumn } from './OnboardingColumn'

export function OnboardingDashboard() {
  return (
    <div>
      <header className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-blue">
          HR onboarding
        </p>

        <h1 className="mt-3 text-4xl font-bold text-primary-blue">
          Onboarding dashboard
        </h1>

        <p className="mt-4 max-w-2xl text-base font-regular text-midnight-blue/75">
          Přehled zaměstnanců podle fáze onboardingu a aktuálního postupu
          v checklistu.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {onboardingPhases.map((phase) => {
          const employeesInPhase = initialEmployees.filter(
            (employee) => employee.phaseId === phase.id,
          )

          return (
            <OnboardingColumn
              key={phase.id}
              phase={phase}
              employees={employeesInPhase}
            />
          )
        })}
      </div>
    </div>
  )
}