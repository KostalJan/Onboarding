import { initialEmployees } from '../../data/initialEmployees'
import { onboardingPhases } from '../../data/onboardingPhases'
import { OnboardingColumn } from './OnboardingColumn'

export function OnboardingDashboard() {
  return (
    <div>
      <header className="mb-8">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          HR onboarding
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Onboarding dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
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