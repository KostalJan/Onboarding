import { useState } from 'react'
import type { Employee } from '../../types/onboarding'
import { initialEmployees } from '../../data/employees'
import { onboardingPhases } from '../../data/phases'
import { OnboardingColumn } from './OnboardingColumn'

export function OnboardingDashboard() {
  const [selectedEmployee, setSelectedEmployee] =
    useState<Employee | null>(null)

  return (
    <div>
      <header className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-blue">
          HR onboarding
        </p>

        <h1 className="mt-3 text-4xl font-bold text-primary-blue">
          Onboarding dashboard
        </h1>

        <p className="mt-4 max-w-2xl text-base text-midnight-blue/75">
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
              onSelectEmployee={setSelectedEmployee}
            />
          )
        })}
      </div>

      {selectedEmployee && (
        <section className="mt-8 rounded-3xl border border-primary-blue/10 bg-white/70 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-primary-blue">
            Detail zaměstnance
          </h2>

          <p className="mt-2 text-midnight-blue/70">
            {selectedEmployee.firstName} {selectedEmployee.lastName}
          </p>
        </section>
      )}
    </div>
  )
}