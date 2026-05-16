import { useState } from "react";
import { initialEmployees } from "../../data/employees";
import { onboardingPhases } from "../../data/phases";
import { OnboardingColumn } from "./OnboardingColumn";
import { EmployeeDetail } from "./EmployeeDetail";

export function OnboardingDashboard() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(
    null,
  );

  const selectedEmployee = employees.find(
    (employee) => employee.id === selectedEmployeeId,
  );

  const handleToggleTask = (employeeId: string, taskId: string) => {
    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) => {
        if (employee.id !== employeeId) {
          return employee;
        }

        const isCompleted = employee.completedTaskIds.includes(taskId);

        return {
          ...employee,
          completedTaskIds: isCompleted
            ? employee.completedTaskIds.filter(
                (completedTaskId) => completedTaskId !== taskId,
              )
            : [...employee.completedTaskIds, taskId],
        };
      }),
    );
  };

  return (
    <div
      className={
        selectedEmployee
      ? "mx-auto w-full max-w-[1500px]"
          : "mx-auto w-full max-w-7xl"
      }
    >
      <header className="mb-12">
        <h1 className="mt-4 text-5xl font-bold leading-tight text-primary-blue">
          Onboarding Dashboard
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-midnight-blue/75">
          Přehled zaměstnanců podle fáze onboardingu a aktuálního postupu v
          checklistu.
        </p>
      </header>
      <div
        className={
          selectedEmployee
            ? "flex items-start gap-8 overflow-x-auto pb-6"
            : "grid gap-8 xl:grid-cols-3"
        }
      >
        {onboardingPhases.map((phase) => {
          const employeesInPhase = employees.filter(
            (employee) => employee.phaseId === phase.id,
          );

          return (
            <div
              key={phase.id}
              className={selectedEmployee ? "w-[320px] shrink-0" : ""}
            >
              <OnboardingColumn
                phase={phase}
                employees={employeesInPhase}
                onSelectEmployee={(employee) =>
                  setSelectedEmployeeId(employee.id)
                }
              />
            </div>
          );
        })}

        {selectedEmployee && (
          <div className="w-[380px] shrink-0">
            <EmployeeDetail
              employee={selectedEmployee}
              onToggleTask={handleToggleTask}
              onClose={() => setSelectedEmployeeId(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
