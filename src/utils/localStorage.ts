import type { Employee } from "../types/onboarding";

const EMPLOYEES_STORAGE_KEY = "onboarding-employees";

export function loadEmployees(): Employee[] | null {
  const storedEmployees = localStorage.getItem(EMPLOYEES_STORAGE_KEY);

  if (!storedEmployees) {
    return null;
  }

  try {
    return JSON.parse(storedEmployees) as Employee[];
  } catch (error) {
    console.error("Failed to parse employees from localStorage", error);

    return null;
  }
}

export function saveEmployees(employees: Employee[]) {
  localStorage.setItem(
    EMPLOYEES_STORAGE_KEY,
    JSON.stringify(employees),
  );
}