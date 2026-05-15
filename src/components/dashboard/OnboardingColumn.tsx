import type { Employee } from '../../types/onboarding'
import type { OnboardingPhase } from '../../data/onboardingPhases'
import { EmployeeCard } from './EmployeeCard'

interface OnboardingColumnProps {
  phase: OnboardingPhase
  employees: Employee[]
}

export function OnboardingColumn({
  phase,
  employees,
}: OnboardingColumnProps) {
  return (
    <section className="rounded-3xl border border-primary-blue/10 bg-white/60 p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-primary-blue">
          {phase.title}
        </h2>

        <p className="mt-2 text-sm font-regular leading-5 text-midnight-blue/65">
          {phase.description}
        </p>
      </div>

      <div className="space-y-4">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))
        ) : (
          <p className="rounded-2xl border border-dashed border-primary-blue/25 bg-pearl-white p-4 text-sm text-midnight-blue/50">
            V této fázi zatím není žádný zaměstnanec.
          </p>
        )}
      </div>
    </section>
  )
}