# Onboarding

A modern frontend onboarding dashboard for managing new employee adaptation processes inside a company environment.

The application is designed primarily for managers and team leaders who need a clear overview of onboarding progress, assigned tasks, and employee onboarding phases.

---

# Project Goal

The goal of this project is to build a clean and professional onboarding management interface with a modern enterprise-style UI.

Managers can:

- track onboarding progress
- review onboarding phases
- monitor completed tasks
- view employee onboarding details
- manage onboarding checklists

The application currently works as a frontend-focused prototype using Local Storage architecture.

---

# Current Features

## Dashboard

- Three onboarding phase columns
- Employee cards grouped by onboarding phase
- Progress visualization
- Responsive dashboard layout

## Employee Cards

Each employee card displays:

- employee name
- position
- department
- onboarding progress
- formatted start date

## Employee Detail

The detail panel includes:

- onboarding phase information
- onboarding checklist
- completed task visualization
- onboarding metadata

## Checklist System

- Centralized onboarding templates
- Shared checklist architecture
- Progress calculated dynamically
- Task completion based on task IDs

## UI / Design

- Custom enterprise UI
- Company color palette
- Responsive layout
- AmpleSoft Pro typography
- Modern card-based interface

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Local Storage

---

# Project Architecture

## Frontend Architecture

The project currently uses a frontend-only architecture.

Application state is handled locally and onboarding data is prepared for Local Storage persistence.

---

# Folder Structure

```txt
src/
├── components/
│   └── dashboard/
├── data/
├── types/
├── utils/
```

---

# Onboarding Phases

The application currently works with three onboarding phases:

1. First week
2. First month
3. Trial period

Each onboarding phase contains its own predefined onboarding checklist.

---

# Checklist Architecture

Checklist tasks are centrally defined inside:

```txt
src/data/checklists.ts
```

Employees do not store full task objects.

Instead, every employee stores only:

```ts
completedTaskIds: string[]
```

This architecture provides several advantages:

- reusable onboarding templates
- cleaner data structure
- simpler state management
- easier scalability
- centralized onboarding logic

---

# Employee Architecture

Employees contain:

- personal information
- onboarding phase
- completed task IDs
- onboarding metadata

The onboarding progress is calculated dynamically based on completed tasks and checklist templates.

---

# Current Development Status

Currently implemented:

- onboarding dashboard
- onboarding columns
- employee cards
- employee detail panel
- onboarding checklist UI
- progress tracking
- responsive layout
- branded design system

Planned next steps:

- interactive task completion
- Local Storage persistence
- onboarding statistics
- filtering
- search
- animations and microinteractions
- authentication simulation
- manager session handling

---

# Design System

## Colors

- Pearl White
- Primary Blue
- Midnight Blue
- Sky Blue

## Typography

- AmpleSoft Pro
  - Regular
  - Medium
  - Bold

---

# Localization

- User interface: Czech
- Documentation: English