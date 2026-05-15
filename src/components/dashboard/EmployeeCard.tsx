import type { Employee } from '../../types/onboarding'
import { onboardingChecklists } from '../../data/checklists'

interface EmployeeCardProps {
  employee: Employee
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const checklist = onboardingChecklists[employee.phaseId]

  const completedTasks = checklist.filter((task) =>
    employee.completedTaskIds.includes(task.id),
  )

  const progress = Math.round(
    (completedTasks.length / checklist.length) * 100,
  )

  return (
    <article className="rounded-2xl border border-primary-blue/10 bg-pearl-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div>
        <h3 className="text-lg font-bold text-primary-blue">
          {employee.firstName} {employee.lastName}
        </h3>

        <p className="mt-1 text-sm font-medium text-sky-blue">
          {employee.position}
        </p>
      </div>

      <div className="mt-4 space-y-1 text-sm text-midnight-blue/70">
        <p>Oddělení: {employee.department}</p>
        <p>Manažer: {employee.managerName}</p>
        <p>Nástup: {employee.startDate}</p>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-midnight-blue/70">
            Progress
          </span>

          <span className="font-bold text-primary-blue">
            {progress} %
          </span>
        </div>

        <div className="h-2.5 rounded-full bg-primary-blue/10">
          <div
            className="h-2.5 rounded-full bg-primary-blue"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  )
}