import type { Employee } from "../types/onboarding";

export const initialEmployees: Employee[] = [
  {
    id: "emp-1",
    firstName: "Jan",
    lastName: "Novák",
    position: "Junior Tester",
    department: "QA",
    managerName: "Petra Svobodová",
    startDate: "2026-05-01",
    phaseId: "first-week",
    completedTaskIds: ["fw-1", "fw-2"],
  },
  {
    id: "emp-2",
    firstName: "Lucie",
    lastName: "Dvořáková",
    position: "HR Specialist",
    department: "HR",
    managerName: "Petra Svobodová",
    startDate: "2026-04-15",
    phaseId: "first-month",
    completedTaskIds: ["fm-1", "fm-2", "fm-3"],
  },
];
