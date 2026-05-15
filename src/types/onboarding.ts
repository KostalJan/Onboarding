export type OnboardingPhaseId =
  | 'first-week'
  | 'first-month'
  | 'trial-period'

export type TaskOwner = 'employee' | 'manager'

export interface ChecklistTask {
  id: string
  title: string
  owner: TaskOwner
}

export interface Employee {
  id: string
  firstName: string
  lastName: string
  position: string
  department: string
  managerName: string
  startDate: string
  phaseId: OnboardingPhaseId
  completedTaskIds: string[]
}