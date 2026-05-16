import type { Employee } from "../../types/onboarding";
import { onboardingChecklists } from "../../data/checklists";
import { onboardingPhases } from "../../data/phases";
import { formatDate } from "../../utils/formatDate";

interface EmployeeDetailProps {
  employee: Employee;
  onToggleTask: (employeeId: string, taskId: string) => void;
  onClose: () => void;
}

export function EmployeeDetail({
  employee,
  onToggleTask,
  onClose,
}: EmployeeDetailProps) {
  const checklist = onboardingChecklists[employee.phaseId];

  const phase = onboardingPhases.find((phase) => phase.id === employee.phaseId);

  return (
    <section className="mt-10 rounded-3xl border border-primary-blue/10 bg-white/80 p-8 shadow-sm">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-base font-medium uppercase tracking-[0.2em] text-sky-blue">
            Detail zaměstnance
          </p>

          <h2 className="mt-3 text-4xl font-bold text-primary-blue">
            {employee.firstName} {employee.lastName}
          </h2>

          <p className="mt-2 text-lg font-medium text-midnight-blue/70">
            {employee.position} · {employee.department}
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-pearl-white px-5 py-4 text-base text-midnight-blue/75">
            <p>
              Fáze:{" "}
              <span className="font-bold text-primary-blue">
                {phase?.title}
              </span>
            </p>

            <p className="mt-1">
              Nástup:{" "}
              <span className="font-bold text-primary-blue">
                {formatDate(employee.startDate)}
              </span>
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-2xl border border-primary-blue/10 bg-white px-5 py-4 text-base font-medium text-midnight-blue transition hover:border-primary-blue/30 hover:text-primary-blue"
        >
          Zavřít
        </button>
      </div>

      <div>
        <h3 className="mb-5 text-2xl font-bold text-primary-blue">Checklist</h3>

        <div className="grid gap-4 lg:grid-cols-2">
          {checklist.map((task) => {
            const isCompleted = employee.completedTaskIds.includes(task.id);

            return (
              <button
                key={task.id}
                type="button"
                onClick={() => onToggleTask(employee.id, task.id)}
                className="flex items-center gap-4 rounded-2xl border border-primary-blue/10 bg-pearl-white p-5 text-left transition hover:border-primary-blue/30 hover:bg-white"
              >
                <div
                  className={
                    isCompleted
                      ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white"
                      : "h-7 w-7 shrink-0 rounded-full border-2 border-primary-blue/30"
                  }
                >
                  {isCompleted ? "✓" : null}
                </div>

                <p className="text-lg font-medium text-midnight-blue">
                  {task.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
