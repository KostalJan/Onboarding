import { useState } from "react";
import type { Employee } from "../../types/onboarding";
import { initialEmployees } from "../../data/employees";
import { onboardingPhases } from "../../data/phases";
import { OnboardingColumn } from "./OnboardingColumn";
import { EmployeeDetail } from "./EmployeeDetail";

export function OnboardingDashboard() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );

  return (
    <div>
      <header className="mb-12">
        <h1 className="mt-4 text-5xl font-bold leading-tight text-primary-blue">
          Onboarding Dashboard
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-midnight-blue/75">
          Přehled zaměstnanců podle fáze onboardingu a aktuálního postupu v
          checklistu.
        </p>
      </header>

      <div className="grid gap-8 xl:grid-cols-3">
        {onboardingPhases.map((phase) => {
          const employeesInPhase = initialEmployees.filter(
            (employee) => employee.phaseId === phase.id,
          );

          return (
            <OnboardingColumn
              key={phase.id}
              phase={phase}
              employees={employeesInPhase}
              onSelectEmployee={setSelectedEmployee}
            />
          );
        })}
      </div>

      {selectedEmployee && <EmployeeDetail employee={selectedEmployee} />}
    </div>
  );
}
