import type { Employee, OnboardingPhaseId } from '../../types/onboarding'
import type { OnboardingPhase } from '../../data/phases'
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
    <section className="rounded-3xl bg-slate-50 p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">
          {phase.title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {phase.description}
        </p>
      </div>

      <div className="space-y-4">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))
        ) : (
          <p className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-400">
            V této fázi zatím není žádný zaměstnanec.
          </p>
        )}
      </div>
    </section>
  )
}