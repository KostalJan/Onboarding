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
- move employees between onboarding phases

The application currently works as a frontend-focused prototype using Local Storage persistence.

---

# Current Features

## Dashboard

- Three onboarding phase columns
- Employee cards grouped by onboarding phase
- Progress visualization
- Responsive dashboard layout
- Dynamic side detail panel

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
- onboarding phase controls
- close action
- sticky side panel behavior

## Checklist System

- Centralized onboarding templates
- Shared checklist architecture
- Progress calculated dynamically
- Task completion based on task IDs
- Interactive checklist completion

## Onboarding Workflow

Employees can move between onboarding phases.

Rules:

- Moving backward is always allowed
- Moving forward requires all checklist tasks to be completed
- Checklist progress resets after phase transition

## Local Storage Persistence

The application persists onboarding state using Local Storage.

Persisted data includes:

- onboarding phase
- completed tasks
- onboarding progress

State is automatically restored after page refresh.

## UI / Design

- Custom enterprise UI
- Company color palette
- Responsive layout
- AmpleSoft Pro typography
- Modern card-based interface
- Dynamic layout behavior

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

Application state is managed using React state and persisted via Local Storage.

The architecture is designed for future scalability and possible backend integration.

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

# Local Storage Architecture

Local Storage utilities are separated into:

```txt
src/utils/localStorage.ts
```

Persistence logic is intentionally separated from UI components.

This approach improves:

- maintainability
- scalability
- separation of concerns
- future backend migration

---

# Current Development Status

Currently implemented:

- onboarding dashboard
- onboarding columns
- employee cards
- employee detail panel
- interactive onboarding checklist
- onboarding phase transitions
- Local Storage persistence
- progress tracking
- responsive layout
- branded design system
- dynamic side panel layout

Planned next steps:

- onboarding statistics
- filtering
- search
- animations and microinteractions
- drag and drop interactions
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

---

# Installation and Setup

To run the project locally, follow these steps:

## 1. Clone Repository

```bash
git clone <repository-url>
```

## 2. Navigate to Project Folder

```bash
cd onboarding
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run Development Server

```bash
npm run dev
```

The application will be available at:

```txt
http://localhost:5173
```

---

# Available Scripts

## Start Development Server

Runs the application in development mode.

```bash
npm run dev
```

## Build Production Version

Creates an optimized production build.

```bash
npm run build
```

## Preview Production Build

Runs a local preview of the production build.

```bash
npm run preview
```