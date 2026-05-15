import type { Employee } from '../../types/onboarding'
import type { OnboardingPhase } from '../../data/phases'
import { EmployeeCard } from './EmployeeCard'

interface OnboardingColumnProps {
  phase: OnboardingPhase
  employees: Employee[]
  onSelectEmployee: (employee: Employee) => void
}

export function OnboardingColumn({
  phase,
  employees,
  onSelectEmployee,
}: OnboardingColumnProps) {
  return (
<section className="rounded-3xl border border-primary-blue/10 bg-white/70 p-6 shadow-sm">      <div className="mb-5">
        <h2 className="text-2xl font-bold text-primary-blue">
          {phase.title}
        </h2>

        <p className="mt-3 text-base leading-7 text-midnight-blue/65">
          {phase.description}
        </p>
      </div>

      <div className="space-y-4">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onSelectEmployee={onSelectEmployee}
            />
          ))
        ) : (
          <p className="rounded-2xl border border-dashed border-primary-blue/25 bg-pearl-white p-5 text-base text-midnight-blue/50">
            V této fázi zatím není žádný zaměstnanec.
          </p>
        )}
      </div>
    </section>
  )
}