import type { Employee } from "../../types/onboarding";
import { onboardingChecklists } from "../../data/checklists";
import { formatDate } from "../../utils/formatDate";

interface EmployeeCardProps {
  employee: Employee;
  onSelectEmployee: (employee: Employee) => void;
}

export function EmployeeCard({
  employee,
  onSelectEmployee,
}: EmployeeCardProps) {
  const checklist = onboardingChecklists[employee.phaseId];

  const completedTasks = checklist.filter((task) =>
    employee.completedTaskIds.includes(task.id),
  );

  const progress = Math.round((completedTasks.length / checklist.length) * 100);

  return (
    <article className="rounded-3xl border border-primary-blue/10 bg-pearl-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {" "}
      <div>
        <h3 className="text-2xl font-bold text-primary-blue">
          {employee.firstName} {employee.lastName}
        </h3>

        <p className="mt-2 text-base font-medium text-sky-blue">
          {employee.position}
        </p>
      </div>
      <div className="mt-5 space-y-2 text-base leading-7 text-midnight-blue/70">
        <p>Oddělení: {employee.department}</p>

        <p>
          Nástup:{" "}
          <span className="font-medium text-midnight-blue">
            {formatDate(employee.startDate)}
          </span>
        </p>
      </div>
      <div className="mt-6">
        <div className="mb-3 flex justify-between text-base">
          <span className="font-medium text-midnight-blue/70">Progress</span>

          <span className="font-bold text-primary-blue">{progress} %</span>
        </div>

        <div className="h-2.5 rounded-full bg-primary-blue/10">
          <div
            className="h-2.5 rounded-full bg-primary-blue"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => onSelectEmployee(employee)}
        className="mt-6 w-full rounded-2xl bg-primary-blue px-5 py-3 text-base font-bold text-white transition hover:bg-midnight-blue"
      >
        Zobrazit detail
      </button>
    </article>
  );
}
