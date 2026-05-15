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
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="font-semibold text-slate-900">
          {employee.firstName} {employee.lastName}
        </h3>

        <p className="text-sm text-slate-500">
          {employee.position}
        </p>
      </div>

      <div className="mt-4 text-sm text-slate-600">
        <p>Oddělení: {employee.department}</p>
        <p>Manažer: {employee.managerName}</p>
        <p>Nástup: {employee.startDate}</p>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex justify-between text-sm">
          <span className="text-slate-600">Progress</span>
          <span className="font-medium text-slate-900">
            {progress} %
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-slate-900"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  )
}