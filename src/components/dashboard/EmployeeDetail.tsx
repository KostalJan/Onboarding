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
    <section className="relative rounded-3xl border border-primary-blue/10 bg-white/80 p-7 shadow-sm xl:sticky xl:top-8 xl:self-start">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-blue/10 bg-white text-xl font-medium text-midnight-blue transition hover:border-primary-blue/30 hover:text-primary-blue"
      >
        ×
      </button>
      <div className="mb-8 flex flex-col gap-6">
        <div className="min-w-0 flex-1">
          <p className="text-base font-medium uppercase tracking-[0.2em] text-sky-blue">
            Detail zaměstnance
          </p>

          <h2 className="mt-3 text-4xl font-bold text-primary-blue">
            {employee.firstName} {employee.lastName}
          </h2>

          <p className="mt-2 text-lg font-medium leading-7 text-midnight-blue/70">
            {employee.position} · {employee.department}
          </p>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-2xl bg-pearl-white px-4 py-3 text-sm text-midnight-blue/75">
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
      </div>
      <div>
        <h3 className="mb-5 text-2xl font-bold text-primary-blue">Checklist</h3>

        <div className="grid gap-4">
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
