# Onboarding

A frontend prototype application for managing the onboarding process of new employees.

## Project Goal

The goal of this project is to create a visual onboarding dashboard for managers.  
Managers can see their new employees, track their onboarding phase, review assigned tasks, and monitor progress.

## Main Features

- Dashboard with onboarding phases
- Employee cards with basic information
- Progress tracking
- Task checklist for each onboarding phase
- Local data persistence using Local Storage
- Czech user interface
- Frontend-focused prototype

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Local Storage

## Onboarding Phases

The application works with three onboarding phases:

1. First week
2. First month
3. Second and third month

Each phase contains tasks that need to be completed before the employee can move to the next phase.

## Development Status

Project setup is completed.  
The next step is to configure Tailwind CSS and create the basic application layout.

## Checklist Architecture

Checklist tasks are centrally defined for each onboarding phase.

Employees do not store full task objects.  
Instead, they only store IDs of completed tasks.

This approach keeps the application architecture cleaner and allows onboarding templates to be reused across multiple employees.